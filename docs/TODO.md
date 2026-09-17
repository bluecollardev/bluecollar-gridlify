# TODO

Running task list for the site. Tick items off as they land; add new work at the
bottom of the relevant section.

## Deploy

- [ ] Accept the Xcode licence on this Mac (`sudo xcodebuild -license accept`) — git
      refuses to run until it is accepted, so nothing below can be committed yet.
- [ ] Put the pending work on a branch off `master`, push for a Vercel preview,
      then merge to `master` for production.

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
- [x] Footer: LinkedIn only, matched to the same glyph size; Twitter removed.
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
- [ ] Skin Tyee: confirm the engagement is still current (shows "May 2026 – Present").
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

## Portfolio UI

- [x] Ongoing engagements (no `endDate`) show "Present" (EN/TH).
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
