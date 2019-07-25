<template>
  <Layout>
    <Header/>
    <section class="hero-section bg-hero-grey sm-flex pad-top">
      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="hero-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2">Pricing suited to your business needs</p>
            </div>
            <div class="action-link-block">
              <a class="action-link space-top g-pstyle3" href="/contact">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="relative flex-basis-half">
        <img class="banner-image right" src="/images/hero-julia.png" alt="" />
        <!--<div class="figure-caption figure-caption-right bg-bc-blue g-hero">
          <p class="g-pstyle4">Julia</p>
          <p class="g-pstyle5">Onboarding at Blue Collar</p>
        </div>-->
      </div>
    </section>
    <pricing
      :testimonialContent="testimonialContent"
      :pricingContent="pricingContent"
    />
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
  import Pricing from '~/components/pricing/Pricing.vue';

  // Import static data
  import HeroData from '~/data/Hero.yml';
  import PricingData from '~/data/Pricing.yml';
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
      Pricing
    },
    computed: {
      heroContent() {
        return HeroData;
      },
      pricingContent() {
        return PricingData;
      },
      testimonialContent() {
        return TestimonialData;
      }
    }
  }
</script>

<style>
  .pricing-switcher-item {
    cursor: pointer;
  }

  .pricing-switcher-item.is-active {
    border-right: 1px solid rgba(255,255,255,0.15);
    border-left: 1px solid rgba(255,255,255,0.15);
    background: #33587a;
  }

  .bg-bc-blue .g-pstyle11 a,
  .bg-bc-blue .g-pstyle11 {
    color: white;
  }
</style>
