<template>
  <Layout>
    <Header/>
    <!--<section-block-layout02-col01
      title="Next-gen websites"
      subtitle=""
      description="We build web pages with the latest JAMStack and AMP HTML technology, optimized to deliver a superior mobile experience and higher conversion rates. Blue Collar sites offer blazing fast loading speeds favored by major platforms like Google, Facebook, and Twitter.  Accelerated mobile sites are without a doubt the wave of the future &ndash; contact us today to learn more."
      link="/services"
      linkText="Learn More"
      image="/images/hero-michael.png"
      caption="Sean Huntington"
      subCaption="Principal Architect, Blue Collar"
    />-->
    <section-block-layout02-col01
      v-if="getServiceHeroById('websites')"
      :title="getServiceHeroById('websites').title"
      subtitle=""
      :description="getServiceHeroById('websites').description"
      :link="getServiceHeroById('websites').link"
      :linkText="getServiceHeroById('websites').linkText"
      :image="getServiceHeroById('websites').image"
      :caption="getServiceHeroById('websites').caption"
      :subCaption="getServiceHeroById('websites').subCaption"
    />

    <section id="intro" class="lg-flex pad-top-2x">
      <div class="sm-flex flex-center flex-justify-center flex-basis-full">
        <div class="sm-flex flex-column">
          <div class="sm-flex flex-start height-third">
            <div class="sm-flex flex-center flex-justify-center flex-basis-third">
              <div class="content-block">
                <!--<content-block-layout
                  title="Branded for you"
                  description="Your site reflects your unique vision for your brand. We will create a highly polished website that represents you and reflects your values."
                />-->
                <content-block-layout
                  :title="getServiceBackupsByIdx('websites', 0).title"
                  :description="getServiceBackupsByIdx('websites', 0).description"
                />
              </div>
            </div>
            <div class="sm-flex flex-center flex-justify-center flex-basis-third">
              <div class="content-block">
                <!--<content-block-layout
                  title="Creative design"
                  description="Image is everything. We produce stunning creative work that tells a story to your customer. When customers understand how associating with you can define who they are, they have a compelling reason to buy."
                />-->
                <content-block-layout
                  :title="getServiceBackupsByIdx('websites', 1).title"
                  :description="getServiceBackupsByIdx('websites', 1).description"
                />
              </div>
            </div>
            <div class="sm-flex flex-center flex-justify-center flex-basis-third">
              <div class="content-block">
                <!--<content-block-layout
                  title="Exceptional support"
                  description="We offer ongoing monthly support to continually improve your online business. No advanced technical knowledge of coding is required on your end, and we are always here to help!"
                />-->
                <content-block-layout
                  :title="getServiceBackupsByIdx('websites', 2).title"
                  :description="getServiceBackupsByIdx('websites', 2).description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="websites" class="lg-flex">
      <div class="sm-flex flex-end flex-justify-center flex-basis-third">
        <div class="content-block space-bottom-2x">
          <div class="space-bottom-half">
            <p class="g-pstyle9">Accelerated<br />Mobile Websites</p>
          </div>
          <div>
            <p>Your website will be built with either JAMStack or AMP HTML code &ndash; increasing load speed of mobile pages by up to 85% compared to traditional HTML pages.</p>
            <p>Blue Collar goes beyond traditional &lsquo;responsive&rsquo; web design.  We build next-generation sites for businesses with mobile-focused digital marketing in mind.</p>
          </div>
          <div class="action-link-block">
            <a class="action-link space-top g-pstyle3" href="/contact">Get Started</a>
          </div>
        </div>
      </div>
      <div class="bg-bc-blue sm-flex flex-center flex-justify-center flex-basis-two-thirds pad-top">
        <div class="content-block space-all">
          <div class="space-bottom-half">
            <p class="g-pstyle6">Instant. Everywhere.</p>
          </div>
          <div>
            <p class="g-pstyle7">For many, reading on the mobile web is a slow, clunky and frustrating experience - but it doesn&rsquo;t have to be that way.  The Accelerated Mobile Pages (AMP) Project is an open source initiative that embodiees the vision that publishers can create mobile optimized content once and have it load instantly everywhere. </p>
          </div>
        </div>
        <img src="/images/accelerated-mobile-pages.png" alt="" />
      </div>
    </section>

    <section class="hero-section bg-hero-grey sm-flex flex-justify-center pad-top pad-bottom">
      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="sm-flex flex-center flex-justify-center flex-basis-third">
        <div class="content-block text-center">
          <img class="banner-image circle" src="/images/greg-and-steph-jimmy-poblanos.jpg" alt="" />
        </div>
      </div>
      <div class="sm-flex flex-center flex-justify-start flex-basis-two-thirds">
        <div>
          <div class="space-all">
            <div class="g-services">
              <p class="g-pstyle8">Blue Collar designed and implemented an amazing website for our business, combining the effective elements of a solid technical design with the functionality and visual appeal to engage our customers. We've seen an immediate increase in sales and flow through business.</p>
            </div>
            <div class="g-services">
              <p>Greg L.</p>
              <p>Jimmy Poblanos</p>
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
      Portfolio,
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
    }
  }
</script>
