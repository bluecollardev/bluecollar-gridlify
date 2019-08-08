<template>
  <Layout>
    <Header/>

    <audio-controls
      style="position: fixed; bottom: 60px; right: 140px; z-index: 4000; opacity: 0.15"
      :onPreviousClicked="this.onPreviousClicked.bind(this, this.soundtrack)"
      :onNextClicked="this.onNextClicked.bind(this, this.soundtrack)"
      :onPlayPauseClicked="this.onPlayPauseClicked.bind(this, this.soundtrack)"
      :onShuffleClicked="this.onShuffleClicked.bind(this, this.soundtrack)"
      :onRandomClicked="this.onRandomClicked.bind(this, this.soundtrack)"
      :onVolumeChanged="this.onVolumeChanged.bind(this, this.soundtrack)"
    />

    <hero-layout01-col
      bgColor="transparent"
      title="Lost in the Software Jungle?"
      subtitle=""
      description=""
      imageClass="home-page-banner-image"
      image=""
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="hero-first sm-pad-top pad-bottom-2x text-shadow"
      style="top: -20vh"
    >
      <template v-slot:bg>
        <div style="position: absolute; width: 100%; height: 100%;">
          <jungle style="position: relative; bottom: -67vh; filter: brightness(0.45) saturate(0.888);"></jungle>
          <div style="position: fixed; bottom: 15vh; width: 100%;">
            <!--<binoculars style="transform: rotate(7deg);"></binoculars>-->
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
      style="height: 110vh; transform: translateY(-50vh); background-position: center 52vh;"
    >
      <template v-slot:bg>
      </template>

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

    <Footer/>

    <content-detail-modal ref="contentDetail">
      <team-block v-if="this.activeDetail === 'CONSULTANTS'"></team-block>
      <portfolio-vertical-timeline v-if="this.activeDetail === 'PORTFOLIO'"></portfolio-vertical-timeline>
    </content-detail-modal>
  </Layout>
</template>

<script>
  import Vue from 'vue';

  // Import components
  import Header from '~/components/Header.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';
  //import Portfolio from '~/components/portfolio/Portfolio.vue';
  import PortfolioVerticalTimeline from '~/components/portfolio/PortfolioVerticalTimeline.vue';
  import TeamBlock from '~/components/TeamBlock.vue';

  // Import generic component layouts
  import VideoHeroLayout01Col from '~/components/layouts/VideoHeroLayout01Col.vue';
  import HeroLayout01Col from '~/components/layouts/HeroLayout01Col.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';
  import AngleMosaic from '~/components/layouts/AngleMosaic.vue';
  import ContentDetailModal from '~/components/layouts/ContentDetailModal.vue';

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

  // Import audio controls
  // Import audio controls
  import AudioControls from '~/core/components/audio/AudioControls.vue';
  import AudioControlsMixin from '~/core/components/audio/AudioControlsMixin';

  // Import mixins
  import FlipCardsMixin from '~/core/mixins/FlipCardsMixin';
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';
  import HomeMixin from '~/core/mixins/HomeMixin';

  export default {
    components: {
      ContentDetailModal,
      // Inject components
      Header,
      Blog,
      Contact,
      Footer,
      //Portfolio,
      PortfolioVerticalTimeline,
      TeamBlock,
      // Inject mixins
      AudioControls,
      // Inject generic component layouts
      AngleMosaic,
      VideoHeroLayout01Col,
      HeroLayout01Col,
      ContentBlockLayout,
      TestimonialBlockLayout,
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
      AudioControlsMixin,
      HomeMixin,
      TestimonialMixin,
      FlipCardsMixin
    ],
    computed: {
      isServer: () => {
        //console.log('vue');
        //console.log(Vue);
        console.log('is server?');
        console.log(Vue.prototype.$isServer);
        return (typeof Vue.prototype.$isServer === 'boolean') ? Vue.prototype.$isServer : false
      }
    },
    data() {
      return {
        activeDetail: null,
        soundtrack: null,
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
      }
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
      initSoundtrack() {
        if (!(this.soundtrack instanceof Audio)) {
          this.soundtrack = new Audio();
          this.soundtrack.volume = 0.5;
          this.soundtrack.src = '/audio/soundtrack_to_war.mp3';
          this.soundtrack.loop = true;

          if (this.isAutoplayActive()) this.soundtrack.play();
        }
      },
      killSoundtrack() {
        if (this.soundtrack instanceof Audio) {
          this.soundtrack.pause();
          this.soundtrack = null;
        }
      },
      viewDetail(activeDetail) {
        if (typeof window !== 'undefined') {

          this.activeDetail = activeDetail;
          this.$refs.contentDetail.viewDetail(activeDetail, () => {
            this.initSoundtrack();
          });
        }
      }
    },
    beforeDestroy() {
      if (typeof window !== 'undefined') {
        this.killSoundtrack();
      }
    }
  }
</script>
