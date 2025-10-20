<template>
  <Layout :key="repaint">
    <section id="contact" class="hero-section text-shadow bg-black angle no-pad-top" style="height: 100vh; margin-bottom: 58vh">
      <google-map-background></google-map-background>
      <div class="flex flex-center flex-justify-center">
        <div class="flex flex-basis-half space-top text-center">
          <contact :formData="formData"></contact>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
  import Layout from '~/layouts/Default.vue';

  // Import components
  import Header from '~/components/Header.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';

  // Import generic component layouts
  import VideoHeroLayout01Col from '~/components/layouts/VideoHeroLayout01Col.vue';
  import HeroLayout01Col from '~/components/layouts/HeroLayout01Col.vue';
  import HeroLayout02Col02 from '~/components/layouts/HeroLayout02Col02.vue';
  import SectionBlockLayout02Col01 from '~/components/layouts/SectionBlockLayout02Col01.vue';
  import SectionBlockLayout02Col02 from '~/components/layouts/SectionBlockLayout02Col02.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';
  import TestimonialHeroLayout from '~/components/layouts/TestimonialHeroLayout.vue';

  // Import static blocks
  import ProcessBlock from '~/blocks/ProcessBlock.vue';

  // Import SVG animations
  import AppFactory from '~/components/svg/AppFactory.vue';
  import InteractiveGuitar from '~/components/svg/InteractiveGuitar.vue';
  import GoogleMapBackground from '~/components/svg/GoogleMapBackground.vue';
  import GoogleMapCutout from '~/components/svg/GoogleMapCutout.vue';
  import PartyLights from '~/components/svg/PartyLights.vue';
  import MatrixBg from '~/components/svg/MatrixBg.vue';

  // Import animated text effects
  import TypewriterTextEffect from '~/core/components/text/Typewriter.vue';
  import ShrinkWordsOneByOneTextEffect from '~/core/components/text/ShrinkWordsOneByOne.vue';
  import RotateWordsTextEffect from '~/core/components/text/RotateWords.vue';
  import SlideUpTextEffect from '~/core/components/text/SlideUp.vue';
  import FadeInTextEffect from '~/core/components/text/FadeIn.vue';

  // Import animated content effects
  import SimpleEffect from '~/core/components/animate/Simple.vue'

  // Import static data
  import HomeData from '~/data/Home.yml';
  import HeroData from '~/data/Hero.yml';
  import GeneralData from '~/data/General.yml';
  import TestimonialData from '~/data/Testimonial.yml';

  // Import mixins
  import FlipCardsMixin from '~/core/mixins/FlipCardsMixin';
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';
  import HomeMixin from '~/core/mixins/HomeMixin';

  export default {
    components: {
      Layout,
      // Inject components
      Header,
      Blog,
      Contact,
      Footer,
      // Inject generic component layouts
      VideoHeroLayout01Col,
      HeroLayout01Col,
      HeroLayout02Col02,
      SectionBlockLayout02Col01,
      SectionBlockLayout02Col02,
      ContentBlockLayout,
      TestimonialBlockLayout,
      TestimonialHeroLayout,
      // Inject SVG animations
      AppFactory,
      InteractiveGuitar,
      GoogleMapBackground,
      GoogleMapCutout,
      PartyLights,
      MatrixBg,
      // Import static HTML blocks
      ProcessBlock,
      // Inject animated text effects
      TypewriterTextEffect,
      ShrinkWordsOneByOneTextEffect,
      RotateWordsTextEffect,
      SlideUpTextEffect,
      FadeInTextEffect,
      // Inject animated content effects
      SimpleEffect
    },
    mixins: [
      HomeMixin,
      TestimonialMixin,
      FlipCardsMixin
    ],
    data() {
      return {
        formData: {},
        repaint: Math.random(),
        rockAndRoll: false,
        textEffects: {
          typewriter: TypewriterTextEffect,
          shrinkWordsOneByOne: ShrinkWordsOneByOneTextEffect,
          rotateWords: RotateWordsTextEffect,
          slideUp: SlideUpTextEffect,
          fadeIn: FadeInTextEffect
        },
        contentEffects: {
          simple: SimpleEffect
        }
      };
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
      homepageHero() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'homepage-hero';
        });

        if (items instanceof Array && items.length > 0) {
          return items[0];
        }

        return null
      },
      projectsSection() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'projects-hero';
        });

        return items instanceof Array && items.length > 0 ? items[0] : null
      },
    },
    methods: {
      isLoaded() {
        // let isLoaded = false;

        return sessionStorage.getItem('isLoaded') ? parseInt(sessionStorage.getItem('isLoaded')) === 1 : false;
      },
      getProcessStep(idx) {
        let items = this.homeContent.processSteps;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      }
    },
    mounted() {
      /* TODO: This belongs to one of the SVG components, move it out */
      /*const svgPath = document.querySelectorAll('.path');

      const svgText = anime({
        targets: svgPath,
        loop: true,
        direction: 'alternate',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 700,
        delay: (el, i) => {
          return i * 500
        }
      });*/

      if (window) {
        window.addEventListener('resize', () => {
          this.$set(this, 'repaint', Math.random());
        });
      }

      if (typeof window !== 'undefined') {
        this.$refs.forestScene.play();
      }
    },
    beforeUnmount() {
      console.log('remove wrapTitleText resize listener');
      window.removeEventListener('resize', this.rewrapTitleText);
    }
  }
</script>
