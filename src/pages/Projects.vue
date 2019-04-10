<template>
  <Layout>
    <Header/>
    <section class="hero-section bg-hero-grey sm-flex pad-top">
      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="hero-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2">Our Portfolio</p>
            </div>
            <div class="action-link-block">
              <a class="action-link space-top g-pstyle3" href="/contact">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="relative flex-basis-half">
        <img class="banner-image right" src="/images/hero-julia.png"/>
        <!--<div class="figure-caption figure-caption-right bg-bc-blue g-hero">
          <p class="g-pstyle4">Julia</p>
          <p class="g-pstyle5">Onboarding at Blue Collar</p>
        </div>-->
      </div>
    </section>
    <section class="clearfix bg-light-grey">
      <div v-if="portfolioItems instanceof Array && portfolioItems.length > 0" class="timeline clearfix" >
        <div v-for="project in portfolioItems" class="timeline__item clearfix">
          <div class="timeline__item__date">{{ new Date(project.startDate).getMonth() }} <strong>{{ new Date(project.startDate).getYear() }}</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              {{ project.projectName }}
            </h3>
            <h4 class="timeline__item__content__title">
              Client: {{ project.client }}
            </h4>
            <p class="timeline__item__content__description">
              {{ project.description }}
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--html5"></span>
              <span class="icon icon--css3"></span>
              <span class="icon icon--javascript"></span>
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
  import PortfolioData from '~/data/Portfolio.yml';

  export default {
    components: {
      // Inject components
      Header,
      Footer,
      // Inject generic component layouts
      HeroLayout02Col,
      SectionBlockLayout02Col01,
      SectionBlockLayout02Col02,
      ContentBlockLayout,
      TestimonialBlockLayout,
    },
    data() {
      return {
        pricingFor: 'WEB_SOFTWARE'
      }
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
      portfolioContent() {
        return PortfolioData;
      },
      portfolioItems() {
        return PortfolioData.items;
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
      },
      setPricing(pricing) {
        this.pricingFor = pricing;
      },
      pricingIsActive(pricing) {
        return this.pricingFor === pricing;
      }
    }
  }
</script>

<style lang="scss">
  /* Google Fonts */
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,700');

  /* _variables.css */
  $primary-font: 'Ubuntu', sans-serif;
  $main-white: #fff;
  $main-gray: #f0f0f0;
  $timeline-line-color: #DFDFDF;
  $timeline-date-color: #adadad;
  $timeline-content-title-color: #464545;
  $timeline-content-description-color: #A7A7A6;

  /* _page-section.css */
  .page-section {
    padding: 50px 0;

    &--gray {
      background-color: #f0f0f0;
    }
  }

  /* _section-title.css */
  .section-title {
    text-align: center;
    font-size: 32px;
    font-weight: 300;
    margin: 0 0 60px 0;

    &--gray {
      color: #9D9DA6;
    }
  }

  /* _sprite.css */
  .icon {
    /*background-image: url('http://mehmetguler.xyz/codepen/responsive-timeline/sprite-fbf7a24a.svg');*/
    display: inline-block;
  }

  .no-svg .icon {
    /*background-image: url('http://mehmetguler.xyz/codepen/responsive-timeline/sprite-fbf7a24a.png');*/
  }

  .icon--content-logo {
    width: 74px;
    height: 69px;
    background-position: 0 0;
  }

  .icon--css3 {
    width: 24px;
    height: 27px;
    background-position: 92.5% 39.130434782608695%;
  }

  .icon--html5 {
    width: 25px;
    height: 27px;
    background-position: 0 100%;
  }

  .icon--javascript {
    width: 25px;
    height: 27px;
    background-position: 31.645569620253166% 100%;
  }

  .icon--sketch {
    width: 30px;
    height: 27px;
    background-position: 100% 0;
  }

  /* _timeline.css */
  .timeline {
    position: relative;
    padding: 100px 0;
    max-width: 50%;
    margin: 0 auto;
    height: 1895vh;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 4px;
      height: 1895vh;
      background-color: $timeline-line-color;
    }

    &__item__date {
      background-color: $timeline-line-color;
      font-weight: 300;
      width: 140px;
      position: absolute;
      padding: 10px;
      top: -18px;
      transition: all .3s ease-out;
      text-align: center;
      color: $timeline-date-color;
      border-radius: 6px;
      font-size: 14px;
      z-index: 1;
    }

    &__item__date strong {
      font-weight: 700;
    }

    &__item__content {
      width: 80%;
      background: $main-white;
      border-radius: 6px;
      transition: all .3s ease-out;
      padding: 30px 30px 25px 30px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 30px;
        right: -20px;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid $main-white;
      }
    }

    &__item__content__logo {
      text-align: center;
      margin-bottom: 25px;
    }

    &__item__content__title {
      margin: 0;
      padding: 0;
      margin-bottom: 5px;
      font-size: 20px;
      color: $timeline-content-title-color;
    }

    &__item__content__description {
      margin: 0;
      padding: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
      color: $timeline-content-description-color;
    }

    &__item__content__techs {
      margin-top: 15px;
      text-align: right;
    }

    &__item {
      margin-bottom: 100px;
      position: relative;

      &:nth-child(2n) {
        .timeline__item__content {
          &::before {
            left: -20px;
            border-right: 20px solid $main-white;
            border-left: 0;
          }
        }
      }

      &:last-child {
        margin-bottom: 0;
      }

    }

    &__item:nth-child(1n) {
      .timeline__item__date {
        left: 50%;
        right: auto;
        margin-left: 30px;
        top: 27.5px;
      }


      .timeline__item__content {
        float: left;
        left: -50%;
        right: auto;
        padding: 30px 30px 25px 30px;
        margin-left: 30px;
      }
    }

    &__item:nth-child(2n) {
      .timeline__item__date {
        right: 50%;
        left: auto;
        margin-right: 30px;
        top: 27.5px;
      }

      .timeline__item__content {
        float: right;
        right: -50%;
        left: auto;
        padding: 30px 30px 25px 30px;
        margin-right: 30px;
      }
    }

    @for $i from 1 through 42 {
      &__item:nth-child(#{$i}),
      &__item_date:nth-child(#{$i}) {
        top: calc(#{$i} * 25vh);
      }
    }
  }
</style>
