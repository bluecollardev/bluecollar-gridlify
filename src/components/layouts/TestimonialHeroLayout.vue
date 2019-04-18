<template>
  <section :class="`homepage-hero hero-section hero-testimonial ${this.bgColor ? this.bgColor : 'bg-light-grey' } sm-flex ${this.angle ? 'angle' : 'no-angle'} ${this.flipX ? 'flip-x' : 'no-flip' } ${this.className ? this.className : '' }`">
    <!-- Position relatively, or absolute positioning of the caption will fail -->
    <div class="relative flex flex-wrap xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center">
      <div class="hero-image-wrapper"><img :class="`banner-image ${this.imageClass}`" v-bind:src="this.image" alt="" /></div>
      <div v-if="typeof this.caption === 'string' && this.caption.length >0" class="figure-caption bg-bc-blue g-hero">
        <p class="g-pstyle4" style="text-align: right;">{{ this.caption }}</p>
        <p class="g-pstyle5" style="text-align: right;">{{ this.subCaption }}</p>
      </div>
      <!-- Testimonial -->
      <div class="banner-block testimonial flex">
        <div class="space-all">
          <div class="g-services">
            <p class="g-pstyle8">"Blue Collar designed and implemented an amazing website for our business. We've seen an immediate increase in sales and flow through business."</p>
          </div>
          <div class="g-services flex flex-center space-top">
            <img class="banner-image badge" src="/images/greg-and-steph-jimmy-poblanos.jpg" alt="" />
            <div class="space-left">
              <p><strong>Greg L.</strong></p>
              <p><small>Jimmy Poblanos</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO: Allow changing of bg colors -->
    <div class="sm-flex flex-center flex-justify-center xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-two-thirds lg-flex-basis-half xl-flex-basis-half">
      <div class="hero-block">
        <div class="flex flex-column">
          <div class="homepage-hero-title sm-space-bottom">
            <p class="g-pstyle2 text-center">
              {{ this.title }}
            </p>
          </div>
          <div class="homepage-hero-text g-hero">
            <div v-html="compiledDescription"></div>
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

<style lang="scss">
  img.badge {
    width: 100px;
    height: 100px;
    -o-object-fit: cover;
    max-width: none;
    object-fit: cover;
  }

  .badge {
      border-radius: 50%;
  }

  @media screen and (min-width: 1400px) {
    .hero-testimonial .hero-image-wrapper img {
      top: 10vh !important;
    }

    .hero-testimonial .testimonial {
      position: relative;
      top: -7vh;
    }
  }
</style>
