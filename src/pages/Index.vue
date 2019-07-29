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
      style="height: 130vh"
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
              <a href="/company" class="action-link transparent space-top g-pstyle3">What We Do</a>
            </div>
          </div>
        </div>
      </template>
    </hero-layout01-col>

    <!--<video-hero-layout01-col
      className="homepage-hero-main"
      title="Clients and Case Studies"
      subtitle=""
      imageClass="home-page-banner-image"
      :flipX="true"
      :angle="true"
      bgColor="bg-bc-blue"
    >
      <template v-slot:title>
        <h1 class="title">
          <span class="text-wrapper">
            <span class="line blink">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" xml:space="preserve">
                <g>
                  <path fill="white" d="M71.129,91.224c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.606,0-6.864-1.473-9.224-3.852   C47.64,93.527,44.383,95,40.776,95h-8.128c-2.077,0-3.776-1.69-3.776-3.776c0-2.086,1.699-3.776,3.776-3.776h8.128   c3.002,0,5.447-2.445,5.447-5.447V18c0-3.002-2.445-5.447-5.447-5.447h-8.128c-2.077,0-3.776-1.69-3.776-3.776   C28.871,6.69,30.571,5,32.648,5h8.128C44.383,5,47.64,6.473,50,8.852C52.36,6.473,55.617,5,59.224,5h8.128   c2.077,0,3.776,1.69,3.776,3.776c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.002,0-5.447,2.445-5.447,5.447v64   c0,3.002,2.445,5.447,5.447,5.447h8.128C69.429,87.447,71.129,89.137,71.129,91.224z" />
                </g>
              </svg>
            </span>
            <span class="letters">Blue Collar Developers = 21st Century Artisans</span>
          </span>
        </h1>
      </template>

      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div>
          <div class="space-bottom">
            <p class="g-pstyle1 text-center-force">Note: Only Blue Collar contract roles are listed here. To view my personal work history <a style="text-decoration: underline; color: white;" href="/lucas-profile" alt="View Lucas' profile">click here</a>.</p>
          </div>
          <img class="lozad" src="/images/portfolio/bc-showcase-responsive.png" alt="" />
          <div class="homepage-hero-action action-link-block sm-hide md-hide lg-hide text-center">
            <a class="action-link space-bottom g-pstyle3" href="/projects#portfolio">Scroll Down</a>
          </div>
          <div class="homepage-hero-action action-link-block xs-hide text-center">
            <a class="action-link space-top g-pstyle3" href="/projects#portfolio">Scroll Down</a>
          </div>
        </div>
      </div>
    </video-hero-layout01-col>-->

    <hero-layout01-col
      bgColor="bg-forest-green"
      title="We Deliver Results"
      subtitle=""
      description=""
      imageClass="home-page-banner-image"
      image="/images/forest.png"
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="sm-pad-top pad-bottom-2x text-shadow relative"
      style="height: 110vh; transform: translateY(-19vh); background-position: center 0"
    >
      <template v-slot:bg>
        <span class="army-tank" />
      </template>

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
      bgColor="bg-black"
      title="Lost in the Software Jungle?"
      subtitle=""
      description=""
      imageClass="home-page-banner-image"
      image=""
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="sm-pad-top pad-bottom-2x text-shadow"
      style="z-index: 5; transform: translateY(-43vh); height: 120vh; margin-bottom: 20vh;"
    >
      <template v-slot:bg>
        <div style="position: absolute; width: 100%; height: 100%;">
          <jungle style="position: relative; bottom: -50vh"></jungle>
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

    <Footer/>

    <!--<div ref="contentDetail" class="detailed-content-panel bg-bc-blue">
      <div class="panel-header flex flex-center pad-left-half pad-right-half" style="height: 5rem;">
        <div class="flex-grow">
          <h2 class="text-center no-space-top no-space-bottom">Case Studies</h2>
        </div>
        <b @click="hideDetail()" style="font-size: 1.5rem; cursor: pointer">X</b>
      </div>
      <portfolio-vertical-timeline></portfolio-vertical-timeline>
    </div>-->
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
  import SectionBlockLayout02Col02 from '~/components/layouts/SectionBlockLayout02Col02.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';*/

  // Import SVG animations
  import HandGun from '~/components/svg/HandGun.vue';
  import Helicopter from '~/components/svg/Helicopter.vue';
  import Jungle from '~/components/svg/Jungle.vue';
  import GoogleMapBackground from '~/components/svg/GoogleMapBackground.vue';
  import MatrixBg from '~/components/svg/MatrixBg';


  // Import animated text effects
  /*import TypewriterTextEffect from '~/core/components/text/Typewriter.vue';
  import ShrinkWordsOneByOneTextEffect from '~/core/components/text/ShrinkWordsOneByOne.vue';
  import RotateWordsTextEffect from '~/core/components/text/RotateWords.vue';
  import SlideUpTextEffect from '~/core/components/text/SlideUp.vue';
  import FadeInTextEffect from '~/core/components/text/FadeIn.vue';*/

  // Import animated content effects
  //import SimpleEffect from '~/core/components/animate/Simple.vue'

  // Import audio controls
  import AudioControls from '~/core/components/audio/AudioControls.vue';
  import AudioControlsMixin from '~/core/components/audio/AudioControlsMixin';

  // Import static data
  //import PortfolioVerticalTimeline from "../components/portfolio/PortfolioVerticalTimeline";

  export default {
    components: {
      //PortfolioVerticalTimeline,
      // Inject components
      Header,
      Hero,
      Blog,
      Contact,
      Footer,
      //Portfolio,
      // Inject mixins
      AudioControls,
      // Inject generic component layouts
      VideoHeroLayout01Col,
      HeroLayout01Col,
      /*SectionBlockLayout02Col01,
      SectionBlockLayout02Col02,
      ContentBlockLayout,
      TestimonialBlockLayout,*/
      // Inject SVG animations
      HandGun,
      Helicopter,
      Jungle,
      GoogleMapBackground,
      MatrixBg,
      // Inject animated text effects
      /*TypewriterTextEffect,
      ShrinkWordsOneByOneTextEffect,
      RotateWordsTextEffect,
      SlideUpTextEffect,
      FadeInTextEffect,
      // Inject animated content effects
      SimpleEffect*/
    },
    mixins: [
      AudioControlsMixin
    ],
    data() {
      return {
        soundtrack: null,
        formData: {},
        textEffects: {
          //typewriter: TypewriterTextEffect,
          //shrinkWordsOneByOne: ShrinkWordsOneByOneTextEffect,
          //rotateWords: RotateWordsTextEffect,
          //slideUp: SlideUpTextEffect,
          //fadeIn: FadeInTextEffect
        },
        contentEffects: {
          //simple: SimpleEffect
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
          //this.soundtrack.play();
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
      }
    },
    beforeDestroy() {
      /*if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', this.bindDetailCloseToEsc);
        this.soundtrack.pause();
        this.soundtrack = null;
      }*/
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
</style>
