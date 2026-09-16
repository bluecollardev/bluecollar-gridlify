# CLAUDE.md

Blue Collar Development marketing site — `bluecollardev.com`. Vue 3 SPA built with Vite,
deployed on Vercel.

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

## Deployment

`vercel.json` drives it: build `npm run build`, output `dist/`, with a filesystem
handler and an SPA fallback rewriting unmatched paths to `/index.html`. The SPA
fallback is required — client-side routes 404 without it.

Pushing a branch produces a Vercel preview deployment. Merging to `master` deploys
production.

## Known issues

Do not treat these as bugs introduced by your change:

- **The contact form is broken.** `src/components/Contact.vue` carries Netlify Forms
  attributes (`data-netlify`, `data-netlify-honeypot`) and `handleSubmit` POSTs to
  `https://bluecollardev.netlify.com/`. Netlify Forms do not exist on Vercel, and that
  hostname is stale. The form needs a real endpoint — a Vercel serverless function or a
  third-party form service.
- **`public/admin/` is Netlify CMS**, loading `netlify-cms@^2.0.0` from unpkg and
  pointing at the `bluecollardev/bluecollar-gridlify` GitHub backend on branch
  `master`. Its `media_folder` still points at `static/images`, a Gridsome path that no
  longer exists. Unverified whether it still works; it is a candidate for removal.
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
