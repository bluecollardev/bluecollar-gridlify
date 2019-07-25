<template>
  <Layout>
    <Header/>
    <section class="hero-section bg-bc-blue sm-flex pad-top height-half angle">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2 text-center-force">Consulting</p>
            </div>
            <div class="g-banner">
              <p>Please stay tuned, this section is coming soon.</p>
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
      testimonialContent() {
        return TestimonialData;
      }
    },
    methods: {
    }
  }
</script>
