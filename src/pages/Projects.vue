<template>
  <Layout>
    <Header/>
    <div class="notifications" v-if="displayDisclaimer">
      <img class="under-construction xs-hide" src="/images/under-construction.svg" alt="" />
      <span class="notification">
        <span><span class="disclaimer-icon">ⓘ</span> <strong>Disclaimer!</strong> My portfolio is under construction. Projects details may not be 100% accurate or complete. Please check again in a couple days.</span>
        <button class="hide-notification" aria-label="Hide notification" v-on:click="hideDisclaimer()">&times;</button>
      </span>
    </div>
    <section class="hero-section bg-bc-blue sm-flex pad-top pad-bottom-2x height-full angle">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom space-top-2x">
              <p class="g-pstyle2 text-center-force">Client Projects</p>
              <p class="g-pstyle1 text-center-force">Note: Only Blue Collar contract roles are listed here. To view my full work history <a style="text-decoration: underline; color: white;" href="/lucas-profile" alt="View Lucas' profile">click here</a>.</p>
            </div>
            <img class="lozad" src="/images/portfolio/bc-showcase-responsive.png" alt="" />
            <!--<div class="homepage-hero-action action-link-block sm-hide md-hide lg-hide text-center">
              <a class="action-link space-bottom g-pstyle3" href="/projects#portfolio">Scroll Down</a>
            </div>
            <div class="homepage-hero-action action-link-block xs-hide text-center">
              <a class="action-link space-top g-pstyle3" href="/projects#portfolio">Scroll Down</a>
            </div>-->
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio" class="hero-section portfolio-items clearfix">
      <div class="vertical-line"></div>
      <div v-if="portfolioItems instanceof Array && portfolioItems.length > 0" class="timeline clearfix pad-top-2x">
        <portfolio-item
          v-for="project in portfolioItems"
          v-if="project.isPublic"
          :key="project.projectName"
          :project="project"
          :testimonial="getTestimonialById(project.testimonialId)"
        />
      </div>
    </section>
    <Footer/>
  </Layout>
</template>

