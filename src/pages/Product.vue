<template>
  <Layout v-if="product" :id="`product-page-${product.slug}`">
    <section class="product-hero hero-section angle">
      <div class="product-hero__inner">
        <img v-if="product.icon" class="product-hero__icon" :src="product.icon" alt="" aria-hidden="true"/>
        <h1 class="product-hero__name">{{ product.name }}</h1>
        <p class="product-hero__tagline">{{ tr(`products.${product.slug}.tagline`, product.tagline) }}</p>
        <p v-if="product.git" class="product-hero__git">
          <span>{{ product.git.repos.length }} {{ product.git.repos.length === 1 ? tr('products.ui.repository', 'repository') : tr('products.ui.repositories', 'repositories') }}</span>
          <span>{{ product.git.total }} {{ tr('products.ui.commits', 'commits') }}</span>
          <span>{{ tr(`products.duration.${product.slug}`, product.git.duration) }} {{ tr('products.ui.ofWork', 'of work') }}</span>
          <span v-if="product.git.tests">{{ product.git.tests }} {{ tr('products.ui.testSuites', 'test suites') }}</span>
        </p>
        <p v-if="product.builds" class="product-hero__builds">
          <span v-for="build in product.builds.items" :key="build.name" class="product-build">
            <span class="product-build__dot" aria-hidden="true"></span>
            {{ tr(`products.builds.${build.name}`, build.name) }} <em>{{ tr(`products.status.${build.status}`, build.status) }}</em>
          </span>
          <span class="product-hero__builds-note">{{ tr('products.ui.verified', 'verified') }} {{ product.builds.checked }}</span>
        </p>

        <p v-if="product.intro" class="product-hero__intro">{{ tr(`products.${product.slug}.intro`, product.intro) }}</p>

        <div class="product-hero__actions">
          <a v-if="product.github" class="product-button product-button--primary" :href="product.github"
             target="_blank" rel="noopener">
            <span class="icon-github" aria-hidden="true"></span> {{ tr('products.ui.viewSource', 'View the source') }}
          </a>
          <a class="product-button" href="/#contact">{{ tr('products.ui.talkToUs', 'Talk to us') }}</a>
        </div>

        <img v-if="product.mockup" class="product-hero__mockup lozad" :src="product.mockup"
             :alt="`${product.name} running on desktop, tablet and phone`"/>
      </div>
    </section>

    <section v-if="product.git" class="product-stats">
      <div class="product-stats__inner">
        <div class="commit-graph">
          <div class="commit-graph__head">
            <h2 class="commit-graph__title">{{ product.git.total }} commits, {{ product.git.first }} to {{ product.git.last }}</h2>
            <div class="commit-graph__legend">
              <span>Less</span>
              <i v-for="l in [0, 1, 2, 3, 4]" :key="l" :class="`commit-graph__cell commit-graph__cell--${l}`"></i>
              <span>More</span>
            </div>
          </div>
          <!-- One year at a time; the tabs switch between them -->
          <div v-if="product.git.years.length > 1" class="commit-years" role="tablist">
            <button v-for="(year, i) in product.git.years" :key="year.year" type="button" role="tab"
                    class="commit-years__tab" :class="{ 'is-active': i === yearIndex }"
                    :aria-selected="i === yearIndex" @click="yearIndex = i">{{ year.year }}</button>
          </div>

          <div v-if="activeYear" class="commit-year">
            <div class="commit-year__label">
              <strong>{{ activeYear.year }}</strong>
              <span>{{ activeYear.total }} commits</span>
            </div>
            <div class="commit-graph__grid" role="img" :aria-label="`${activeYear.total} commits in ${activeYear.year}`">
              <div v-for="(week, w) in weeksFor(activeYear.levels)" :key="w" class="commit-graph__week">
                <i v-for="(level, d) in week" :key="d" :class="`commit-graph__cell commit-graph__cell--${level}`"></i>
              </div>
            </div>
          </div>
        </div>

        <ul class="repo-list">
          <li v-for="(repo, repoIndex) in product.git.repos" :key="repo.name" class="repo">
            <div class="repo__main">
              <span class="repo__name">{{ repo.name }}</span>
              <!-- Only the parts we publish carry the mark; the rest stay private -->
              <a v-if="repo.openSource && repo.github" class="repo__source" :href="repo.github"
                 target="_blank" rel="noopener" :aria-label="`${repo.name} on GitHub`">
                <span class="icon-github" aria-hidden="true"></span>
                <span class="repo__source-label">Open source</span>
              </a>
              <span v-else-if="repo.openSource" class="repo__source repo__source--pending">
                <span class="icon-github" aria-hidden="true"></span>
                <span class="repo__source-label">Open source — publishing</span>
              </span>
              <span class="repo__note">{{ tr(`products.${product.slug}.repos.${repoIndex}`, repo.note) }}</span>
            </div>
            <div class="repo__meta">
              <span><strong>{{ repo.commits }}</strong> {{ tr('products.ui.commits', 'commits') }}</span>
              <span><strong>{{ repo.contributors }}</strong> {{ tr('products.ui.contributors', 'contributors') }}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section v-if="product.features" class="product-features">
      <div class="product-features__inner">
        <div v-for="(feature, i) in product.features" :key="feature.title" class="product-feature">
          <h2 class="product-feature__title">{{ tr(`products.${product.slug}.features.${i}.title`, feature.title) }}</h2>
          <p class="product-feature__body">{{ tr(`products.${product.slug}.features.${i}.body`, feature.body) }}</p>
        </div>
      </div>
    </section>

    <section v-if="product.ai" class="product-ai">
      <div class="product-ai__inner">
        <h2 class="product-ai__title text-center">{{ tr(`products.${product.slug}.ai.title`, product.ai.title) }}</h2>
        <p class="product-ai__intro text-center">{{ tr(`products.${product.slug}.ai.intro`, product.ai.intro) }}</p>

        <div class="product-ai__grid">
          <div v-for="(item, i) in product.ai.items" :key="item.title" class="product-ai-card">
            <h3 class="product-ai-card__title">{{ tr(`products.${product.slug}.ai.items.${i}.title`, item.title) }}</h3>
            <p class="product-ai-card__body">{{ tr(`products.${product.slug}.ai.items.${i}.body`, item.body) }}</p>
            <span v-if="item.status" class="product-ai-card__status"
                  :class="`product-ai-card__status--${item.status.replace(/\s+/g, '-')}`">{{ tr(`products.status.${item.status}`, item.status) }}</span>
          </div>
        </div>

        <p v-if="product.ai.note" class="product-ai__note text-center">{{ tr(`products.${product.slug}.ai.note`, product.ai.note) }}</p>
      </div>
    </section>

    <section v-if="shots.length" class="product-shots">
      <div class="product-shots__inner">
        <h2 class="product-shots__title text-center">{{ tr('products.ui.lookInside', 'A look inside') }}</h2>

        <div v-if="product.examples" class="product-examples">
          <label class="product-examples__label" :for="`example-${product.slug}`">{{ tr('products.ui.liveExample', 'Live example') }}</label>
          <select :id="`example-${product.slug}`" v-model="exampleIndex" class="product-examples__select">
            <option v-for="(example, i) in product.examples" :key="example.name" :value="i">{{ example.name }}</option>
          </select>
          <span v-if="activeExample && activeExample.blurb" class="product-examples__blurb">{{ tr(`products.${product.slug}.examples.${exampleIndex}`, activeExample.blurb) }}</span>
        </div>

        <p class="product-shots__hint text-center">{{ tr('products.ui.scrollForMore', 'Scroll for more →') }}</p>
      </div>
      <!-- A carousel rather than a grid: the shots are a mix of wide and tall, which
           never lined up in columns -->
      <div class="product-shots__track">
        <figure v-for="shot in shots" :key="shot.src" class="product-shot"
                :class="{ 'product-shot--portrait': shot.portrait }">
          <img class="lozad" :src="shot.src" :alt="caption(shot.caption)"/>
          <figcaption>{{ caption(shot.caption) }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="product-footer">
      <div class="product-footer__inner">
        <p v-if="product.technologies" class="product-footer__tech">{{ product.technologies }}</p>
        <div class="product-footer__actions">
          <a class="product-button product-button--primary" href="/#contact">{{ tr('products.ui.getInTouch', 'Get in touch') }}</a>
          <router-link class="product-button" to="/">{{ tr('products.ui.backHome', 'Back to Blue Collar') }}</router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import lozad from 'lozad'

import Layout from '~/layouts/Default.vue'
import LocalizedContent from '~/core/mixins/LocalizedContentMixin'
import ProductsData from '~/data/Products.yml'

export default {
  mixins: [LocalizedContent],
  components: {
    Layout
  },
  data() {
    return {
      exampleIndex: 0,
      // start on the most recent year
      yearIndex: 0
    }
  },
  computed: {
    activeYear() {
      const years = this.product && this.product.git ? this.product.git.years : null
      return years ? years[this.yearIndex] || years[years.length - 1] : null
    },
    activeExample() {
      return this.product && this.product.examples ? this.product.examples[this.exampleIndex] : null
    },
    /** The dropdown swaps the whole carousel; without examples it is the product's own list. */
    shots() {
      if (!this.product) return []
      return (this.activeExample && this.activeExample.screenshots) || this.product.screenshots || []
    },
    product() {
      return ProductsData.items.find(item => item.slug === this.$route.params.slug) || null
    }
  },
  methods: {
    /** Screenshot captions are keyed by their English text: the carousel swaps
        whole lists when an example is picked, so positional keys would drift. */
    caption (text) {
      return this.tr(`products.captions.${text}`, text)
    },
    /** Each year's levels are one character per day, Sunday first; chunk into weeks. */
    weeksFor(levels) {
      const out = []

      for (let i = 0; i < levels.length; i += 7) {
        out.push(levels.slice(i, i + 7).split(''))
      }

      return out
    }
  },
  watch: {
    // The same component serves every product: re-title, and reset the switchers
    // so a new product opens on its latest year and first example
    product: {
      immediate: true,
      handler(product) {
        this.exampleIndex = 0
        this.yearIndex = product && product.git ? product.git.years.length - 1 : 0

        if (typeof document !== 'undefined' && product) {
          document.title = `${product.name} — Blue Collar Development`
        }
      }
    }
  },
  mounted() {
    if (!this.product) {
      this.$router.replace('/')
      return
    }

    lozad().observe()
  }
}
</script>

<style lang="scss">
.product-hero {
  background-color: #4c7896;
  color: #fff;
  /* Paint above the section below so the angled cut reveals it, not the page
     background - which showed as a second, lighter chevron */
  position: relative;
  z-index: 2;
  /* Just enough room under the mockup for the angled edge */
  padding: 7rem 1.5rem calc(9vh + 3rem);
  text-align: center;

  * {
    text-shadow: none !important;
  }

  &__inner {
    max-width: 60rem;
    margin: 0 auto;
  }

  &__icon {
    width: 4.5rem;
    height: 4.5rem;
    filter: brightness(0) invert(1);
  }

  &__name {
    font-size: 2.75rem;
    margin: 1rem 0 0;
    color: #fff;
    text-align: center;
  }

  &__tagline {
    font-size: 1.35rem;
    margin: 0.75rem 0 0;
    color: rgba(255, 255, 255, 0.9);
    /* The site's paragraph styles win over the section's text-align */
    text-align: center;
  }

  &__intro {
    margin: 1.5rem auto 0;
    max-width: 44rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }

  &__mockup {
    display: block;
    width: 100%;
    max-width: 52rem;
    margin: 3rem auto 0;
  }
}

.product-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.18);
  }

  &--primary {
    background: #fff;
    color: #33587a;
    border-color: #fff;

    &:hover,
    &:focus-visible {
      background: rgba(255, 255, 255, 0.85);
    }
  }
}

