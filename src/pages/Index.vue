<template>
  <Layout :key="repaint">
    <Header/>

    <!-- Video Hero -->
    <video-hero-layout01-col
      className="homepage-hero-main"
      v-if="homepageHero"
      :title="homepageHero.title"
      subtitle=""
      :description="homepageHero.description"
      :link="homepageHero.link"
      :linkText="homepageHero.linkText"
      :image="homepageHero.image"
      imageClass="home-page-banner-image"
      :caption="homepageHero.caption"
      :subCaption="homepageHero.subCaption"
      :flipX="false"
      :angle="true"
      bgColor="bg-bc-blue"
    >
      <template v-slot:title>
        <typewriter-text-effect
          tag="h1"
          text="Experience the Blue Collar Difference">
        </typewriter-text-effect>
      </template>
    </video-hero-layout01-col>

    <!-- Pull this out of the section, we need it to sit on top of the top video banner -->
    <div class="col-3-squares no-pad-bottom lg-flex" style="position: absolute; width: 100%; z-index: 10; transform: translateY(-7vh)">
      <div class="service-detail-card-top fixed-height-mobile flex flex-center flex-justify-center flex-basis-third">
        <video class="video-block-bg drop-shadow rotate-right is-hidden--sm-down" preload="none" playsinline="" autoplay="" muted="" loop=""
               poster="">
          <source src="/video/bluecollar-apps.mp4" type="video/mp4">
          <!--<source src="/video/bluecollar-sites.webm" type="video/webm">
          <source src="/video/bluecollar-sites.ogv" type="video/ogg">-->
        </video>
        <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
          <div class="service-detail-card-front">
            <content-block-layout
              className="content-block ml-auto mr-auto md-pad-top"
              v-if="getService(0).linkText"
              :title="getService(0).title"
              :description="getService(0).description"
              :link="getService(0).link"
              :linkText="getService(0).linkText"
              :titleAnimation="textEffects.slideUp"
              :descriptionAnimation="{
                effect: contentEffects.fadeIn,
                settings: {
                  opacity: [0, 1],
                  duration: 5000
                }
              }"
            />
          </div>
          <div class="service-detail-card-back">
          </div>
        </div>
      </div>

      <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third xs-hide sm-hide md-hide">
        <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
          <div class="service-detail-card-front center-testimonial">
          </div>
          <div class="service-detail-card-back">
          </div>
        </div>
      </div>

      <div class="service-detail-card-top fixed-height-mobile flex flex-center flex-justify-center flex-basis-third">
        <video class="video-block-bg drop-shadow rotate-left is-hidden--sm-down" preload="none" playsinline="" autoplay="" muted="" loop=""
               poster="">
          <source src="/video/bluecollar-sites.mp4" type="video/mp4">
          <!--<source src="/video/bluecollar-sites.webm" type="video/webm">
          <source src="/video/bluecollar-sites.ogv" type="video/ogg">-->
        </video>
        <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
          <div class="service-detail-card-front">
            <content-block-layout
              className="content-block ml-auto mr-auto pad-top pad-bottom"
              v-if="getService(2).linkText"
              :title="getService(2).title"
              :description="getService(2).description"
              :link="getService(2).link"
              :linkText="getService(2).linkText"
              :titleAnimation="textEffects.slideUp"
              :descriptionAnimation="{
                effect: contentEffects.fadeIn,
                settings: {
                  opacity: [0, 1],
                  duration: 5000
                }
              }"
            />
          </div>

          <div class="service-detail-card-back">
          </div>
        </div>
      </div>
    </div>

    <section id="services" class="hero-section shift-section-up angle bg-bc-blue pad-top no-pad-bottom lg-flex flex-justify-center">
      <div class="col-3-squares no-pad-bottom lg-flex">
        <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third xs-hide sm-hide md-hide">
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front center-testimonial">
              <div
                v-if="getTestimonial(1)"
                class="flex flex-column flex-center flex-basis-third sm-pad-top">
                <testimonial-block-layout
                  className="sm-space-top-half sm-space-bottom-half"
                  :testimonial="getTestimonial(1).testimonial"
                  :reviewedBy="getTestimonial(1).reviewedBy"
                  :position="getTestimonial(1).position"
                  :organization="getTestimonial(1).organization"
                  :image="getTestimonial(1).image"
                />
              </div>
            </div>
            <div class="service-detail-card-back">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero-section shift-section-up angle bg-bc-blue no-pad-bottom lg-flex">
      <div class="col-3-squares bg-bc-blue no-pad-bottom lg-flex">
        <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third xs-hide sm-hide md-hide">
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
              <div
                v-if="getTestimonial(0)"
                class="sm-flex flex-column flex-center flex-basis-third md-pad-top">
                <testimonial-block-layout
                  className="sm-space-top-half sm-space-bottom-half"
                  :testimonial="getTestimonial(0).testimonial"
                  :reviewedBy="getTestimonial(0).reviewedBy"
                  :position="getTestimonial(0).position"
                  :organization="getTestimonial(0).organization"
                  :image="getTestimonial(0).image"
                />
              </div>
            </div>
            <div class="service-detail-card-back">
            </div>
          </div>
        </div>

        <div class="service-detail-card-top fixed-height-mobile flex flex-center flex-justify-center flex-basis-third">
          <video class="video-block-bg scale-center drop-shadow-up is-hidden--sm-down" preload="none" playsinline="" autoplay="" muted="" loop=""
                 poster="">
            <source src="/video/bluecollar-software.mp4" type="video/mp4">
            <!--<source src="/video/bluecollar-sites.webm" type="video/webm">
            <source src="/video/bluecollar-sites.ogv" type="video/ogg">-->
          </video>
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
              <content-block-layout
                className="content-block ml-auto mr-auto md-pad-top"
                v-if="getService(1).linkText"
                :title="getService(1).title"
                :description="getService(1).description"
                :link="getService(1).link"
                :linkText="getService(1).linkText"
                :titleAnimation="textEffects.slideUp"
                :descriptionAnimation="{
                  effect: contentEffects.fadeIn,
                  settings: {
                    opacity: [0, 1],
                    duration: 5000
                  }
                }"
              />
            </div>
            <div class="service-detail-card-back">
            </div>
          </div>
        </div>

        <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third xs-hide sm-hide md-hide">
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
              <div
                v-if="getTestimonial(2)"
                class="sm-flex flex-column flex-center flex-basis-third md-pad-top">
                <testimonial-block-layout
                  className="sm-space-top-half sm-space-bottom-half"
                  :testimonial="getTestimonial(2).testimonial"
                  :reviewedBy="getTestimonial(2).reviewedBy"
                  :position="getTestimonial(2).position"
                  :organization="getTestimonial(2).organization"
                  :image="getTestimonial(2).image"
                />
              </div>
            </div>

            <div class="service-detail-card-back">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DO NOT DELETE THIS IS THE GUITAR!!! -->
    <hero-layout01-col
      id="contact"
      v-if="servicesHero"
      bgColor="bg-black"
      title="Ready to Rock?"
      subtitle=""
      description="Don't stop believin! Being a rock star's a journey when you're born and raised in South Detroit. We'll take the midnight train to your dream."
      imageClass="home-page-banner-image"
      :flipX="true"
      :angle="true"
      slotPos="top"
      className="sm-pad-top pad-bottom-2x"
    >
      <template v-slot:bg v-if="this.rockAndRoll">
        <party-lights></party-lights>
      </template>

      <template v-slot:title>
        <typewriter-text-effect
          tag="h2"
          text="Ready to Rock?"
          class="title text-center pad-bottom">
        </typewriter-text-effect>
      </template>

      <template>
        <div class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
          <div
            class="guitar-block text-center"
            @mouseover="startRockin.bind(this)()"
            @mouseleave="stopRockin.bind(this)()">
            <interactive-guitar :key="Math.random()"></interactive-guitar>
            <br/>
            <small><b>Click the strings to ROCK OUT</b></small>
          </div>
        </div>
      </template>
    </hero-layout01-col>
    <!-- END NOT DELETE THIS IS THE GUITAR!!! -->

    <section class="hero-section bg-black angle no-pad-top">
      <google-map-background></google-map-background>
      <div class="flex flex-center flex-justify-center">
        <div class="flex flex-basis-half">
          <contact :formData="formData"></contact>
        </div>
      </div>
    </section>

    <Footer/>
  </Layout>
