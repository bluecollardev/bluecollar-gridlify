<template>
  <!--<text-wrapper :tag="this.tag" :text="this.text">-->
    <span class="text-wrapper slide-up">
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
      loop: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        timeline: null
      }
    },
    methods: {
      setupAnimation() {
        this.$set(this, 'timeline', anime.timeline({ loop: this.loop, autoplay: false }));

        const wordsTarget = this.$el.querySelector(this.wordsSelector);

        let settings = {
          opacityIn: [0, 1],
          opacityOut: [1, 0],
          durationIn: 1000,
          durationOut: 1000,
          delay: 0
        };

        this.timeline
          .add({
            targets: wordsTarget,
            opacity: 0,
            duration: 1500
          })
          .add({
            targets: wordsTarget,
            opacity: settings.opacityIn,
            duration: settings.durationIn
          })
          .add({
            targets: wordsTarget,
            duration: 5000
          });

        if (this.loop) {
          this.timeline
            .add({
              targets: wordsTarget,
              opacity: settings.opacityOut,
              duration: settings.durationOut
            })
        }
      }
    },
    mounted() {
      if (typeof window !== 'undefined') {
        this.setupAnimation();
      }
    }
  }
</script>

<style lang="scss">
  .title {
    font-weight: 900;
    overflow: visible;
  }

  .title .text-wrapper {
    &.slide-up {
      .words {
        display: inline-block;
        opacity: 0;
      }
    }
  }
</style>
