<template>
  <Layout>
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
        <h1 class="title text-center mr-3 ml-3">
          <span class="text-wrapper">
            <span class="line blink">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                   y="0px" viewBox="0 0 100 125" xml:space="preserve">
                <g>
                  <path fill="white"
                        d="M71.129,91.224c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.606,0-6.864-1.473-9.224-3.852   C47.64,93.527,44.383,95,40.776,95h-8.128c-2.077,0-3.776-1.69-3.776-3.776c0-2.086,1.699-3.776,3.776-3.776h8.128   c3.002,0,5.447-2.445,5.447-5.447V18c0-3.002-2.445-5.447-5.447-5.447h-8.128c-2.077,0-3.776-1.69-3.776-3.776   C28.871,6.69,30.571,5,32.648,5h8.128C44.383,5,47.64,6.473,50,8.852C52.36,6.473,55.617,5,59.224,5h8.128   c2.077,0,3.776,1.69,3.776,3.776c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.002,0-5.447,2.445-5.447,5.447v64   c0,3.002,2.445,5.447,5.447,5.447h8.128C69.429,87.447,71.129,89.137,71.129,91.224z"/>
                </g>
              </svg>
            </span>
            <span class="letters">Experience the Blue Collar Difference</span>
          </span>
        </h1>
      </template>
    </video-hero-layout01-col>

    <!-- Apps and Services Section -->
    <testimonial-hero-layout
      id="about"
      v-if="servicesHero"
      :title="servicesHero.title"
      subtitle=""
      :description="servicesHero.description"
      :link="servicesHero.link"
      :linkText="servicesHero.linkText"
      :image="servicesHero.image"
      imageClass="home-page-banner-image"
      :caption="servicesHero.caption"
      :subCaption="servicesHero.subCaption"
      :flipX="false"
      :angle="true"
      className="xs-pad-top"
      leftPaneClassSuffix="xs-order-2 sm-order-1"
      rightPaneClassSuffix="xs-order-1 sm-order-2"
      bgColor="bg-light-grey"
    />

    <section id="services" class="hero-section shift-section-up bg-bc-blue no-pad-bottom lg-flex">
      <div class="col-3-squares no-pad-bottom lg-flex">
        <div class="service-detail-card-top fixed-height-mobile sm-flex flex-center flex-justify-center flex-basis-third relative">
          <video class="video-block-bg is-hidden--sm-down" preload="none" playsinline="" autoplay="" muted="" loop=""
                 poster="">
            <source src="/video/bluecollar-apps.mp4" type="video/mp4">
            <!--<source src="/video/bluecollar-sites.webm" type="video/webm">
            <source src="/video/bluecollar-sites.ogv" type="video/ogg">-->
          </video>
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
              <content-block-layout
                className="md-pad-top"
                v-if="getService(0).linkText"
                :title="getService(0).title"
                :description="getService(0).description"
                :link="getService(0).link"
                :linkText="getService(0).linkText"
              />
            </div>
            <div class="service-detail-card-back">
              <content-block-layout
                className="md-pad-top md-pad-bottom"
                v-if="getServiceHeroById('apps')"
                :title="getServiceHeroById('apps').title"
                subtitle=""
                :description="getServiceHeroById('apps').description"
                :link="getServiceHeroById('apps').link"
                :linkText="getServiceHeroById('apps').linkText"
                :image="getServiceHeroById('apps').image"
                :caption="getServiceHeroById('apps').caption"
                :subCaption="getServiceHeroById('apps').subCaption"
              />
            </div>
          </div>
        </div>

        <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-third relative">
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
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
              <content-block-layout
                className="pad-bottom"
                v-if="getServiceHeroById('software')"
                :title="getServiceHeroById('software').title"
                subtitle=""
                :description="getServiceHeroById('software').description"
                :link="getServiceHeroById('software').link"
                :linkText="getServiceHeroById('software').linkText"
                :image="getServiceHeroById('software').image"
                :caption="getServiceHeroById('software').caption"
                :subCaption="getServiceHeroById('software').subCaption"
              />
            </div>
          </div>
        </div>

        <div class="service-detail-card-top fixed-height-mobile sm-flex flex-center flex-justify-center flex-basis-third relative">
          <video class="video-block-bg is-hidden--sm-down" preload="none" playsinline="" autoplay="" muted="" loop=""
                 poster="">
            <source src="/video/bluecollar-sites.mp4" type="video/mp4">
            <!--<source src="/video/bluecollar-sites.webm" type="video/webm">
            <source src="/video/bluecollar-sites.ogv" type="video/ogg">-->
          </video>
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
              <content-block-layout
                className="pad-top pad-bottom"
                v-if="getService(2).linkText"
                :title="getService(2).title"
                :description="getService(2).description"
                :link="getService(2).link"
                :linkText="getService(2).linkText"
              />
            </div>

            <div class="service-detail-card-back">
              <content-block-layout
                className="pad-bottom"
                v-if="getServiceHeroById('websites')"
                :title="getServiceHeroById('websites').title"
                subtitle=""
                :description="getServiceHeroById('websites').description"
                :link="getServiceHeroById('websites').link"
                :linkText="getServiceHeroById('websites').linkText"
                :image="getServiceHeroById('websites').image"
                :caption="getServiceHeroById('websites').caption"
                :subCaption="getServiceHeroById('websites').subCaption"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero-section angle shift-section-up no-pad-bottom lg-flex">
      <div class="col-3-squares bg-bc-blue no-pad-bottom lg-flex">
        <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-third relative">
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
              <div
                v-if="getTestimonial(0)"
                class="flex flex-column flex-center flex-basis-third sm-pad-top">
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

        <div class="service-detail-card-top fixed-height-mobile sm-flex flex-center flex-justify-center flex-basis-third relative">
          <video class="video-block-bg is-hidden--sm-down" preload="none" playsinline="" autoplay="" muted="" loop=""
                 poster="">
            <source src="/video/bluecollar-software.mp4" type="video/mp4">
            <!--<source src="/video/bluecollar-sites.webm" type="video/webm">
            <source src="/video/bluecollar-sites.ogv" type="video/ogg">-->
          </video>
          <div class="service-detail-card-inner space-left space-right sm-space-top-2x sm-space-bottom-2x">
            <div class="service-detail-card-front">
              <content-block-layout
                className="md-pad-top"
                v-if="getService(1).linkText"
                :title="getService(1).title"
                :description="getService(1).description"
                :link="getService(1).link"
                :linkText="getService(1).linkText"
              />
            </div>
            <div class="service-detail-card-back">
              <content-block-layout
                className="pad-bottom"
                v-if="getServiceHeroById('software')"
                :title="getServiceHeroById('software').title"
                subtitle=""
                :description="getServiceHeroById('software').description"
                :link="getServiceHeroById('software').link"
                :linkText="getServiceHeroById('software').linkText"
                :image="getServiceHeroById('software').image"
                :caption="getServiceHeroById('software').caption"
                :subCaption="getServiceHeroById('software').subCaption"
              />
            </div>
          </div>
        </div>

        <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-third relative">
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

    <!-- TODO: Important! Make this pattern a layout before deleting! -->
    <!--<section class="hero-section col-2-squares n1-white n2-light-grey no-pad-bottom lg-flex">
      <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="service-detail-card-inner content-block">
          <div class="service-detail-card-front">
            <content-block-layout
              className="pad-top"
              v-if="getService(0).linkText"
              :title="getService(0).title"
              :description="getService(0).description"
              :link="getService(0).link"
              :linkText="getService(0).linkText"
            />
          </div>
          <div class="service-detail-card-back">
            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getServiceHeroById('apps')"
              :title="getServiceHeroById('apps').title"
              subtitle=""
              :description="getServiceHeroById('apps').description"
              :link="getServiceHeroById('apps').link"
              :linkText="getServiceHeroById('apps').linkText"
              :image="getServiceHeroById('apps').image"
              :caption="getServiceHeroById('apps').caption"
              :subCaption="getServiceHeroById('apps').subCaption"
            />
          </div>
        </div>
      </div>
    </section>-->

    <!--<section class="lg-flex">
      <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="service-detail-card-inner content-block">
          <div class="service-detail-card-front">
            <content-block-layout
              className="pad-top"
              v-if="getService(1).linkText"
              :title="getService(1).title"
              :description="getService(1).description"
              :link="getService(1).link"
              :linkText="getService(1).linkText"
            />
          </div>
          <div class="service-detail-card-back">
            <content-block-layout
              className="pad-bottom"
              v-if="getServiceHeroById('software')"
              :title="getServiceHeroById('software').title"
              subtitle=""
              :description="getServiceHeroById('software').description"
              :link="getServiceHeroById('software').link"
              :linkText="getServiceHeroById('software').linkText"
              :image="getServiceHeroById('software').image"
              :caption="getServiceHeroById('software').caption"
              :subCaption="getServiceHeroById('software').subCaption"
            />
          </div>
        </div>
      </div>
    </section>-->


    <!--<section class="hero-section col-2-squares n1-white n2-light-grey no-pad-bottom lg-flex">
      <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="service-detail-card-inner content-block">
          <div class="service-detail-card-front">
            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getService(2).linkText"
              :title="getService(2).title"
              :description="getService(2).description"
              :link="getService(2).link"
              :linkText="getService(2).linkText"
            />
          </div>

          <div class="service-detail-card-back">
            <content-block-layout
              className="pad-bottom"
              v-if="getServiceHeroById('websites')"
              :title="getServiceHeroById('websites').title"
              subtitle=""
              :description="getServiceHeroById('websites').description"
              :link="getServiceHeroById('websites').link"
              :linkText="getServiceHeroById('websites').linkText"
              :image="getServiceHeroById('websites').image"
              :caption="getServiceHeroById('websites').caption"
              :subCaption="getServiceHeroById('websites').subCaption"
            />
          </div>
        </div>
      </div>
    </section>-->

    <hero-layout02-col02
      id="contact"
      v-if="servicesHero"
      bgColor="bg-white"
      title="Ready to Rock?"
      subtitle=""
      description="At Blue Collar, every challenge is just a puzzle waiting to be solved! We strive to create innovative solutions for our clients using the latest advances
        in technology and development. Let us help take your business idea to the next level."
      imageClass="home-page-banner-image"
      :flipX="true"
      :angle="true"
      className="xs-pad-top sm-pad-top pad-bottom-2x"
    >
      <template v-slot:title>
        <h2 class="title text-center pad-bottom">
          <span class="text-wrapper">
            <span class="line blink">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                   y="0px" viewBox="0 0 100 125" xml:space="preserve">
                <g>
                  <path fill="white"
                        d="M71.129,91.224c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.606,0-6.864-1.473-9.224-3.852   C47.64,93.527,44.383,95,40.776,95h-8.128c-2.077,0-3.776-1.69-3.776-3.776c0-2.086,1.699-3.776,3.776-3.776h8.128   c3.002,0,5.447-2.445,5.447-5.447V18c0-3.002-2.445-5.447-5.447-5.447h-8.128c-2.077,0-3.776-1.69-3.776-3.776   C28.871,6.69,30.571,5,32.648,5h8.128C44.383,5,47.64,6.473,50,8.852C52.36,6.473,55.617,5,59.224,5h8.128   c2.077,0,3.776,1.69,3.776,3.776c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.002,0-5.447,2.445-5.447,5.447v64   c0,3.002,2.445,5.447,5.447,5.447h8.128C69.429,87.447,71.129,89.137,71.129,91.224z"/>
                </g>
              </svg>
            </span>
            <span class="letters">Ready to Rock?</span>
          </span>
        </h2>
      </template>

      <template v-slot:left>
        <div class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
          <div class="guitar-block space-bottom text-center">
            <interactive-guitar :key="Math.random()"></interactive-guitar>
            <br/>
            <small><b>Click the strings to ROCK OUT</b></small>
          </div>
        </div>
      </template>
    </hero-layout02-col02>

    <section class="hero-section bg-light-grey">
      <google-map-background></google-map-background>
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="sm-flex flex-basis-full">
          <div class="sm-flex flex-basis-third">
            <div class="border-none p0 m0 pad-all">

              <h2 class="block text-center mb-4 space-top">Saddle up, partner!</h2>
              <br/>
              <p>At Blue Collar, you're not our customers - <strong>you're our partners</strong>.
                We know that the dynamics of the rapidly changing Information Age can be
                tough at times, but nothing great was ever solved without a challenge.
                We're here to help you level up. It's our thing.</p>
              <br/>
              <hr/>
              <br/>
              <p>For information on job opportunities or informational interviews please email: <b>careers@bluecollardev.com</b>
              </p>
              <p>For sponsorship, media, events, and opportunities to help us grow please email: <b>marketing@bluecollardev.com</b>
              </p>
              <p>For other inquiries that don’t fit the descriptions above, ask us who you’d like to connect with by
                sending an email to: <b>info@bluecollardev.com</b></p>
              <div>
                <!--<google-map-cutout></google-map-cutout>-->
              </div>
              <p>Call Us! <strong>+1 250 532-0083</strong></p>
            </div>
          </div>
          <div class="sm-flex flex-basis-two-thirds">
            <contact :formData="formData"></contact>
          </div>
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
      // Import static HTML blocks
      ProcessBlock
    },
    mixins: [
      FlipCardsMixin
    ],
    data() {
      return {
        formData: {}
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
      const svgPath = document.querySelectorAll('.path');

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
      });

      const text = document.querySelector('.title .letters');

      // Wrap every letter in a span
      text.outerHTML = DOMTextEffectUtils.wrapLetters(text);

      const textTarget = document.querySelector('.title');
      const lineTarget = document.querySelector('.title .line');
      const lettersTarget = document.querySelector('.title .letters');
      const letterTargets = document.querySelectorAll('.title .letter');

      DOMTextEffectUtils.wrapTitleText(text, lettersTarget, letterTargets);

      window.addEventListener('resize', DOMTextEffectUtils.rewrapTitleText.bind(this, text, lettersTarget, letterTargets));

      let timeline = anime.timeline({loop: true});

      timeline.add({
        targets: lineTarget,
        scaleY: [1, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700
      })
        .add({
          targets: lineTarget,
          scaleY: [1, 1],
          opacity: [1, 0],
          easing: 'easeOutExpo',
          duration: 300
        })
        .add({
          targets: letterTargets,
          scale: [1.5, 1],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 150,
          //offset: '-=775',
          delay: (el, i) => {
            return letterTargets.length * (i + 1)
          }
        })
        .add({
          targets: lettersTarget,
          scaleY: [1, 1],
          opacity: [1, 0],
          easing: 'easeOutExpo',
          duration: 700,
          delay: 10000
        });

      const flipCardSelector = '.service-detail-card-inner';
      const flipCardsContent = document.querySelectorAll(flipCardSelector);

      this.initFlipCards(
        flipCardsContent,
        '.service-detail-card-front',
        '.service-detail-card-back'
      );
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

  /* TODO: This is ripped clean it up */
  .title {
    font-weight: 900;
  }

  .title .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .title .line {
    opacity: 0;
    position: absolute;
    left: -1em;
    height: auto;
    width: 1rem;
    transform-origin: 0 50%;
  }

  .title .line svg {
    height: 1.7em;
    -webkit-filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.666));
    filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.666));
  }

  .title .letter {
    display: inline-block;
    line-height: 1em;
  }

  @keyframes blink {
    50% {
      opacity: 0.0;
    }
  }

  @-webkit-keyframes blink {
    50% {
      opacity: 0.0;
    }
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

  .service-detail-card-front {
  }

  .service-detail-card-back {
    display: none;
    transform: rotateY(180deg);
  }
</style>


<style lang="scss">
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
    object-fit: fill;
  }

  /*.service-detail-card-top::before {
    content: '.';
    color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: radial-gradient(black 65%, transparent 25%);
	  background-size: 2px 2px;
  }*/

  .service-detail-card-top {
    &.fixed-height-mobile {
      min-height: 50vh;
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

  @media screen and (max-width: 40em) {
    .service-detail-card-top {
      &.fixed-height-mobile {
        .service-detail-card-front {
          top: 100px !important; /* Override inline JS style, flip is done via component */
        }
      }
    }
  }

  @media screen and (min-width: 40em) {
    .video-block-bg {
      border: 1px solid white;
    }

    .service-detail-card-inner {
      min-height: auto;
    }

    .shift-section-up > div {
      position: relative;
      top: -100px;
      z-index: 2;
    }

    .shift-section-up + .shift-section-up {
      margin-bottom: -100px;
      border-bottom: 1px solid white;
    }
  }

  .guitar-block {
    width: 60%;
  }
</style>
