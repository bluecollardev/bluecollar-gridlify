<template>
  <section class="hero-section bg-hero-grey sm-flex pad-top">
    <div class="sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="hero-block">
        <div class="flex flex-column">
          <div class="homepage-hero-title space-bottom">
            <p class="g-pstyle2">
              {{ this.title }}
            </p>
          </div>
          <div class="homepage-hero-text g-hero xs-hide">
            <p>
              {{ this.description }}
            </p>
          </div>
          <div
            class="homepage-hero-action action-link-block sm-hide md-hide lg-hide"
          >
            <a class="action-link space-bottom g-pstyle3" v-bind:href="this.link"
              >{{ this.linkText }}</a
            >
          </div>
          <div class="homepage-hero-action action-link-block xs-hide">
            <a class="action-link space-top g-pstyle3" v-bind:href="this.link"
              >{{ this.linkText }}</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Position relatively, or absolute positioning of the caption will fail -->
    <div class="relative flex-basis-half">
      <img class="banner-image right" v-bind:src="this.image" />
      <div class="figure-caption figure-caption-right bg-cherry g-hero">
        <p class="g-pstyle4">{{ this.caption }}</p>
        <p class="g-pstyle5">{{ this.subCaption }}</p>
      </div>
    </div>

    <div
      class="sm-flex flex-center flex-justify-center flex-basis-half sm-hide md-hide lg-hide space-top pad-bottom"
    >
      <div class="hero-block">
        <div class="flex flex-column">
          <div class="homepage-hero-text g-hero">
            <p>
              {{ this.description }}
            </p>
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
