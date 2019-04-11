<template>
  <Layout>
    <Header/>
    <section id="real-estate" class="lg-flex">
      <div class="sm-flex flex-column flex-center flex-justify-center flex-basis-third">
        <div class="content-block">
          <div class="space-bottom-half">
            <p class="g-pstyle9">Real Estate</p>
          </div>
          <div>
            <p>Before co-founding Blue Collar, Chris spent years working in the real estate web software industry, bringing his advanced knowledge of the unique marketing challenges Realtors face.</p>

            <p>Blue Collar is currently the only company offering accelerated landing pages integrated with MLS data (RESO Web API compliant).  We offer advanced solutions to Realtors wanting to take their digital marketing to the next level.</p>
          </div>
        </div>
        <div class="action-link-block">
          <a class="action-link space-top g-pstyle3" href="/contact">Contact Us</a>
        </div>
      </div>
      <!-- TODO: There's a pattern for this in index -->
      <div class="sm-flex flex-column flex-basis-third">
        <div class="bg-salmon space-all no-space-bottom relative">
          <img class="bg-white image-fill" src="/images/andrea.jpg" alt="" />
          <div class="figure-caption-full bg-bc-blue pad-all">
            <div class="space-bottom-half g-help-with-digital-marketing">
              <p class="g-pstyle6">Blue Collar has been hugely beneficial to our business.  They handle all our online marketing &ndash; the results have been amazing!</p>
            </div>
            <div class="g-help-with-digital-marketing">
              <p class="g-pstyle7">Andrea Jurgens</p>
              <p class="g-pstyle7">RE/MAX Elite</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sm-flex flex-column flex-center flex-justify-center flex-basis-third">
        <div class="space-all">
          <div class="space-bottom-half">
            <p class="g-pstyle9">Easily Post New Listings</p>
          </div>
          <div>
            <p>We build accelerated landing pages that pull data directly from your MLS board - enabling you to easily share and promote your listings on social media platforms.  If the status of the listing changes, the listing automatically updates on your posts - saving you time and the hassle of updating the posts manually.</p>
          </div>
        </div>
        <div class="space-all">
          <div class="space-bottom-half">
            <p class="g-pstyle9">Instant Conversations with Leads</p>
          </div>
          <div>
            <p>Your business page&rsquo;s Messenger is connected to an embedded button on your listing landing pages, enabling your potential customers to reach out to you directly.</p>

            <p>Targeted ad placement ensures most leads are qualified - giving you a huge leg up in converting new prospects to sales!</p>
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
      }
    }
  }
</script>
