# CLAUDE.md

Blue Collar Development marketing site — `bluecollardev.com`. Vue 3 SPA built with Vite,
deployed on Vercel.

Open work is tracked in [`docs/TODO.md`](docs/TODO.md) — check it before starting, and
update it as items land.

## Commands

```bash
npm install
npm run dev      # vite dev server
npm run build    # vite build -> dist/
npm run preview  # serve the built dist/ locally
```

There is no test suite and no linter configured. Verify changes with `npm run build`
followed by `npm run preview`.

## Branching

**Always work in a feature branch. Never commit directly to `master`.**

`master` is the production branch — Vercel deploys it to the live site. Branch off it,
push the branch, and let the Vercel preview deployment confirm the change before it is
merged.

```bash
git checkout master && git pull
git checkout -b feature/short-description   # or fix/, chore/
```

Prefixes in use: `feature/`, `fix/`, `hotfix/`, `chore/`, `release/`. A long-lived
`develop` branch exists on the remote but the recent history merges to `master`
directly; prefer branching from `master`.

## Versions

Verified installed as of 16 September 2026:

| | |
|---|---|
| node | 22.22.3 |
| npm | 10.9.8 |
| vite | 5.4.21 |
| vue | 3.5.22 (via `@vue/compat` 3.5.22) |
| vue-router | 4.6.3 |
| vue-i18n | 9.14.5 |
| @vitejs/plugin-vue | 5.2.4 |
| sass | 1.93.2 |
| gsap | 3.13.0 |
| animejs | 3.0.1 |
| marked | 12.0.2 |
| resend | 6.28.1 |

`npm install` reports 24 vulnerabilities (17 high). They are all in the build/dev
dependency tree, not shipped to the browser. Do not run `npm audit fix --force` — it
will move Vite and Sass across major versions and break the build.

## Architecture

Single-page Vue 3 app. `index.html` mounts `src/main.js` into `#app`; routing is
client-side via `src/router.js`.

```
src/
  main.js        app entry, plugin registration
  router.js      route table
  App.vue        root component
  pages/         route-level views
  layouts/       page shells
  blocks/        large composed page sections
  components/    reusable UI
  templates/     blog post rendering
  data/          *.yml site content, imported at build time
  i18n/          vue-i18n locale messages
  core/, utils/  helpers
blog/            markdown posts, parsed with gray-matter + marked
public/          static assets copied verbatim (images, audio, video, docs)
```

**Content lives in YAML, not in components.** `src/data/*.yml` holds the copy for each
page (Home, Services, Portfolio, Pricing, Testimonial, Hero, …). They are imported
directly by `@rollup/plugin-yaml`. To change site copy, edit the YAML — not the Vue
template.

### Vue 2 compatibility mode

This was migrated from a Vue 2 / Gridsome site and still runs in compat mode. In
`vite.config.js`, `vue` is aliased to `@vue/compat` with `MODE: 2`. New components
should be written as plain Vue 3, but expect Vue 2 idioms in existing code and expect
compat deprecation warnings in the console. Removing compat mode is a project of its
own — do not do it incidentally.

### Path aliases

`~` and `@` both resolve to `src/`.

### Build output

`vite build` emits to `dist/`. `vite.config.js` splits `vendor` (vue, vue-router) and
`animations` (animejs, gsap) into manual chunks. The main chunk is over the 500 kB
warning threshold; that warning is expected.

## Portfolio / case studies

All case-study content lives in `src/data/Portfolio.yml`. There is no CMS step: the YAML
is imported directly by `@rollup/plugin-yaml` at build time, so publishing means editing
that file and deploying.

The render chain is:

```
src/data/Portfolio.yml
  -> PortfolioVerticalTimeline.vue   filters on isPublic
    -> PortfolioItem.vue             markdown, dates, srcset
      <- src/pages/Index.vue         mounted in the Case Studies modal
```

Entry shape — `projectName`, `client`, `description` and `isPublic` are the ones that
matter:

