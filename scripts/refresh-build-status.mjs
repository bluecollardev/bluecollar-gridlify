#!/usr/bin/env node
/**
 * Refresh the build-status pills on the product pages.
 *
 *   npm run builds:refresh
 *
 * The site is static, so nothing can call a CI server at page load — and the
 * pipelines that matter are in a private Azure DevOps org, which serves no
 * public badge. This script fetches the real result of the latest run and
 * writes it into src/data/Products.yml, which is compiled into the bundle.
 *
 * Sources, per entry in scripts/build-status.config.json:
 *
 *   {"type": "ado",    "org": "...", "project": "...", "definition": "..."}
 *     Needs ADO_PAT in the environment (a personal access token with
 *     Build: Read). Create one at
 *     https://dev.azure.com/<org>/_usersSettings/tokens.
 *
 *   {"type": "github", "repo": "owner/name", "workflow": "ci.yml"}
 *     Public repositories need no token; GITHUB_TOKEN is used when set, which
 *     also raises the rate limit.
 *
 *   {"type": "local",  "command": "..."}
 *     Runs the command and records whether it exited 0. This is how the
 *     Rental.Cloud apps are covered while their pipelines stay private.
 *
 * Entries whose source cannot be reached are left at their previous value and
 * reported at the end, so a missing token degrades to stale data rather than a
 * false green.
 */
import {execSync} from 'node:child_process'
import {readFileSync, writeFileSync} from 'node:fs'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const configPath = resolve(root, 'scripts/build-status.config.json')
const productsPath = resolve(root, 'src/data/Products.yml')

const config = JSON.parse(readFileSync(configPath, 'utf8'))

/** Azure DevOps: resolve the definition by name, then read its latest build. */
async function adoStatus(entry) {
  const pat = process.env.ADO_PAT
  if (!pat) throw new Error('ADO_PAT is not set')

  const auth = 'Basic ' + Buffer.from(':' + pat).toString('base64')
  const base = `https://dev.azure.com/${entry.org}/${encodeURIComponent(entry.project)}/_apis`
  const defs = await fetch(`${base}/build/definitions?api-version=7.0&name=${encodeURIComponent(entry.definition)}`, {
    headers: {Authorization: auth}
  }).then(r => r.json())

  const def = (defs.value || [])[0]
  if (!def) throw new Error(`no pipeline named "${entry.definition}"`)

  const builds = await fetch(`${base}/build/builds?api-version=7.0&definitions=${def.id}&$top=1&queryOrder=finishTimeDescending`, {
    headers: {Authorization: auth}
  }).then(r => r.json())

  const build = (builds.value || [])[0]
  if (!build) throw new Error(`pipeline "${entry.definition}" has no runs`)

  return {result: build.result, finished: build.finishTime}
}

/** GitHub Actions: the latest completed run of one workflow on the default branch. */
async function githubStatus(entry) {
  const headers = {Accept: 'application/vnd.github+json', 'User-Agent': 'bcdev-build-status'}
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

  const url = `https://api.github.com/repos/${entry.repo}/actions/workflows/${entry.workflow}/runs?per_page=1&status=completed`
  const res = await fetch(url, {headers})
  if (!res.ok) throw new Error(`${entry.repo} ${entry.workflow}: HTTP ${res.status}`)

  const run = ((await res.json()).workflow_runs || [])[0]
  if (!run) throw new Error(`${entry.repo} ${entry.workflow}: no completed runs`)

  return {result: run.conclusion === 'success' ? 'succeeded' : run.conclusion, finished: run.updated_at}
}

/** Local: run it and record the exit status. Slow but honest. */
function localStatus(entry) {
  try {
    execSync(entry.command, {cwd: entry.cwd || root, stdio: 'ignore', timeout: entry.timeout || 900000})
    return {result: 'succeeded', finished: new Date().toISOString()}
  } catch {
    return {result: 'failed', finished: new Date().toISOString()}
  }
}

const label = result => (result === 'succeeded' ? 'passing' : result === 'failed' ? 'failing' : result || 'unknown')

const failures = []
const statuses = []

for (const entry of config.checks) {
  try {
    const status = entry.type === 'ado' ? await adoStatus(entry)
      : entry.type === 'github' ? await githubStatus(entry)
        : localStatus(entry)
    statuses.push({...entry, ...status})
    console.log(`${entry.product} · ${entry.label}: ${label(status.result)}`)
  } catch (error) {
    failures.push(`${entry.product} · ${entry.label}: ${error.message}`)
    console.log(`${entry.product} · ${entry.label}: SKIPPED (${error.message})`)
  }
}

if (!statuses.length) {
  console.error('\nNothing could be checked; Products.yml left untouched.')
  process.exit(1)
}

/* Rewrite each product's builds: block in place. The file is hand-maintained, so
   only the block between "builds:" and the next key at the same indent moves. */
let yaml = readFileSync(productsPath, 'utf8')
const now = new Date()
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const checked = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`

for (const product of [...new Set(statuses.map(s => s.product))]) {
  const items = statuses.filter(s => s.product === product)
  const block = [
    '    builds:',
    `      checked: ${checked}`,
    '      items:',
    ...items.flatMap(s => [`        - name: ${s.label}`, `          status: ${label(s.result)}`])
  ].join('\n') + '\n'

  const start = yaml.indexOf(`  - name: ${product}\n`)
  if (start === -1) {
    failures.push(`${product}: not found in Products.yml`)
    continue
  }

  const existing = yaml.indexOf('\n    builds:\n', start)
  const nextProduct = yaml.indexOf('\n  - name: ', start + 1)
  if (existing !== -1 && (nextProduct === -1 || existing < nextProduct)) {
    // the block ends at the next key on the same four-space indent
    const rest = yaml.slice(existing + 1)
    const end = rest.search(/\n {4}(?! )[a-z]/)
    yaml = yaml.slice(0, existing + 1) + block + rest.slice(end + 1)
  } else {
    const insertAt = yaml.indexOf('\n', start) + 1
    yaml = yaml.slice(0, insertAt) + block + yaml.slice(insertAt)
  }
}

writeFileSync(productsPath, yaml)
console.log(`\nWrote ${statuses.length} statuses to src/data/Products.yml (checked ${checked}).`)

if (failures.length) {
  console.log('\nLeft at their previous values:')
  for (const failure of failures) console.log(`  - ${failure}`)
}
