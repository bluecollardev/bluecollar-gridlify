<template>
  <Layout>
    <Header/>
    <section class="hero-section bg-hero-grey sm-flex pad-top">
      <div class="sm-flex flex-column flex-center flex-justify-stretch flex-basis-two-thirds">
        <div class="sm-flex space-all no-space-bottom">
          <div class="sm-flex flex-center">
            <div class="space-bottom">
              <p class="text-center g-pstyle2">
              <span >
                <span class="no-wrap">AMP-lify your</span>
                <br />
                <span class="no-wrap">digital marketing with</span>
                <br />
                <span class="no-wrap">Firebrand</span>
              </span>
                <span class="xs-hide sm-hide">
              <span class="no-wrap">AMP-lify your digital marketing</span>
              <br />
              <span class="no-wrap">with Firebrand</span>
            </span>
              </p>
            </div>
          </div>
          <!-- Position relatively, or absolute positioning of the caption will fail -->
          <img class="banner-image right" src="/images/hero-michael.png" />
        </div>
      </div>

      <div class="sm-flex flex-center flex-justify-center flex-basis-third pad-bottom">
        <div class="space-all no-space-bottom">
          <div class="space-bottom-half g-services">
            <p class="g-pstyle8">Firebrand sets your online business apart with ultra fast-loading landing pages, and targeted branding that engages potential customers.</p>
          </div>
          <div class="g-services">
            <p class="g-pstyle10">Michael</p>
            <p class="g-pstyle10">Designer at Firebrand</p>
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
