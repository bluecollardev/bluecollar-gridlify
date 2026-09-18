<template>
  <Layout v-if="product" :id="`product-page-${product.slug}`">
    <section class="product-hero hero-section angle">
      <div class="product-hero__inner">
        <img v-if="product.icon" class="product-hero__icon" :src="product.icon" alt="" aria-hidden="true"/>
        <h1 class="product-hero__name">{{ product.name }}</h1>
        <p class="product-hero__tagline">{{ product.tagline }}</p>
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

    <section v-if="product.features" class="product-features">
      <div class="product-features__inner">
        <div v-for="feature in product.features" :key="feature.title" class="product-feature">
          <h2 class="product-feature__title">{{ feature.title }}</h2>
          <p class="product-feature__body">{{ feature.body }}</p>
        </div>
      </div>
    </section>

    <section v-if="product.screenshots" class="product-shots">
      <div class="product-shots__inner">
        <h2 class="product-shots__title text-center">A look inside</h2>
        <div class="product-shots__grid">
        <figure v-for="shot in product.screenshots" :key="shot.src" class="product-shot"
                :class="{ 'product-shot--portrait': shot.portrait }">
          <img class="lozad" :src="shot.src" :alt="shot.caption"/>
          <figcaption>{{ shot.caption }}</figcaption>
        </figure>
        </div>
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
  computed: {
    product() {
      return ProductsData.items.find(item => item.slug === this.$route.params.slug) || null
    }
  },
  watch: {
    // The same component serves every product, so re-title on navigation
    product: {
      immediate: true,
      handler(product) {
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
  padding: 7rem 1.5rem 12rem;
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
  }

  &__tagline {
    font-size: 1.35rem;
    margin: 0.75rem 0 0;
    color: rgba(255, 255, 255, 0.9);
  }

  &__intro {
    margin: 1.5rem auto 0;
    max-width: 44rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
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

.product-features {
  background: #fff;
  padding: 5rem 1.5rem;

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

  /* Portrait shots sit two-up so they do not each take a full screen */
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem 2rem;
    align-items: start;
  }
}

.product-shot {
  margin: 0 0 2.5rem;

  img {
    display: block;
    width: 100%;
    max-height: 34rem;
    object-fit: contain;
    object-position: top;
    border-radius: 6px;
    box-shadow: 0 10px 28px rgba(51, 88, 122, 0.18);
  }

  /* Phone captures are tall and narrow; at column width they tower over the page */
  &--portrait img {
    width: auto;
    max-width: 17rem;
    max-height: 36rem;
    margin: 0 auto;
  }

  figcaption {
    margin-top: 0.75rem;
    color: #52606d;
    font-size: 0.9rem;
    text-align: center;
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
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
}
</style>
