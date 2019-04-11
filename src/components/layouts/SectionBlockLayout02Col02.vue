<template>
  <section class="lg-flex pad-top">
    <div class="sm-flex flex-center flex-justify-center">
      <div class="banner-block">
        <div>
          <div class="space-bottom g-help-with-digital-marketing">
            <p class="g-pstyle2">{{ this.title }}</p>
          </div>
          <div class="g-help-with-digital-marketing">
            <p v-html="this.description"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="sm-flex flex-column flex-center">
      <div class="bg-salmon content-block">
        <img class="bg-white banner-image" v-bind:src="this.image" alt="" />
        <div class="pad-all">
          <div class="space-bottom-half g-help-with-digital-marketing">
            <p class="g-pstyle6">{{ this.testimonial }}</p>
          </div>
          <div class="g-help-with-digital-marketing">
            <p class="g-pstyle7">{{ this.caption }}</p>
            <p class="g-pstyle7">{{ this.subCaption }}</p>
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
    testimonial: {
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
