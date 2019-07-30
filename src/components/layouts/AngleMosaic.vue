<template>
  <div>
    <div style="position: relative; top: -35vh">
      <section id="services" class="col-3-squares no-pad-bottom lg-flex" style="position: absolute; width: 100%; z-index: 11; transform: translateY(-3vh)">
        <!-- Slot 1 -->
        <div class="service-detail-card-top fixed-height-mobile flex flex-center flex-justify-center flex-basis-third">
          <slot name="slot1Bg"></slot>
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
              <slot name="slot1Front"></slot>
            </div>
            <div class="service-detail-card-back">
              <slot name="slot1Back"></slot>
            </div>
          </div>
        </div>
        <!-- END Slot 1 -->

        <!-- DUMMY placeholder -->
        <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third xs-hide sm-hide md-hide">
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front center-testimonial">
            </div>
            <div class="service-detail-card-back">
            </div>
          </div>
        </div>
        <!-- END -->

        <!-- Slot 3 -->
        <div class="service-detail-card-top fixed-height-mobile flex flex-center flex-justify-center flex-basis-third">
          <slot name="slot3Bg"></slot>
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
              <slot name="slot3Front"></slot>
            </div>
            <div class="service-detail-card-back">
              <slot name="slot3Back"></slot>
            </div>
          </div>
        </div>
        <!-- END Slot 3 -->
      </section>

      <section :class="`slot2-container hero-section shift-section-up angle ${this.bgColor ? this.bgColor : 'bg-light-grey' } pad-top no-pad-bottom lg-flex flex-justify-center`">
        <div class="col-3-squares pad-top pad-bottom lg-flex">
          <!-- Slot 2 -->
          <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third xs-hide sm-hide md-hide">
            <slot name="slot2Bg"></slot>
            <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
              <div class="service-detail-card-front center-testimonial">
                <slot name="slot2Front"></slot>
              </div>
              <div class="service-detail-card-back">
                <slot name="slot2Back"></slot>
              </div>
            </div>
          </div>
          <!-- END Slot 2 -->
        </div>
      </section>

      <section :class="`hero-section shift-section-up angle no-pad-bottom lg-flex`">
        <div :class="`col-3-squares ${this.bgColor ? this.bgColor : 'bg-light-grey' } no-pad-bottom lg-flex flex-basis-full`">
          <!-- Slot 4 -->
          <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third flex-grow xs-hide sm-hide md-hide">
            <slot name="slot4Bg"></slot>
            <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
              <div class="service-detail-card-front">
                <slot name="slot4Front"></slot>
              </div>
              <div class="service-detail-card-back">
                <slot name="slot4Back"></slot>
              </div>
            </div>
          </div>
          <!-- END Slot 4 -->

          <!-- Slot 5 -->
          <div class="service-detail-card-top fixed-height-mobile flex flex-center flex-justify-center flex-basis-third flex-grow">
            <slot name="slot5Bg"></slot>
            <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
              <div class="service-detail-card-front">
                <slot name="slot5Front"></slot>
              </div>
              <div class="service-detail-card-back">
              </div>
            </div>
          </div>
          <!-- END Slot 5 -->

          <!-- Slot 6 -->
          <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third flex-grow xs-hide sm-hide md-hide">
            <slot name="slot6Bg"></slot>
            <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
              <div class="service-detail-card-front">
                <slot name="slot6Front"></slot>
              </div>

              <div class="service-detail-card-back">
                <slot name="slot6Back"></slot>
              </div>
            </div>
          </div>
          <!-- END Slot 6 -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import FlipCardsMixin from '~/core/mixins/FlipCardsMixin';

  export default {
    props: {
      bgColor: String,
      default: 'bg-bc-blue'
    },
    mixins: [
      FlipCardsMixin
    ],
    mounted() {
      const flipCardSelector = '.service-detail-card-inner';
      const flipCardsContent = document.querySelectorAll(flipCardSelector);

      this.initFlipCards(
        flipCardsContent,
        '.service-detail-card-front',
        '.service-detail-card-back'
      );

      if (window) {
        window.addEventListener('resize', () => {
          this.$set(this, 'repaint', Math.random());
        });
      }
    },
    beforeDestroy() {
      console.log('remove wrapTitleText resize listener');
      window.removeEventListener('resize', this.rewrapTitleText);
    }
  }
</script>

<style>
  .video-block-bg {
    border: 1px solid rgba(255,255,255,0.5);
  }

  .slot2-container {
    border-top: 1px solid rgba(255,255,255,0.5);
  }
</style>
