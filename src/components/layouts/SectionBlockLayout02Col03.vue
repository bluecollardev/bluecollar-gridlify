<template>
  <section class="lg-flex pad-top">
    <div class="sm-flex flex-center flex-justify-center">
      <div class="banner-block">
        <div>
          <div class="space-bottom g-help-with-digital-marketing">
            <p class="g-pstyle2">Need help with your digital marketing? We do the heavy lifting for you.</p>
          </div>
          <div class="g-help-with-digital-marketing">
            <p>Need help posting your content to the right channels online? Our digital marketing team works with our devs to create relevant and highly targeted mobile and in-app experiences for your potential clients.  We save you time, optimize your return on marketing spend, and generate more qualified leads for your business!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="sm-flex flex-column flex-center">
      <div class="bg-salmon content-block">
        <img class="bg-white banner-image" src="/images/digital-marketing-testimonial-person.png" alt="" />
        <div class="pad-all">
          <div class="space-bottom-half g-help-with-digital-marketing">
            <p class="g-pstyle6">Blue Collar has been hugely beneficial to our business.  They handle all our online marketing &ndash; the results have been amazing!</p>
          </div>
          <div class="g-help-with-digital-marketing">
            <p class="g-pstyle7">Chet Williams</p>
            <p class="g-pstyle7">CarsGone</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/**
 * This variant of the SectionBlockLayout has two columns,
 * a left column with the heading and text content,
 * and a right column with a testimonial.
 */
import Home from '~/data/Home.yml';

export default {
  // TODO: Supply models via props??
  props: {
    flipLayout: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
    subCaption: {
      type: String,
      default: '',
    },
  },
  computed: {
    Home() {
      return Home;
    }
  }
};
</script>
