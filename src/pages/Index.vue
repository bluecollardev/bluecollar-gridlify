<template>
  <Layout>
    <Header/>

    <!-- Video Hero -->
    <video-hero-layout01-col
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
      :flipX="false"
      :angle="true"
      bgColor="bg-bc-blue"
    >
      <template v-slot:title>
        <h1 class="title text-center mr-3 ml-3">
          <span class="text-wrapper">
            <span class="line blink">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" xml:space="preserve">
                <g>
                  <path fill="white" d="M71.129,91.224c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.606,0-6.864-1.473-9.224-3.852   C47.64,93.527,44.383,95,40.776,95h-8.128c-2.077,0-3.776-1.69-3.776-3.776c0-2.086,1.699-3.776,3.776-3.776h8.128   c3.002,0,5.447-2.445,5.447-5.447V18c0-3.002-2.445-5.447-5.447-5.447h-8.128c-2.077,0-3.776-1.69-3.776-3.776   C28.871,6.69,30.571,5,32.648,5h8.128C44.383,5,47.64,6.473,50,8.852C52.36,6.473,55.617,5,59.224,5h8.128   c2.077,0,3.776,1.69,3.776,3.776c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.002,0-5.447,2.445-5.447,5.447v64   c0,3.002,2.445,5.447,5.447,5.447h8.128C69.429,87.447,71.129,89.137,71.129,91.224z" />
                </g>
              </svg>
            </span>
            <span class="letters">Experience the Blue Collar Difference</span>
          </span>
        </h1>
      </template>
    </video-hero-layout01-col>

    <!-- Apps and Services Section -->
    <hero-layout01-col
      id="services"
      v-if="servicesHero"
      bgColor="bg-bc-blue"
      :title="servicesHero.title"
      subtitle=""
      :description="servicesHero.description"
      imageClass="home-page-banner-image"
      :caption="servicesHero.caption"
      :subCaption="servicesHero.subCaption"
      :flipX="true"
      :angle="true"
      className="xs-pad-top sm-pad-top"
    >
      <template v-slot:title>
        <h2 class="title">
          <span class="text-wrapper">
            <span class="line blink">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" xml:space="preserve">
                <g>
                  <path fill="white" d="M71.129,91.224c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.606,0-6.864-1.473-9.224-3.852   C47.64,93.527,44.383,95,40.776,95h-8.128c-2.077,0-3.776-1.69-3.776-3.776c0-2.086,1.699-3.776,3.776-3.776h8.128   c3.002,0,5.447-2.445,5.447-5.447V18c0-3.002-2.445-5.447-5.447-5.447h-8.128c-2.077,0-3.776-1.69-3.776-3.776   C28.871,6.69,30.571,5,32.648,5h8.128C44.383,5,47.64,6.473,50,8.852C52.36,6.473,55.617,5,59.224,5h8.128   c2.077,0,3.776,1.69,3.776,3.776c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.002,0-5.447,2.445-5.447,5.447v64   c0,3.002,2.445,5.447,5.447,5.447h8.128C69.429,87.447,71.129,89.137,71.129,91.224z" />
                </g>
              </svg>
            </span>
            <span class="letters">{{ servicesHero.title }}</span>
          </span>
        </h2>
      </template>

      <div class="sm-flex flex-justify-center text-center">
        <app-factory></app-factory>
      </div>
    </hero-layout01-col>

    <section class="hero-section col-3-squares bg-white no-pad-bottom lg-flex">
      <div class="service-detail-card-top bg-white sm-flex flex-center flex-justify-center flex-basis-third pad-bottom-2x">
        <div class="service-detail-card-inner hero-block">
          <div class="service-detail-card-front bg-white">
            <content-block-layout
              className="pad-top"
              v-if="getService(0).linkText"
              :title="getService(0).title"
              :description="getService(0).description"
              :link="getService(0).link"
              :linkText="getService(0).linkText"
            />
          </div>
          <div class="service-detail-card-back bg-white">
            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getServiceHeroById('apps')"
              :title="getServiceHeroById('apps').title"
              subtitle=""
              :description="getServiceHeroById('apps').description"
              :link="getServiceHeroById('apps').link"
              :linkText="getServiceHeroById('apps').linkText"
              :image="getServiceHeroById('apps').image"
              :caption="getServiceHeroById('apps').caption"
              :subCaption="getServiceHeroById('apps').subCaption"
            />
          </div>
        </div>
      </div>

      <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-third pad-bottom-2x">
        <div class="service-detail-card-inner hero-block">
          <div class="service-detail-card-front bg-white">
            <content-block-layout
              className="pad-top"
              v-if="getService(1).linkText"
              :title="getService(1).title"
              :description="getService(1).description"
              :link="getService(1).link"
              :linkText="getService(1).linkText"
            />
          </div>
          <div class="service-detail-card-back bg-white">
            <content-block-layout
              className="pad-bottom"
              v-if="getServiceHeroById('software')"
              :title="getServiceHeroById('software').title"
              subtitle=""
              :description="getServiceHeroById('software').description"
              :link="getServiceHeroById('software').link"
              :linkText="getServiceHeroById('software').linkText"
              :image="getServiceHeroById('software').image"
              :caption="getServiceHeroById('software').caption"
              :subCaption="getServiceHeroById('software').subCaption"
            />
          </div>
        </div>
      </div>

      <div class="service-detail-card-top bg-white sm-flex flex-center flex-justify-center flex-basis-third pad-bottom-2x">
        <div class="service-detail-card-inner hero-block">
          <div class="service-detail-card-front bg-white">
            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getService(2).linkText"
              :title="getService(2).title"
              :description="getService(2).description"
              :link="getService(2).link"
              :linkText="getService(2).linkText"
            />
          </div>

          <div class="service-detail-card-back bg-white">
            <content-block-layout
              className="pad-bottom"
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
          </div>
        </div>
      </div>
    </section>

    <!-- TODO: Important! Make this pattern a layout before deleting! -->
    <!--<section class="hero-section col-2-squares n1-white n2-light-grey no-pad-bottom lg-flex">
      <div class="service-detail-card-top bg-white sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="service-detail-card-inner content-block">
          <div class="service-detail-card-front bg-white">
            <content-block-layout
              className="pad-top"
              v-if="getService(0).linkText"
              :title="getService(0).title"
              :description="getService(0).description"
              :link="getService(0).link"
              :linkText="getService(0).linkText"
            />
          </div>
          <div class="service-detail-card-back bg-white">
            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getServiceHeroById('apps')"
              :title="getServiceHeroById('apps').title"
              subtitle=""
              :description="getServiceHeroById('apps').description"
              :link="getServiceHeroById('apps').link"
              :linkText="getServiceHeroById('apps').linkText"
              :image="getServiceHeroById('apps').image"
              :caption="getServiceHeroById('apps').caption"
              :subCaption="getServiceHeroById('apps').subCaption"
            />
          </div>
        </div>
      </div>
    </section>-->

    <!--<section class="lg-flex">
      <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="service-detail-card-inner content-block">
          <div class="service-detail-card-front bg-white">
            <content-block-layout
              className="pad-top"
              v-if="getService(1).linkText"
              :title="getService(1).title"
              :description="getService(1).description"
              :link="getService(1).link"
              :linkText="getService(1).linkText"
            />
          </div>
          <div class="service-detail-card-back bg-white">
            <content-block-layout
              className="pad-bottom"
              v-if="getServiceHeroById('software')"
              :title="getServiceHeroById('software').title"
              subtitle=""
              :description="getServiceHeroById('software').description"
              :link="getServiceHeroById('software').link"
              :linkText="getServiceHeroById('software').linkText"
              :image="getServiceHeroById('software').image"
              :caption="getServiceHeroById('software').caption"
              :subCaption="getServiceHeroById('software').subCaption"
            />
          </div>
        </div>
      </div>
    </section>-->


    <!--<section class="hero-section col-2-squares n1-white n2-light-grey no-pad-bottom lg-flex">
      <div class="service-detail-card-top bg-white sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="service-detail-card-inner content-block">
          <div class="service-detail-card-front bg-white">
            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getService(2).linkText"
              :title="getService(2).title"
              :description="getService(2).description"
              :link="getService(2).link"
              :linkText="getService(2).linkText"
            />
          </div>

          <div class="service-detail-card-back bg-white">
            <content-block-layout
              className="pad-bottom"
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
          </div>
        </div>
      </div>
    </section>-->

    <!-- Testimonials Section -->
    <!-- "We've Got Your Back" section -->
    <testimonial-hero-layout
      v-if="projectsSection"
      :title="projectsSection.title"
      subtitle=""
      :description="projectsSection.description"
      :link="projectsSection.link"
      :linkText="projectsSection.linkText"
      :image="projectsSection.image"
      imageClass="home-page-banner-image"
      :caption="projectsSection.caption"
      :subCaption="projectsSection.subCaption"
      :flipX="false"
      :angle="true"
      className="xs-pad-top"
      leftPaneClassSuffix="xs-order-2 sm-order-1"
      rightPaneClassSuffix="xs-order-1 sm-order-2"
      bgColor="bg-bc-blue"
    />

    <aside class="sm-flex">
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
      <div
        v-if="getTestimonial(2)"
        class="bg-light-grey sm-flex flex-column flex-center flex-basis-half pad-top">
        <testimonial-block-layout
          className="space-top space-bottom"
          :testimonial="getTestimonial(2).testimonial"
          :reviewedBy="getTestimonial(2).reviewedBy"
          :position="getTestimonial(2).position"
          :organization="getTestimonial(2).organization"
          :image="getTestimonial(2).image"
        />
      </div>
    </aside>

    <hero-layout01-col
      id="contact"
      v-if="servicesHero"
      bgColor="bg-bc-blue"
      title="Get Started Today"
      subtitle=""
      description="At Blue Collar, every challenge is just a puzzle waiting to be solved! We strive to create innovative solutions for our clients using the latest advances
        in technology and development. Let us help take your business idea to the next level."
      imageClass="home-page-banner-image"
      :flipX="true"
      :angle="true"
      className="xs-pad-top sm-pad-top"
    >
      <template v-slot:title>
        <h2 class="title">
          <span class="text-wrapper">
            <span class="line blink">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" xml:space="preserve">
                <g>
                  <path fill="white" d="M71.129,91.224c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.606,0-6.864-1.473-9.224-3.852   C47.64,93.527,44.383,95,40.776,95h-8.128c-2.077,0-3.776-1.69-3.776-3.776c0-2.086,1.699-3.776,3.776-3.776h8.128   c3.002,0,5.447-2.445,5.447-5.447V18c0-3.002-2.445-5.447-5.447-5.447h-8.128c-2.077,0-3.776-1.69-3.776-3.776   C28.871,6.69,30.571,5,32.648,5h8.128C44.383,5,47.64,6.473,50,8.852C52.36,6.473,55.617,5,59.224,5h8.128   c2.077,0,3.776,1.69,3.776,3.776c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.002,0-5.447,2.445-5.447,5.447v64   c0,3.002,2.445,5.447,5.447,5.447h8.128C69.429,87.447,71.129,89.137,71.129,91.224z" />
                </g>
              </svg>
            </span>
            <span class="letters">Get Started Today</span>
          </span>
        </h2>
      </template>
    </hero-layout01-col>


    <section class="hero-section bg-light-grey">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="sm-flex flex-basis-two-thirds">
          <div class="sm-flex flex-basis-two-thirds">
            <form
              target="_top"
              name="contact"
              method="post"
              v-on:submit.prevent="handleSubmit"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <fieldset class="border-none p0 m0 pad-all">
                <h2 class="h3 block mb4 space-top">
                  Contact us for a free consultation
                </h2>
                <div class="hide">
                  <label>Hello bee:</label>
                  <input name="bot-field" />
                </div>

                <div class="sm-flex flex-justify">
                  <div class="sm-flex flex-column flex-basis-half flex-start">
                    <!-- Start Input -->
                    <div class="ampstart-input relative m0 p0 mb3 ">
                      <input
                        type="text"
                        value=""
                        name="fullname"
                        id="fullname"
                        class="block border-none p0 m0"
                        placeholder="Full name"
                        v-model="formData.fullname"
                        required
                      />
                      <label
                        for="fullname"
                        class="absolute top-0 right-0 bottom-0 left-0"
                        aria-hidden="true"
                        >Full name</label
                      >
                    </div>
                    <!-- End Input-->

                    <!-- Start Input -->
                    <div class="ampstart-input relative m0 p0 mb3 ">
                      <input
                        type="tel"
                        value=""
                        name="phone"
                        id="phone"
                        class="block border-none p0 m0"
                        placeholder="Phone"
                        v-model="formData.phone"
                        required
                      />
                      <label
                        for="phone"
                        class="absolute top-0 right-0 bottom-0 left-0"
                        aria-hidden="true"
                        >Phone</label
                      >
                    </div>
                    <!-- End Input-->

                    <!-- Start Input -->
                    <div class="ampstart-input relative m0 p0 mb3 ">
                      <input
                        type="email"
                        value=""
                        name="email"
                        id="email"
                        class="block border-none p0 m0"
                        placeholder="Email"
                        v-model="formData.email"
                        required
                      />
                      <label
                        for="email"
                        class="absolute top-0 right-0 bottom-0 left-0"
                        aria-hidden="true"
                        >Email</label
                      >
                    </div>
                    <!-- End Input-->
                  </div>
                  <div class="sm-flex flex-column flex-basis-half flex-end">
                    <!-- Start Input -->
                    <div class="ampstart-input relative m0 p0 mb3 ">
                      <input
                        type="text"
                        value=""
                        name="budget"
                        id="budget"
                        class="block border-none p0 m0"
                        placeholder="Project Budget"
                        v-model="formData.budget"
                        required
                      />
                      <label
                        for="budget"
                        class="absolute top-0 right-0 bottom-0 left-0"
                        aria-hidden="true"
                        >Project Budget</label
                      >
                    </div>
                    <!-- End Input-->

                    <!-- Start Input -->
                    <div class="ampstart-input relative m0 p0 mb3 ">
                      <input
                        type="text"
                        value=""
                        name="city"
                        id="city"
                        class="block border-none p0 m0"
                        placeholder="City"
                        v-model="formData.city"
                        required
                      />
                      <label
                        for="city"
                        class="absolute top-0 right-0 bottom-0 left-0"
                        aria-hidden="true"
                        >City</label
                      >
                    </div>
                    <!-- End Input-->

                    <!-- Start Input -->
                    <div class="ampstart-input relative m0 p0 mb3 ">
                      <input
                        type="text"
                        value=""
                        name="country"
                        id="country"
                        class="block border-none p0 m0"
                        placeholder="Country"
                        v-model="formData.country"
                      />
                      <label
                        for="country"
                        class="absolute top-0 right-0 bottom-0 left-0"
                        aria-hidden="true"
                        >Country</label
                      >
                    </div>
                    <!-- End Input-->
                  </div>
                </div>
                <div>
                  <!-- Start Input -->
                  <div class="message-wrapper ampstart-input relative m0 p0 mb3 ">
                    <textarea
                      name="message"
                      id="message"
                      class="block border-none p0 m0"
                      placeholder="Message"
                      v-model="formData.message"
                      required
                    />
                    <label
                      for="message"
                      class="absolute top-0 right-0 bottom-0 left-0"
                      aria-hidden="true"
                      >Message</label
                    >
                  </div>
                  <!-- End Input-->

                  <!-- Start Input -->
                  <div class="ampstart-checkbox relative m0 p0 mb3 ">
                    <input
                      type="checkbox"
                      value=""
                      name="nda"
                      id="nda"
                      class="block border-none p0 m0"
                      placeholder="NDA Required"
                      v-model="formData.nda"
                    />
                    <label
                      for="nda"
                      class="absolute top-0 right-0 bottom-0 left-0 space-left"
                      aria-hidden="true"
                      >NDA Required</label
                    >
                  </div>
                  <!-- End Input-->


                  <br />
                  <!-- Start Submit -->
                  <input
                    type="submit"
                    name="submit"
                    value="Submit Form"
                    id="submit"
                    class="action-link space-top g-pstyle3"
                  />
                  <!-- End Submit -->
                </div>
              </fieldset>
            </form>
          </div>
          <div class="sm-flex flex-basis-third">
            <div class="border-none p0 m0 pad-all">
              <h3 class="h3 block mb4 space-top">General Inquiries</h3>
              <br />
              <br />
              <p>For information on job opportunities or informational interviews please email: <b>careers@bluecollardev.com</b></p>
              <p>For sponsorship, media, events, and opportunities to help us grow please email: <b>marketing@bluecollardev.com</b></p>
              <p>For other inquiries that don’t fit the descriptions above, ask us who you’d like to connect with by sending an email to: <b>info@bluecollardev.com</b></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </Layout>
