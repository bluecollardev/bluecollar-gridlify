<template>
  <Layout>
    <Header/>
    <section-block-layout02-col01
      title="What we can do for you"
      subtitle=""
      description="We design, build, and ship products for growing businesses in Canada and around the world. Here's how."
      link="/services"
      linkText="Learn More"
      image="/images/hero-michael.png"
      caption="Sean Huntington"
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

    <section class="hero-section bg-hero-grey sm-flex pad-top">
      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="relative flex-basis-half">
        <img class="lozad banner-image right" src="/images/hero-old-businessman.png" alt="" />
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
