<template>
  <Layout id="home-page">
    <hero-layout01-col
      bgColor="transparent"
      title="We Build User Experiences That Reel in the Results"
      subtitle=""
      description=""
      imageClass="home-page-banner-image"
      image="/images/jungle-stream.svg"
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="jungle-stream hero-first sm-pad-top pad-bottom-2x text-shadow relative"
    >
      <template v-slot:bg>
        <fishing-scene class="xs-hide sm-hide"></fishing-scene>
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
        <div class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center pad-top">
          <div>
            <p class="text-center">At Blue Collar, we use cutting-edge technologies and employ the latest software design methodologies to drive the creation of amazing user experiences.</span></p>
            <p class="text-center xs-hide">Our seasoned team of experience experts and software vetrans at Blue Collar Development specialize in helping you reel in the prize catch of your dreams.</p>
            <p class="text-center xs-hide"><small><small><b>Hint: Click the fishing rod's handle to catch a Red Snapper! Very tasty!</b></small></small></p>
            <div class="text-center">
              <a @click="viewDetail('PORTFOLIO')" class="action-link transparent space-top g-pstyle3">Browse Case Studies</a>
            </div>
          </div>
        </div>
      </template>
    </hero-layout01-col>

    <services
      :content="servicesContent"
      :testimonials="serviceTestimonials"
    />

    <!-- DO NOT DELETE THIS IS THE GUITAR!!! -->
    <hero-layout01-col
      id="rock"
      v-if="servicesHero"
      bgColor="bg-bc-blue"
      title="Ready to Rock?"
      subtitle=""
      description=""
      imageClass="home-page-banner-image"
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="text-shadow sm-pad-top pad-bottom-2x"
    >
      <template v-slot:bg v-if="rockAndRoll">
        <party-lights></party-lights>
      </template>

      <!--<template v-slot:bg2>
        <matrix-bg></matrix-bg>
      </template>-->

      <template v-slot:title>
        <shrink-words-one-by-one-text-effect
          tag="h2"
          text="Are You Ready to Rock?"
          class="title text-center pad-bottom pad-top-2x"
          :loop="true">
        </shrink-words-one-by-one-text-effect>
      </template>

      <template>
        <div class="guitar-content relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
          <div style="width: 100%;" class="flex flex-column flex-center flex-justify-center">
            <p class="text-center">Don't stop believin! Being a rock star's a journey when you're born and raised in South Detroit.</p>
            <p class="text-center">We'll take the midnight train to your dream.</p>
            <br />
            <p class="text-center"><small><small><b>Hint: Click the strings to the beat of "Smoke on the Water".</b></small></small></p>
            <div
              class="guitar-block text-center"
              @mouseover="startRockin.bind(this)()"
              @mouseleave="stopRockin.bind(this)()">
              <interactive-guitar :key="Math.random()"></interactive-guitar>
            </div>
          </div>

        </div>
      </template>
    </hero-layout01-col>
    <!-- END NOT DELETE THIS IS THE GUITAR!!! -->

    <section id="contact" class="hero-section text-shadow bg-black angle no-pad-top">
      <google-map-background></google-map-background>
      <div class="flex flex-center flex-justify-center">
        <div class="flex md-flex-basis-half space-top text-center">
          <contact :formData="formData"></contact>
        </div>
      </div>
    </section>

    <content-detail-modal ref="contentDetail" :title="this.activeDetail === 'PORTFOLIO' ? 'Case Studies' : ''">
      <shoot-to-thrill-scene ref="shootToThrill" v-if="this.activeDetail === 'CONSULTANTS'"></shoot-to-thrill-scene>
      <commando-skull-scene v-if="this.activeDetail === 'CONSULTANTS'"></commando-skull-scene>
      <team-block v-if="this.activeDetail === 'CONSULTANTS'"></team-block>
      <portfolio-vertical-timeline v-if="this.activeDetail === 'PORTFOLIO'"></portfolio-vertical-timeline><portfolio-vertical-timeline v-if="this.activeDetail === 'PORTFOLIO'"></portfolio-vertical-timeline>
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
  import Contact from '~/components/Contact.vue';

  // Import SVG animations
  import Jungle from '~/components/svg/Jungle.vue';
  import Binoculars from '~/components/svg/Binoculars.vue';
  import GoogleMapBackground from '~/components/svg/GoogleMapBackground.vue';
  import MatrixBg from '~/components/svg/MatrixBg';
  import InteractiveGuitar from '~/components/svg/InteractiveGuitar.vue';
  import PartyLights from '~/components/svg/PartyLights.vue';

  // Import scenes
  import ForestScene from '~/components/scenes/ForestScene.vue';
  import FishingScene from '~/components/scenes/FishingScene.vue';
  import ShootToThrillScene from '~/components/scenes/ShootToThrillScene.vue';
  import CommandoSkullScene from '~/components/scenes/CommandoSkullScene.vue';

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

  // Import static data
  import HomeData from '~/data/Home.yml';
  import HeroData from '~/data/Hero.yml';

  export default {
    components: {
      // Inject components
      Services,
      PortfolioVerticalTimeline,
      TeamBlock,
      Contact,
      // Inject generic component layouts
      VideoHeroLayout01Col,
      HeroLayout01Col,
      ContentDetailModal,
      // Inject SVG animations
      Jungle,
      Binoculars,
      GoogleMapBackground,
      MatrixBg,
      PartyLights,
      InteractiveGuitar,
      // Inject scenes
      ForestScene,
      FishingScene,
      ShootToThrillScene,
      CommandoSkullScene,
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
      heroContent() {
        return HeroData;
      },
      servicesHero() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'services-hero';
        });

        if (items instanceof Array && items.length > 0) {
          return items[0];
        }

        return null
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
        repaint: Math.random(),
        textEffects: {
          typewriter: TypewriterTextEffect,
          shrinkWordsOneByOne: ShrinkWordsOneByOneTextEffect,
          rotateWords: RotateWordsTextEffect,
          slideUp: SlideUpTextEffect,
          fadeIn: FadeInTextEffect
        },
        contentEffects: {
          simple: SimpleEffect
        },
        rockAndRoll: false,
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
      startRockin() {
        this.$set(this, 'rockAndRoll', true);
      },
      stopRockin() {
        this.$set(this, 'rockAndRoll', false);
      },
      viewDetail(activeDetail) {
        if (typeof window !== 'undefined') {

          this.activeDetail = activeDetail;
          this.$refs.contentDetail.viewDetail(activeDetail, () => {
            // TODO: Call parent!
            //this.initSoundtrack();
            if (this.$refs.shootToThrill) {
              this.$refs.shootToThrill.fireGuns();
            }
          });
        }
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .guitar-content {
    z-index: 11;
  }

  /* Temporarily disable labels */
  .ampstart-input label {
    display: none;
  }

  #rock {
    z-index: 1;
  }

  @media screen and (min-width: 52em) {
    #rock {
      height: 115vh;
      position: relative;
      top: -5vh;
    }
  }

  @media screen and (min-width: 64em) {
    #rock {
      top: -20vh;
    }
  }

  #contact {
    z-index: 0;
    height: auto;
    top: 0vh;
    position: relative;
  }

  /* iOS background-attachment doesn't play well */
  .hero-section-01-col {
    background-attachment: initial;
  }

  @media screen and (min-width: 40em) {
    #contact {
      z-index: 0;
      top: -30vh;
      height: 130vh;
      margin-bottom: -30vh
    }
  }

  /* Override colors */
  #services {
    //background-color: #bdcad9;
    //background-image: linear-gradient(315deg, #bdcad9 0%, #e1dada 74%);
    //background-color: #111822;
    //background-image: linear-gradient(15deg, #111822 0%, #33587a 90%);
    background-color: #d2e6d6;
    background-image: linear-gradient(175deg, #cce3ea 0%, #d2e6d6 74%);
  }

  /* Override colors */
  @media screen and (max-width: 64em) {
    #services {
      background-color: #111822;
      background-image: linear-gradient(15deg, #111822 0%, #33587a 90%);
    }

    /* iOS background-attachment doesn't play well */
    .hero-section-01-col {
      &.jungle-stream {
        background-position: 70% 0%; /* Shift background to the right */
      }
    }
  }

  @media screen and (max-width: 64em) {
    .jungle-stream {
      z-index: 4;
    }

    #services {
      z-index: 3;
    }

    #rock {
      z-index: 2;
    }

    #contact {
      z-index: 1;
    }
  }

  @media screen and (max-width: 64em) and (orientation: landscape) {
    .jungle-stream {
      padding-bottom: 50vh;
    }

    #services {
      top: -10vh;
      padding-top: 20vh; /* Offset */
      padding-bottom: 20vh;
      position: relative;
    }

    #rock {
    }

    #contact {
      top: 0;
    }
  }

  @media screen and (max-width: 64em) and (orientation: portrait) {
    .jungle-stream {
    }

    section.hero-section {
      border-bottom: none !important;
    }


    .bottom-row .service-detail-card-top {
      border-bottom: none !important;
    }

    #services {
      top: -10vh;
      padding-top: 10vh; /* Offset */
      padding-bottom: 10vh;
      position: relative;
      border-bottom: none !important;
    }

    #rock {
      padding-bottom: 30vh;
    }

    #contact {
      top: 0;
    }
  }


  .video-block-bg {
    //background-color: #33587a;
    //background-image: linear-gradient(135deg, #525E61 0%, #33587a 100%);
    background-color: #7FB5D5;
  }

  .top-row-under,
  .bottom-row .col-3-squares > .service-detail-card-top:nth-child(2n + 1) {
    p,
    a,
    * {
      color: #33587a !important; /* Midnight blue */
      text-shadow: none;
    }
  }

  @media screen and (min-width: 64em) {
    .hero-first {
      &.hero-section-01-col .hero-block {
        position: relative;
        top: -3rem;
        /* top: 6rem; */
        max-width: 40%;

        .text-shadow * {
          text-shadow: 1px 0 3px rgba(0, 0, 0, 0.975) !important;
        }
      }
    }
  }

  @media screen and (min-width: 64em) {
    .jungle-stream {
      background-position: 60% 0;
    }
  }

  @media screen and (min-width: 84em) {
    .jungle-stream {
      background-position: -420px 0;
      background-attachment: fixed;
    }
  }

  .panel-header {
    h2 {
      font-size: 27px;
    }
  }

  @media screen and (max-width: 40em) {
    #contact .ampstart-input {
      > * {
        margin: 0 auto;
        width: 100%;
      }
    }
  }
</style>