</template>

<script>
  import anime from 'animejs';

  // Import components
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import About from '~/components/Home.vue';
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
      // Import static HTML blocks
      ProcessBlock
    },
    data() {
      return {
        formData: {}
      };
    },
    computed: {
      homeContent() {
        return HomeData;
      },
      heroContent() {
        return HeroData;
      },
      servicesContent() {
        return HeroData
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
      /*servicesSection() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'services-hero';
        });

        if (items instanceof Array && items.length > 0) {
          return items[0];
        }

        return null
      },*/
      servicesHero() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'services-hero';
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

        if (items instanceof Array && items.length > 0) {
          return items[0];
        }

        return null
      },
    },
    methods: {
      isLoaded() {
        let loaded = false;

        if (sessionStorage.getItem('isLoaded')) {
          loaded = parseInt(sessionStorage.getItem('isLoaded')) === 1;
        }

        return loaded;
      },
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
      },
      getProcessStep(idx) {
        let items = this.homeContent.processSteps;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      // Anime.js card flip helpers
      onCardEnter(element) {
        if (element.animeJS.reversed) element.animeJS.reverse();
        element.animeJS.play();
      },
      onCardLeave(element) {
        if (!element.animeJS.reversed) element.animeJS.reverse();
        element.animeJS.play();
      },
      /**
       * Because we've wrapped the individual letters in span tags, line breaks no longer occur
       * on word boundaries. For example, if our text says "Ipsum lorem dolor", and the viewport
       * is only big enough to accommodate "Ipsum lor", "Ipsum lor" will be displayed on the top
       * line and the rest of the string, "em dolor" would be displayed on the second. The following
       * mechanism ensures that line breaks will only occur at word boundaries, as would occur with
       * normal paragraph text.
       *
       * @param text String Should correspond to the input for the wrapLetters function
       * @param lettersTarget Node The wrapper element
       * @param letterTargets NodeList The individual letters
       */
      wrapTitleText(text, lettersTarget, letterTargets) {
        let letters = [...letterTargets]; // Map NodeList to array
        let lastLetter = null;
        let currentLetter = null;
        let words = text.innerText.split(/\s/); // Explode text on whitespace

        let letterPos = 1;
        let wordStartPos = null;
        while ((currentLetter = letters.shift()) && letters.length > -1) {
          if (lastLetter !== null) {
            // Is the currentLetter's y position different than lastLetter's?
            if (currentLetter.getBoundingClientRect().y !== lastLetter.getBoundingClientRect().y) {
              // If so, detect if the line break is occurring in the middle of a word!
              let wordLengths = words.map(val => val.length);

              let total = 0;
              let wordLength = 0;
              while ((wordLength = wordLengths.shift()) && wordLengths.length > -1) {
                // If the current letter index is greater than the total word count
                // add the number of letters in the next word and repeat
                if (letterPos > total) {
                  let prevTotal = total;
                  total += wordLength;

                  // What was the starting index
                  //console.log('prev total ' + prevTotal);
                  //console.log('current index ' + letterPos);
                  //console.log('new total ' + total);
                  //console.log('-----')

                  wordStartPos = prevTotal++;
                } else {
                  break;
                }
              }
            }
          }

          lastLetter = currentLetter;
          letterPos++;
        }

        console.log('word start char pos ' + wordStartPos);
        // Insert line break on word boundary
        // Subtract, NodeList is zero-indexed
        if (wordStartPos !== null) {
          lettersTarget.insertBefore(document.createElement('br'), letterTargets.item(wordStartPos));
        }
      },
      /**
       * Wraps each character of a text string in span tags so we can animate the individual letters.
       *
       * @param text
       * @returns {string}
       */
      wrapLetters(text) {
        return `<span class="letters">${text.textContent.replace(/([^\x00-\x80]|\w)/g, '<span class="letter">$&</span>')}</span>`;
      },
      /**
       * @param text
       * @param lettersTarget
       * @param letterTargets
       */
      rewrapTitleText(text, lettersTarget, letterTargets) {
        // Sanitize the text first, clear any <br> elements that we previously inserted
        lettersTarget.querySelectorAll('br').forEach(el => el.remove());
        this.wrapTitleText(text, lettersTarget, letterTargets);
      },
      encode(data) {
        return Object.keys(data)
          .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          )
          .join('&');
      },
      handleSubmit(e) {
        fetch('https://bluecollardev.netlify.com/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': e.target.getAttribute('name'),
            ...this.formData
          })
        })
          .then(() => this.$router.push('/'));
          //.catch(error => alert(error));
      }
    },
    mounted() {
      const svgPath = document.querySelectorAll('.path');

      const svgText = anime({
        targets: svgPath,
        loop: true,
        direction: 'alternate',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 700,
        delay: (el, i) => { return i * 500 }
      });

      const text = document.querySelector('.title .letters');

      // Wrap every letter in a span
      text.outerHTML = this.wrapLetters(text);

      const textTarget = document.querySelector('.title');
      const lineTarget = document.querySelector('.title .line');
      const lettersTarget = document.querySelector('.title .letters');
      const letterTargets = document.querySelectorAll('.title .letter');

      this.wrapTitleText(text, lettersTarget, letterTargets);

      window.addEventListener('resize', this.rewrapTitleText.bind(this, text, lettersTarget, letterTargets));

      let timeline = anime.timeline({ loop: true });

      timeline.add({
        targets: lineTarget,
        scaleY: [1,1],
        opacity: [0.5,1],
        easing: 'easeOutExpo',
        duration: 700
      })
      .add({
        targets: lineTarget,
        scaleY: [1,1],
        opacity: [1,0],
        easing: 'easeOutExpo',
        duration: 300
      })
      .add({
        targets: letterTargets,
        scale: [1.5, 1],
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 150,
        //offset: '-=775',
        delay: (el, i) => {
          return letterTargets.length * (i+1)
        }
      })
      .add({
        targets: lettersTarget,
        scaleY: [1,1],
        opacity: [1,0],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 10000
      });

      const flipCardSelector = '.service-detail-card-inner';
      const flipCardsContent = document.querySelectorAll(flipCardSelector);

      flipCardsContent.forEach(((element, index) => {
        // Set the height of the wrapper, we need to absolute position the content
        element.style.height = `${element.getBoundingClientRect().height}px`;
        element.style.width = `${element.getBoundingClientRect().width}px`;

        const cardFaces = element.querySelectorAll('.service-detail-card-front, .service-detail-card-back');
        cardFaces.forEach((cardFace) => {
          cardFace.style.position = 'absolute';
          cardFace.style.top = '0';

          if (cardFace.classList.contains('service-detail-card-back')) {
            cardFace.style.display = 'block';
          }

          // Freeze the heights of the faces
          cardFace.style.height = `${element.getBoundingClientRect().height}px`;
          cardFace.style.width = `${element.getBoundingClientRect().width}px`;
        });

        element.animeJS = anime.timeline({
          autoplay: false
        });

        element.animeJS.add({
          targets: element,
          rotateY: [{ value: '180deg', duration: 100 }]
        });

        element.querySelectorAll('.more-info-link').forEach(((link) => {
          link.addEventListener('click', ((e) => {
            e.preventDefault();
            e.stopPropagation();
            this.onCardEnter(element);
          }).bind(this));
        }).bind(this));

        element.addEventListener('mouseleave', (() => {
          this.onCardLeave(element);
        }).bind(this));
      }).bind(this));
    },
    beforeDestroy() {
      console.log('remove wrapTitleText resize listener');
      window.removeEventListener('resize', this.rewrapTitleText);
    }
  }