</template>

<script>
  import anime from 'animejs';

  import * as DOMTextEffectUtils from '~/core/utils/DOMTextEffectUtils';

  // Import components
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import About from '~/components/Home.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';

  // Import generic component layouts
  import VideoHeroLayout01Col from '~/components/layouts/VideoHeroLayout01Col.vue';
  import HeroLayout01Col from '~/components/layouts/HeroLayout01Col.vue';
  import HeroLayout02Col02 from '~/components/layouts/HeroLayout02Col02.vue';
  import SectionBlockLayout02Col01 from '~/components/layouts/SectionBlockLayout02Col01.vue';
  import SectionBlockLayout02Col02 from '~/components/layouts/SectionBlockLayout02Col02.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';
  import TestimonialHeroLayout from '~/components/layouts/TestimonialHeroLayout.vue';

  // Import static blocks
  import ProcessBlock from '~/blocks/ProcessBlock.vue';

  // Import SVG animations
  import AppFactory from '~/components/svg/AppFactory.vue';
  import InteractiveGuitar from '~/components/svg/InteractiveGuitar.vue';
  import GoogleMapBackground from '~/components/svg/GoogleMapBackground.vue';
  import GoogleMapCutout from '~/components/svg/GoogleMapCutout.vue';
  import PartyLights from '~/components/svg/PartyLights.vue';

  // Import animated text effects
  import TypewriterTextEffect from '~/core/components/text/Typewriter.vue';
  import ShrinkWordsOneByOneTextEffect from '~/core/components/text/ShrinkWordsOneByOne.vue';
  import RotateWordsTextEffect from '~/core/components/text/RotateWords.vue';
  import SlideUpTextEffect from '~/core/components/text/SlideUp.vue';
  import FadeInTextEffect from '~/core/components/text/FadeIn.vue';

  // Import animated content effects
  import FadeInEffect from '~/core/components/animate/FadeIn.vue'

  // Import static data
  import HomeData from '~/data/Home.yml';
  import HeroData from '~/data/Hero.yml';
  import GeneralData from '~/data/General.yml';
  import TestimonialData from '~/data/Testimonial.yml';

  // Import mixins
  import FlipCardsMixin from '~/core/mixins/FlipCardsMixin';

  export default {
    components: {
      // Inject components
      Header,
      Hero,
      About,
      Blog,
      Contact,
      Footer,
      // Inject generic component layouts
      VideoHeroLayout01Col,
      HeroLayout01Col,
      HeroLayout02Col02,
      SectionBlockLayout02Col01,
      SectionBlockLayout02Col02,
      ContentBlockLayout,
      TestimonialBlockLayout,
      TestimonialHeroLayout,
      // Inject SVG animations
      AppFactory,
      InteractiveGuitar,
      GoogleMapBackground,
      GoogleMapCutout,
      PartyLights,
      // Import static HTML blocks
      ProcessBlock,
      // Inject animated text effects
      TypewriterTextEffect,
      ShrinkWordsOneByOneTextEffect,
      RotateWordsTextEffect,
      SlideUpTextEffect,
      FadeInTextEffect,
      // Inject animated content effects
      FadeInEffect
    },
    mixins: [
      FlipCardsMixin
    ],
    data() {
      return {
        formData: {},
        repaint: Math.random(),
        rockAndRoll: false,
        textEffects: {
          typewriter: TypewriterTextEffect,
          shrinkWordsOneByOne: ShrinkWordsOneByOneTextEffect,
          rotateWords: RotateWordsTextEffect,
          slideUp: SlideUpTextEffect,
          fadeIn: FadeInTextEffect
        },
        contentEffects: {
          fadeIn: FadeInEffect
        }
      };
    },
    computed: {
      homeContent() {
        return HomeData;
      },
      heroContent() {
        return HeroData;
      },
      servicesContent() {
        return HeroData;
      },
      generalContent() {
        return GeneralData;
      },
      testimonialContent() {
        return TestimonialData;
      },
      homepageHero() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'homepage-hero';
        });

        if (items instanceof Array && items.length > 0) {
          return items[0];
        }

        return null
      },
      /*servicesSection() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'services-hero';
        });

        if (items instanceof Array && items.length > 0) {
          return items[0];
        }

        return null
      },*/
      servicesHero() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'services-hero';
        });

        if (items instanceof Array && items.length > 0) {
          return items[0];
        }

        return null
      },
      projectsSection() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'projects-hero';
        });

        return items instanceof Array && items.length > 0 ? items[0] : null
      },
    },
    methods: {
      startRockin() {
        this.$set(this, 'rockAndRoll', true);
      },
      stopRockin() {
        this.$set(this, 'rockAndRoll', false);
      },
      isLoaded() {
        // let isLoaded = false;

        return sessionStorage.getItem('isLoaded') ? parseInt(sessionStorage.getItem('isLoaded')) === 1 : false;
      },

      getTestimonial(idx) {
        let items = this.testimonialContent.items;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      getService(idx) {
        let items = this.homeContent.services;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      getServiceById(id) {
        let content = this.servicesContent;

        if (content && content.services instanceof Array && content.services.length > 0) {
          let items = content.services.filter(item => {
            return item.id === id;
          });

          if (items instanceof Array && items.length > 0) {
            return items[0];
          }
        }

        return null
      },
      getServiceHeroById(id) {
        let content = this.servicesContent;

        if (content && content.services instanceof Array && content.services.length > 0) {
          let items = content.services.filter(item => {
            return item.id === id;
          });

          if (items instanceof Array && items.length > 0) {
            if (items[0].hero instanceof Array && items[0].hero.length > 0) {
              return items[0].hero[0] // TODO: Support for multiple heroes!
            }
          }
        }

        return null
      },
      getServiceBackupsByIdx(id, idx) {
        let content = this.servicesContent;
        idx = idx || 0;

        if (content && content.services instanceof Array && content.services.length > 0) {
          let items = content.services.filter(item => {
            return item.id === id;
          });

          if (items instanceof Array && items.length > 0) {
            if (items[0].backup instanceof Array && items[0].backup.length > 0) {
              return items[0].backup[idx] // TODO: Support for multiple heroes!
            }
          }
        }

        return null
      },
      getProcessStep(idx) {
        let items = this.homeContent.processSteps;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      }
    },
    mounted() {
      /* TODO: This belongs to one of the SVG components, move it out */
      /*const svgPath = document.querySelectorAll('.path');

      const svgText = anime({
        targets: svgPath,
        loop: true,
        direction: 'alternate',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 700,
        delay: (el, i) => {
          return i * 500
        }
      });*/

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
  ul.bullets {
    list-style: square inside;
  }

  ul.bullets li {
    list-style: square inside;
  }

  .video-banner video {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 0;
    object-fit: cover !important;
  }

  .text-banner {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  .text-banner .text {
    margin-left: auto;
    margin-right: auto;
    width: 33vw;
    z-index: 1;
  }

  .test svg {
    z-index: 10;
    fill: white;
  }

  @media (max-width: 40em) {
    .xs-order-1 {
      order: 1;
    }

    .xs-order-2 {
      order: 2;
    }
  }

  @media (min-width: 40em) {
    .sm-order-1 {
      order: 1;
    }

    .sm-order-2 {
      order: 2;
    }
  }
</style>

<style lang="scss">
  .service-detail-card {
    perspective: 1000px
  }

  .service-detail-card-inner {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .service-detail-card-front,
  .service-detail-card-back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .service-detail-card-back {
    display: none;
    transform: rotateY(180deg);
  }

  .background-map {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #contact-form {
    position: relative;
    z-index: 5;
  }

  .video-block-bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 40em) {
    .video-block-bg {
      min-height: 100vh;
    }
  }

  /*@media screen and (max-width: 40em){
    .video-block-bg {
      display: none;
    }
  }*/

  .video-block-bg::before {
    content: '.';
    color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: radial-gradient(black 65%, transparent 25%);
	  background-size: 2px 2px;
  }

  .service-detail-card-top {
    border-bottom: 1px solid white;
    &.fixed-height-mobile {
      min-height: 100vh;
    }
  }

  .service-detail-card-top:hover::before {
    background-image: radial-gradient(black 35%, transparent 25%);
    background-size: 2px 2px;
  }

  .service-detail-card-inner {
    z-index: 2;
    position: relative;

  }

  .service-detail-card-top p,
  .service-detail-card-top a,
  .service-detail-card-top * {
    color: white !important;
  }

  @media screen and (min-width: 40em) {
    .service-detail-card-top {
      border-bottom: none;
      position: relative;
      &.drop-shadow:before {
        filter: drop-shadow(2px 4px 6px rgba(16, 16, 16, 0.666667)) brightness(0.5);
      }

      &.drop-shadow-up:before {
        filter: drop-shadow(0px -9px 6px rgba(16, 16, 16, 0.333333)) brightness(0.5);
      }
    }

    .service-detail-card-top:hover {
      &.drop-shadow:before {
        filter: drop-shadow(2px 4px 6px rgba(16, 16, 16, 0.30)) brightness(0.5);
      }

      &.drop-shadow-up:before {
        filter: drop-shadow(0px -9px 6px rgba(16, 16, 16, 0.15)) brightness(0.5);
      }
    }
  }

  @media screen and (max-width: 40em) {
    .service-detail-card-top {
      &.fixed-height-mobile {
        .service-detail-card-front {
          top: 100px !important; /* Override inline JS style, flip is done via component */
        }

        .service-detail-card-inner {
          height: auto! important; /* Kill inline JS height when using fixed height mobile */
        }

        .service-detail-card-front,
        .service-detail-card-back {
          position: static !important;
          height: auto !important;
        }
      }
    }
  }

  @media screen and (min-width: 40em) {
    .service-detail-card-top {
      &.fixed-height-mobile {
        min-height: 50vh;
      }
    }

    /* This block is partially covered by the angle from the previous section */
    .center-testimonial {
      top: 15px !important;
    }

    .service-detail-card-inner {
      min-height: auto;
    }

    /* TODO: Make these conditional based on browser, moving to css clip-path */
    /*.shift-section-up > div {
      position: relative;
      top: -102px;
      z-index: 2;
    }

    .shift-section-up + .shift-section-up {
      margin-bottom: -103px;
      border-bottom: 1px solid white;
    }*/

    /* Adjust testimonial profile badges */
    .circle-composite.small {
      position: relative;
      left: -20px;
    }
  }

  .guitar-block {
    width: 100%;
    position: relative;
    z-index: 5;
  }

  @media screen and (min-width: 40em) {
    .guitar-block {
      width: 60%;
    }
  }

  .service-detail-card-top {
    text-shadow: 1px 0 5px rgba(0,0,0,.666)
  }

  .g-services,
  .g-services p {
    text-align: center;
  }

  @media screen and (min-width: 64em) {
    .service-detail-card-top {
      position: relative;
    }
  }

  /* TODO: Animate rotation */
  @media screen and (min-width: 84em) {
    .video-block-bg {
      &.rotate-left {
        transform: rotate(-5deg) translate(10px, -40px);
      }

      &.rotate-right {
        transform: rotate(5deg) translate(-10px, -40px);
      }

      &.scale-center {
        transform: scaleY(1.1) scaleX(1.2) translateY(-22px);
      }
    }
  }

  a.action-link {
    border-radius: 5px;
  }
</style>
