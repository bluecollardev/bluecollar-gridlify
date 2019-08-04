<template>
  <!--<text-wrapper :tag="this.tag" :text="this.text">-->
    <span class="text-wrapper">
      <span class="line blink">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
             y="0px" viewBox="0 0 100 125" xml:space="preserve">
          <g>
            <path fill="white"
                  d="M71.129,91.224c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.606,0-6.864-1.473-9.224-3.852   C47.64,93.527,44.383,95,40.776,95h-8.128c-2.077,0-3.776-1.69-3.776-3.776c0-2.086,1.699-3.776,3.776-3.776h8.128   c3.002,0,5.447-2.445,5.447-5.447V18c0-3.002-2.445-5.447-5.447-5.447h-8.128c-2.077,0-3.776-1.69-3.776-3.776   C28.871,6.69,30.571,5,32.648,5h8.128C44.383,5,47.64,6.473,50,8.852C52.36,6.473,55.617,5,59.224,5h8.128   c2.077,0,3.776,1.69,3.776,3.776c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.002,0-5.447,2.445-5.447,5.447v64   c0,3.002,2.445,5.447,5.447,5.447h8.128C69.429,87.447,71.129,89.137,71.129,91.224z"/>
          </g>
        </svg>
      </span>
      <span class="letters">{{ this.text }}</span>
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
      lettersSelector: {
        type: String,
        default: '.title .letters'
      },
      /**
       * CSS selector for individual letters
       */
      letterSelector: {
        type: String,
        default: '.title .letter',
      },
      /**
       * CSS selector for the "line" cursor
       */
      lineSelector: String,
      default: '.title .line'
    },
    mounted() {
      if (typeof window !== 'undefined' && this.$el) {
        const textTarget = this.$el.querySelector(this.textSelector);

        const lineTarget = this.$el.querySelector(this.lineSelector);
        const lettersTarget = this.$el.querySelector(this.lettersSelector);

        // Wrap every letter in a span
        lettersTarget.outerHTML = DOMTextEffectUtils.wrapLetters(lettersTarget);

        const letterTargets = this.$el.querySelectorAll(this.letterSelector);

        DOMTextEffectUtils.wrapLettersOnWordBoundary(lettersTarget, lettersTarget, letterTargets);

        this.$nextTick(() => {
          window.addEventListener('resize', DOMTextEffectUtils.rewrapLettersOnWordBoundary.bind(this, lettersTarget, lettersTarget, letterTargets));
        });

        let timeline = anime.timeline({ loop: true });

        timeline
          .add({
            targets: lineTarget,
            scaleY: [1, 1],
            opacity: [0.5, 1],
            easing: 'easeOutExpo',
            duration: 700
          })
          .add({
            targets: lineTarget,
            scaleY: [1, 1],
            opacity: [1, 0],
            easing: 'easeOutExpo',
            duration: 300
          })
          .add({
            targets: letterTargets,
            scale: [1.5, 1],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 150,
            //offset: '-=775',
            delay: (el, i) => letterTargets.length * (i + 1)
          })
          .add({
            targets: lettersTarget,
            scaleY: [1, 1],
            opacity: [1, 0],
            easing: 'easeOutExpo',
            duration: 700,
            delay: 10000
          });
      }
    }
  }
</script>

<style lang="scss">
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

  .title .line {
    opacity: 0;
    position: absolute;
    left: -1em;
    height: auto;
    width: 1rem;
    transform-origin: 0 50%;
  }

  .title .line svg {
    height: 1.7em;
    -webkit-filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.666));
    filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.666));
  }

  .title .letter {
    display: inline-block;
    line-height: 1em;
  }

  @keyframes blink {
    50% {
      opacity: 0.0;
    }
  }

  @-webkit-keyframes blink {
    50% {
      opacity: 0.0;
    }
  }
</style>
