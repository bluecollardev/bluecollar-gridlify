<template>
  <section
    ref="heroLayout"
    :class="`homepage-hero hero-section hero-section-01-col ${this.bgColor ? this.bgColor : 'bg-light-grey' } sm-flex flex-center flex-justify-center ${this.angle ? 'angle' : 'no-angle'} ${this.flipX ? 'flip-x' : 'no-flip' } ${this.className ? this.className : '' }`"
    :style="`background-image: url(${this.image});`"
  >
    <!-- TODO: Allow changing of bg colors -->
    <slot name="bg2" v-if="this.$slots.bg2"></slot>
    <slot name="bg" v-if="this.$slots.bg"></slot>

    <div class="hero-section-content sm-flex flex-center flex-justify-center xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-full xl-flex-basis-two-thirds">
      <!--<div class="hero-image-wrapper"><img :class="`banner-image ${this.imageClass}`" v-bind:src="this.image" alt="" /></div>
      <div v-if="typeof this.caption === 'string' && this.caption.length >0" class="figure-caption bg-bc-blue g-hero">
        <p class="g-pstyle4" style="text-align: right;">{{ this.caption }}</p>
        <p class="g-pstyle5" style="text-align: right;">{{ this.subCaption }}</p>
      </div>-->
      <div class="hero-block">
        <div class="flex flex-column">
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
            <a class="action-link xs-space-top space-bottom g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
          </div>
          <div
            v-if="typeof this.link === 'string' && this.link.length > 0"
            class="homepage-hero-action action-link-block xs-hide text-center">
            <a class="action-link space-top g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HeroMixin from '~/core/mixins/layouts/Hero';

  export default {
    mixins: [
      HeroMixin
    ],
    mounted() {
      /*let hero = this.$refs.heroLayout;
      const speedMultiplier = 0.5;

      window.addEventListener('resize', function(event) {
      });

      let lastScroll = 0;
      window.addEventListener('scroll', (() => {
        //if (Math.abs(lastScroll - window.scrollY) <= 5) return;
        const propValue = `50% -${(window.scrollY * speedMultiplier)}px`;
        hero.style.backgroundPosition = propValue;
      }).bind(this));*/
    }
  };
</script>
