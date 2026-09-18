# TODO

Running task list for the site. Tick items off as they land; add new work at the
bottom of the relevant section.

## Security

- [ ] **Rotate the Google Maps API key.** `props-apps` hardcodes a live key as a
      default in `packages/app-config/src/components/SystemConfiguration.vue`
      (`VITE_GOOGLE_MAP_KEY`). It is billable, sits in that repo's history and in
      every build made from it, and the frontend is going open source. Rotate it,
      restrict the new key by HTTP referrer, and read it from an env var. The
      prepared public snapshot already has the value blanked.

## Open source

- [ ] Create empty GitHub repos `bluecollardev/mediashare` and
      `bluecollardev/rental-cloud-app`, then push the prepared snapshots (no `gh`
      CLI or token on this machine; SSH pushes work).
- [ ] Snapshots are single "Initial public release" commits, not mirrors: both
      private histories carry `.env.*` files, a Google service-account key and an
      Apple signing certificate.
- [ ] Rental.Cloud publishes the frontend only; the API stays private.
- [ ] Once live, add the GitHub links to `src/data/Projects.yml`
      (`github:` + `openSource: true`) so the cards show the source badge.
- [x] `/open-source` directory: every public repository grouped by owning GitHub
      account (bcgov, bluecollardev) and then by project, with commits,
      contributors, pull requests and the active window. Data in
      `src/data/OpenSource.yml`; counts from the GitHub API for `bcdevlucas`.
- [x] The same summary sits inside the ID card on `/company`, after recent
      missions, linking out to every repository.
- [ ] `nr-fom` shows no authored pull requests — the 59 commits landed on branches
      merged by others. Left blank rather than guessed at.

## Deploy

- [x] Accept the Xcode licence on this Mac (`sudo xcodebuild -license accept`).
- [x] Everything below is committed and pushed to `master`, which Vercel deploys
      to production.

## Home page

- [x] Fishing rod handle does not recast on a 14" MacBook (1512px): the hero text
      wrapper covered the handle. `pointer-events` fix in `src/pages/Index.vue`.
- [x] Contact form: `#contact` had a fixed `height: 130vh` with `overflow: hidden`,
      which cut the Submit button off on desktop. Now grows with the form and keeps
      clear of the 9vh angled clip-path.
- [x] Guitar section: bottom padding so the guitar clears the angled edge, and
      min-height instead of a fixed 115vh (it was clipping the guitar at 1280x800).
- [x] Header icons: GitHub (icon, no menu text), LinkedIn, SMS chat bubble, phone
      that reveals the number as a tel: link, email to lucas@bluecollardev.com.
      Instagram and Twitter removed, Facebook commented out.
- [x] Footer: social icons removed entirely (the header row covers it) and the
      copyright reads 2006-2026.
- [x] Fishing scene: the caught fish hung ~200px off the end of the line (the fish
      was positioned without the rod-anchor offset, so the gap changed per screen);
      the big jumping fish is 30% slower.
- [x] Contact: Viber removed from the messaging links.

## Portfolio / case studies (`src/data/Portfolio.yml`)

- [x] Rewrite every description from the detailed resume portfolio and the 2012
      BlogShop PDF; fix misplaced/copied text (Leva, Phobulous, Baan Saowanee).
- [x] Caffe Tech: swap dates and order of store vs data bridge; store = Magento →
      QuickCommerce (OpenCart) migration.
- [x] Caffe Tech Magento Store: separate entry with the original Magento site mockup.
- [x] RMG Selection: keep v3; add the 2009 version (mobile section, WURFL).
- [x] Add HDF Mercy Centre and DP Piranha (Nfineon).
- [x] R1 Club: custom Joomla-based CMS. Spasation: Jun–Aug 2011. Active 24 → now Visma.
- [x] Caffe Tech Magento Store: Jan–Jun 2015 (confirmed).
- [ ] Confirm placeholder dates: RMG 2009 version (Jan–Dec 2009), DP Piranha (2007),
      PocketPT start (Jan 2020).
- [x] Every entry has a **The Problem** section.
- [x] Add PocketPT (Dr. Adam Fehr) with a device mockup from live app screenshots, plus
      his LinkedIn recommendation as a testimonial.
- [x] Add CrashPad411 (base: resume portfolio entry) with screenshots of crashpad411.com.
- [x] Add Skin Tyee First Nation (base: resume portfolio entry) with website and
      community-app screenshots from the skintyee repo docs (no member, task or
      finance screens).
- [ ] Gorilla Print and Binc VFX still have no image (no screenshots available).

## Portfolio images (`public/images/portfolio/`)

- [x] Device mockups (iMac / MacBook / iPad / iPhone) for the BlogShop PDF projects,
      generated from the `orig/` template; all six size variants.
- [x] Generate the missing `-small` variants for the seven older mockups.
- [x] Mockups for PocketPT, CrashPad411 and Skin Tyee.
- [x] Populate `gallery:` arrays (raw screenshots) for entries that have them
      (`public/images/portfolio/gallery/`).
- [ ] Galleries for the older entries (Phobulous, Caffe Tech, Carsgone, AMA, …) —
      only the mockup today; add raw screenshots if they turn up.

## Navigation

- [x] Home hidden from the nav (kept in the markup behind `v-if="false"`).
- [x] Case Studies menu item -> /case-studies, which renders the home page with the
      Case Studies modal open; closing it returns the URL to /. Works from any page
      and as a direct link.
- [x] Hero background: `cover` in portrait too — at ~828px the old `auto 100%`
      left the section colour showing down both sides.

## Products

- [x] `src/data/Products.yml` drives the home page cards and one landing page each
      at `/products/:slug` (`src/pages/Product.vue`).
- [x] Contact map renders locally, centred on the Thonburi riverside by Wat Arun:
      plugin registered, component renamed, key read from
      `VITE_GOOGLE_MAP_KEY`, centred on the Thonburi riverside by Wat Arun.
- [ ] Set `VITE_GOOGLE_MAP_KEY` in Vercel or production keeps the plain overlay.
- [ ] Add the GitHub links for Rental.Cloud and Entraprise once those repos exist.

## Portfolio PDF

- [x] `npm run portfolio:pdf` builds two PDFs into `public/docs/` from
      `src/data/Portfolio.yml`, so they cannot drift from the site:
      `blue-collar-portfolio.pdf` (case studies, ~2 MB) and
      `blue-collar-portfolio-with-screenshots.pdf` (plus an appendix, ~7 MB).
      Needs `puppeteer-core` installed locally; it is not a project dependency.
- [x] Download menu in the Case Studies header (icon-only on phones).
- [ ] Re-run the build whenever Portfolio.yml or the images change.

## Portfolio UI

- [x] Ongoing engagements (no `endDate`) show the start date alone, no "Present".
- [x] Date badge was covered by the leading image on desktop — image moved below it.
- [x] Bullet lists in descriptions (theme.scss resets `li` list-style).
- [x] Click the leading image to open a lightbox gallery
      (`PortfolioGallery.vue`; reads optional `gallery:` from the YAML).
- [x] Gallery: opaque backdrop behind the transparent mockup PNGs; sits above the
      site's fixed buttons.
- [x] Mobile (<= 40em): the five description sections collapse into accordions;
      they stay open on desktop.

## Resume (outside the repo)

- [x] `~/Desktop/Resume & Portfolio/Lucas Lopatka - Project Portfolio (detailed).docx`:
      added the BlogShop projects; HDF 2009, DP Piranha 2007, Active 24 merged with Visma,
      R1 Club custom Joomla-based CMS.
- [ ] Re-export the matching `.pdf` from Word.
