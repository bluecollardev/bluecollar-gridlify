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
        <audio-controls
          style="position: fixed; bottom: 60px; right: 140px; z-index: 4000; opacity: 0.15"
          :onPreviousClicked="onPreviousClicked.bind(this, this.soundtrack)"
          :onNextClicked="onNextClicked.bind(this, this.soundtrack)"
          :onPlayPauseClicked="onPlayPauseClicked.bind(this, this.soundtrack)"
          :onShuffleClicked="onShuffleClicked.bind(this, this.soundtrack)"
          :onRandomClicked="onRandomClicked.bind(this, this.soundtrack)"
          :onVolumeChanged="onVolumeChanged.bind(this, this.soundtrack)"
        />
      </template>
    </hero-layout01-col>
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
