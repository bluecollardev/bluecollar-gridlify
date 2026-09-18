<template>
  <section id="projects" class="hero-section projects-section angle text-shadow-none">
    <div class="projects-section__inner">
      <typewriter-text-effect v-if="!isServer" tag="h2" :text="content.title"
                              class="title projects-section__title text-center"
                              lettersSelector=".letters" letterSelector=".letter" lineSelector=".line"/>
      <h2 v-else class="projects-section__title text-center">{{ content.title }}</h2>
      <p v-if="content.subtitle" class="projects-section__subtitle text-center">{{ content.subtitle }}</p>

      <div class="projects-grid">
        <router-link v-for="project in content.items" :key="project.name"
                     :to="`/products/${project.slug}`" class="project-card">
          <div class="project-card__head">
            <img v-if="project.icon" class="project-card__icon" :src="project.icon" alt="" aria-hidden="true"/>
            <h3 class="project-card__name">{{ project.name }}</h3>
            <a v-if="project.openSource && project.github" :href="project.github" target="_blank" rel="noopener"
               class="project-card__source" :aria-label="`${project.name} on GitHub`" @click.stop>
              <span class="icon-github" aria-hidden="true"></span>
              <span class="project-card__source-label">Open source</span>
            </a>
          </div>
          <p class="project-card__tagline">{{ project.tagline }}</p>
          <p class="project-card__description">{{ project.description }}</p>
          <p v-if="project.technologies" class="project-card__tech">{{ project.technologies }}</p>
          <span class="project-card__more">Learn more →</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import ProductsData from '~/data/Products.yml'
import TypewriterTextEffect from '~/core/components/text/Typewriter.vue'

export default {
  components: {
    TypewriterTextEffect
  },
  computed: {
    content() {
      return ProductsData
    },
    isServer() {
      return typeof window === 'undefined'
    }
  }
}
</script>

<style lang="scss">
.projects-section {
  /* Dark enough for the white animated heading, and gives the angled clip-path
     something to cut against */
  background-color: #4c7896;
  color: #fff;
  padding: 9rem 1.5rem 12rem;
  /* Start above the previous section's clipped edge so its 9vh chevron cuts into
     this section, rather than into the page behind it (which showed as a blue band) */
  margin-top: calc(-9vh - 0.75rem - 9vh);
  position: relative;
  /* Between #services (4) and #rock (1 desktop / 2 mobile): the chevron above cuts
     into this section, and this section's own chevron cuts into the guitar section */
  z-index: 3;

  &__inner {
    max-width: 72rem;
    margin: 0 auto;
  }

  &__title {
    display: block;
    font-size: 2rem;
    color: #fff;
    margin: 0;
  }

  &__subtitle {
    color: rgba(255, 255, 255, 0.85);
    margin: 1.25rem 0 0;
  }

  /* The section's own text should not inherit the hero text shadow */
  * {
    text-shadow: none !important;
  }

  .project-card {
    color: #33587a;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media screen and (max-width: 64em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2rem;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 8px 24px rgba(51, 88, 122, 0.12);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px rgba(51, 88, 122, 0.2);
  }

  &__head {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__icon {
    width: 2.5rem;
    height: 2.5rem;
    flex: 0 0 auto;
  }

  &__name {
    font-size: 1.35rem;
    margin: 0;
    margin-right: auto;
  }

  &__source {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: #52606d;
    font-size: 0.8rem;
    text-decoration: none;
    white-space: nowrap;

    &:hover,
    &:focus-visible {
      color: #33587a;
    }
  }

  &__tagline {
    font-weight: 700;
    margin: 0.75rem 0 0;
  }

  &__description {
    color: #3e4c59;
    margin: 0.75rem 0 0;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  &__tech {
    color: #7b8794;
    font-size: 0.8rem;
    line-height: 1.5;
    margin: 1.25rem 0 0;
  }

  &__more {
    margin-top: 1rem;
    color: #33587a;
    font-weight: 700;
    font-size: 0.9rem;
  }
}
</style>
