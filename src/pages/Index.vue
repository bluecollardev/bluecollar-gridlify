<template>
  <Layout>
    <Header/>

    <helicopter :onGetToTheChopper="fireGuns.bind(this)"></helicopter>

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
      bgColor="bg-midnight-blue"
      title="Elite Software Commandos"
      subtitle=""
      description=""
      imageClass="home-page-banner-image"
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="pad-top-2x pad-bottom-2x text-shadow"
      style="height: 130vh; padding-bottom: 11vh;"
    >
      <template v-slot:bg>
        <matrix-bg></matrix-bg>
        <div class="special-forces-skull" style="z-index: 2; position: absolute; width: 367px; height: 404px; background-image: url(/images/special-forces-skull.png); background-size: contain; background-repeat: no-repeat; background-position: center center"></div>
        <div class="sergeant-stripes" style="z-index: 1; position: absolute; width: 100%; height: 100%; filter: invert(100); opacity: 0.1; background-image: url(/images/sergeant-major-of-the-army.png); background-size: contain; background-repeat: no-repeat; background-position: center 210px"></div>
      </template>

      <template v-slot:title>
        <!--<typewriter-text-effect
          tag="h2"
          text="Elite Software Commandos"
          class="title text-center pad-bottom"
          :loop="true">
        </typewriter-text-effect>-->
      </template>

      <template>
        <div class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
          <div>
            <p class="text-center">To survive and thrive in the 21st century's digital battleground, you need the right skills.</p>
            <p class="text-center">At Blue Collar, our elite technology warriors build software that's ready for tomorrow's challenges. By using cutting-edge technologies and employing the latest software design methodologies, we can guarantee that you'll be well prepared and equipped for years to come.</p>
            <br />
            <p class="text-center"><small><small>Click the slide to cock, and the trigger to shoot!</small></small></p>
            <div class="guns-comp">
              <hand-gun ref="thunder" class="left-gun" :introDelay="0.3"></hand-gun>
              <hand-gun ref="lightning" class="right-gun" :introDelay="0.7"></hand-gun>
            </div>
            <div class="text-center" style="position: relative; top: -140px">
              <a href="/#services" class="action-link transparent space-top g-pstyle3">What We Do</a>
            </div>
          </div>
        </div>
      </template>
    </hero-layout01-col>

    <angle-mosaic>
      <template v-slot:slot1Bg>
        <div class="bg-evening-blue video-block-bg drop-shadow rotate-right is-hidden--sm-down">
          <!--<matrix-bg style="z-index: 1; opacity: 0.25" fillStyle="rgba(0, 0, 0, 0.01)" :fontSize="27"></matrix-bg>-->
        </div>

      </template>
      <template v-slot:slot1Front>
        <content-block-layout
          className="pad-top ml-auto mr-auto"
          v-if="getHomePageServiceByIndex(0).linkText"
          image="/images/icons/apps-02.svg"
          :title="getHomePageServiceByIndex(0).title"
          :description="getHomePageServiceByIndex(0).description"
          :link="getHomePageServiceByIndex(0).link"
          :linkText="getHomePageServiceByIndex(0).linkText"
          :titleAnimation="textEffects.slideUp"
          :descriptionAnimation="{
            effect: contentEffects.simple,
            settings: {
              opacity: [0, 1],
              duration: 2000
            }
          }"
        />
      </template>

      <template v-slot:slot2Front>
        <div
          v-if="getTestimonialByIndex(1)"
          class="flex flex-column flex-center flex-basis-third">
          <testimonial-block-layout
            className="sm-space-top-half sm-space-bottom-half"
            :testimonial="getTestimonialByIndex(1).testimonial"
            :reviewedBy="getTestimonialByIndex(1).reviewedBy"
            :position="getTestimonialByIndex(1).position"
            :organization="getTestimonialByIndex(1).organization"
            :image="getTestimonialByIndex(1).image"
            :testimonialAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateY: [-60, 0],
                duration: 3000
              }
            }"
            :reviewedByAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateY: [60, 0],
                duration: 3000
              }
            }"
          />
        </div>
      </template>

      <template v-slot:slot3Bg>
        <div class="bg-evening-blue video-block-bg drop-shadow rotate-left is-hidden--sm-down">
          <!--<matrix-bg style="z-index: 1; opacity: 0.25" fillStyle="rgba(0, 0, 0, 0.01)" :fontSize="27"></matrix-bg>-->
        </div>
      </template>
      <template v-slot:slot3Front>
        <content-block-layout
          className="pad-top ml-auto mr-auto pad-bottom"
          v-if="getHomePageServiceByIndex(2).linkText"
          image="/images/icons/websites.svg"
          :title="getHomePageServiceByIndex(2).title"
          :description="getHomePageServiceByIndex(2).description"
          :link="getHomePageServiceByIndex(2).link"
          :linkText="getHomePageServiceByIndex(2).linkText"
          :titleAnimation="textEffects.slideUp"
          :descriptionAnimation="{
            effect: contentEffects.simple,
            settings: {
              opacity: [0, 1],
              duration: 2000
            }
          }"
        />
      </template>

      <template v-slot:slot4Front>
        <div
          v-if="getTestimonialByIndex(0)"
          class="sm-flex flex-column flex-center flex-basis-third md-pad-top">
          <testimonial-block-layout
            className="sm-space-top-half sm-space-bottom-half"
            :testimonial="getTestimonialByIndex(0).testimonial"
            :reviewedBy="getTestimonialByIndex(0).reviewedBy"
            :position="getTestimonialByIndex(0).position"
            :organization="getTestimonialByIndex(0).organization"
            :image="getTestimonialByIndex(0).image"
            :testimonialAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 3000
              }
            }"
            :reviewedByAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [60, 0],
                duration: 3000
              }
            }"
          />
        </div>
      </template>

      <template v-slot:slot5Bg>
        <div class="bg-evening-blue video-block-bg scale-center drop-shadow-up is-hidden--sm-down">
          <!--<matrix-bg style="z-index: 1; opacity: 0.25" fillStyle="rgba(0, 0, 0, 0.01)" :fontSize="27"></matrix-bg>-->
        </div>
      </template>
      <template v-slot:slot5Front>
        <content-block-layout
          className="pad-top ml-auto mr-auto"
          v-if="getHomePageServiceByIndex(1).linkText"
          image="/images/icons/server.svg"
          :title="getHomePageServiceByIndex(1).title"
          :description="getHomePageServiceByIndex(1).description"
          :link="getHomePageServiceByIndex(1).link"
          :linkText="getHomePageServiceByIndex(1).linkText"
          :titleAnimation="textEffects.slideUp"
          :descriptionAnimation="{
            effect: contentEffects.simple,
            settings: {
              opacity: [0, 1],
              duration: 2000
            }
          }"
        />
      </template>

      <template v-slot:slot6Front>
        <div
          v-if="getTestimonialByIndex(2)"
          class="sm-flex flex-column flex-center flex-basis-third md-pad-top">
          <testimonial-block-layout
            className="sm-space-top-half sm-space-bottom-half"
            :testimonial="getTestimonialByIndex(2).testimonial"
            :reviewedBy="getTestimonialByIndex(2).reviewedBy"
            :position="getTestimonialByIndex(2).position"
            :organization="getTestimonialByIndex(2).organization"
            :image="getTestimonialByIndex(2).image"
            :testimonialAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [60, 0],
                duration: 3000
              }
            }"
            :reviewedByAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 3000
              }
            }"
          />
        </div>
      </template>
    </angle-mosaic>

    <hero-layout01-col
      bgColor="transparent"
      title="We Deliver Results"
      subtitle=""
      description=""
      imageClass="home-page-banner-image"
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="sm-pad-top pad-bottom-2x text-shadow relative"
      style="height: 110vh; transform: translateY(-34vh); background-position: center 0"
    >
      <template v-slot:title>
        <!--<shrink-words-one-by-one-text-effect
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
              <a @click="viewDetail()" class="action-link transparent space-top g-pstyle3">Browse Case Studies</a>
            </div>
          </div>
        </div>
      </template>
    </hero-layout01-col>

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
      className="deliver-results-section sm-pad-top pad-bottom-2x text-shadow"
    >
      <template v-slot:bg>
        <div style="position: absolute; width: 100%; height: 100%;">
          <jungle style="position: relative; bottom: -20vh"></jungle>
          <binoculars></binoculars>
        </div>
      </template>

      <template v-slot:title>
        <!--<typewriter-text-effect
          tag="h2"
          text="Lost in the Software Jungle?"
          class="title text-center pad-bottom"
          :loop="true">
        </typewriter-text-effect>-->
      </template>

      <template>
        <div class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
          <div>
            <p class="text-center">Let our seasoned vets show you the way to El Dorado.</p>
            <div class="text-center" style="">
              <a @click="viewDetail()" class="action-link transparent space-top g-pstyle3">Meet Our Consultants</a>
            </div>
          </div>
        </div>
      </template>
    </hero-layout01-col>

    <div class="forest-background">
      <span class="army-tank" />
    </div>

    <Footer/>

    <div ref="contentDetail" class="detailed-content-panel bg-bc-blue">
      <div class="panel-header flex flex-center pad-left-half pad-right-half" style="height: 5rem;">
        <div class="flex-grow">
          <h2 class="text-center no-space-top no-space-bottom">Case Studies</h2>
        </div>
        <b @click="hideDetail()" style="font-size: 1.5rem; cursor: pointer">X</b>
      </div>
      <portfolio-vertical-timeline></portfolio-vertical-timeline>
    </div>
  </Layout>
