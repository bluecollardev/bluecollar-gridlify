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
        <img class="banner-image right" src="/images/hero-julia.png" />
        <!--<div class="figure-caption figure-caption-right bg-bc-blue g-hero">
          <p class="g-pstyle4">Julia</p>
          <p class="g-pstyle5">Onboarding at Blue Collar</p>
        </div>-->
      </div>
    </section>
    <section class="clearfix">
      <div class="timeline">
        <div class="timeline__item">
          <div class="timeline__item__date">January <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Ideal Automotive Finance Solutions
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Interdynamix
            </h4>
            <p class="timeline__item__content__description">
              Ideal is a automotive fintech startup (incubated in-house by a company called Interdynamix) whose main product offering is a SaaS-style machine-learning enhanced Business Intelligence platform for automotive inventory holders, retailers, and lenders. Each platform ‘pod’ consists of a custom hybrid client-side app which communicates using RESTful APIs with headless web API service instances representing the inventory holders, retailers, and lenders to a particular organization. The distributed backends (API) are written in Java using Spring Boot and Hibernate, and communicate with each other using RabbitMQ message broker software; information is stored in PostgreSQL databases. SSO-style authentication is handled using Red Hat’s Keycloak.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--html5"></span>
              <span class="icon icon--css3"></span>
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">February <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              VEST Tablet & Kiosk Apps
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Video Entertainment Systems Technology Ltd.
            </h4>
            <p class="timeline__item__content__description">
              Video Systems Entertainment Technology (VEST) is an Edmonton company that provides self-serve program kiosks to (horse/harness/greyhound) racetracks and off-track-betting sites in Canada, the US and the Caribbean. Some of the products offered on the kiosks are full programs, profile sheets, singles races and IP sheets.

              At the behest of the LSE-listed (London Stock Exchange) Sportech PLC – one of VEST’s clients – I was contracted to develop a hybrid mobile application for deployment on tablets, Linux kiosks and smart televisions which replicates (and furthers) the functionality available in their existing kiosk system. These tablets are currently being deployed in multiple off-track-betting locations in the continental USA.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--sketch"></span>
              <span class="icon icon--css3"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">March <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Caffe Tech Data Bridge
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Caffe Tech 2004 Ltd.
            </h4>
            <p class="timeline__item__content__description">
              Caffe Tech is an Edmonton based importer and distributor of premium (primarily Italian and Swiss) commercial and home coffee equipment which provides many popular Albertan establishments with their restaurant and coffee making equipment.

              As Caffe Tech was expanding their business and opening multiple new locations, they needed an inventory management solution that would synchronize their QuickBooks Desktop / Online customers, inventory and stock levels, invoices, work orders and more with their existing e-commerce websites (Caffe Tech, Leva, ACE Coffee Roasters). I designed an event-driven software bridge, composed of an OAuth2 secured RESTful micro-service, and custom ‘client’ extensions for Magento and OpenCart, that automatically handled synchronization of all data across multiple installations and software systems using a combination of PHP, Slim, Doctrine ORM/DBAL, MySQL and the QuickBooks Online API and Desktop SDK.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--sketch"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Caffe Tech Wireless Point-Of-Sale
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Caffe Tech 2004 Ltd.
            </h4>
            <p class="timeline__item__content__description">
              Caffe Tech is an Edmonton based importer and distributor of premium (primarily Italian and Swiss) commercial and home coffee equipment which provides many popular Albertan establishments with their restaurant and coffee making equipment.

              Caffe Tech required a tablet-based point-of-sale app, supporting peripheral devices including Star Micronics point-of-sale equipment, that would integrate with their existing e-commerce/accounting APIs, and replace their existing PixelPoint point-of-sale systems. Supported peripheral devices included Star Micronics Bluetooth and Wireless cash drawers, ticket and receipt printers, and barcode scanners.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Phobulous Restaurant Website
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Phobulous Noodle House
            </h4>
            <p class="timeline__item__content__description">
              I designed a custom SPA-style mobile-friendly Asian-styled theme for their website featuring CSS animations and a custom menu component. A customized build of OpenCart is used on the backend for content and product management.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Leva Website
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Caffe Tech / Cafe Leva
            </h4>
            <p class="timeline__item__content__description">
              I designed a custom SPA-style mobile-friendly Mexican-styled theme for their website featuring completely custom artwork, parallax scrolling effects and a custom menu component. A customized build of OpenCart is used on the backend for content and product management.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Jimmy Poblanos Food Truck Website
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Jimmy Poblano's Mexican Cantina
            </h4>
            <p class="timeline__item__content__description">
              I designed a custom SPA-style mobile-friendly Mexican-styled theme for their website featuring completely custom artwork, parallax scrolling effects and a custom menu component. A customized build of OpenCart is used on the backend for content and product management.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Corrpro Corrosion Reporting Application
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Corrpro (Canada)
            </h4>
            <p class="timeline__item__content__description">
              Corrpro provides corrosion control materials and services including - engineering, pipeline integrity, construction and protective coating inspection - throughout North America, Europe, the Middle East and South Africa. I designed and developed a custom Windows Desktop application to help track corrosion levels of pipelines and storage tanks at thousands of industrial locations across Alberta.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Challenger Fleet Management System
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Challenger Fleet Management Solutions
            </h4>
            <p class="timeline__item__content__description">
              Challenger Fleet Management Solutions specializes in long term vehicle rentals for industrial projects.
              I architected, designed and spearheaded the development of a custom fleet-management application which served to streamline business processes including tracking vehicle inventory, coordinating the equipment of vehicles with specialized accessories required for industrial projects, coordinating deliveries on or before the time vehicle units are required on site, monitoring manufacturer recall programs, invoicing and basic accounting, and the generation of customized reports to clients while vehicle units are on rent.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Caffe Tech Magento Store
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Caffe Tech 2004 Ltd.
            </h4>
            <p class="timeline__item__content__description">
              Caffe Tech is an Edmonton based importer and distributor of premium (primarily Italian and Swiss) commercial and home coffee equipment which provides many popular Albertan establishments with their restaurant and coffee making equipment.

              I designed a custom theme and a suite of custom extensions for Magento including a custom payment extension for Global Payments (Canada) and a shipping extension for Purolator’s Shipping API (SOAP) featuring item tracking, support for multiple items per package, label printing, international documents generation, and automatically scheduled package pickups.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              AgentView Insurance Policy Management System
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Alberta Motor Association
            </h4>
            <p class="timeline__item__content__description">
              The Alberta Motor Association was looking to replace its legacy and end-of-life ‘FrontTier’ insurance policy management system with an in-house, web-based application and backend service network.

              I spearheaded the overhaul of AMA’s web-based AgentView insurance management system and the network of .NET Web API and WCF services that supports it. The scope of work involved a complete rewrite of  AgentView’s client and server applications as well as complete UI redesign (a previous external contractor had failed). I was also responsible for UI/UX design related to internal and external web-based applications.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Home Insurance Quote Web Application
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Alberta Motor Association
            </h4>
            <p class="timeline__item__content__description">
              The Alberta Motor Association needed a new web-based and mobile friendly system to provide customers with customized home and tenant insurance quotes. The new application replaced their legacy web application, developed in C# using ASP.NET Web Forms, which was not mobile friendly.

              I designed and developed a new web application consisting of a responsive, mobile-friendly JavaScript client and a ASP.NET Web API backend, re-using code for certain procedures, functions and business logic where possible.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Auto Insurance Quote Web Application
            </h3>
            <h4 class="timeline__item__content__title">
              Client: Alberta Motor Association
            </h4>
            <p class="timeline__item__content__description">
              The Alberta Motor Association needed a new web-based and mobile friendly system to provide customers with customized automobile insurance quotes. The new application replaced their legacy web application, developed in C# using ASP.NET Web Forms, which was not mobile friendly.

              I designed and developed a new web application consisting of a responsive, mobile-friendly JavaScript client and a ASP.NET Web API backend, re-using code for certain procedures, functions and business logic where possible.
            </p>
            <div class="timeline__item__content__techs">
              <span class="icon icon--javascript"></span>
            </div>
          </div>
        </div>

        <div class="timeline__item">
          <div class="timeline__item__date">April <strong>2017</strong></div>
          <div class="timeline__item__content">
            <div class="timeline__item__content__logo">
              <span class="icon icon--content-logo"></span>
            </div>
            <h3 class="timeline__item__content__title">
              Carsgone.com
            </h3>
            <h4 class="timeline__item__content__title">
              Client: CarsGone
            </h4>
            <p class="timeline__item__content__description">
              CarsGone is an Edmonton-based, nationally spanning automotive classifieds magazine and website with a print distribution network across Alberta and Ontario. At the time, they had over 90,000 vehicles from over 600 dealerships listed on their website.

              I created an online marketplace/classifieds site for listing vehicles serving independent buyers and sellers as well as hundreds of dealerships across Canada. Vehicle listings were either posted by end-users or aggregated using data providers from organizations including Strathcom Media and Boost Motor Group for display.
            </p>
            <div class="timeline__item__content__techs">
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
    background-image: url('http://mehmetguler.xyz/codepen/responsive-timeline/sprite-fbf7a24a.svg');
    display: inline-block;
  }

  .no-svg .icon {
    background-image: url('http://mehmetguler.xyz/codepen/responsive-timeline/sprite-fbf7a24a.png');
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

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 10%;
      width: 4px;
      height: 100%;
      background-color: $timeline-line-color;
    }

    &__item {
      margin-bottom: 100px;
      position: relative;

      &:nth-child(2n) {

        .timeline__item__content {
          float: right;

          &::before {
          }

        }

      }

      &:last-child {
        margin-bottom: 0;
      }

    }

    &__item__date {
      background-color: $timeline-line-color;
      font-weight: 300;
      width: 140px;
      position: absolute;
      padding: 10px;
      top: -18px;
      left: 10%;
      margin-left: -33px;
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
      float: right;
      transition: all .3s ease-out;
      padding: 30px 30px 25px 30px;
      position: relative;

      &::before {
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

  }
</style>