.product-stats {
  background: #fff;
  /* Tuck under the hero's 9vh angled edge */
  margin-top: -9vh;
  padding: calc(3.5rem + 9vh) 1.5rem 0;
  position: relative;
  z-index: 1;

  &__inner {
    max-width: 66rem;
    margin: 0 auto;
    padding-bottom: 3rem;
  }
}

.product-hero__git {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.5rem;
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;

  span + span::before {
    content: '·';
    margin-right: 1.5rem;
    color: rgba(255, 255, 255, 0.5);
  }
}

.product-hero__builds {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem 0.75rem;
  margin: 0.75rem 0 0;
  font-size: 0.85rem;

  &-note {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.75rem;
  }
}

.product-build {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;

  &__dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #4ad07d;
    box-shadow: 0 0 0 3px rgba(74, 208, 125, 0.25);
  }

  em {
    font-style: normal;
    color: rgba(255, 255, 255, 0.7);
  }
}

.commit-graph {
  &__head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.75rem;
  }

  &__title {
    font-size: 1.1rem;
    color: #33587a;
    margin: 0;
  }

  &__legend {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #7b8794;
    font-size: 0.75rem;
  }

  &__grid {
    display: flex;
    gap: 3px;
    overflow-x: auto;
    padding-bottom: 0.25rem;
  }

  &__week {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  &__cell {
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 2px;
    background: #e8ecef;

    &--1 { background: #c6dcea; }
    &--2 { background: #8fbcd9; }
    &--3 { background: #4c7896; }
    &--4 { background: #2b4a63; }
  }

}

.commit-years {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 1.25rem;

  &__tab {
    font: inherit;
    font-size: 0.85rem;
    line-height: 1;
    padding: 0.45rem 0.8rem;
    border: 1px solid #c3ced9;
    border-radius: 999px;
    background: #fff;
    color: #52606d;
    cursor: pointer;

    &:hover {
      border-color: #78b7d6;
      color: #33587a;
    }

    &.is-active {
      background: #33587a;
      border-color: #33587a;
      color: #fff;
    }

    &:focus-visible {
      outline: 2px solid #78b7d6;
      outline-offset: 2px;
    }
  }
}

.commit-year {
  margin-top: 1.25rem;

  &__label {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    margin-bottom: 0.4rem;

    strong {
      color: #33587a;
      font-size: 0.95rem;
    }

    span {
      color: #7b8794;
      font-size: 0.8rem;
    }
  }
}

.repo__source {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.6rem;
  padding: 0.1rem 0.5rem;
  border: 1px solid #cbd6e0;
  border-radius: 999px;
  color: #33587a;
  font-size: 0.7rem;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;

  &:hover,
  &:focus-visible {
    border-color: #33587a;
    background: rgba(51, 88, 122, 0.06);
  }

  &--pending {
    color: #7b8794;

    &:hover {
      background: none;
      border-color: #cbd6e0;
    }
  }
}

.repo-list {
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
}

.repo {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  padding: 0.85rem 0;
  border-top: 1px solid #e6e6e6;

  &__name {
    font-weight: 700;
    color: #33587a;
    margin-right: 0.75rem;
  }

  &__note {
    color: #7b8794;
    font-size: 0.9rem;
  }

  &__meta {
    display: flex;
    gap: 1.5rem;
    color: #52606d;
    font-size: 0.85rem;
    white-space: nowrap;
  }
}

.product-ai {
  background: #33587a;
  color: #fff;
  padding: 4rem 1.5rem 4.5rem;
  position: relative;
  z-index: 1;

  * {
    text-shadow: none !important;
  }

  &__inner {
    max-width: 66rem;
    margin: 0 auto;
  }

  &__title {
    font-size: 1.85rem;
    color: #fff;
    margin: 0;
  }

  &__intro {
    max-width: 44rem;
    margin: 1rem auto 0;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-top: 2.5rem;

    @media screen and (max-width: 64em) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 40em) {
      grid-template-columns: 1fr;
    }
  }

  &__note {
    margin: 2rem auto 0;
    max-width: 44rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

.product-ai-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  padding: 1.5rem 1.35rem;

  &__title {
    font-size: 1.1rem;
    color: #fff;
    margin: 0;
  }

  &__body {
    color: rgba(255, 255, 255, 0.82);
    font-size: 0.95rem;
    line-height: 1.55;
    margin: 0.6rem 0 0;
  }

  &__status {
    margin-top: auto;
    padding-top: 0.9rem;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);

    &::before {
      content: '';
      display: inline-block;
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      margin-right: 0.45rem;
      vertical-align: middle;
      background: rgba(255, 255, 255, 0.5);
    }

    &--live::before {
      background: #4ad07d;
    }

    &--beta::before {
      background: #f0b429;
    }

    &--coming-soon {
      color: rgba(255, 255, 255, 0.5);
    }

    &--coming-soon::before {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
}

.product-features {
  background: #fff;
  padding: 3.5rem 1.5rem 5rem;
  position: relative;
  z-index: 1;

  &__inner {
    max-width: 66rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;

    @media screen and (max-width: 48em) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
}

.product-feature {
  &__title {
    font-size: 1.25rem;
    color: #33587a;
    margin: 0 0 0.5rem;
  }

  &__body {
    margin: 0;
    color: #3e4c59;
    line-height: 1.6;
  }
}

.product-shots {
  background: #f2f1ed;
  padding: 5rem 1.5rem;

  &__inner {
    max-width: 62rem;
    margin: 0 auto;
  }

  &__title {
    font-size: 1.75rem;
    color: #33587a;
    margin: 0 0 2.5rem;
  }

  &__examples-spacer { display: none; }

  &__hint {
    color: #7b8794;
    font-size: 0.85rem;
    margin: -1.5rem 0 2rem;
  }

  /* Horizontal carousel: cards snap, captions label each one */
  &__track {
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 0 max(1.5rem, calc((100vw - 62rem) / 2)) 1.5rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-color: #c3ced9 transparent;
  }
}

.product-shot {
  flex: 0 0 auto;
  margin: 0;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  /* Without this the figure's default align-items:stretch pulls each image out to
     the caption's width, squashing phone captures sideways */
  align-items: center;

  img {
    display: block;
    /* One height for every card, so the row lines up whatever the shape.
       width:auto keeps the aspect ratio - phones must not stretch sideways. */
    height: 22rem;
    width: auto;
    max-width: none;
    object-fit: contain;
    border-radius: 6px;
    /* The shadow follows the image itself; letterboxing it inside a wider box
       left the shadow floating around empty space */
    box-shadow: 0 10px 28px rgba(51, 88, 122, 0.18);
  }

  @media screen and (max-width: 40em) {
    img {
      height: 16rem;
    }
  }

  figcaption {
    margin-top: 0.75rem;
    color: #52606d;
    font-size: 0.85rem;
    text-align: center;
    max-width: 22rem;
    align-self: center;
  }
}

.product-examples {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  /* A notice panel, so the switcher reads as a control rather than stray text */
  max-width: 44rem;
  margin: 0 auto 1.5rem;
  padding: 1rem 1.25rem;
  border: 1px solid #c3ced9;
  border-left: 4px solid #78b7d6;
  border-radius: 6px;
  background: #fff;

  &__label {
    color: #52606d;
    font-size: 0.9rem;
  }

  &__select {
    font: inherit;
    font-size: 0.95rem;
    padding: 0.5rem 2rem 0.5rem 0.75rem;
    border: 1px solid #c3ced9;
    border-radius: 4px;
    background: #fff;
    color: #33587a;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid #78b7d6;
      outline-offset: 2px;
    }
  }

  &__blurb {
    color: #7b8794;
    font-size: 0.9rem;
  }
}

.product-footer {
  background: #33587a;
  color: #fff;
  padding: 4rem 1.5rem;
  text-align: center;

  * {
    text-shadow: none !important;
  }

  &__tech {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin: 0 0 2rem;
    text-align: center;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
}
</style>
