<template>
  <section class="sm-flex pad-top xs-hide">
    <!-- Position relatively, or absolute positioning of the caption will fail -->
    <div class="relative flex flex-justify-center flex-basis-half">
      <img class="banner-image" v-bind:src="this.image" />
      <div class="figure-caption bg-cherry g-how-does-it-work">
        <p class="g-pstyle4">{{ this.caption }}</p>
        <p class="g-pstyle5">{{ this.subCaption }}</p>
      </div>
    </div>

    <div class="sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="banner-block">
        <div>
          <div class="space-bottom g-how-does-it-work">
            <p class="g-pstyle2">{{ this.title }}</p>
          </div>
          <div class="g-how-does-it-work">
            <p v-html="this.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * This variant of the SectionBlockLayout has two columns,
 * a right column with the heading and text content,
 * and a left column with an image and a caption/sub-caption.
 */
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
