<template>
  <Layout>
    <Header/>

    <!--<helicopter :onGetToTheChopper="fireGuns.bind(this)"></helicopter>-->

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
          v-if="!isServer"
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

    <!--<angle-mosaic bgColor="bg-bc-blue">
      <template v-slot:slot1Bg>
        <div class="bg-evening-blue video-block-bg drop-shadow rotate-right is-hidden--sm-down">
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
    </angle-mosaic>-->

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
        <div class="flex-basis-half flex flex-column">
          <img ref="fishingRod" src="/images/fishing-rod.svg" style="transform: rotate(35deg) translate(200px, 120px)" />
          <img ref="redSnapper" src="/images/red-snapper.svg" style="max-width: 400px; transform: scaleX(-1) rotate(75deg) translateX(200px)" />
        </div>
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

    <div class="forest-background">
      <!--<matrix-bg></matrix-bg>-->
      <span class="army-tank" />
      <span class="grass">
        <img src="/images/grass.svg" />
      </span>
      <!--<span class="jungle-stream">
        <img src="/images/jungle-stream.svg" />
      </span>-->
      <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg version="1.1" class="ground-path" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="2820px"
         viewBox="0 0 2820 15.2" xml:space="preserve">
      <path class="ground" fill="transparent" d="M1920,9.5c-35.2-0.3-71.5-2.2-105.7-3.4c-38.3,0-90.5-2.5-128.8-2.5c-38.3-1.5-76.6,4-118.3,4
	c-69.6,1.5-146.2,6-219.3,4.5c-153.1-6-313.2-7.5-466.4-7.5c-34.8,0-62.6,0-100.9-1.5c-41.8-1.5-73.1,4.5-111.4,6
	c-90.5,4.5-174-1.5-257.6,0c-45.2,0-97.5,2-139.2,2c-17.4-1.5-31.3-5-52.2-5c-24.4,0-41.8,2.5-62.6,2.5c-20.9-1.5-38.3,0-59.2,0
	c-24.4,0-41.8,3.5-66.1,5c-10.6,0.8-21.1-0.4-32.2-1.3" />
      </svg>
    </div>

    <Footer/>

    <div ref="contentDetail" class="detailed-content-panel bg-bc-blue">
      <div class="panel-header flex flex-center pad-left-half pad-right-half" style="height: 5rem; position: absolute; right: 0; z-index: 9999">
        <div class="flex-grow">
          <!--<h2 class="text-center no-space-top no-space-bottom">Case Studies</h2>-->
        </div>
        <b @click="hideDetail()" style="font-size: 1.5rem; cursor: pointer">X</b>
      </div>
      <hero-layout01-col
        v-if="this.activeDetail === 'CONSULTANTS'"
        bgColor="transparent"
        title="Elite Software Commandos"
        subtitle=""
        description=""
        imageClass="home-page-banner-image"
        :flipX="true"
        :angle="true"
        slotPos="top"
        className="elite-software pad-top-2x pad-bottom-2x text-shadow"
        style="padding-bottom: 20vh;"
      >
        <template v-slot:bg>
          <!--<matrix-bg style="margin-top: 54px;"></matrix-bg>-->
          <div class="special-forces-skull" style="z-index: 2; position: absolute; width: 367px; height: 404px; background-image: url(/images/special-forces-skull.png); background-size: contain; background-repeat: no-repeat; background-position: center center"></div>
          <div class="sergeant-stripes" style="z-index: 1; position: absolute; width: 100%; height: 100%; filter: invert(100); opacity: 0.1; background-image: url(/images/sergeant-major-of-the-army.png); background-size: contain; background-repeat: no-repeat; background-position: center 210px"></div>
        </template>

        <template v-slot:title>
          <!--<typewriter-text-effect
            v-if="!isServer"
            tag="h2"
            text="Elite Software Commandos"
            class="title text-center pad-bottom"
            :loop="true">
          </typewriter-text-effect>-->
        </template>

        <template>
          <div class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
            <div>
              <p class="text-center">To survive and thrive in the 21st century's digital battleground, you need the right skills. At Blue Collar, our elite technology warriors build software that's ready for tomorrow's challenges.</p>
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
      <team-block v-if="this.activeDetail === 'CONSULTANTS'"></team-block>
      <portfolio-vertical-timeline v-if="this.activeDetail === 'PORTFOLIO'"></portfolio-vertical-timeline>
    </div>
  </Layout>
