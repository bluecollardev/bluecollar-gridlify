<template>
  <div>
    <div style="position: relative; top: -15vh">
      <!-- Pull this out of the section, we need it to sit on top of the top video banner -->
      <section id="services" class="col-3-squares no-pad-bottom lg-flex" style="position: absolute; width: 100%; z-index: 10; transform: translateY(-3vh)">
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
                v-if="getHomePageServiceByIndex(0).linkText"
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
                v-if="getHomePageServiceByIndex(2).linkText"
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
            </div>

            <div class="service-detail-card-back">
            </div>
          </div>
        </div>
      </section>

      <section class="hero-section shift-section-up angle bg-bc-blue pad-top no-pad-bottom lg-flex flex-justify-center">
        <div class="col-3-squares no-pad-bottom lg-flex">
          <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third xs-hide sm-hide md-hide">
            <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
              <div class="service-detail-card-front center-testimonial">
                <div
                  v-if="getTestimonialByIndex(1)"
                  class="flex flex-column flex-center flex-basis-third sm-pad-top">
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
                  v-if="getHomePageServiceByIndex(1).linkText"
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
              </div>
              <div class="service-detail-card-back">
              </div>
            </div>
          </div>

          <div class="service-detail-card-top flex flex-center flex-justify-center flex-basis-third xs-hide sm-hide md-hide">
            <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
              <div class="service-detail-card-front">
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
              </div>

              <div class="service-detail-card-back">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  // Import components
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
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
  import SimpleEffect from '~/core/components/animate/Simple.vue'

  // Import static data
  import HomeData from '~/data/Home.yml';
  import HeroData from '~/data/Hero.yml';
  import GeneralData from '~/data/General.yml';
  import TestimonialData from '~/data/Testimonial.yml';

  // Import mixins
  import FlipCardsMixin from '~/core/mixins/FlipCardsMixin';
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';
  import HomeMixin from '~/core/mixins/HomeMixin';

  export default {
    components: {
      // Inject components
      Header,
      Hero,
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
      SimpleEffect
    },
    mixins: [
      HomeMixin,
      TestimonialMixin,
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
          simple: SimpleEffect
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
      generalContent() {
        return GeneralData;
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
      isLoaded() {
        // let isLoaded = false;

        return sessionStorage.getItem('isLoaded') ? parseInt(sessionStorage.getItem('isLoaded')) === 1 : false;
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

      if (window) {
        window.addEventListener('resize', () => {
          this.$set(this, 'repaint', Math.random());
        });
      }
    },
    beforeUnmount() {
      console.log('remove wrapTitleText resize listener');
      window.removeEventListener('resize', this.rewrapTitleText);
    }
  }
</script>
