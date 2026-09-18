<template>
  <Layout v-if="product" :id="`product-page-${product.slug}`">
    <section class="product-hero hero-section angle">
      <div class="product-hero__inner">
        <img v-if="product.icon" class="product-hero__icon" :src="product.icon" alt="" aria-hidden="true"/>
        <h1 class="product-hero__name">{{ product.name }}</h1>
        <p class="product-hero__tagline">{{ product.tagline }}</p>
        <p v-if="product.git" class="product-hero__git">
          <span>{{ product.git.repos.length }} {{ product.git.repos.length === 1 ? 'repository' : 'repositories' }}</span>
          <span>{{ product.git.total }} commits</span>
          <span>{{ product.git.duration }} of work</span>
          <span v-if="product.git.tests">{{ product.git.tests }} test suites</span>
        </p>

        <p v-if="product.intro" class="product-hero__intro">{{ product.intro }}</p>

        <div class="product-hero__actions">
          <a v-if="product.github" class="product-button product-button--primary" :href="product.github"
             target="_blank" rel="noopener">
            <span class="icon-github" aria-hidden="true"></span> View the source
          </a>
          <a class="product-button" href="/#contact">Talk to us</a>
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
          <li v-for="repo in product.git.repos" :key="repo.name" class="repo">
            <div class="repo__main">
              <span class="repo__name">{{ repo.name }}</span>
              <span class="repo__note">{{ repo.note }}</span>
            </div>
            <div class="repo__meta">
              <span><strong>{{ repo.commits }}</strong> commits</span>
              <span><strong>{{ repo.contributors }}</strong> contributors</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section v-if="product.features" class="product-features">
      <div class="product-features__inner">
        <div v-for="feature in product.features" :key="feature.title" class="product-feature">
          <h2 class="product-feature__title">{{ feature.title }}</h2>
          <p class="product-feature__body">{{ feature.body }}</p>
        </div>
      </div>
    </section>

    <section v-if="shots.length" class="product-shots">
      <div class="product-shots__inner">
        <h2 class="product-shots__title text-center">A look inside</h2>

        <div v-if="product.examples" class="product-examples">
          <label class="product-examples__label" :for="`example-${product.slug}`">Live example</label>
          <select :id="`example-${product.slug}`" v-model="exampleIndex" class="product-examples__select">
            <option v-for="(example, i) in product.examples" :key="example.name" :value="i">{{ example.name }}</option>
          </select>
          <span v-if="activeExample && activeExample.blurb" class="product-examples__blurb">{{ activeExample.blurb }}</span>
        </div>

        <p class="product-shots__hint text-center">Scroll for more →</p>
      </div>
      <!-- A carousel rather than a grid: the shots are a mix of wide and tall, which
           never lined up in columns -->
      <div class="product-shots__track">
        <figure v-for="shot in shots" :key="shot.src" class="product-shot"
                :class="{ 'product-shot--portrait': shot.portrait }">
          <img class="lozad" :src="shot.src" :alt="shot.caption"/>
          <figcaption>{{ shot.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="product-footer">
      <div class="product-footer__inner">
        <p v-if="product.technologies" class="product-footer__tech">{{ product.technologies }}</p>
        <div class="product-footer__actions">
          <a class="product-button product-button--primary" href="/#contact">Get in touch</a>
          <router-link class="product-button" to="/">Back to Blue Collar</router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import lozad from 'lozad'

import Layout from '~/layouts/Default.vue'
import ProductsData from '~/data/Products.yml'

export default {
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
