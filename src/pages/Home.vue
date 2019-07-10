<template>
  <Layout>
    <Header/>

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
        <!--<svg class="space-bottom-2x text" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 229.2 69.6" style="enable-background:new 0 0 229.2 69.6;" xml:space="preserve">
          <defs>
            <clipPath id="websiteClip">
              <path d="M79.7,29.1C74.3,36,67.5,43.8,59.3,52.5c-7.1,7-11.8,11.2-13.8,12.6c-4.6,3.5-7.9,5.3-9.8,5.3h-0.4c-2.9,0-4.8-1-5.6-3
              c-0.1-0.5-0.2-0.8-0.2-1v-0.6c0-2.2,1.8-6.5,5.5-12.8l7.8-14.3C31.4,49.5,23.8,57,19.8,60.8c-1.8,0-3.4-0.6-4.8-1.8
              c-0.6-0.7-0.9-1.7-0.9-2.9c0-2.3,1.8-6.5,5.4-12.6c8-14.7,13.4-24.7,16.3-30.1h-0.2c-5.9,0.7-13,4.1-21.1,10c-1.4,0.9-3.4,2.7-6,5.5
              V29c0.5,1.3,1.3,2.2,2.5,2.9c1.5,0.5,3,0.7,4.5,0.7c0.2,0,0.6,0,0.9,0.1c0,0.9-1.6,1.9-4.8,3.1c-1.7,0.5-3.1,0.7-4.2,0.7H6.9
              c-2.5,0-4.2-2.8-4.9-8.4c-0.1-0.3-0.1-0.8-0.1-1.6v-1.1c0-2.5,0.9-4.5,2.8-5.9c1.8-1.7,4.1-3.4,7-5.1c4-2.3,9.3-4.5,15.8-6.6
              c4.8-1.2,8.6-1.8,11.5-1.8c1.5,0.2,2.9,0.8,4,1.8c1.7,1.6,2.6,3.6,2.6,5.9c0,0.3-2.3,4.5-6.9,12.6c-0.8,1.5-4.3,8-10.6,19.4v0.1
              c7.8-7.3,15.2-14.3,22.1-20.9C56,14,59.2,7.7,59.5,6.1c1.4,0.2,2.7,0.7,4,1.7c1.8,1.5,2.7,3.6,2.7,6.2v0.1
              C49.7,44,41.2,59.4,40.8,60.4c1.8-1.6,4.3-4.2,7.7-7.8c9.4-10.6,18.4-22,27.2-34C82,9.8,85.6,3.9,86.4,1c0.1-0.4,0.1-0.8,0.1-1.1
              v-0.1c0.1-0.1,0.1-0.1,0.2-0.1c1.5,0.4,3.1,1.4,4.9,3c1.8,2.3,2.8,4.1,2.8,5.3C91.5,13.2,86.6,20.2,79.7,29.1z M125.8,40
              c-0.7,1.3-1.2,2.3-1.6,3c-0.6,1-1.2,2.3-2,3.8l-2.1,3.7c-1.8,3.2-3.2,5.7-4.1,7.6c-1.5,2.8-4.1,3.4-7.7,2c-1.5-0.6-2.8-1.4-4-2.5
              c-1.2-1.2-2.1-2.3-2.5-3.4l-3.6,6.6c-4.5-0.4-6.3-2.4-5.6-6c-1.1,0.8-2.1,1.5-3,2.1C86,59,83,60.3,80.9,60.6
              c-0.7,0.1-1.3,0.2-1.8,0.2h-0.4c-1.8,0-3.4-0.7-4.7-2c-1.4-1.8-2.1-4.1-2.1-6.6v-0.6c0-3.1,1.1-7,3.2-11.5
              c3.5-7.4,8.1-12.8,13.8-16.2c1-0.6,2-1,3-1.5c0.9-0.4,1.4-0.6,1.6-0.6c0.7,0,1.9,0.2,3.4,0.6c0.7,0.2,1.5,0.4,2.2,0.7
              c2.5,1.2,3.8,3,3.8,5.4v0.4c0,1.6-0.6,3.5-1.9,5.7c-2.3,3.7-5.4,6.8-9.5,9.4l-8.3,0.2c-0.7,0.9-1.2,1.7-1.6,2.4
              c-1.5,2.7-2.3,5-2.6,6.9c0.1,0.3,0.4,0.5,0.9,0.5H80c1.4,0,3.9-0.9,7.6-2.6c2.6-1.2,5.4-2.9,8.3-5.1c0.4-0.3,0.8-0.6,1.2-0.9
              c0.6-1.2,1.1-2,1.4-2.6c0.7-1.4,2.2-4.1,4.5-8.3l0.7-1.4l0.8-1.4l1.6-2.9c1.2-2.3,2.3-4.2,3.2-5.9c5.4-9.8,8-15.1,7.9-15.9
              c2,0.2,3.6,1,4.8,2.6c1.3,1.5,1.8,3.2,1.7,5.2l-11.9,21.5c0.9-0.8,2-1.8,3.3-3l1.7-1.5l1.7-1.6c2.6-2.4,4.6-4.2,6-5.4
              c4.6,0.4,6.4,2.6,5.4,6.6c-0.4,1.5-1.2,3.4-2.4,5.7l-0.8,1.5L125.8,40z M85.4,38.8l4,0.2c0.9-0.3,1.7-0.7,2.4-1.2
              c0.3-0.2,0.8-0.6,1.5-1.3c0.7-0.8,1.2-1.6,1.6-2.4c0.7-1.5,1.1-2.8,1.1-3.9c0-0.7-0.2-1.1-0.6-1.3h-0.2c-0.8,0.1-1.8,0.7-3.1,1.8
              c-1.3,1.2-2.2,2.1-2.9,2.8C87.7,35.4,86.4,37.1,85.4,38.8z M119.9,35.9l-13.6,11.5c-0.3,0.2-0.6,0.4-0.9,0.6l-0.4,0.6
              c0.2,1.7,0.7,3,1.5,4c0.9,1,1.8,1.4,3,1.1L119.9,35.9z M227.8,43.1v0.6c0,1.2-0.4,2.2-1.1,3h-0.1c-0.2-0.7-0.6-1.3-1.2-1.8
              c-0.7-0.3-1.3-0.5-1.8-0.5H223c-3.2,0-9.8,2.8-19.8,8.5c-9,5.2-14.8,7.8-17.3,7.8h-0.3c-3.4,0-5.6-1.9-6.7-5.6
              c-0.2-1.1-0.4-2.2-0.4-3.1v-0.5c0-1.4,0.2-3,0.6-4.6c-4.3,3.9-9,8.2-14.3,13c-0.6,0.6-0.9,0.8-0.9,0.8c-1.7,0-3.1-0.5-4.4-1.5
              c-0.7-0.8-1.1-1.7-1.1-2.6v-0.6c0-1.7,1.3-5,4-9.8c-4.1,3.8-8.2,7.5-12.4,11.2c-2.3,2.2-3.6,3.3-3.7,3.3c-1.3,0-2.6-0.4-4-1.1
              c-1.2-0.8-1.8-1.9-1.8-3.2v-0.4c0-2.2,1.5-5.8,4.4-10.9c0.7-1.2,1.4-2.5,2.2-3.9c-2.6,1.1-4.9,2.2-7,3.3c0.3,1.7,0.5,3.2,0.5,4.7
              v0.3c0,3.4-0.9,6.4-2.7,8.9c-1.5,1.6-3.2,2.4-5.3,2.4h-0.4c-1.9,0-3.7-0.7-5.3-2.2c-0.8-0.9-1.4-1.8-1.7-2.6
              c-0.3-0.9-0.5-1.8-0.5-2.5v-0.4c0-0.9,0.2-1.9,0.6-3c0-0.1,0.1-0.2,0.3-0.4c2.5-2,5-3.8,7.5-5.4c-2-3.7-3-6-3-6.9c0-0.2,0-0.6,0-1.1
              c0-3,1.6-6.3,4.8-9.8c1.6-1.6,2.8-2.7,3.7-3.2c1.7-1.3,3.6-2.5,5.6-3.5c1.1-0.6,2.1-1.1,2.9-1.4c1.7,0.6,3.3,1.9,4.6,4
              c0.4,0.6,0.7,1.3,1,2.1l0.2,0.4c-2.8,0.9-5,1.8-6.8,2.9c-4.9,2.8-7.4,6.2-7.4,10.2c0,0.9,0.1,1.8,0.4,2.8c4.9-2.9,8.8-4.9,11.6-6
              c0.8-1.5,1.7-3,2.7-4.7c1.6-3,2.4-4.9,2.5-5.9h0.1c1.2,0.1,2.5,0.6,3.7,1.5c1,0.9,1.6,1.6,1.8,2c0.7,1.3,1.1,2.5,1.1,3.7l-0.1,0.3
              v0.4c-0.2,0.4-1.6,2.9-4.2,7.5l-5.2,9.1l12.1-11.1c0.7-0.4,1.4-0.6,1.8-0.6h0.4l9-16.4h-0.1c-2.4,0-4.5,0.1-6.4,0.2
              c-0.4-0.2-0.7-0.5-0.9-0.9c-1,1.1-2.2,2.2-3.4,3.5c-2.1-0.3-3.9-0.7-5.4-1.2c-0.5-0.2-1-0.4-1.6-0.6v-0.1c2.3-5.4,3.6-8.5,4-9.3
              c1.5-0.2,2.9-0.3,4.2-0.3h1.2c2.7,0,5.3,0.3,7.8,0.8v0.1c-0.4,0.4-2.1,2.1-4.9,5.1l7.3-0.8c3-5.5,4.5-8.6,4.5-9.3
              c1.2,0,2.5,0.6,4.1,1.8c1.5,1.5,2.3,3.3,2.3,5.4c0,0.4-0.2,1-0.6,1.6c1.2-0.1,2-0.1,2.6-0.1h2.8c0.1,0,0.1,0.1,0.1,0.2
              c-1.2,2.8-1.9,4.3-1.9,4.3h-0.1c-1.7-0.1-3.5-0.2-5.6-0.4l-16,28.7h0.1c7.9-7.4,12-11.1,12.1-11.2c0,0,0,0,0.1,0
              c0.7-1.4,1.6-2.9,2.5-4.4c1.1-1.6,2.6-3.4,4.5-5.4c2.2-2.2,4-3.6,5.4-4.3c1.4-0.9,3-1.8,4.9-2.5c0.2-0.1,0.3-0.1,0.4-0.1
              c1.8,0,3.8,0.5,5.9,1.4c2.5,1.2,3.7,3,3.7,5.5c0,3.2-2,6.9-6,11.2c-2.3,2.2-4.2,3.6-5.5,4.3c-0.4,0.1-0.7,0.1-0.7,0.1
              c-1.2,0-3.8,0-7.8,0.1c-2.1,2.8-3.5,6-4.2,9.4c0,0.3,0.6,0.6,1.7,0.7c0,0.1,0.2,0.1,0.7,0.1h0.5c0.1,0,0.1,0,0.2,0
              c3.1,0,7.8-2.7,13.8-8.1c5.1-4.6,8.7-7.5,10.9-8.8c2-1.1,3.7-1.7,5.1-1.7c4.1,0,7,1.7,8.6,5C227.7,41.5,227.8,42.4,227.8,43.1z
                M192.3,38.5c0.4,0,1.7,0,4.1,0.1c1.1-0.2,2.2-0.9,3.4-2c2.1-2.3,3.1-4.6,3.1-6.9c-0.1-0.8-0.3-1.2-0.7-1.2
              C199.4,29.3,196.1,32.7,192.3,38.5z M134.8,47.9c-0.7,0.5-1.6,1.3-2.7,2.3c-0.6,0.6-1,1.2-1.4,1.8c1.5-0.4,2.6-1,3.4-1.8
              c0.4-0.5,0.6-1,0.6-1.7V47.9z"/>
            </clipPath>
          </defs>
          <path class="path" clip-path="url(#websiteClip)" d="M18.5,33.91S0,36.67,6.67,24.17c8-8.34,22.15-15.46,31.31-13.62,8.34,1-.95,9.34-8.81,24.5C23.34,46.29,15.08,55.23,18.5,57c1.67.86,12-8.3,21.33-20C49.55,24.8,58.23,9.57,61.17,9.5,67.83,9.33,49.88,35.43,40.83,52c-4.14,7.59-10.66,14.17-6.66,15.5C38,68.77,49.17,64,83,15.67c1.59-2.27,7-10.49,8.6-13" fill="none" stroke="#FFFFFF" stroke-width="15"/>
          <path class="path" clip-path="url(#websiteClip)" d="M85.4,41.5s18.1-5.6,13.35-15.75c-2.89-6.18-9,.9-15.5,8.2,0,0-25.5,39.2,14.25,16,0,0,24.37-22.26,28.5-21.05,1.62,1.09-4.14,11-8,19-2.71,5.63-3,10.83-5.55,9.39-24,.28,15.13-45.9,9.21-48.09S94.4,63,94.4,63" fill="none" stroke="#FFFFFF" stroke-width="9"/>
          <path class="path" clip-path="url(#websiteClip)" d="M150.24,20.5S138,26.75,136,31.75s-4.07,5,.43,13.1a9.25,9.25,0,0,1-.18,7.15c-1.75,3.5-2,9.75-7.75,5.75S134.24,42,150.24,37.5c0,0,4.41-4.3,8.51-8.6s-17.5,26-15.88,31.9L173.5,35.19,186.15,9.13s-28,50.42-25.1,51S178.75,38,195.5,41c0,0,20.9-14.33,5-15.75,0,0-26.5,15.25-17,31.25,0,0,8.5,3,18-4.5s22.5-21.2,24.75-4.1" fill="none" stroke="#FFFFFF" stroke-width="10"/>
          <path class="path" clip-path="url(#websiteClip)" d="M171,9.13s-11.33,10.38-8,11.92,43-2.8,43-2.8" fill="none" stroke="#FFFFFF" stroke-width="13"/>
        </svg>-->
        <h1 class="title">
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
      bgColor="bg-white"
    />

   <!-- <section
      ref="heroLayout"
      :class="`test homepage-hero hero-section-01-col sm-flex angle flex-center flex-justify-center`"
      :style="`background-image: url(/images/heroes/blue-collar-home-hero.jpg);`"
    >
      <div class="sm-flex flex-center flex-justify-center flex-basis-full">
        <svg version="1.1" id="poly-content" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="100%" y="500px" viewBox="0 0 480 318.2" xml:space="preserve">
          <linearGradient id="shade01" gradientUnits="userSpaceOnUse" x1="411.5932" y1="249.9649" x2="426.2599" y2="296.9649">
            <stop offset="0" style="stop-color:#c6d4db"></stop>
            <stop offset="1" style="stop-color:#78909c"></stop>
          </linearGradient>
          <path class="polybl" d="M197.3,318.2H0l197.3-59V318.2z"></path>
          <path class="polybr" d="M480,229.4l-295.8,88.7l295.8,0.1V229.4z"></path>
          <path class="poly" d="M480.2,280.3l-122.2,37.9v-52.3L480,229.4"></path>
        </svg>

        <svg version="1.1" id="footerShapes" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="100%" y="500px" viewBox="0 0 480 124.6" xml:space="preserve">
          <linearGradient id="shade02" gradientUnits="userSpaceOnUse" x1="51.0681" y1="34.7019" x2="65.4015" y2="83.5353">
            <stop offset="0" style="stop-color:#78909c"></stop>
            <stop offset="1" style="stop-color:#c6d4db"></stop>
          </linearGradient>
          <path class="shapeG" d="M283.2,59L65.5,124.6V69.4L283.2,3.8V59z"></path>
          <path class="shapeG" d="M480,55.2L344.9,95.3V40.1L480,0V55.2z"></path>
          <path class="shape" d="M282.7,0.2H480l-197.3,59V0.2z"></path>
          <path class="shape" d="M0,89L295.8,0.3L0,0.2V89z"></path>
          <path class="shapeShade" d="M116.4,53.8L0,89.3v-53L116.4,0.7V53.8z"></path>
        </svg>
      </div>
    </section>-->
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
      TestimonialHeroLayout
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

      // Wrap every letter in a span
      document.querySelectorAll('.title .letters').forEach((letters) => {
        letters.outerHTML = `<span class="letters">${letters.textContent.replace(/([^\x00-\x80]|\w)/g, '<span class="letter">$&</span>')}</span>`;
      });

      const textTarget = document.querySelector('.title');
      const lineTarget = document.querySelector('.title .line');
      const lettersTarget = document.querySelector('.title .letters');
      const letterTargets = document.querySelectorAll('.title .letter');

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
    font-size: 3.5em;
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
