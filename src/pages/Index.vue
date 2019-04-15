<template>
  <Layout>
    <Header/>
    <!--<Hero/>
    <Portfolio/>
    <About/>
    <Blog/>
    <Contact/>-->
    <hero-layout02-col02
      v-if="homepageHero"
      bgColor="bg-bc-blue"
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
    />
    <hero-layout02-col02
      v-if="servicesSection"
      :title="servicesSection.title"
      subtitle=""
      :description="servicesSection.description"
      :link="servicesSection.link"
      :linkText="servicesSection.linkText"
      :image="servicesSection.image"
      imageClass="home-page-banner-image"
      :caption="servicesSection.caption"
      :subCaption="servicesSection.subCaption"
      :flipX="true"
      :angle="false"
    >
      <div class="sm-flex flex-center flex-justify-center space-top-half">
        <div>
          <div class="md-flex flex-wrap">
            <div class="flex-basis-half">
              <div>
                <div class="space-bottom-half g-get-started">
                  <p><b>Strategy</b></p>
                  <ul class="bullets">
                    <li>Design Sprints</li>
                    <li>Product Simplification</li>
                    <li>User Testing</li>
                    <li>Deployment Strategy</li>
                  </ul>
                </div>
                <!--<div class="g-get-started">
                  <p>Traditional HTML used to build standard websites for desktop browsers will inevitably be replaced by mobile-first languages. Enter AMP, the open source project spearheaded by Google, which is changing the nature of webpages to a truly mobile-first experience. Blue Collar places this language at the heart of all our web projects.</p>
                </div>-->
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="space-left">
                <div class="space-bottom-half g-get-started">
                  <p><b>Design</b></p>
                  <ul class="bullets">
                    <li>Wireframing</li>
                    <li>Product Design</li>
                    <li>Icons & Illustration</li>
                    <li>UX Optimization</li>
                  </ul>
                </div>
                <!--<div class="g-get-started">
                  <p>In the era of big data, it makes sense to funnel data content into landing pages to provide accurate information to consumers. We are experts at taking MLS listing data, auto dealership data, e-commerce data, etc. and accurately funneling it into landing pages that our clients share with their customers across social media and web platforms.</p>
                </div>-->
              </div>
            </div>

            <div class="flex-basis-half">
              <div>
                <div class="space-bottom-half g-get-started">
                  <p><b>Build</b></p>
                  <ul class="bullets">
                    <li>iOS and Android Native</li>
                    <li>Native, Hybrid or PWA</li>
                    <li>Cross-Platform Builds</li>
                    <li>API Backends</li>
                  </ul>
                </div>
                <!--<div class="g-get-started">
                  <p>Image is everything. We produce stunning creative work that tells a story to your customer. When customers understand how associating with you can define who they are, they have a compelling reason to buy (and are likely willing to pay a higher price).</p>
                </div>-->
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="space-left">
                <div class="space-bottom-half g-get-started">
                  <p><b>Launch</b></p>
                  <ul class="bullets">
                    <li>Cloud or Private Cloud</li>
                    <li>Analytics & Testing</li>
                    <li>User Feedback</li>
                    <li>Iteration Planning</li>
                  </ul>
                </div>
                <!--<div class="g-get-started">
                  <p>Integrating new technological features for its own sake is rarely at the heart of creating real value for clients. Effective solutions require a deep understanding of marketing principles, in particular the behavior of audiences consuming digital content. We use data-driven analysis to measure and validate the effectiveness of all our marketing campaigns.</p>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </hero-layout02-col02>

    <section-block-layout02-col01
      bgColor="bg-bc-blue"
      title="Experience matters"
      subtitle=""
      description="Drawing on deep experience in solution design and combining it with great listening, we work closely with your team to define a solution for the business challenge at hand. Then, we infuse user feedback and priorities into every stage of the software development process."
      image="/images/hero-michael.png"
      :flipX="false"
    />

    <!--<section class="hero-section bg-light-grey sm-flex pad-top">
      <div class="relative flex-basis-half">
        <img class="lozad banner-image right" src="/images/hero-old-businessman.png" alt="" />
      </div>

      <div class="sm-flex flex-center flex-justify-start flex-basis-half">
        <div class="content-block">
          <div class="space-all">
            <div class="space-bottom-half g-services">
              <p class="g-pstyle8">Our previous website took forever to build and wasn&rsquo;t what we wanted.  Blue Collar had a perfect site up for us in no time.</p>
            </div>
            <div class="g-services">
              <p>Carl Stevens</p>
              <p>Ace Coffee Roasters</p>
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
  import HeroLayout02Col02 from '~/components/layouts/HeroLayout02Col02.vue';
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
      HeroLayout02Col02,
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
      servicesContent() {
        return HeroData
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
      servicesSection() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'services-hero';
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

<style>
  ul.bullets {
    list-style: square inside;
  }

  ul.bullets li {
    list-style: square inside;
  }
</style>