<script>
  // Image lazy loader, just add class="lozad" to elements
  import lozad from 'lozad';

  // Import components
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';

  // Import generic component layouts
  import SectionBlockLayout02Col01 from '~/components/layouts/SectionBlockLayout02Col01.vue';
  import SectionBlockLayout02Col02 from '~/components/layouts/SectionBlockLayout02Col02.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';
  import PortfolioItem from '~/components/portfolio/PortfolioItem.vue';

  // Import static data
  import HomeData from '~/data/Home.yml';
  import HeroData from '~/data/Hero.yml';
  import GeneralData from '~/data/General.yml';
  import TestimonialData from '~/data/Testimonial.yml';
  import PortfolioData from '~/data/Portfolio.yml';

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  export default {
    components: {
      // Inject components
      Header,
      Footer,
      // Inject generic component layouts
      SectionBlockLayout02Col01,
      SectionBlockLayout02Col02,
      ContentBlockLayout,
      TestimonialBlockLayout,
      PortfolioItem
    },
    data() {
      return {
        pricingFor: 'WEB_SOFTWARE',
        displayDisclaimer: true
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
      hideDisclaimer() {
        this.displayDisclaimer = false
      },
      /**
       * Allows the browser to choose an appropriate resolution image by using srcset with x-descriptors and without sizes.
       * @param path
       */
      getImagesSrcSet(path) {
        const parts = path.split('.');
        let ext = parts.pop();
        let base = parts.join('.');


        // Load srcset small to large
        return `${base}-small.${ext} 100vw, ${base}-small@2x.${ext} 100vw 2x, ${base}-small@3x.${ext} 100vw 3x, ${base}.${ext} 1280px, ${base}@2x.${ext} 1280px 2x, ${base}@3x.${ext} 1280px 3x`;
      },
      getFormattedDate(project) {
        const startDate = new Date(project.startDate);
        const endDate = new Date(project.endDate);
        // Normalize dates, we don't care about exact time anyway
        startDate.setHours(0,0,0,0);
        endDate.setHours(0,0,0,0);

        // TODO: Display a range for long term projects?
        return `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
      },
      getFormattedStartDate(project) {
        const startDate = new Date(project.startDate);
        const endDate = new Date(project.endDate);
        // Normalize dates, we don't care about exact time anyway
        startDate.setHours(0,0,0,0);
        endDate.setHours(0,0,0,0);

        // TODO: Display a range for long term projects?
        return `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
      },
      getFormattedEndDate(project) {
        const startDate = new Date(project.startDate);
        const endDate = new Date(project.endDate);
        // Normalize dates, we don't care about exact time anyway
        startDate.setHours(0,0,0,0);
        endDate.setHours(0,0,0,0);

        // TODO: Display a range for long term projects?
        return `${months[endDate.getMonth()]} ${endDate.getFullYear()}`;
      },
      getTestimonial(idx) {
        let items = this.testimonialContent.items;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      getTestimonialById(id) {
        if (!id) return null;

        let items = this.testimonialContent.items.filter(item => {
          return item.id === id;
        });

        if (items instanceof Array && items.length > 0) {
          return items[0];
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
    },
    mounted() {
      const observer = lozad(); // lazy loads elements with default selector as '.lozad'
      observer.observe();
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
  $timeline-content-description-color: #333;

  .clearfix {
    clear: both;
    overflow: visible;
  }

  .clearfix::after {
    content: '';
    clear: both;
    display: table;
  }

  .vertical-line {
    width: 4px;
    background-color: #DFDFDF;
    height: 100%;
    position: absolute;
    left: 50%;
    z-index: 2;
  }

  @media screen and (max-width: 40em) {
    .vertical-line {
      display: none;
    }
  }

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

  /* _timeline.css */
  .timeline {
    position: relative;
    max-width: 50%;
    margin: 0 auto;

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
      z-index: 0;
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

    &__item__content__subtitle {
      margin: 0;
      padding: 0;
      margin-bottom: 5px;
      font-size: 16px;
      color: $timeline-content-title-color;
    }

    &__item__content__description {
      margin: 1rem 0 0;
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
      /*margin-bottom: 100px;*/
      margin-bottom: 30px;
      position: relative;

    }
  }

  @media screen and (max-width: 40em) {
    .timeline {
      position: relative;
      max-width: 100%;
      margin: 0 auto;
    }

    .timeline__item {
      &__content__title {
        font-size: 16px;
      }

      &__content__subtitle {
        font-size: 14px;
      }

      .timeline__item__content {
        width: auto;
        float: none;
        margin-left: auto;
        margin-right: auto;
        left: auto;
        right: auto;
        border-radius: 0;
      }

      .timeline__item__date {
        left: 1rem; /* Line up away from edges */
        display: none; /* Disable, it's just clutter on mobile */
      }
    }
  }

  @media screen and (min-width: 40em) {
    .portfolio-items {
      background-color: #f2f1ed; /* bg-light-grey */
    }

    .timeline {
      position: relative;
      max-width: 50%;
      margin: 0 auto;
      clear:both;

      &::before {
        /*content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 4px;
        background-color: #DFDFDF;
        z-index: 0;*/
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

      &__item {
        /*margin-bottom: 100px;*/
        margin-bottom: 30px;
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
          margin-left: -70px;
          top: 27.5px;
        }


        .timeline__item__content {
          float: left;
          left: -45%;
          right: auto;
          padding: 30px 30px 25px 30px;
          margin-left: 30px;
        }

        .project-image img {
          position: absolute;
          top: -5%;
          left: 115%;
          right: auto;
        }
      }

      &__item:nth-child(2n) {
        .timeline__item__date {
          right: 50%;
          left: auto;
          margin-right: -70px;
          top: 27.5px;
        }

        .timeline__item__content {
          float: right;
          right: -45%;
          left: auto;
          padding: 30px 30px 25px 30px;
          margin-right: 30px;
        }

        .project-image img {
          position: absolute;
          top: -5%;
          right: 115%;
          left: auto;
        }
      }

      @for $i from 1 through 42 {
        &__item:nth-child(#{$i}),
        &__item_date:nth-child(#{$i}) {
          /*top: calc(#{$i} * 20vh);*/
        }
      }
    }
  }
</style>
