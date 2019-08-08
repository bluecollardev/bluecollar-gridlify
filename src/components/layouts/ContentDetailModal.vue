<template>
  <div ref="contentDetail" class="detailed-content-panel bg-bc-blue">
    <div class="panel-header flex flex-center pad-left-half pad-right-half" style="height: 5rem; position: absolute; right: 0; z-index: 9999">
      <div class="flex-grow">
        <!--<h2 class="text-center no-space-top no-space-bottom">Case Studies</h2>-->
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
