<template>
  <Layout>
    <hero-layout01-col
      bgColor="bg-evening-blue"
      title="Lost in the Software Jungle?"
      subtitle=""
      description=""
      imageClass="home-page-banner-image"
      image=""
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="hero-first sm-pad-top pad-bottom-2x text-shadow"
    >
      <template v-slot:bg>
        <div class="jungle-bg-container">
          <jungle class="jungle-bg"></jungle>
          <div style="position: fixed; bottom: 15vh; width: 100%;">
            <img @click="viewDetail('CONSULTANTS')" style="max-width: 150px; left: 40vh; transform: rotate(-15deg) translateX(30px); pointer: cursor" src="/images/walkie-talkie.svg" />
          </div>
        </div>
      </template>

      <template v-slot:title>
        <typewriter-text-effect
          tag="h2"
          text="Lost in the Software Jungle?"
          class="title text-center pad-bottom"
          :loop="true">
        </typewriter-text-effect>
      </template>

      <template>
        <div class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
          <div>
            <p class="text-center">At Blue Collar, we build software that's ready for tomorrow's challenges. By using cutting-edge technologies and employing the latest software design methodologies, we can guarantee that you'll be well prepared and equipped for tomorrow's challenges.</p>
            <p class="text-center">Let our seasoned vets guide you on the path to your dreams.</p>
            <div class="text-center" style="">
              <a @click="viewDetail('CONSULTANTS')" class="action-link transparent space-top g-pstyle3">Meet Our Consultants</a>
            </div>
          </div>
        </div>
      </template>
    </hero-layout01-col>

    <services
      :content="servicesContent"
      :testimonials="serviceTestimonials"
    />

    <hero-layout01-col
      bgColor="transparent"
      title="We Deliver Results"
      subtitle=""
      description=""
      imageClass="home-page-banner-image"
      image="/images/jungle-stream.svg"
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="sm-pad-top pad-bottom-2x text-shadow relative"
      style="background-position: center center;"
    >
      <template v-slot:title>
        <!--<shrink-words-one-by-one-text-effect
          v-if="!isServer"
          tag="h2"
          text="We Deliver Results"
          class="title text-center pad-bottom"
          :loop="true">
        </shrink-words-one-by-one-text-effect>-->
      </template>

      <template>
        <div class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
          <div>
            <p class="text-center">At Blue Collar, we <strong style="text-decoration: underline; font-weight: 900">never</strong> leave our customers behind.</p>
            <div class="text-center" style="">
              <a @click="viewDetail('PORTFOLIO')" class="action-link transparent space-top g-pstyle3">Browse Case Studies</a>
            </div>
          </div>
        </div>
      </template>
    </hero-layout01-col>

    <content-detail-modal ref="contentDetail">
      <team-block v-if="this.activeDetail === 'CONSULTANTS'"></team-block>
      <portfolio-vertical-timeline v-if="this.activeDetail === 'PORTFOLIO'"></portfolio-vertical-timeline>
    </content-detail-modal>
  </Layout>
</template>

