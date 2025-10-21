<template>
  <section
      ref="heroLayout"
      :class="`homepage-hero hero-section hero-section-01-col ${this.bgColor ? this.bgColor : 'bg-light-grey' } sm-flex flex-center flex-justify-center ${this.angle ? 'angle' : 'no-angle'} ${this.flipX ? 'flip-x' : 'no-flip' } ${this.className ? this.className : '' }`"
      :style="`background-image: url(${backgroundImage});`"
  >
    <!-- TODO: Allow changing of bg colors -->
    <slot name="bg2" v-if="this.$slots.bg2"></slot>
    <slot name="bg" v-if="this.$slots.bg"></slot>

    <div
        class="hero-section-content sm-flex flex-center flex-justify-center xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-full xl-flex-basis-two-thirds">
      <div class="hero-block">
        <div class="flex flex-column relative">
          <slot name="title" v-if="this.$slots.title" class="sm-space-bottom-half"></slot>

          <slot v-if="this.slotPos !== 'top'"></slot>

          <div
              v-if="typeof this.title === 'string' && !this.$slots.title"
              class="homepage-hero-title">
            <h2 class="title text-center mr-3 ml-3">
              {{ this.title }}
            </h2>
          </div>

          <div
              v-if="typeof compiledDescription === 'string' && compiledDescription.length > 0"
              class="content-block homepage-hero-text g-hero ml-auto mr-auto text-center">
            <div class="text-center" v-html="compiledDescription"></div>
          </div>

          <slot v-if="this.slotPos === 'top'"></slot>

          <div
              v-if="typeof this.link === 'string' && this.link.length > 0"
              class="homepage-hero-action action-link-block sm-hide md-hide lg-hide text-center"
          >
            <a class="action-link space-top-half space-bottom g-pstyle3" v-bind:href="this.link"
               v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
          </div>
          <div
              v-if="typeof this.link === 'string' && this.link.length > 0"
              class="homepage-hero-action action-link-block xs-hide text-center">
            <a class="action-link space-top-half g-pstyle3" v-bind:href="this.link"
               v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroMixin from '~/core/mixins/layouts/Hero'

export default {
  mixins: [
    HeroMixin
  ],
  data() {
    return {
      windowWidth: 1920
    }
  },
  computed: {
    backgroundImage() {
      // Use WebP on mobile for jungle-stream
      if (this.image === '/images/jungle-stream.svg' && this.windowWidth <= 1024) {
        return '/images/jungle-stream.webp'
      }
      return this.image
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.windowWidth = window.innerWidth
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    }
  }
}
</script>
