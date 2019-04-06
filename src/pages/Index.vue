<template>
  <Layout>
    <Header/>
    <!--<Hero/>
    <Portfolio/>
    <About/>
    <Blog/>
    <Contact/>-->
    <section class="hero-section bg-hero-grey sm-flex pad-top">
      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="hero-block">
          <div class="flex flex-column">
            <div class="homepage-hero-title space-bottom">
              <p class="g-pstyle2">Firebrand is your trusted provider for accelerated mobile websites and marketing solutions</p>
            </div>
            <div class="homepage-hero-text g-hero xs-hide">
              <p>Are you looking for more engagement from your online content?  Times have changed &ndash; providing superior mobile and in-app social media experiences is now more important than linking back to traditional websites.  We specialize in ultra-fast mobile-optimized pages, helping you to engage with the right clients and convert more leads!</p>
            </div>
            <div class="homepage-hero-action action-link-block sm-hide md-hide lg-hide">
              <a class="action-link space-bottom g-pstyle3" routerLink="/services">Learn More</a>
            </div>
            <div class="homepage-hero-action action-link-block xs-hide">
              <a class="action-link space-top g-pstyle3" routerLink="/services">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="relative flex-basis-half">
        <img class="banner-image right" src="images/hero-realtor.png" />
        <div class="figure-caption figure-caption-right bg-cherry g-hero">
          <p class="g-pstyle4">Vicki Li</p>
          <p class="g-pstyle5">Realtor</p>
        </div>
      </div>

      <div class="sm-flex flex-center flex-justify-center flex-basis-half sm-hide md-hide lg-hide space-top pad-bottom">
        <div class="hero-block">
          <div class="flex flex-column">
            <div class="homepage-hero-text g-hero">
              <p>Are you looking for more engagement from your online content?  Times have changed &ndash; providing superior mobile and in-app social media experiences is now more important than linking back to traditional websites.  We specialize in ultra-fast mobile-optimized pages, helping you to engage with the right clients and convert more leads!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sm-flex pad-top xs-hide">
      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="relative flex-basis-half">
        <img class="banner-image left" src="images/how-does-it-work-person.png" />
        <div class="figure-caption figure-caption-left bg-cherry g-how-does-it-work">
          <p class="g-pstyle4">Thomas</p>
          <p class="g-pstyle5">Onboarding at Firebrand</p>
        </div>
      </div>

      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="banner-block">
          <div>
            <div class="space-bottom g-how-does-it-work">
              <p class="g-pstyle2">How does it work?</p>
            </div>
            <div class="g-how-does-it-work">
              <p>It&rsquo;s simple.  We build web pages with the latest AMP HTML technology, optimized to deliver a superior mobile experience and higher conversion rates.  Firebrand sites offer blazing fast loading speeds favored by major platforms like Google , Facebook, and Twitter.  Accelerated mobile sites are without a doubt the wave of the future &ndash; contact us today to learn more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
          <img class="bg-white banner-image" src="images/digital-marketing-testimonial-person.png" />
          <div class="pad-all">
            <div class="space-bottom-half g-help-with-digital-marketing">
              <p class="g-pstyle6">Firebrand has been hugely beneficial to our business.  They handle all our online marketing &ndash; the results have been amazing!</p>
            </div>
            <div class="g-help-with-digital-marketing">
              <p class="g-pstyle7">Chet Williams</p>
              <p class="g-pstyle7">CarsGone</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="lg-flex">
      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="content-block">
          <div>
            <div class="space-bottom-half g-services">
              <p class="g-pstyle9">Web Design</p>
            </div>
            <div class="g-services">
              <p>We work with you to deliver a professionally designed accelerated mobile website, with landing pages, lead-gen fields, and your company&rsquo;s branding built in.  Your website is optimized for mobile usage, but works on desktop as well.</p>
            </div>
            <div class="g-services">
              <a class="space-top-half more-info-link g-pstyle11" routerLink="/services" fragment="websites">Learn More</a>
            </div>
          </div>

          <div class="space-top">
            <div class="space-bottom-half g-services">
              <p class="g-pstyle9">Social Media</p>
            </div>
            <div class="g-services">
              <p>New to social media marketing?  We can get you set up on the major platforms with professional business pages continually updated with quality posts, promotions, and sales announcements to drive engagement with your brand and generate qualified leads.</p>
            </div>
            <div class="g-services">
              <a class="space-top-half more-info-link g-pstyle11" routerLink="/services" fragment="social-media">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light-grey sm-flex flex-column flex-center flex-basis-half pad-top">
        <div class="content-block space-top space-bottom">
          <div class="space-bottom-half g-services">
            <p class="g-pstyle8">Firebrand is our trusted partner for web design, social media, and SEO.  They&rsquo;ve really helped to set our business apart and increase our online presence in our community.</p>
          </div>
          <div class="g-services">
            <p class="g-pstyle10">Joe Parrottino</p>
            <p class="g-pstyle10">Cafe Leva / Caffetech.com</p>
          </div>
        </div>
        <img src="images/services-card-testimonial-person-top.png" />
      </div>
    </section>

    <section class="lg-flex">
      <div class="bg-light-grey flex flex-column flex-center flex-basis-half pad-top">
        <div class="content-block space-top space-bottom">
          <div class="space-bottom-half g-services">
            <p class="g-pstyle8">Firebrand saves me hours of work per week handing my social media.  We now generate more quality sales leads from mobile users than our old website ever did.</p>
          </div>
          <div class="g-services">
            <p class="g-pstyle10">Marla Livingston</p>
            <p class="g-pstyle10">RE/MAX Elite (Edmonton)</p>
          </div>
        </div>
        <img src="images/services-card-testimonial-person-bottom.png" />
      </div>

      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="content-block">
          <div>
            <div class="space-bottom-half g-services">
              <p class="g-pstyle9">Advertising</p>
            </div>
            <div class="g-services">
              <p>Paid social content is fast becoming the most effective channel for connecting with qualified leads.  Firebrand&rsquo;s team are experts at creating social ad campaigns, with professionally designed, chat-enabled landing pages.</p>
            </div>
            <div class="g-services">
              <a class="space-top-half more-info-link g-pstyle11" routerLink="/services" fragment="advertising">Learn More</a>
            </div>
          </div>

          <div class="space-top">
            <div class="space-bottom-half g-services">
              <p class="g-pstyle9">SEO</p>
            </div>
            <div class="g-services">
              <p>Accelerated mobile sites aren&rsquo;t just great for social media platforms &ndash; according to Google, nearly 50% of online searches are done on mobile devices.  Our pages are favored by Google&rsquo;s algorithms, improving your site&rsquo;s search rankings.</p>
            </div>
            <div class="g-services">
              <a class="space-top-half more-info-link g-pstyle11" routerLink="/services" fragment="landing-pages">Learn More</a>
            </div>
          </div>
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
        <img class="image-fill banner-image" src="images/get-started-feature-image.png" />
      </div>
    </section>
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import Portfolio from '~/components/Portfolio.vue';
  import About from '~/components/About.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Header,
      Hero,
      Portfolio,
      About,
      Blog,
      Contact,
      Footer
    },
  }
</script>
