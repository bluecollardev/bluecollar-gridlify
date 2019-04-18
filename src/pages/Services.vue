<template>
  <Layout>
    <Header/>
    <hero-layout02-col02
      v-if="servicesHero"
      bgColor="bg-bc-blue"
      :title="servicesHero.title"
      subtitle=""
      :description="servicesHero.description"
      :image="servicesHero.image"
      imageClass="home-page-banner-image"
      :caption="servicesHero.caption"
      :subCaption="servicesHero.subCaption"
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
  import About from '~/components/Home.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';

  // Import generic component layouts
  import HeroLayout02Col02 from '~/components/layouts/HeroLayout02Col02.vue';
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
      About,
      Blog,
      Contact,
      Footer,
      // Inject generic component layouts
      HeroLayout02Col02,
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
      servicesHero() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'services-hero';
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