<script>
  import Vue from 'vue';

  // Import generic component layouts
  import VideoHeroLayout01Col from '~/components/layouts/VideoHeroLayout01Col.vue';
  import HeroLayout01Col from '~/components/layouts/HeroLayout01Col.vue';
  import ContentDetailModal from '~/components/layouts/ContentDetailModal.vue';

  // Import page components
  import Services from '~/components/home/Services.vue';
  import PortfolioVerticalTimeline from '~/components/portfolio/PortfolioVerticalTimeline.vue';
  import TeamBlock from '~/components/TeamBlock.vue';

  // Import SVG animations
  import Jungle from '~/components/svg/Jungle.vue';
  import Binoculars from '~/components/svg/Binoculars.vue';
  import GoogleMapBackground from '~/components/svg/GoogleMapBackground.vue';
  import MatrixBg from '~/components/svg/MatrixBg';

  // Import animated text effects
  import TypewriterTextEffect from '~/core/components/text/Typewriter.vue';
  import ShrinkWordsOneByOneTextEffect from '~/core/components/text/ShrinkWordsOneByOne.vue';
  import RotateWordsTextEffect from '~/core/components/text/RotateWords.vue';
  import SlideUpTextEffect from '~/core/components/text/SlideUp.vue';
  import FadeInTextEffect from '~/core/components/text/FadeIn.vue';

  // Import animated content effects
  import SimpleEffect from '~/core/components/animate/Simple.vue'

  // Import mixins
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';
  import HomeMixin from '~/core/mixins/HomeMixin';

  export default {
    components: {
      // Inject components
      Services,
      PortfolioVerticalTimeline,
      TeamBlock,
      // Inject generic component layouts
      VideoHeroLayout01Col,
      HeroLayout01Col,
      ContentDetailModal,
      // Inject SVG animations
      Jungle,
      Binoculars,
      GoogleMapBackground,
      MatrixBg,
      // Inject animated text effects
      TypewriterTextEffect,
      ShrinkWordsOneByOneTextEffect,
      RotateWordsTextEffect,
      SlideUpTextEffect,
      FadeInTextEffect,
      // Inject animated content effects
      SimpleEffect
    },
    mixins: [
      HomeMixin,
      TestimonialMixin,
    ],
    computed: {
      isServer() {
        //console.log('vue');
        //console.log(Vue);
        console.log('is server?');
        console.log(Vue.prototype.$isServer);
        return (typeof Vue.prototype.$isServer === 'boolean') ? Vue.prototype.$isServer : false
      },
      servicesContent() {
        const content = [
          this.getHomePageServiceByIndex(0),
          this.getHomePageServiceByIndex(1),
          this.getHomePageServiceByIndex(2),
        ].filter(n => n !== null);

        return content;
      },
      serviceTestimonials() {
        const testimonials = [
          this.getTestimonialByIndex(0),
          this.getTestimonialByIndex(1),
          this.getTestimonialByIndex(2)
        ].filter(n => n !== null);

        return testimonials;
      }
    },
    data() {
      let state = {
        activeDetail: null,
        formData: {},
        textEffects: {
          typewriter: TypewriterTextEffect,
          shrinkWordsOneByOne: ShrinkWordsOneByOneTextEffect,
          rotateWords: RotateWordsTextEffect,
          slideUp: SlideUpTextEffect,
          fadeIn: FadeInTextEffect
        },
        contentEffects: {
          simple: SimpleEffect
        }
      };

      return state;
    },
    methods: {
      /**
       * @deprecated
       * Deprecated as far as this site is concerned right now... this could also be moved to a mixin
       */
      /*getProcessStep(idx) {
        let items = this.homeContent.processSteps;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },*/

      viewDetail(activeDetail) {
        if (typeof window !== 'undefined') {

          this.activeDetail = activeDetail;
          this.$refs.contentDetail.viewDetail(activeDetail, () => {
            // TODO: Call parent!
            //this.initSoundtrack();
          });
        }
      }
    }
  }
</script>

<style lang="scss">
  .jungle-bg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;

    .jungle-bg {
      position: relative;
      filter: brightness(0.45) saturate(0.888);
      bottom: -70vh;
    }
  }


  @media screen and (min-width: 40em) {
    .jungle-bg-container {
      .jungle-bg {
        bottom: -65vh;
      }
    }
  }

  @media screen and (min-width: 52em) {
    .jungle-bg-container {
      .jungle-bg {
        bottom: -60vh;
      }
    }
  }

  @media screen and (min-width: 64em) {
    .jungle-bg-container {
      .jungle-bg {
        bottom: -55vh;
      }
    }
  }

  @media screen and (min-width: 84em) {
    .jungle-bg-container {
      .jungle-bg {
        bottom: -40vh;
      }
    }
  }

  @media screen and (min-width: 102em) {
    .jungle-bg-container {
      .jungle-bg {
        bottom: -27vh;
      }
    }
  }
</style>
