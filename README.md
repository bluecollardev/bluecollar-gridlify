# Blue Collar Development

Source for [bluecollardev.com](https://www.bluecollardev.com) — a Vue 3 single-page app
built with Vite and deployed on Vercel. Animations use CSS/JavaScript, anime.js and GSAP.

```bash
npm install
npm run dev      # dev server
npm run build    # -> dist/
npm run preview  # serve the build locally
```

Work in a feature branch; `master` deploys to production. See `CLAUDE.md` for
architecture, conventions and environment variables.

> The site previously ran on Gridsome + Netlify CMS, deployed to Netlify. It was migrated
> to Vite and Vercel. Some pieces of the old stack are still in the tree — see below.

---

## TODO

### Setup — the contact form does not send until these are done

- [ ] Create a [Resend](https://resend.com) account and generate an API key.
- [ ] Add `RESEND_API_KEY` to the Vercel project (Settings → Environment Variables).
- [ ] Verify `bluecollardev.com` in Resend by adding its DNS records. Until the domain is
      verified Resend will refuse to send as `site@bluecollardev.com` and `/api/contact`
      will return 502.
- [ ] Send a real test submission and confirm it arrives at info@bluecollardev.com and
      that Reply-To lands back on the visitor.
- [ ] Confirm the GitHub repo is actually connected to a Vercel project. This has not been
      verified — there is no Vercel CLI installed locally and the connection lives on
      Vercel's side, not in this repo.

### Messaging links

- [ ] Set `VITE_LINE_ID` in Vercel to a LINE ID or Official Account ID to switch on the
      LINE link in the contact block. LINE has no phone-number deep link, so it is the
      only channel that cannot be derived from the phone number and is hidden until this
      is set. WhatsApp, Viber and SMS already work.

### Broken

- [ ] **The admin panel is dead.** `public/admin/` is Decap CMS under its former name — it
      loads `netlify-cms@^2.0.0` from unpkg, which was renamed `decap-cms` at v3 and is
      now unmaintained at v2. Three things need fixing together:
      the unpkg script needs to point at `decap-cms@^3`; `media_folder`/`public_folder` in
      `config.yml` still point at `static/images`, a Gridsome path that no longer exists
      and should be `public/images`; and the GitHub backend used to authenticate through
      Netlify's OAuth service, which this site no longer uses, so login needs its own
      OAuth client (deployable as a Vercel function) or GitHub PKCE.
      Decide whether the CMS is worth keeping before doing this work — editing the YAML
      directly is currently the only way in.
- [ ] **`/projects` is a dead link.** `src/core/mixins/DropMenuMixin.js:31` links the
      "Portfolio" nav item to `/projects`, but `src/router.js` has no such route. Either
      add the route or point it at the `#portfolio` section on the home page.
- [x] ~~**Only 10 case studies can ever appear.**~~ Fixed: the `.slice(0, 10)` in
      `PortfolioVerticalTimeline.vue` is gone; all 23 public projects now render.
- [x] ~~**One project is hidden by omission.**~~ Fixed: "Kantana Animation Studios
      Website" now has `isPublic: true`. Every entry has the key explicitly.
- [x] ~~**Case studies render twice.**~~ Fixed: `src/pages/Index.vue` rendered
      `<portfolio-vertical-timeline>` on two consecutive lines under the identical
      `v-if`, so every project appeared twice in the Case Studies modal.
- [ ] **Two projects share one screenshot.** "iOS Tablet Point-of-Sale" and "Caffe Tech
      Inventory Management and Data Bridge" both point `image` at
      `/images/portfolio/bc-showcase-app-quickcommerce.png`, and both are public with
      `displayImage: true`. Same client, same picture, so they read as a duplicate entry.
      One of them needs its own screenshot — which is a content decision, not a code fix.
- [ ] **Several case studies are empty shells.** "Procurement Services Division Time
      Machine" and others have the `**The Stakeholder**` / `**The Problem**` /
      `**Our Solution**` / `**Technologies**` headings with no prose underneath. They
      render as bare headings.
- [ ] **Placeholder content is live.** `src/data/Contact.yml` is lorem ipsum and
      `src/data/SocialMedia.yml` points every social link at `https://example.com`.
- [ ] The "under construction" disclaimer in `src/layouts/Default.vue:8` is hardcoded
      English rather than going through i18n, and names Lucas Lopatka personally. Remove
      it when the site is ready, or translate it.

### Dead code left by the migration

- [ ] `src/components/PortfolioTemp.vue`, `src/components/portfolio/Portfolio.vue` and
      `src/components/PortfolioDisclaimer.vue` are unreferenced. The live chain is
      `Index.vue` → `PortfolioVerticalTimeline.vue` → `PortfolioItem.vue`.
- [ ] `build/config.gypi` at the repo root is a stray artifact unrelated to the Vite build.
- [ ] `yarn.lock` and `package-lock.json` both exist. npm is the source of truth —
      `vercel.json` runs `npm run build`. Delete `yarn.lock`.

### Housekeeping

- [ ] `vite-plugin-vue-devtools` is registered unconditionally in `vite.config.js`, so Vue
      devtools ship in production builds. Gate it to dev.
- [ ] The main JS chunk is ~683 kB (197 kB gzipped), over Vite's 500 kB warning threshold.
      Route-level code splitting would help.
- [ ] The app still runs in Vue 2 compatibility mode (`@vue/compat`, `MODE: 2`, aliased in
      `vite.config.js`). Migrating off it is a project in its own right — do not start it
      incidentally.
- [ ] GitHub reports 152 Dependabot vulnerabilities on `master`; npm reports 24 locally.
      All are in the build/dev tree, none ship to the browser. Do not run
      `npm audit fix --force` — it moves Vite and Sass across major versions and breaks
      the build.

---

## Adding a case study

Case studies live in `src/data/Portfolio.yml` — one entry per project under `items`. There
is no CMS step and no build step beyond a normal deploy; the YAML is imported directly by
`@rollup/plugin-yaml` at build time.

```yaml
  - projectName: Procurement Services Division Time Machine
    client: AOT Technologies / Government of British Columbia
    jobTypeText: Employed By        # omit for "Client"; "Employed By" is special-cased
    startDate: 2019-03-01T12:00:00.000Z
    endDate: 2019-04-01T12:00:00.000Z
    image: /images/portfolio/bc-showcase-app-timemachine.png
    isPublic: true                  # REQUIRED — anything but true hides the project
    displayImage: false
    testimonialId: some-id          # optional, looked up in Testimonial.yml
    description: >-
      **The Client**

      Prose here.

      **The Problem**

      Prose here.
```

Notes:

- **`isPublic: true` is mandatory.** The filter is `isPublic === true`, so a missing or
  absent key hides the project silently.
- **Order is YAML order.** Nothing sorts by date; the list renders top to bottom as
  written, then is cut to the first 10.
- **The five headings are translated by string replacement**, not by structure.
  `PortfolioItem.vue:84-88` finds the literal strings `**The Client**`,
  `**The Stakeholder**`, `**The Problem**`, `**Our Solution**` and `**Technologies**` and
  swaps in the Thai equivalents from `portfolio.sections.*`. Any other heading stays
  English in both locales. Spelling matters — a typo silently skips translation.
- **`description` is Markdown**, rendered with `marked`. Only the headings are localised;
  the body prose is written once and is not translated.
- **Images** go in `public/images/portfolio/`. `PortfolioItem.vue` builds a `srcset` by
  filename convention, expecting `name-small.png`, `name-small@2x.png`,
  `name-small@3x.png`, `name.png`, `name@2x.png` and `name@3x.png` alongside each other.
  Missing variants 404 individually.
