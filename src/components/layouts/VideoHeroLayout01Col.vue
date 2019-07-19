<template>
  <section
    ref="heroLayout"
    :class="`homepage-hero hero-section text-shadow hero-section-01-col ${this.bgColor ? this.bgColor : 'bg-light-grey' } sm-flex flex-center flex-justify-center ${this.angle ? 'angle' : 'no-angle'} ${this.flipX ? 'flip-x' : 'no-flip' } ${this.className ? this.className : '' }`"
  >
    <div class="video-banner text-banner sm-flex flex-center flex-justify-center xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-full xl-flex-basis-two-thirds">
      <video class="is-hidden--sm-down" preload="none" playsinline="" autoplay="" muted="" loop="" poster="">
        <source src="/video/bluecollar-main.mp4" type="video/mp4">
        <!--<source src="/video/bluecollar-main.webm" type="video/webm">
        <source src="/video/bluecollar-main.ogv" type="video/ogg">-->
      </video>

      <slot name="video" v-if="this.$slots.video"></slot>

      <slot name="title" v-if="this.$slots.title" class="sm-space-bottom-half"></slot>

      <!-- TODO: Allow changing of bg colors -->
      <div class="text-content sm-flex flex-center flex-justify-center ">
        <!--<div class="hero-image-wrapper"><img :class="`banner-image ${this.imageClass}`" v-bind:src="this.image" alt="" /></div>
        <div v-if="typeof this.caption === 'string' && this.caption.length >0" class="figure-caption bg-bc-blue g-hero">
          <p class="g-pstyle4" style="text-align: right;">{{ this.caption }}</p>
          <p class="g-pstyle5" style="text-align: right;">{{ this.subCaption }}</p>
        </div>-->
        <div class="hero-block">
          <div class="flex flex-column">
            <div
              v-if="typeof this.title === 'string' && !this.$slots.title"
              class="homepage-hero-title sm-space-bottom-half">
              <h1 class="title text-center mr-3 ml-3">
                {{ this.title }}
              </h1>
            </div>

            <div class="content-block homepage-hero-text g-hero ml-auto mr-auto text-center">
              <div class="text-center" v-html="compiledDescription"></div>
            </div>
            <slot></slot>
            <div
              v-if="typeof this.link === 'string' && this.link.length >0"
              class="homepage-hero-action action-link-block sm-hide md-hide lg-hide text-center"
            >
              <a class="action-link transparent xs-space-top space-bottom g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
            </div>
            <div
              v-if="typeof this.link === 'string' && this.link.length >0"
              class="homepage-hero-action action-link-block xs-hide text-center">
              <a class="action-link transparent space-top g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
            </div>
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
  //components: {
  //  VueMarkdown
  //},
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
      type: [String, Object],
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
  mounted() {
    let hero = this.$refs.heroLayout;
    const speedMultiplier = 0.5;

    /*window.addEventListener('resize', function(event) {
    });*/

    //let lastScroll = 0;
    window.addEventListener('scroll', (() => {
      //if (Math.abs(lastScroll - window.scrollY) <= 5) return;
      const propValue = `50% -${(window.scrollY * speedMultiplier)}px`;
      hero.style.backgroundPosition = propValue;
    }).bind(this));
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

<style scoped>
  .hero-section-01-col {
    background-size: cover;
    /* Smooth parallax scrolling */
    background-attachment: fixed;
    background-repeat: no-repeat;
    transition: 0s linear;
    transition-property: background-position;
  }

  .video-banner video {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    object-fit: cover !important;
  }

  .video-banner.overlay:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.25);
  }

  /* TODO: Adjust for mobile and portrait */
  .text-banner {
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .text-banner .text-content {
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  @media screen and (min-width: 84em) {
    .video-banner {
      .hero-block {
        max-width: 60%;
      }
    }
  }
</style>