</template>

<script>
  import anime from 'animejs';

  import Vue from 'vue';

  // Import components
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';
  //import Portfolio from '~/components/portfolio/Portfolio.vue';
  import TeamBlock from '~/components/TeamBlock.vue';

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
      TeamBlock,
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
      viewDetail(activeDetail) {
        this.activeDetail = activeDetail;

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
            duration: 1000
          });


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
      animateParabolic(el) {
        let btn1 = document.getElementById('btn1');
        let bar = document.getElementById('bar');
        let barChild = bar.getElementsByTagName('span')[0];

        btn1.onclick = () => {
          parabola(this, barChild);
        };

        const parabola = (() => {
          let carNum = 0;
          return (self, target) => {
            let circle = document.createElement('div');
            circle.id = 'circle';
            circle.style.display = 'none';
            document.body.appendChild(circle);

            let a, b, c, x1, y1, x2, y2, y, sum, t;
            x1 = self.offsetLeft + self.clientWidth / 2;
            y1 = self.offsetTop;
            x2 = bar.offsetLeft + self.clientWidth / 2;
            y2 = bar.offsetTop;

            a = 0.001;
            b = (y1 - y2 - a * (x1 * x1 - x2 * x2)) / (x1 - x2);
            c = y1 - a * x1 * x1 - b * x1;

            sum = x1;

            t = setInterval(() => {
              circle.style.display = 'block';
              y = a * sum * sum + b * sum + c;
              circle.style.top = y + 'px';
              circle.style.left = sum + 'px';

              sum++;

              if (sum > x2) {
                clearInterval(t);
                document.body.removeChild(circle);
                carNum++;
                target.innerHTML = carNum;
              }
            }, 1);
          }
        })();
      }
    },
    mounted() {
      if (typeof window !== 'undefined') {
        window.addEventListener('keydown', this.bindDetailCloseToEsc);

        const groundPath = anime.path('.ground-path .ground');
        const tank = document.querySelector('.army-tank');

        console.log(groundPath('x'));

        const tankTimeline = anime.timeline({ loop: true});

        tankTimeline
          .add({
            targets: tank,
            translateX: groundPath('x'),
            translateY: groundPath('y'),
            rotate: groundPath('angle'),
            easing: 'linear',
            direction: 'reverse',
            duration: 12000,
            delay: 3000
            // Move off screen
          }).add({
            targets: tank,
            translateX: [0, -900],
            easing: 'linear',
            duration: 5000,
            delay: 0
          });

        //this.animateParabolic(this.$refs.redSnapper);

        const flipCardSelector = '.service-detail-card-inner';
        const flipCardsContent = document.querySelectorAll(flipCardSelector);

        this.initFlipCards(
          flipCardsContent,
          '.service-detail-card-front',
          '.service-detail-card-back'
        );

        window.addEventListener('resize', () => {
          this.$set(this, 'repaint', Math.random());
        });
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
    z-index: 2000;
    background: url(/images/t84-tank.svg) no-repeat;
    width: 900px;
    height: 300px;
    bottom: 80px;
    background-size: contain;
    margin-right: -900px;
  }

  .ground-path {
    display: none;
    bottom: 0;
  }

  .forest-background {
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: url(/images/forest.svg) no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
  }

  .grass {
    z-index: 2500;
    position: fixed;
    width: 110%;
    left: -5%;
    height: 200px;
    bottom: 0;
    filter: brightness(0.345) saturate(0.5);
  }

  .jungle-stream {
    z-index: 2500;
    position: fixed;
    width: 100%;
    height: 730px;
    bottom: 0;
  }

  .hero-first {
    min-height: 140vh;
  }

  .elite-software:after {
    position: absolute;
    background: rgba(0,0,0,0.6);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
