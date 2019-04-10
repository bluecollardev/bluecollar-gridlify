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
      subCaption="Software Architect, Blue Collar"
    />

    <section id="landing-pages" class="lg-flex">
      <div class="sm-flex flex-center flex-justify-center flex-basis-third">
        <div class="content-block">
          <div class="space-bottom-half">
            <p class="g-pstyle9">Accelerated<br />Landing Pages</p>
          </div>
          <div>
            <p>Your website will be built with AMP HTML coding &ndash; increasing load speed of mobile pages by up to 85% compared to traditional HTML pages.</p>

            <p>Blue Collar goes beyond traditional &lsquo;responsive&rsquo; web design.  We build next-generation sites for businesses with mobile-focused digital marketing in mind.</p>
          </div>
          <div class="action-link-block">
            <a class="action-link space-top g-pstyle3" href="/contact">Get Started</a>
          </div>
        </div>
      </div>
      <div class="sm-flex flex-center flex-justify-center flex-basis-two-thirds">
        <div class="sm-flex flex-column">
          <div class="sm-flex flex-center flex-justify-center">
            <div class="flex-basis-half">
              <div class="space-all">
                <p class="g-pstyle9 bc-red">Includes</p>

                <p>Accelerated Mobile Pages (AMPs)</p>
                <p>Instant Experiences (Facebook)</p>
                <p>Embedded Messenger Buttons</p>
                <p>Optimization for Social Media</p>
              </div>
            </div>
            <div class="flex-basis-half">
              <div class="space-all">
                <img src="/images/accelerated-mobile-pages-info-graphic.png" />
              </div>
            </div>
          </div>

          <div class="sm-flex">
            <div class="space-all">
              <div class="space-bottom-half">
                <p class="g-pstyle9">Blazing fast speeds.</p>
              </div>
              <div>
                <p>Did you know that nearly half of mobile users will navigate away from a page that takes longer than 5 seconds to load?  Slow loading mobile pages result in a poor user experience - which is why companies like Google invented AMPs (accelerated mobile pages).  Blue Collar uses the latest technology to make your pages load at blazing speeds on all mobile devices.</p>
              </div>
            </div>
            <div class="space-all">
              <div class="space-bottom-half">
                <p class="g-pstyle9">Built with Social Media in Mind</p>
              </div>
              <div>
                <p>Our landing pages are built with social media in mind, using layouts and content optimized for Facebook, Twitter, Instagram, and other major platforms with mobile apps.  This ensures your posts that are linked to landing pages show up on peoples&rsquo; feeds at a higher rate &ndash; generating more engagement with your online business.</p>
              </div>
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