</script>

<style>
  ul.bullets {
    list-style: square inside;
  }

  ul.bullets li {
    list-style: square inside;
  }

  .video-banner video {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 0;
    object-fit: cover !important;
  }

  .text-banner {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  .text-banner .text {
    margin-left: auto;
    margin-right: auto;
    width: 33vw;
    z-index: 1;
  }

  /* TODO: This is ripped clean it up */
  .title {
    font-weight: 900;
  }

  .title .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .title .line {
    opacity: 0;
    position: absolute;
    left: -1em;
    height: auto;
    width: 1rem;
    transform-origin: 0 50%;
  }

  .title .line svg {
    height: 1.7em;
    -webkit-filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.666));
    filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.666));
  }

  .title .letter {
    display: inline-block;
    line-height: 1em;
  }

  @keyframes blink {
  50% {
      opacity: 0.0;
    }
  }
  @-webkit-keyframes blink {
    50% {
      opacity: 0.0;
    }
  }

  .test svg {
    z-index: 10;
    fill: white;
  }

  @media (max-width: 40em) {
    .xs-order-1 {
      order: 1;
    }

    .xs-order-2 {
      order: 2;
    }
  }

  @media (min-width: 40em) {
    .sm-order-1 {
      order: 1;
    }

    .sm-order-2 {
      order: 2;
    }
  }
</style>

<style lang="scss">
  .service-detail-card {
    perspective: 1000px
  }

  .service-detail-card-inner {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .service-detail-card-front,
  .service-detail-card-back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .service-detail-card-front {
  }

  .service-detail-card-back {
    display: none;
    transform: rotateY(180deg);
  }
</style>

<style>
  form {
    width: 100%;
  }

  #message,
  .message-wrapper {
    width: 100%;
  }

  #message {
    height: 10rem;
  }
</style>
