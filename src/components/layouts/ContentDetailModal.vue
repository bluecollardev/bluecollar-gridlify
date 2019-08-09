<template>
  <div ref="contentDetail" class="detailed-content-panel bg-midnight-blue">
    <div class="panel-header flex flex-center pad-left-half pad-right-half" style="height: 5rem; position: absolute; right: 0; z-index: 9999; width: 100%">
      <div class="flex-grow">
        <h2 v-if="this.title" class="text-center no-space-top no-space-bottom">{{ this.title }}</h2>
      </div>
      <b @click="hideDetail()" style="font-size: 1.5rem; cursor: pointer">X</b>
    </div>
    <div class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import anime from 'animejs';

  export default {
    props: {
      title: {
        type: String,
      default: null
      }
    },
    methods: {
      viewDetail(activeDetail, callback) {
        const detail = this.$refs.contentDetail;
        const detailEl = detail;

        if (typeof window !== 'undefined' && detailEl) {
          detailEl.style.zIndex = 5000;
          detailEl.style.opacity = 1;

          document.body.style.overflowY = 'hidden';

          anime({
            targets: detailEl,
            top: [document.documentElement.clientHeight + 'px', '54px'], // Match header height
            easing: 'easeOutExpo',
            duration: 1000,
            complete: () => {
              if (typeof callback === 'function') callback(detailEl)
            }
          });
        }
      },
      hideDetail(callback) {
        const detail = this.$refs.contentDetail;
        const detailEl = detail;

        if (detailEl) {
          document.body.style.overflowY = 'scroll';

          anime({
            targets: detailEl,
            top: ['54px', '100%'],
            duration: 1000,
            complete: () => {
              detailEl.style.opacity = 0;
              detailEl.style.zIndex = 0;
              if (typeof callback === 'function') callback(detailEl);
            }
          });
        }
      },
      bindDetailCloseToEsc(e) {
        e = e || window.event;

        let isEscape = false;
        if ('key' in e) {
          isEscape = (e.key === 'Escape' || e.key === 'Esc');
        } else {
          isEscape = (e.keyCode === 27);
        }

        if (isEscape) this.hideDetail();
      }
    },
    mounted() {
      if (typeof window !== 'undefined') {
        window.addEventListener('keydown', this.bindDetailCloseToEsc);
      }
    },
    beforeDestroy() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', this.bindDetailCloseToEsc);
      }
    }
  }
</script>

<style lang="scss">
  .detailed-content-panel {
    opacity: 1;
    width: 100vw;
    height: calc(100vh - 54px);
    position: fixed;
    /*top: 54px;*/ /* Match header */
    top: 100%;
    left: 0;
    z-index: 5000;
    overflow-y: auto;
  }

  @media screen and (min-width: 40em) {
    .detailed-content-panel {
      opacity: 1;
      top: 100%;
      left: 0;
    }
  }
</style>
