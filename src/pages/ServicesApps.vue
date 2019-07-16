<template>
  <Layout>
    <Header/>
    <!--<section-block-layout02-col01
      title="Experts in Progressive and Mobile App Development"
      subtitle=""
      :description="[
        'With extensive expertise in React.js, React Native, Angular.js, Vue.js, JavaScript, CSS3, HTML5, and Responsive Web Design, software developers at Blue Collar can build cross-platform solutions to suit the custom needs of any project. Benefit from building isomorphic, progressive, dynamic, and mobile-friendly applications with reusable components.'
      ]"
      link="/services"
      linkText="Learn More"
      image="/images/hero-michael.png"
      caption="Sean Huntington"
      subCaption="Principal Architect, Blue Collar"
    />-->
    <!-- Apps and Services Section -->
    <testimonial-hero-layout
      id="about"
      v-if="servicesHero"
      :title="servicesHero.title"
      subtitle=""
      :description="servicesHero.description"
      :link="servicesHero.link"
      :linkText="servicesHero.linkText"
      :image="servicesHero.image"
      imageClass="home-page-banner-image"
      :caption="servicesHero.caption"
      :subCaption="servicesHero.subCaption"
      :flipX="false"
      :angle="true"
      className="xs-pad-top"
      leftPaneClassSuffix="xs-order-2 sm-order-1"
      rightPaneClassSuffix="xs-order-1 sm-order-2"
      bgColor="bg-light-grey"
    />

    <section id="advertising" class="lg-flex space-top">
      <div class="sm-flex flex-center flex-column flex-basis-third">
        <div class="content-block">
          <!--<div class="space-top space-bottom-half">
            <p class="g-pstyle9">Progressive Apps</p>
          </div>
          <div>
            <p>With the new application model offered by Google progressive web apps (PWAs), we help you to build engaging solutions that deliver native mobile experience right from your browser.</p>
          </div>
          <div class="action-link-block">
            <a class="action-link space-top g-pstyle3" href="/contact">Get Started</a>
          </div>-->
        </div>
      </div>
      <div class="sm-flex flex-basis-two-thirds flex-wrap">
        <div class="flex-basis-half">
          <div class="space-all">
            <div class="space-bottom-half">
              <p class="g-pstyle9">Mobile strategy</p>
            </div>
            <div>
              <p>Drawing on deep experience in mobile solution design and combining it with great listening, we work closely with your team to define a solution for the business challenge at hand. Then, we infuse user feedback and priorities into every stage of the mobile development process.</p>
            </div>
          </div>
        </div>
        <div class="flex-basis-half">
          <div class="space-all">
            <div class="space-bottom-half">
              <p class="g-pstyle9">User experience</p>
            </div>
            <div>
              <p>We put UX at the heart of every project.  Understanding how your target audience moves through your application will have a profound effect on its success.  Our team considers user actions from the moment they engage through to attainment of your objectives and conversions.</p>
            </div>
          </div>
        </div>
        <div class="flex-basis-half">
          <div class="space-all">
            <div class="space-bottom-half">
              <p class="g-pstyle9">User interface design</p>
            </div>
            <div>
              <p>Great UI design enhances the usability and appeal of your products.  Our UI team will ensure the look and feel, the presentation and interactivity of your product are fresh and modern every time.</p>
            </div>
          </div>
        </div>
        <div class="flex-basis-half">
          <div class="space-all">
            <div class="space-bottom-half">
              <p class="g-pstyle9">API engineering</p>
            </div>
            <div>
              <p>Developing great mobile experiences often requires tapping into enterprise data. Our team can engineer API connections and ensure your mobile solutions have power and flexibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="social-media" class="lg-flex space-top">
      <div class="sm-flex flex-center flex-column flex-basis-third">
        <div class="content-block">
          <div class="space-bottom-half">
            <p class="g-pstyle9">Mobile Apps</p>
          </div>
          <div>
            <p>We build native and cross-platform mobile applications for iOS and Android to provide businesses with effective means to reach their customers anywhere they go.</p>
          </div>
          <div class="action-link-block">
            <a class="action-link space-top g-pstyle3" href="/contact">Get Started</a>
          </div>
        </div>
      </div>
      <div class="sm-flex flex-column flex-basis-two-thirds">
        <div class="bg-bc-blue sm-flex flex-center flex-justify-center pad-top">
          <div class="content-block space-all">
            <div class="space-bottom-half">
              <p class="g-pstyle6">Instant.  Everywhere.</p>
            </div>
            <div>
              <p class="g-pstyle7">For many, reading on the mobile web is a slow, clunky and frustrating experience - but it doesn&rsquo;t have to be that way.  The Accelerated Mobile Pages (AMP) Project is an open source initiative that embodiees the vision that publishers can create mobile optimized content once and have it load instantly everywhere. </p>
            </div>
          </div>
          <img class="lozad" src="/images/accelerated-mobile-pages.png" alt="" />
        </div>
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
  import ServiceData from '~/data/Services.yml';
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
      servicesContent() {
        return ServiceData
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
      }
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
        let items = this.servicesContent;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      getServiceById(id) {
        let content = this.servicesContent;

        if (content && content.services instanceof Array && content.services.length > 0) {
          let items = content.services.filter(item => {
            return item.id === id;
          });

          if (items instanceof Array && items.length > 0) {
            return items[0];
          }
        }

        return null
      },
      getServiceHeroById(id) {
        let content = this.servicesContent;

        if (content && content.services instanceof Array && content.services.length > 0) {
          let items = content.services.filter(item => {
            return item.id === id;
          });

          if (items instanceof Array && items.length > 0) {
            if (items[0].hero instanceof Array && items[0].hero.length > 0) {
              return items[0].hero[0] // TODO: Support for multiple heroes!
            }
          }
        }

        return null
      },
      getServiceBackupsByIdx(id, idx) {
        let content = this.servicesContent;
        idx = idx || 0;

        if (content && content.services instanceof Array && content.services.length > 0) {
          let items = content.services.filter(item => {
            return item.id === id;
          });

          if (items instanceof Array && items.length > 0) {
            if (items[0].backup instanceof Array && items[0].backup.length > 0) {
              return items[0].backup[idx] // TODO: Support for multiple heroes!
            }
          }
        }

        return null
      }
    },
    mounted() {
      const observer = lozad(); // lazy loads elements with default selector as '.lozad'
      observer.observe();
    }
  }
</script>
