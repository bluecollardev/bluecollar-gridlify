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
      :caption="homepageHero.caption"
      :subCaption="homepageHero.subCaption"
    />

    <section-block-layout02-col01
      title="How does it work?"
      subtitle=""
      description="It&rsquo;s simple.  We build web pages with the latest AMP HTML technology, optimized to deliver a superior mobile experience and higher conversion rates.  Firebrand sites offer blazing fast loading speeds favored by major platforms like Google , Facebook, and Twitter.  Accelerated mobile sites are without a doubt the wave of the future &ndash; contact us today to learn more."
      link="/services"
      linkText="Learn More"
      image="/images/how-does-it-work-person.png"
      caption="Thomas"
      subCaption="Onboarding at Firebrand"
    />

    <section-block-layout02-col02
      title="Need help with your digital marketing? We do the heavy lifting for you."
      subtitle=""
      description="Need help posting your content to the right channels online? Our digital marketing team works with our devs to create relevant and highly targeted mobile and in-app experiences for your potential clients.  We save you time, optimize your return on marketing spend, and generate more qualified leads for your business!"
      link="/services"
      linkText="Learn More"
      image="/images/digital-marketing-testimonial-person.png"
      testimonial="Firebrand has been hugely beneficial to our business. They handle all our online marketing &ndash; the results have been amazing!"
      caption="Chet Williams"
      subCaption="CarsGone"
    />

    <section class="lg-flex">
      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="content-block">
          <content-block-layout
            title="Web Design"
            description="We work with you to deliver a professionally designed accelerated mobile website, with landing pages, lead-gen fields, and your company&rsquo;s branding built in. Your website is optimized for mobile usage, but works on desktop as well."
            link="/services"
            linkText="Learn More"
          />

          <content-block-layout
            className="space-top"
            title="Social Media"
            description="New to social media marketing?  We can get you set up on the major platforms with professional business pages continually updated with quality posts, promotions, and sales announcements to drive engagement with your brand and generate qualified leads."
            link="/services"
            linkText="Learn More"
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
            title="Advertising"
            description="Paid social content is fast becoming the most effective channel for connecting with qualified leads. Firebrand&rsquo;s team are experts at creating social ad campaigns, with professionally designed, chat-enabled landing pages."
            link="/services"
            linkText="Learn More"
          />

          <content-block-layout
            className="space-top"
            title="SEO"
            description="Accelerated mobile sites aren&rsquo;t just great for social media platforms &ndash; according to Google, nearly 50% of online searches are done on mobile devices. Our pages are favored by Google&rsquo;s algorithms, improving your site&rsquo;s search rankings."
            link="/services"
            linkText="Learn More"
          />
        </div>
      </div>
    </section>

    <section class="lg-flex bg-hero-grey pad-top">
      <div class="sm-flex flex-center flex-basis-half">
        <div>
          <div class="sm-flex flex-wrap">
            <div class="space-all no-space-bottom g-get-started">
              <p class="g-pstyle12">How to get started?</p>
            </div>
          </div>

          <div class="md-flex flex-wrap">
            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half g-get-started">
                  <p class="g-pstyle9">Let's chat!</p>
                </div>
                <div class="g-get-started">
                  <p>The first step is to get in touch with us.  We will ask about your interests, professional goals, and your vision for your online business.</p>
                </div>
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half g-get-started">
                  <p class="g-pstyle9">We build your online presence</p>
                </div>
                <div class="g-get-started">
                  <p>After completing our designs we will share samples with you to approve before launching and marketing your new online presence.</p>
                </div>
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half g-get-started">
                  <p class="g-pstyle9">Preparation</p>
                </div>
                <div class="g-get-started">
                  <p>After consulting with you we will create an accelerated mobile website and/or digital marketing strategy suited to the needs of your business.</p>
                </div>
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="space-all">
                <div class="space-bottom-half g-get-started">
                  <p class="g-pstyle9">You grow your business</p>
                </div>
                <div class="g-get-started">
                  <p>We will continue to consult with you each month to manage and fine-tune your online presence.  We are committed to helping you continue to grow your business over time!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-basis-half">
        <!-- TODO: Conditionally use image-fill OR banner-image -->
        <img class="image-fill banner-image" src="/images/get-started-feature-image.png" />
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
