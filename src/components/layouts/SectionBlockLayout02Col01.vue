<template>
  <section :class="`sm-flex pad-top xs-hide ${this.bgColor ? this.bgColor : 'bg-light-grey' } ${this.flipX ? 'flip-x' : 'no-flip' }`">
    <!-- Position relatively, or absolute positioning of the caption will fail -->
    <div :class="`relative flex flex-justify-center flex-basis-half`">
      <img class="lozad banner-image" v-bind:src="this.image" alt="" />
      <div v-if="(typeof this.caption === 'string' && this.caption.length > 0) || (typeof this.subCaption === 'string' && this.subCaption.length > 0)"  class="figure-caption bg-bc-blue g-how-does-it-work">
        <p v-if="(typeof this.caption === 'string' && this.caption.length > 0)" class="g-pstyle4">{{ this.caption }}</p>
        <p v-if="(typeof this.subCaption === 'string' && this.subCaption.length > 0)" class="g-pstyle5">{{ this.subCaption }}</p>
      </div>
    </div>

    <div class="sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="banner-block">
        <div>
          <div class="space-bottom g-how-does-it-work">
            <p class="g-pstyle2 text-center">{{ this.title }}</p>
          </div>
          <div v-if="!(this.description instanceof Array)" class="g-how-does-it-work">
            <div class="text-center" v-html="compiledDescription"></div>
          </div>
          <div v-else-if="this.description instanceof Array" class="g-how-does-it-work">
            <p v-for="description in this.description" v-html="description"></p>
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
/**
 * This variant of the SectionBlockLayout has two columns,
 * a right column with the heading and text content,
 * and a left column with an image and a caption/sub-caption.
 */
import Home from '~/data/Home.yml';

export default {
  // TODO: Supply models via props??
  props: {
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

<style>
  .flip-x {
    flex-direction: row-reverse;
  }
</style>
