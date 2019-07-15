<template>
  <section :class="`hero-section hero-section-2col ${this.bgColor ? this.bgColor : 'bg-light-grey' } sm-flex ${this.angle ? 'angle' : 'no-angle'} ${this.flipX ? 'flip-x' : 'no-flip' } ${this.className ? this.className : '' }`">
    <!-- Position relatively, or absolute positioning of the caption will fail -->
    <slot name="left" v-if="this.$slots.left"></slot>

    <div v-if="!this.$slots.left" class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center">
      <div class="hero-image-wrapper"><img :class="`banner-image ${this.imageClass}`" v-bind:src="this.image" alt="" /></div>
      <div v-if="typeof this.caption === 'string' && this.caption.length >0" class="figure-caption bg-bc-blue g-hero">
        <p class="g-pstyle4" style="text-align: right;">{{ this.caption }}</p>
        <p class="g-pstyle5" style="text-align: right;">{{ this.subCaption }}</p>
      </div>
    </div>

    <!-- TODO: Allow changing of bg colors -->
    <div class="sm-flex flex-center flex-justify-center xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half">
      <div class="hero-block">
        <div class="flex flex-column">
          <slot name="title" v-if="this.$slots.title" class="sm-space-bottom-half"></slot>

          <div
            v-if="typeof this.title === 'string' && !this.$slots.title"
            class="homepage-hero-title sm-space-bottom-half">
            <h2 class="title text-center mr-3 ml-3">
              {{ this.title }}
            </h2>
          </div>
          <div class="homepage-hero-text g-hero">
            <div v-html="compiledDescription"></div>
          </div>
          <slot></slot>
          <div
            v-if="typeof this.link === 'string' && this.link.length >0"
            class="homepage-hero-action action-link-block sm-hide md-hide lg-hide text-center">
            <a class="action-link xs-space-top space-bottom g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
          </div>
          <div
            v-if="typeof this.link === 'string' && this.link.length >0"
            class="homepage-hero-action action-link-block xs-hide text-center">
            <a class="action-link space-top g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// vue-markdown is broken, babel deps issues...
// import VueMarkdown from 'vue-markdown'
// Use marked instead
import marked from 'marked';
import Home from '~/data/Home.yml';

export default {
  // TODO: Supply models via props??
  props: {
    className: {
      type: String,
      default: '',
    },
    angle: {
      type: Boolean,
      default: false,
    },
    flipX: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: 'bg-light-grey',
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
    },
    compiledDescription() {
      return marked(this.description);
    }
  }
};
</script>