</template>

<script>
  import anime from 'animejs';

  // Import components
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';
  //import Portfolio from '~/components/portfolio/Portfolio.vue';

  // Import generic component layouts
  import VideoHeroLayout01Col from '~/components/layouts/VideoHeroLayout01Col.vue';
  import HeroLayout01Col from '~/components/layouts/HeroLayout01Col.vue';
  /*import SectionBlockLayout02Col01 from '~/components/layouts/SectionBlockLayout02Col01.vue';
  import SectionBlockLayout02Col02 from '~/components/layouts/SectionBlockLayout02Col02.vue';*/
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';
  import AngleMosaic from '~/components/layouts/AngleMosaic.vue';

  // Import SVG animations
  import HandGun from '~/components/svg/HandGun.vue';
  import Helicopter from '~/components/svg/Helicopter.vue';
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

  // Import static data
  import PortfolioVerticalTimeline from "../components/portfolio/PortfolioVerticalTimeline";

  export default {
    components: {
      // Inject components
      Header,
      Hero,
      Blog,
      Contact,
      Footer,
      //Portfolio,
      PortfolioVerticalTimeline,
      // Inject mixins
      AudioControls,
      // Inject generic component layouts
      AngleMosaic,
      VideoHeroLayout01Col,
      HeroLayout01Col,
      /*SectionBlockLayout02Col01,
      SectionBlockLayout02Col02,*/
      ContentBlockLayout,
      TestimonialBlockLayout,
      // Inject SVG animations
      HandGun,
      Helicopter,
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
    data() {
      return {
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
      getProcessStep(idx) {
        let items = this.homeContent.processSteps;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
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
      fireGuns() {
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            this.$refs.thunder.shootToThrill(0);
          }, 500);

          setTimeout(() => {
            this.$refs.lightning.shootToThrill(0);
          }, 900);
        }
      },
      viewDetail() {
        const detail = this.$refs.contentDetail;
        const detailEl = detail;

        if (detailEl) {
          detailEl.style.zIndex = 5000;
          detailEl.style.opacity = 1;

          document.body.style.overflowY = 'hidden';

          anime({
            targets: detailEl,
            top: [document.documentElement.clientHeight + 'px', '54px'], // Match header height
            easing: 'easeOutExpo',
            duration: 1000
          });
        }
      },
      hideDetail() {
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
      },
    },
    mounted() {
      if (typeof window !== 'undefined') {
        window.addEventListener('keydown', this.bindDetailCloseToEsc);
        this.initSoundtrack();

        const stripes = document.querySelector('.sergeant-stripes');
        const skull = document.querySelector('.special-forces-skull');

        anime({
          targets: stripes,
          translateY: [450, 0],
          easing: 'easeOutExpo',
          duration: 3000
        });

        anime({
          targets: skull,
          translateY: [300, 50],
          easing: 'easeInOutQuad',
          duration: 1500,
          complete: () => {
            let skullTimeline = anime.timeline({ loop: true });
            skullTimeline
              .add({
                targets: skull,
                translateY: [50, 35],
                easing: 'easeInOutQuad',
                duration: 2500
              })
              .add({
                targets: skull,
                translateY: [35, 50],
                easing: 'easeInOutQuad',
                duration: 2500
              });
          }
        });

        const tank = document.querySelector('.army-tank');

        anime({
          targets: tank,
          translateX: ['150%', '-150%'],
          easing: 'linear',
          duration: 8000,
          loop: true,
          delay: 3000
        })

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
      }
    },
    beforeDestroy() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', this.bindDetailCloseToEsc);
        this.killSoundtrack();
      }
    }
  }
</script>

<style>
  .guns-comp {
    height: 70vh;
    transform: translateY(100px);
  }

  .left-gun, .right-gun {
    position: absolute;
  }

  .left-gun {
    left: -40%;
  }

  .right-gun {
    transform: scaleX(-1);
    right: -40%;
  }

  .detailed-content-panel {
    opacity: 1;
    width: 100vw;
    height: calc(100vh - 54px);
    position: fixed;
    /*top: 54px;*/ /* Match header */
    top: 100%;
    left: 0;
    z-index: 5000;
    overflow-y: scroll;
  }

  .army-tank {
    position: fixed;
    background: url(/images/t84-tank.svg) no-repeat;
    width: 900px;
    height: 300px;
    bottom: 100px;
    background-size: contain;
  }

  .forest-background {
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: url(/images/forest.svg) no-repeat bottom center;
    background-attachment: fixed;
  }
</style>
