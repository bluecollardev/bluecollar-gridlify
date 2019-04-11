<template>
  <Layout>
    <Header/>
    <!--<Hero/>
    <Portfolio/>
    <About/>
    <Blog/>
    <Contact/>-->
    <hero-layout02-col
      v-if="homepageHero"
      :title="homepageHero.title"
      subtitle=""
      :description="homepageHero.description"
      :link="homepageHero.link"
      :linkText="homepageHero.linkText"
      :image="homepageHero.image"
      imageClass="home-page-banner-image"
      :caption="homepageHero.caption"
      :subCaption="homepageHero.subCaption"
    />

    <!--<section class="lg-flex flex-center flex-justify-center space-top space-bottom">
      <div class="hero-block">
        <div class="sm-flex flex-center flex-justify-center">
          <div>
            <div class="md-flex flex-wrap">
              <div class="flex-basis-half">
                <div class="space-all">
                  <div class="space-bottom-half g-get-started">
                    <p class="g-pstyle9">AMP HTML</p>
                  </div>
                  <div class="g-get-started">
                    <p>Traditional HTML used to build standard websites for desktop browsers will inevitably be replaced by mobile-first languages. Enter AMP, the open source project spearheaded by Google, which is changing the nature of webpages to a truly mobile-first experience. Blue Collar places this language at the heart of all our web projects.</p>
                  </div>
                </div>
              </div>

              <div class="flex-basis-half">
                <div class="space-all">
                  <div class="space-bottom-half g-get-started">
                    <p class="g-pstyle9">Data Parsing</p>
                  </div>
                  <div class="g-get-started">
                    <p>In the era of big data, it makes sense to funnel data content into landing pages to provide accurate information to consumers. We are experts at taking MLS listing data, auto dealership data, e-commerce data, etc. and accurately funneling it into landing pages that our clients share with their customers across social media and web platforms.</p>
                  </div>
                </div>
              </div>

              <div class="flex-basis-half">
                <div class="space-all">
                  <div class="space-bottom-half g-get-started">
                    <p class="g-pstyle9">Creative</p>
                  </div>
                  <div class="g-get-started">
                    <p>Image is everything. We produce stunning creative work that tells a story to your customer. When customers understand how associating with you can define who they are, they have a compelling reason to buy (and are likely willing to pay a higher price).</p>
                  </div>
                </div>
              </div>

              <div class="flex-basis-half">
                <div class="space-all">
                  <div class="space-bottom-half g-get-started">
                    <p class="g-pstyle9">Digital Marketing</p>
                  </div>
                  <div class="g-get-started">
                    <p>Integrating new technological features for its own sake is rarely at the heart of creating real value for clients. Effective solutions require a deep understanding of marketing principles, in particular the behavior of audiences consuming digital content. We use data-driven analysis to measure and validate the effectiveness of all our marketing campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <section-block-layout02-col01
      title="Experience matters"
      subtitle=""
      description="Drawing on deep experience in solution design and combining it with great listening, we work closely with your team to define a solution for the business challenge at hand. Then, we infuse user feedback and priorities into every stage of the software development process."
      image="/images/hero-michael.png"
      caption="Sean Hamilton"
      subCaption="Principal Architect, Blue Collar"
    />

    <section id="services" class="lg-flex">
      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="content-block">
          <content-block-layout
            className="pad-top"
            v-if="getService(0).linkText"
            :title="getService(0).title"
            :description="getService(0).description"
            :link="getService(0).link"
            :linkText="getService(0).linkText"
          />

          <content-block-layout
            className="pad-top"
            v-if="getService(1).linkText"
            :title="getService(1).title"
            :description="getService(1).description"
            :link="getService(1).link"
            :linkText="getService(1).linkText"
          />

          <content-block-layout
            className="pad-top pad-bottom"
            v-if="getService(2).linkText"
            :title="getService(2).title"
            :description="getService(2).description"
            :link="getService(2).link"
            :linkText="getService(2).linkText"
          />
        </div>
      </div>

      <div
        v-if="getTestimonial(0)"
        class="bg-light-grey sm-flex flex-column flex-center flex-basis-half pad-top">
        <testimonial-block-layout
          className="space-top space-bottom"
          :testimonial="getTestimonial(0).testimonial"
          :reviewedBy="getTestimonial(0).reviewedBy"
          :position="getTestimonial(0).position"
          :organization="getTestimonial(0).organization"
          :image="getTestimonial(0).image"
        />
      </div>
    </section>

    <section class="lg-flex">
      <div
        v-if="getTestimonial(1)"
        class="bg-light-grey flex flex-column flex-center flex-basis-half pad-top">
        <testimonial-block-layout
          className="space-top space-bottom"
          :testimonial="getTestimonial(1).testimonial"
          :reviewedBy="getTestimonial(1).reviewedBy"
          :position="getTestimonial(1).position"
          :organization="getTestimonial(1).organization"
          :image="getTestimonial(1).image"
        />
      </div>

      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="content-block">
          <content-block-layout
            className="pad-top"
            v-if="getService(3).linkText"
            :title="getService(3).title"
            :description="getService(3).description"
            :link="getService(3).link"
            :linkText="getService(3).linkText"
          />

          <content-block-layout
            className="pad-top"
            v-if="getService(4).linkText"
            :title="getService(4).title"
            :description="getService(4).description"
            :link="getService(4).link"
            :linkText="getService(4).linkText"
          />

          <content-block-layout
            className="pad-top pad-bottom"
            v-if="getService(5).linkText"
            :title="getService(5).title"
            :description="getService(5).description"
            :link="getService(5).link"
            :linkText="getService(5).linkText"
          />
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
