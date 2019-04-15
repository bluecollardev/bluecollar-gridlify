<template>
  <section class="homepage-hero hero-section bg-light-grey sm-flex xs-pad-top-2x">
    <!-- Position relatively, or absolute positioning of the caption will fail -->
    <div class="relative flex flex-basis-half flex-justify-center">
      <div class="hero-image-wrapper"><img :class="`banner-image ${this.imageClass}`" v-bind:src="this.image" alt="" /></div>
      <div v-if="typeof this.caption === 'string' && this.caption.length >0" class="figure-caption bg-bc-blue g-hero">
        <p class="g-pstyle4" style="text-align: right;">{{ this.caption }}</p>
        <p class="g-pstyle5" style="text-align: right;">{{ this.subCaption }}</p>
      </div>
    </div>

    <!-- TODO: Allow changing of bg colors -->
    <div class="sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="hero-block">
        <div class="flex flex-column">
          <div class="homepage-hero-title space-bottom">
            <p class="g-pstyle2 text-center">
              {{ this.title }}
            </p>
          </div>
          <div class="homepage-hero-text g-hero xs-hide">
            <p v-html="this.description"></p>
          </div>
          <div
            class="homepage-hero-action action-link-block sm-hide md-hide lg-hide text-center"
          >
            <a class="action-link space-bottom g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText"
              >{{ this.linkText }}</a
            >
          </div>
          <div class="homepage-hero-action action-link-block xs-hide text-center">
            <a class="action-link space-top g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText"
              >{{ this.linkText }}</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile display -->
    <div
      class="sm-flex flex-center flex-justify-center flex-basis-half sm-hide md-hide lg-hide space-top pad-bottom"
    >
      <div class="hero-block">
        <div class="flex flex-column">
          <div class="homepage-hero-text g-hero xs-hide">
            <p v-html="this.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home from '~/data/Home.yml';

export default {
  // TODO: Supply models via props??
  props: {
    flipLayout: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    imageClass: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
    subCaption: {
      type: String,
      default: '',
    },
  },
  computed: {
    Home() {
      return Home;
    }
  }
};
</script>

<style>
  .text-justify {
    text-align: justify;
  }
</style>
