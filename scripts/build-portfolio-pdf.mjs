/**
 * Builds the downloadable portfolio PDFs from src/data/Portfolio.yml, so the
 * document never drifts from the site.
 *
 *   node scripts/build-portfolio-pdf.mjs
 *
 * Outputs to public/docs/:
 *   blue-collar-portfolio.pdf                 case studies only
 *   blue-collar-portfolio-with-screenshots.pdf  the same, plus a screenshot appendix
 *
 * Needs puppeteer-core and a local Chrome (CHROME_PATH overrides the default).
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'
import { marked } from 'marked'
import puppeteer from 'puppeteer-core'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUT_DIR = path.join(ROOT, 'public/docs')

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const fmt = d => d ? `${MONTHS[new Date(d).getMonth()]} ${new Date(d).getFullYear()}` : ''
const range = p => p.endDate ? `${fmt(p.startDate)} – ${fmt(p.endDate)}` : fmt(p.startDate)

/** Inline as data URIs: the PDF has to stand alone once downloaded. */
const rawDataUri = rel => {
  const file = path.join(ROOT, 'public', rel.replace(/^\//, ''))
  if (!fs.existsSync(file)) return null
  const ext = path.extname(file).toLowerCase()
  const mime = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg'
  return `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`
}

/**
 * The device mockups are 1280px PNGs, ~500KB each; 36 of them made a 16MB PDF.
 * Re-encode to JPEG at print size on a white ground (they are transparent).
 */
const cache = new Map()
async function imageUri(converter, rel) {
  if (cache.has(rel)) return cache.get(rel)
  const raw = rawDataUri(rel)
  if (!raw) return null
  const out = rel.endsWith('.png')
    ? await converter.evaluate(async (src, maxW, quality) => {
        const img = new Image()
        await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = src })
        const scale = Math.min(1, maxW / img.naturalWidth)
        const c = document.createElement('canvas')
        c.width = Math.round(img.naturalWidth * scale); c.height = Math.round(img.naturalHeight * scale)
        const ctx = c.getContext('2d')
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, c.width, c.height)
        ctx.drawImage(img, 0, 0, c.width, c.height)
        return c.toDataURL('image/jpeg', quality)
      }, raw, 1000, 0.82)
    : raw
  cache.set(rel, out)
  return out
}

const data = yaml.load(fs.readFileSync(path.join(ROOT, 'src/data/Portfolio.yml'), 'utf8'))
const projects = data.items.filter(p => p.isPublic === true)

const styles = `
  @page { size: A4; margin: 14mm 14mm 16mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1f2933; font-size: 10.5pt; line-height: 1.5; }
  h1, h2, h3 { color: #33587a; margin: 0; }
  a { color: #33587a; }
  .cover { height: 247mm; display: flex; flex-direction: column; justify-content: center; text-align: center; page-break-after: always; }
  .cover h1 { font-size: 34pt; letter-spacing: -0.5pt; }
  .cover .logo { width: 110mm; align-self: center; }
  .cover .tagline { font-size: 14pt; color: #33587a; margin-top: 10mm; padding: 0 20mm; }
  .cover .subtitle { font-size: 11pt; color: #52606d; margin-top: 4mm; letter-spacing: 1pt; text-transform: uppercase; }
  .cover .meta { margin-top: 18mm; font-size: 10pt; color: #52606d; line-height: 1.8; }
  .toc { page-break-after: always; }
  .toc h2 { font-size: 17pt; margin-bottom: 6mm; }
  .toc ol { margin: 0; padding-left: 6mm; }
  .toc li { margin-bottom: 1.6mm; }
  .toc .client { color: #52606d; }
  .project { page-break-before: always; }
  .project h2 { font-size: 17pt; }
  .project .client { font-size: 11pt; color: #52606d; margin-top: 1mm; }
  .project .dates { font-size: 9.5pt; color: #7b8794; margin-top: 0.5mm; }
  .project .shot { margin: 5mm 0 4mm; text-align: center; }
  .project .shot img { max-width: 100%; max-height: 78mm; }
  .body h3 { font-size: 11pt; margin: 4mm 0 1.5mm; }
  .body p { margin: 0 0 2.5mm; }
  .body ul { margin: 0 0 3mm; padding-left: 5mm; }
  .body li { margin-bottom: 1.2mm; }
  .appendix-title { page-break-before: always; text-align: center; padding-top: 60mm; }
  .appendix-title h2 { font-size: 24pt; }
  .appendix-title p { color: #52606d; max-width: 120mm; margin: 6mm auto 0; }
  .plate { page-break-before: always; }
  .plate h3 { font-size: 12pt; margin-bottom: 3mm; }
  .plate figure { margin: 0 0 5mm; text-align: center; }
  .plate img { max-width: 100%; max-height: 195mm; border: 0.3pt solid #cbd2d9; }
  .plate figcaption { font-size: 8.5pt; color: #7b8794; margin-top: 1.5mm; }
`

