<template>
  <Layout>
    <Header/>
    <section class="hero-section bg-hero-grey sm-flex pad-top height-half">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2 text-center-force">Our Vision</p>
            </div>
            <div class="g-banner">
              <p>At Firebrand we understand that the online world is undergoing a paradigm shift away from traditional HTML websites to a system of content pages shared across social media platforms and mobile devices. Already, more people on earth view their online content on mobile devices than on desktop browsers. We recognize the tremendous opportunities available for businesses who adapt to this shift and adopt tools that will enable them to take advantage of these new platforms and devices. It is our goal to be at the forefront of these new technologies and make use of them to deliver value to our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero-section bg-hero-grey sm-flex flex-column pad-bottom-2x">
      <!--<div class="sm-flex flex-column flex-center flex-justify-stretch flex-basis-two-thirds">
        <div class="sm-flex space-all">
          <div class="sm-flex flex-center">
            <div class="space-bottom">
              <p class="text-center g-pstyle2">
            <span class="md-hide lg-hide">
              <span class="no-wrap">Firebrand builds next-gen</span>
              <br />
              <span class="no-wrap">solutions for the mobile</span>
              <br />
              <span class="no-wrap">web and social media</span>
            </span>
                <span class="xs-hide sm-hide">
              <span class="no-wrap">Firebrand builds next-generation solutions </span>
              <br />
              <span class="no-wrap">for the mobile web and social media</span>
            </span>
              </p>
            </div>
          </div>
        </div>
      </div>-->
      <div class="hero-section bg-hero-grey sm-flex">
        <div class="relative flex-basis-half sm-flex flex-justify-end">
          <div class="content-block xs-no-space-top">
            <img class="banner-image right" src="/images/woman-in-casual-office_4460x4460.jpg" />
          </div>
        </div>

        <div class="sm-flex flex-center flex-justify-start flex-basis-half">
          <div class="content-block">
            <div class="space-all">
              <div class="space-bottom-half g-services">
                <p>Firebrand has been in the business of web design since 2008. Starting as a web design agency building sites for clients in Canada, the US, and Asia, we have evolved over time.</p>
                <p>&nbsp;</p>
                <!--<p>Today our focus is exclusively on building next-generation accelerated mobile page web solutions for clients who want to share their content with the ever growing global mobile audience, and take advantage of the tremendous opportunities for highly targeted marketing now available on social media platforms like Facebook.</p>
                <p>&nbsp;</p>-->
                <p>Whether it’s parsing MLS listing data to AMP landing pages, or running creative social media campaigns for e-commerce businesses, we are obsessed with innovating new solutions for the mobile web and continually bringing new value to our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--<section class="lg-flex bg-hero-grey pad-top">
      <div class="sm-flex flex-center flex-basis-half">
        <div>
          <div class="sm-flex flex-wrap">
            <div class="space-all no-space-bottom g-get-started">
              <p class="g-pstyle12">How to get started?</p>
            </div>
          </div>

          <div class="md-flex flex-wrap">
            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half g-get-started">
                  <p class="g-pstyle9" v-html="getProcessStep(0).title"></p>
                </div>
                <div class="g-get-started">
                  <p v-html="getProcessStep(0).description"></p>
                </div>
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half g-get-started">
                  <p class="g-pstyle9" v-html="getProcessStep(1).title"></p>
                </div>
                <div class="g-get-started">
                  <p v-html="getProcessStep(1).description"></p>
                </div>
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half g-get-started">
                  <p class="g-pstyle9" v-html="getProcessStep(2).title"></p>
                </div>
                <div class="g-get-started">
                  <p v-html="getProcessStep(2).description"></p>
                </div>
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half g-get-started">
                  <p class="g-pstyle9" v-html="getProcessStep(3).title"></p>
                </div>
                <div class="g-get-started">
                  <p v-html="getProcessStep(3).description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-basis-half">
       <img class="image-fill banner-image" src="/images/get-started-feature-image.png" />
      </div>
    </section>-->

    <!--<section class="hero-section bg-hero-grey sm-flex flex-column pad-top">
      <div class="sm-flex flex-column flex-center flex-justify-stretch flex-basis-two-thirds">
        <div class="sm-flex space-all">
          <div class="sm-flex flex-center">
            <div class="space-bottom">
              <p class="text-center g-pstyle2">
                <span class="no-wrap">The Founders</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-section bg-light-grey sm-flex flex-justify-center pad-bottom">
        <div class="sm-flex flex-center flex-justify-start flex-basis-half">
          <div class="space-all">
            <div class="sm-flex flex-column flex-end">
              <div class="content-block">
                <img class="bg-white image-fill" src="/images/lucas-lopatka-profile.png" />
                <div class="pad-all">
                  <div class="space-bottom-half g-help-with-digital-marketing">
                    <p class="g-pstyle9 text-center">Lucas Lopatka, B. Sc.</p>
                    <p class="text-center">Technical Director</p>
                  </div>
                  <div class="g-help-with-digital-marketing">
                    <p>Michael has made a career of creating innovative and impactful solutions for clients, specializing in e-commerce, data and API integrations, and mobile technology. As the founder of Firebrand, he leads the team’s development and creative efforts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm-flex flex-center flex-justify-start flex-basis-half">
          <div class="space-all">
            <div class="sm-flex flex-column flex-start">
              <div class="content-block">
                <img class="bg-white image-fill" src="/images/businessman-580b585b2edbce24c47b29f8.png" />
                <div class="pad-all">
                  <div class="space-bottom-half g-help-with-digital-marketing">
                    <p class="g-pstyle9 text-center">Chris Shannon, MBA</p>
                    <p class="text-center">Marketing Director</p>
                  </div>
                  <div class="g-help-with-digital-marketing">
                    <p>Chris founded Firebrand after a successful career in product managment for real estate software and digital marketing strategy. Chris brings over 10 years of marketing experience to his clients, combined with deep knowledge of the latest social media technology and trends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <Footer/>
  </Layout>
</template>

<script>
  // Import components
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import Portfolio from '~/components/Portfolio.vue';
  import About from '~/components/Home.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';

  // Import generic component layouts
  import HeroLayout02Col from '~/components/layouts/HeroLayout02Col.vue';
  import SectionBlockLayout02Col01 from '~/components/layouts/SectionBlockLayout02Col01.vue';
  import SectionBlockLayout02Col02 from '~/components/layouts/SectionBlockLayout02Col02.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  // Import static data
  import HomeData from '~/data/Home.yml';
  import HeroData from '~/data/Hero.yml';
  import GeneralData from '~/data/General.yml';
  import TestimonialData from '~/data/Testimonial.yml';

  export default {
    components: {
      // Inject components
      Header,
      Hero,
      Portfolio,
      About,
      Blog,
      Contact,
      Footer,
      // Inject generic component layouts
      HeroLayout02Col,
      SectionBlockLayout02Col01,
      SectionBlockLayout02Col02,
      ContentBlockLayout,
      TestimonialBlockLayout,
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
    },
    methods: {
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
      getProcessStep(idx) {
        let items = this.homeContent.processSteps;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      }
    }
  }
</script>
