<template>
  <!--<text-wrapper :tag="this.tag" :text="this.text">-->
    <span class="text-wrapper rotate-words">
      <span class="words">{{ this.text }}</span>
    </span>
  <!--</text-wrapper>-->
</template>

<script>
  import anime from 'animejs';

  import * as DOMTextEffectUtils from '~/core/utils/DOMTextEffectUtils';
  //import TextWrapper from './TextWrapper.vue'

  export default {
    components: {
      //TextWrapper,
    },
    props: {
      tag: String,
      text: String,
      /**
       * CSS selector for the text
       */
      textSelector: {
        type: String,
        default: '.title'
      },
      /**
       * CSS selector for the letters container
       */
      wordsSelector: {
        type: String,
        default: '.title .words'
      },
      /**
       * CSS selector for individual letters
       */
      wordSelector: {
        type: String,
        default: '.title .word',
      },
      loop: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      if (typeof window !== 'undefined') {
        const wordsTarget = this.$el.querySelector(this.wordsSelector);

        // Wrap every letter in a span
        wordsTarget.outerHTML = DOMTextEffectUtils.wrapWords(wordsTarget);

        const wordTargets = this.$el.querySelectorAll(this.wordSelector);

        let timeline = anime.timeline({loop: this.loop});

        let settings = {
          opacityIn: [0, 1],
          scaleIn: [0.2, 1],
          scaleOut: 3,
          durationIn: 800,
          durationOut: 600,
          delay: 500
        };

        wordTargets.forEach((wordTarget) => {
          timeline
            .add({
              targets: wordTarget,
              opacity: settings.opacityIn,
              scale: settings.scaleIn,
              duration: settings.durationIn
            })
            .add({
              targets: wordTarget,
              opacity: 0,
              scale: settings.scaleOut,
              duration: settings.durationOut,
              easing: 'easeInExpo',
              delay: settings.delay
            })
        });
      }
    }
  }
</script>

<style lang="scss">
  .title {
    font-weight: 900;
  }

  .title .text-wrapper {
    &.rotate-words {
      position: relative;
      display: inline-block;
      padding-top: 0.1em;
      padding-right: 0.05em;
      padding-bottom: 0.15em;
      height: 33px; /* Match line height */

      .word {
        position: absolute;
        margin: auto;
        opacity: 0;
        /* TODO: We have to fix this positioning! */
        left: -40px;
      }
    }
  }
</style>
