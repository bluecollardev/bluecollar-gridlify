<template>
  <Layout>
    <Header/>
    <!--<section class="hero-section bg-bc-blue sm-flex pad-top height-two-thirds">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2 text-center-force">Build Local. Build Blue Collar.</p>
            </div>
            <div class="g-banner">
              <p>Blue Collar delves in the business of custom software development and web design, employing <strong>local, solution orientated professionals</strong>. Our passion is to innovate new solutions for the mobile web and to always provide value to those who seek it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <section class="hero-section bg-hero-grey sm-flex flex-column">
      <!--<div class="sm-flex flex-column flex-center flex-justify-stretch flex-basis-two-thirds">
        <div class="sm-flex space-all">
          <div class="sm-flex flex-center">
            <div class="space-bottom">
              <p class="text-center g-pstyle2">
            <span class="md-hide lg-hide">
              <span class="no-wrap">Blue Collar builds next-gen</span>
              <br />
              <span class="no-wrap">solutions for the mobile</span>
              <br />
              <span class="no-wrap">web and social media</span>
            </span>
                <span class="xs-hide sm-hide">
              <span class="no-wrap">Blue Collar builds next-generation solutions </span>
              <br />
              <span class="no-wrap">for the mobile web and social media</span>
            </span>
              </p>
            </div>
          </div>
        </div>
      </div>-->
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
       <img class="image-fill banner-image" src="/images/get-started-feature-image.png" alt="" />
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
                <img class="bg-white image-fill" src="/images/lucas-lopatka-profile.png" alt="" />
                <div class="pad-all">
                  <div class="space-bottom-half g-help-with-digital-marketing">
                    <p class="g-pstyle9 text-center">Lucas Lopatka, B. Sc.</p>
                    <p class="text-center">Technical Director</p>
                  </div>
                  <div class="g-help-with-digital-marketing">
                    <p>Michael has made a career of creating innovative and impactful solutions for clients, specializing in e-commerce, data and API integrations, and mobile technology. As the founder of Blue Collar, he leads the team’s development and creative efforts.</p>
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
                <img class="bg-white image-fill" src="/images/businessman-580b585b2edbce24c47b29f8.png" alt="" />
                <div class="pad-all">
                  <div class="space-bottom-half g-help-with-digital-marketing">
                    <p class="g-pstyle9 text-center">Chris Shannon, MBA</p>
                    <p class="text-center">Marketing Director</p>
                  </div>
                  <div class="g-help-with-digital-marketing">
                    <p>Chris co-founded Blue Collar after a successful career in product managment for real estate software and digital marketing strategy. Chris brings over 10 years of marketing experience to his clients, combined with deep knowledge of the latest social media technology and trends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <section class="services lg-flex">
      <div class="sm-flex flex-center flex-justify-center flex-basis-half bg-bc-blue">
        <div class="content-block">
          <content-block-layout
            className="pad-top"
            title="Your Partner for the Future"
            description="Blue Collar partners with businesses to modernize their digital tool kit for the paradigm shift currently underway.

As of 2018, it was found 58% of site visitors were accessing content through mobile devices. The world is digitizing at an accelerated rate, moving away from traditional HTML websites to a system of content pages shared across social media platforms and mobile devices.

For those businesses that adapt to this shift and adopt a modernized tool kit, there is a larger percentage of success. But the road to efficient digitizing can be arduous and is likely to create business gaps for our clients. Blue Collar strives to create solutions for these gaps by being at the forefront of these new technologies and ensures that our client receives the utmost value from our services."
            link="/"
            linkText="Back to Home"
          />
        </div>
      </div>

      <div
        v-if="getTestimonial(0)"
        class="bg-light-grey sm-flex flex-column flex-center flex-basis-half pad-top bg-white">
        <testimonial-block-layout
          className="space-top"
          reviewedBy="Lucas Lopatka"
          position="Solutions Architect"
          organization="Welcome to Blue Collar! I'm Lucas, and I am a Full-Stack Solutions Architect with 15 years of experience designing and building custom software applications. I design, wireframe, prototype, and develop mobile, hybrid and progressive apps. I also architect, implement and deploy scalable, cloud-based RESTful services and multi-tier micro-services for clients of all sizes located in Canada and abroad."
          image="/images/company/me-ski.jpg"
        />
        <div
          class="homepage-hero-action action-link-block text-center space-bottom">
          <a class="action-link space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>
        </div>
      </div>
    </section>

    <!-- REPEAT and alternate -->
    <section class="services lg-flex">
      <div
        v-if="getTestimonial(0)"
        class="bg-light-grey sm-flex flex-column flex-center flex-basis-half pad-top bg-white">
        <testimonial-block-layout
          className="space-top"
          reviewedBy="Taz Master"
          position="Enterprise Solutions"
          organization="I coach with those who desire to thrive in a diverse and inclusive workplace, those ready to explore their unconscious bias, and those who want to create a positive impact worldwide. Should you choose Blue Collar as your navigator, be assured your potential will become your reality, as will your impact on the world."
          image="/images/company/me-ski.jpg"
        />
        <div
          class="homepage-hero-action action-link-block text-center space-bottom">
          <a class="action-link space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>
        </div>
      </div>

      <div class="sm-flex flex-center flex-justify-center flex-basis-half bg-bc-blue">
        <div class="content-block">
          <content-block-layout
            className="pad-top pad-bottom"
            title="Connect With Local IT Pros"
            description="In conjunction with partnering with the business landscape globally, Blue Collar provides <strong>training for underprivileged youth</strong> – we believe <strong>coding is the future</strong> and we want to empower youth to make their footprint in this vast world."
            link="/"
            linkText="Back to Home"
          />
        </div>
      </div>
    </section>

    <!--<section class="lg-flex">
      <div
        v-if="getTestimonial(1)"
        class="bg-light-grey flex flex-column flex-center flex-basis-half pad-top">
        <testimonial-block-layout
          className="space-top space-bottom"
          :testimonial="getTestimonial(1).testimonial"
          :reviewedBy="getTestimonial(1).reviewedBy"
          :position="getTestimonial(1).position"
          :organization="getTestimonial(1).organization"
          :image="getTestimonial(1).image"
        />
      </div>

      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="content-block">
          <content-block-layout
            className="pad-top"
            v-if="getService(3).linkText"
            :title="getService(3).title"
            :description="getService(3).description"
            :link="getService(3).link"
            :linkText="getService(3).linkText"
          />

          <content-block-layout
            className="pad-top"
            v-if="getService(4).linkText"
            :title="getService(4).title"
            :description="getService(4).description"
            :link="getService(4).link"
            :linkText="getService(4).linkText"
          />

          <content-block-layout
            className="pad-top pad-bottom"
            v-if="getService(5).linkText"
            :title="getService(5).title"
            :description="getService(5).description"
            :link="getService(5).link"
            :linkText="getService(5).linkText"
          />
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
  import About from '~/components/Home.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';

  // Import generic component layouts
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
      About,
      Blog,
      Contact,
      Footer,
      // Inject generic component layouts
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
