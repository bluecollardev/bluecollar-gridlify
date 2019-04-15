<template>
  <section
    :class="`homepage-hero hero-section-01-col ${this.bgColor ? this.bgColor : 'bg-light-grey' } sm-flex flex-center flex-justify-center ${this.angle ? 'angle' : 'no-angle'} ${this.flipX ? 'flip-x' : 'no-flip' } ${this.className ? this.className : '' }`"
    :style="`background: url(${this.image}) no-repeat; background-size: cover;`"
  >
    <!-- TODO: Allow changing of bg colors -->
    <div class="sm-flex flex-center flex-justify-center flex-basis-half">
      <!--<div class="hero-image-wrapper"><img :class="`banner-image ${this.imageClass}`" v-bind:src="this.image" alt="" /></div>
      <div v-if="typeof this.caption === 'string' && this.caption.length >0" class="figure-caption bg-bc-blue g-hero">
        <p class="g-pstyle4" style="text-align: right;">{{ this.caption }}</p>
        <p class="g-pstyle5" style="text-align: right;">{{ this.subCaption }}</p>
      </div>-->
      <div class="hero-block">
        <div class="flex flex-column">
          <div class="homepage-hero-title sm-space-bottom-half">
            <p class="g-pstyle2 text-center">
              {{ this.title }}
            </p>
          </div>
          <div class="homepage-hero-text g-hero">
            <p class=" text-center" v-html="this.description"></p>
          </div>
          <slot></slot>
          <div
            v-if="typeof this.link === 'string' && this.link.length >0"
            class="homepage-hero-action action-link-block sm-hide md-hide lg-hide text-center"
          >
            <a class="action-link xs-space-top space-bottom g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText"
              >{{ this.linkText }}</a
            >
          </div>
          <div
            v-if="typeof this.link === 'string' && this.link.length >0"
            class="homepage-hero-action action-link-block xs-hide text-center">
            <a class="action-link space-top g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText"
              >{{ this.linkText }}</a
            >
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
    }
  }
};
</script>