```yaml
  - projectName: Phobulous Restaurant Website
    client: Phobulous Noodle House
    jobTypeText: Employed By        # omit for "Client"; "Employed By" is special-cased
    startDate: 2017-04-01T12:00:00.000Z
    endDate: 2017-06-01T12:00:00.000Z
    image: /images/portfolio/bc-showcase-phobulous.png
    displayImage: true
    isPublic: true
    testimonialId: some-id          # optional, looked up in Testimonial.yml
    description: >-
      **The Client**

      Prose here.
```

Rules that are easy to get wrong:

- **`isPublic: true` is mandatory and fails silently.** The filter is
  `isPublic === true`, so an absent key hides the project exactly like `false` does.
- **Order is YAML order.** Nothing sorts by `startDate`, despite every entry having one.
  The list renders top to bottom as written.
- **The five section headings are localised by literal string replacement**, not by
  structure. `PortfolioItem.vue:84-88` matches the exact strings `**The Client**`,
  `**The Stakeholder**`, `**The Problem**`, `**Our Solution**` and `**Technologies**` and
  substitutes `portfolio.sections.*`. Any other heading stays English on the Thai site,
  and a typo silently skips translation. Body prose is never translated.
- **`description` is Markdown**, rendered with `marked`.
- **Images are convention-based.** `image: /images/portfolio/foo.png` makes
  `PortfolioItem.vue` build a srcset expecting `foo-small.png`, `foo-small@2x.png`,
  `foo-small@3x.png`, `foo.png`, `foo@2x.png` and `foo@3x.png` to sit beside each other
  in `public/images/portfolio/`. Missing variants 404 individually. The image block is
  guarded, so an entry with no `image` key renders fine without one.

`PortfolioTemp.vue`, `components/portfolio/Portfolio.vue` and `PortfolioDisclaimer.vue`
are unreferenced leftovers. Ignore them.

## Deployment

`vercel.json` drives it: build `npm run build`, output `dist/`, and an SPA fallback
rewriting unmatched paths to `/index.html`. The rewrite excludes `/api/` so serverless
functions stay reachable. The SPA fallback is required — client-side routes 404 without
it.

Pushing a branch produces a Vercel preview deployment. Merging to `master` deploys
production.

## Environment variables

Set in the Vercel project (Settings → Environment Variables), not in the repo:

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | yes | Server-side. Used by `api/contact.mjs` to send the contact form. Without it the endpoint returns 500 and the form shows an error. |
| `VITE_LINE_ID` | no | Client-side, baked in at build time. A LINE ID or Official Account ID. When set, a LINE link appears alongside WhatsApp in the contact block. |

Anything prefixed `VITE_` is exposed in the browser bundle. Never put a secret behind
that prefix.

## Contact form

`src/components/Contact.vue` POSTs JSON to `/api/contact`, a Vercel serverless function
at `api/contact.mjs`. The function validates, checks the `bot-field` honeypot, and sends
through Resend to **info@bluecollardev.com** with the visitor's address as `Reply-To`.

The `from` address must be on a Resend-verified domain — it sends as
`site@bluecollardev.com`, never as the visitor, which would fail SPF/DKIM.

The function is `.mjs` deliberately: `package.json` has no `"type": "module"`, so a
plain `.js` file in `api/` would be treated as CommonJS and the `import` would fail.

## Known issues

Do not treat these as bugs introduced by your change:

- **`public/admin/` is Decap CMS, under its old name.** It loads `netlify-cms@^2.0.0`
  from unpkg — the package was renamed `decap-cms` at v3 when Netlify handed the project
  to the community. The v2 build is unmaintained. Its `media_folder` also still points at
  `static/images`, a Gridsome path that no longer exists, and its GitHub backend
  previously authenticated through Netlify's OAuth service, which this site no longer
  uses. Assume the admin panel does not currently log in.
- **`build/config.gypi`** at the repo root is a stray artifact, unrelated to the Vite
  build.
- `vite-plugin-vue-devtools` is registered unconditionally in `vite.config.js`, so
  devtools are included in production builds. It should be gated to dev.
- `yarn.lock` and `package-lock.json` both exist. npm is the source of truth —
  `vercel.json` runs `npm run build`.

## Gridsome

This site used to be Gridsome. `gridsome.config.js` and `netlify.toml` were removed in
September 2026. If you find remaining Gridsome or Netlify references, they are dead
code.