/** The YAML headings are bold paragraphs; render them as real headings. */
const bodyHtml = description => marked(description)
  .replace(/<p><strong>(The Client|The Stakeholder|The Problem|Our Solution|Technologies)<\/strong><\/p>/g, '<h3>$1</h3>')

function coverAndToc(withShots) {
  const LOGO = rawDataUri('/images/blue-collar-dev.png')
  const rows = projects.map((p, i) =>
    `<li><strong>${esc(p.projectName)}</strong> <span class="client">— ${esc(p.client)}, ${range(p)}</span></li>`).join('')
  return `
  <section class="cover">
    ${LOGO ? `<img class="logo" src="${LOGO}"/>` : '<h1>Blue Collar Development</h1>'}
    <div class="tagline">We Build User Experiences That Reel in the Results</div>
    <div class="subtitle">Selected project portfolio</div>
    <div class="meta">
      ${projects.length} case studies · 1998–${new Date().getFullYear()}<br/>
      bluecollardev.com · info@bluecollardev.com<br/>
      Bangkok, Thailand
      ${withShots ? '<br/><br/>Includes appendix: project screenshots' : ''}
    </div>
  </section>
  <section class="toc"><h2>Contents</h2><ol>${rows}</ol></section>`
}

async function projectPage(p, converter) {
  const shot = p.image ? await imageUri(converter, p.image) : null
  return `
  <section class="project">
    <h2>${esc(p.projectName)}</h2>
    <div class="client">${esc(p.jobTypeText === 'Employed By' ? 'Employed by' : 'Client')}: ${esc(p.client)}</div>
    <div class="dates">${range(p)}</div>
    ${shot ? `<div class="shot"><img src="${shot}"/></div>` : ''}
    <div class="body">${bodyHtml(p.description)}</div>
  </section>`
}

async function appendix(converter) {
  const parts = []
  for (const p of projects.filter(p => Array.isArray(p.gallery) && p.gallery.length > 1)) {
    const shots = p.gallery.slice(1)
    const figures = []
    for (const [i, src] of shots.entries()) {
      const uri = await imageUri(converter, src)
      if (uri) figures.push(`<figure><img src="${uri}"/><figcaption>${esc(p.projectName)} — screenshot ${i + 1} of ${shots.length}</figcaption></figure>`)
    }
    if (figures.length) parts.push(`<section class="plate"><h3>${esc(p.projectName)}</h3>${figures.join('')}</section>`)
  }
  const plates = parts.join('')
  return `
  <section class="appendix-title">
    <h2>Appendix</h2>
    <p>Screenshots behind the case studies. Older captures are taken from the 2012
    portfolio and show each site as delivered at the time.</p>
  </section>${plates}`
}

const browser = await puppeteer.launch({executablePath: CHROME, headless: 'new'})
const converter = await browser.newPage()
const pages = []
for (const p of projects) pages.push(await projectPage(p, converter))
const appendixHtml = await appendix(converter)
await converter.close()

const html = withShots => `<!doctype html><html><head><meta charset="utf-8"><style>${styles}</style></head><body>
  ${coverAndToc(withShots)}${pages.join('')}${withShots ? appendixHtml : ''}
</body></html>`

fs.mkdirSync(OUT_DIR, {recursive: true})
for (const [withShots, name] of [[false, 'blue-collar-portfolio.pdf'], [true, 'blue-collar-portfolio-with-screenshots.pdf']]) {
  const page = await browser.newPage()
  await page.setContent(html(withShots), {waitUntil: 'load', timeout: 180000})
  await page.pdf({
    path: path.join(OUT_DIR, name), format: 'A4', printBackground: true,
    displayHeaderFooter: true, headerTemplate: '<div></div>',
    footerTemplate: `<div style="width:100%;font-size:7pt;color:#7b8794;padding:0 14mm;display:flex;justify-content:space-between;">
      <span>Blue Collar Development — portfolio</span><span class="pageNumber"></span></div>`,
    margin: {top: '14mm', bottom: '16mm', left: '14mm', right: '14mm'}
  })
  const kb = Math.round(fs.statSync(path.join(OUT_DIR, name)).size / 1024)
  console.log(`${name}  ${kb} KB`)
  await page.close()
}
await browser.close()
