<template>
  <!--<text-wrapper :tag="this.tag" :text="this.text">-->
  <span ref="textWrapper" class="text-wrapper">
      <span class="words">{{ this.text }}</span>
    </span>
  <!--</text-wrapper>-->
</template>

<script>
import anime from 'animejs'

import * as DOMTextEffectUtils from '~/core/utils/DOMTextEffectUtils'
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
    if (typeof window !== 'undefined' && this.$refs.textWrapper) {
      const wordsTarget = this.$refs.textWrapper.querySelector(this.wordsSelector)

      // Wrap every letter in a span
      wordsTarget.outerHTML = DOMTextEffectUtils.wrapWords(wordsTarget)

      const wordTargets = this.$refs.textWrapper.querySelectorAll(this.wordSelector)

      let timeline = anime.timeline({loop: this.loop})

      timeline
          // Start with text fully visible - wait 2 seconds
          .add({
            targets: wordsTarget,
            opacity: 1,
            duration: 2000
          })
          // Fade out the complete text
          .add({
            targets: wordsTarget,
            opacity: 0,
            duration: 500
          })
          // Animate each word in one by one
          .add({
            targets: wordTargets,
            scale: [14, 1],
            opacity: [0, 1],
            easing: 'easeOutCirc',
            duration: 500,
            delay: (el, i) => 500 * i
          })
          // Wait 5 seconds then fade out (for loop)
          .add({
            targets: wordsTarget,
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 5000
          })
    }
  }
}
</script>

<style lang="scss" scoped>
/* TODO: This is ripped clean it up */
.title {
  font-weight: 900;
}

.title .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}
</style>
