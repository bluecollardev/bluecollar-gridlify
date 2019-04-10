<template>
  <Layout>
    <Header/>
    <section-block-layout02-col01
      title="How does it work?"
      subtitle=""
      description="It&rsquo;s simple. We build web pages with the latest JAMStack and AMP HTML technology, optimized to deliver a superior mobile experience and higher conversion rates. Blue Collar sites offer blazing fast loading speeds favored by major platforms like Google, Facebook, and Twitter.  Accelerated mobile sites are without a doubt the wave of the future &ndash; contact us today to learn more."
      link="/services"
      linkText="Learn More"
      image="/images/hero-michael.png"
      caption="Sean Hamilton"
      subCaption="Principal Architect, Blue Collar"
    />

    <section id="websites" class="lg-flex pad-top">
      <div class="sm-flex flex-center flex-justify-center flex-basis-third">
        <div class="content-block">
          <div class="space-bottom-half">
            <p class="g-pstyle9">Accelerated<br />Mobile Websites</p>
          </div>
          <div>
            <p>Your website will be built with AMP HTML coding &ndash; increasing load speed of mobile pages by up to 85% compared to traditional HTML pages.</p>

            <p>Blue Collar goes beyond traditional &lsquo;responsive&rsquo; web design. We build next-generation sites for businesses with mobile-focused digital marketing in mind.</p>
          </div>
          <div class="action-link-block">
            <a class="action-link space-top g-pstyle3" href="/contact">Get Started</a>
          </div>
        </div>
      </div>
      <div class="sm-flex flex-center flex-justify-center flex-basis-two-thirds">
        <div class="sm-flex flex-column">
          <div class="sm-flex flex-start height-third">
            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half">
                  <p class="g-pstyle9">Your website, your brand</p>
                </div>
                <div>
                  <p>Your site reflects your unique vision for your brand. We will create a highly polished website that represents you and reflects your values.</p>
                </div>
              </div>
            </div>
            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half">
                  <p class="g-pstyle9">All the support you need</p>
                </div>
                <div>
                  <p>We offer ongoing monthly support to continually improve your online business. No advanced technical knowledge of coding is required on your end &ndash;  your site&rsquo;s performance is continually monitored, and we are always here to help!</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-bc-blue sm-flex flex-center flex-justify-center pad-top">
            <div class="content-block space-all">
              <div class="space-bottom-half">
                <p class="g-pstyle6">Instant.  Everywhere.</p>
              </div>
              <div>
                <p class="g-pstyle7">For many, reading on the mobile web is a slow, clunky and frustrating experience - but it doesn&rsquo;t have to be that way.  The Accelerated Mobile Pages (AMP) Project is an open source initiative that embodiees the vision that publishers can create mobile optimized content once and have it load instantly everywhere. </p>
              </div>
            </div>
            <img src="/images/accelerated-mobile-pages.png" />
          </div>
        </div>
      </div>
    </section>

    <section class="hero-section bg-hero-grey sm-flex pad-top">
      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="relative flex-basis-half">
        <img class="banner-image right" src="/images/hero-old-businessman.png" />
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
    </section>
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
      }
    }
  }
</script>
