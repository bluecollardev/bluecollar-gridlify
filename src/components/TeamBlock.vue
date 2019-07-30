<template>
  <!-- REPEAT and alternate -->
  <div class="flex flex-column">
    <div class="sm-flex flex-center flex-justify-center flex-basis-half bg-bc-blue">
      <div class="content-block space-top-2x space-bottom-2x">
        <content-block-layout
          className="pad-top pad-bottom"
          title="Connect With Local IT Pros"
          description="In conjunction with partnering with the business landscape globally, Blue Collar provides <strong>training for underprivileged youth</strong> – we believe <strong>coding is the future</strong> and we want to empower youth to make their footprint in this vast world."
        />
      </div>
    </div>
    <div class="sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="content-block">
        <content-block-layout
          className="pad-top"
          title="Your Partner for the Future"
          description="Blue Collar partners with businesses to modernize their digital tool kit for the paradigm shift currently underway.

As of 2018, it was found 58% of site visitors were accessing content through mobile devices. The world is digitizing at an accelerated rate, moving away from traditional HTML websites to a system of content pages shared across social media platforms and mobile devices.

For those businesses that adapt to this shift and adopt a modernized tool kit, there is a larger percentage of success. But the road to efficient digitizing can be arduous and is likely to create business gaps for our clients. Blue Collar strives to create solutions for these gaps by being at the forefront of these new technologies and ensures that our client receives the utmost value from our services."
          link="/"
          linkText="Back to Home"
        />
      </div>
    </div>
    <angle-mosaic>
      <template v-slot:slot1Bg>
        <div class="bg-evening-blue video-block-bg drop-shadow rotate-right is-hidden--sm-down">
          <!--<matrix-bg style="z-index: 1; opacity: 0.25" fillStyle="rgba(0, 0, 0, 0.01)" :fontSize="27"></matrix-bg>-->
        </div>
      </template>
      <template v-slot:slot1Front>
        <div
          v-if="getTestimonialByIndex(0)"
          class="sm-flex flex-column flex-center flex-basis-half pad-top">
          <testimonial-block-layout
            className="space-top"
            reviewedBy="Lucas Lopatka"
            position="Solutions Architect"
            organization="Welcome to Blue Collar! I'm Lucas, and I am a Full-Stack Solutions Architect with 15 years of experience designing and building custom software applications. I design, wireframe, prototype, and develop mobile, hybrid and progressive apps. I also architect, implement and deploy scalable, cloud-based RESTful services and multi-tier micro-services for clients of all sizes located in Canada and abroad."
          />
          <div
            class="homepage-hero-action action-link-block text-center space-bottom">
            <a class="action-link transparent space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>
          </div>
        </div>
      </template>
      <template v-slot:slot2Bg>
        <div class="bg-midnight-blue drop-shadow is-hidden--sm-down">
          <!--<matrix-bg style="z-index: 1; opacity: 0.25" fillStyle="rgba(0, 0, 0, 0.01)" :fontSize="27"></matrix-bg>-->
        </div>
      </template>
      <template v-slot:slot2Front>
        <div
          v-if="getTestimonialByIndex(0)"
          class="sm-flex flex-column flex-center flex-basis-half">
          <testimonial-block-layout
            className=""
            reviewedBy="Lucas Lopatka"
            position="Solutions Architect"
            organization="Welcome to Blue Collar! I'm Lucas, and I am a Full-Stack Solutions Architect with 15 years of experience designing and building custom software applications. I design, wireframe, prototype, and develop mobile, hybrid and progressive apps. I also architect, implement and deploy scalable, cloud-based RESTful services and multi-tier micro-services for clients of all sizes located in Canada and abroad."
          />
          <div
            class="homepage-hero-action action-link-block text-center space-bottom">
            <a class="action-link transparent space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>
          </div>
        </div>
      </template>
      <template v-slot:slot3Bg>
        <div class="bg-evening-blue video-block-bg drop-shadow rotate-left is-hidden--sm-down">
          <!--<matrix-bg style="z-index: 1; opacity: 0.25" fillStyle="rgba(0, 0, 0, 0.01)" :fontSize="27"></matrix-bg>-->
        </div>
      </template>
      <template v-slot:slot3Front>
        <div
          v-if="getTestimonialByIndex(0)"
          class="sm-flex flex-column flex-center flex-basis-half pad-top">
          <testimonial-block-layout
            className="space-top"
            reviewedBy="Lucas Lopatka"
            position="Solutions Architect"
            organization="Welcome to Blue Collar! I'm Lucas, and I am a Full-Stack Solutions Architect with 15 years of experience designing and building custom software applications. I design, wireframe, prototype, and develop mobile, hybrid and progressive apps. I also architect, implement and deploy scalable, cloud-based RESTful services and multi-tier micro-services for clients of all sizes located in Canada and abroad."
          />
          <div
            class="homepage-hero-action action-link-block text-center space-bottom">
            <a class="action-link transparent space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>
          </div>
        </div>
      </template>
      <template v-slot:slot4Bg>
        <div class="bg-bc-blue video-block-bg drop-shadow is-hidden--sm-down">
          <!--<matrix-bg style="z-index: 1; opacity: 0.25" fillStyle="rgba(0, 0, 0, 0.01)" :fontSize="27"></matrix-bg>-->
        </div>
      </template>
      <template v-slot:slot4Front>
        <div
          class="sm-flex flex-column flex-center flex-basis-half pad-top">
          <div class="content-block">
            <content-block-layout
              className="pad-top pad-bottom"
              subtitle="Expertise"
              description="In conjunction with partnering with the business landscape globally, Blue Collar provides <strong>training for underprivileged youth</strong> – we believe <strong>coding is the future</strong> and we want to empower youth to make their footprint in this vast world."
            />
          </div>
        </div>
      </template>
      <template v-slot:slot5Bg>
        <div class="bg-evening-blue video-block-bg drop-shadow is-hidden--sm-down">
          <!--<matrix-bg style="z-index: 1; opacity: 0.25" fillStyle="rgba(0, 0, 0, 0.01)" :fontSize="27"></matrix-bg>-->
        </div>
      </template>
      <template v-slot:slot5Front>
        <div
          class="sm-flex flex-column flex-center flex-basis-half pad-top">
          <div class="content-block">
            <content-block-layout
              className="pad-top pad-bottom"
              subtitle="Expertise"
              description="In conjunction with partnering with the business landscape globally, Blue Collar provides <strong>training for underprivileged youth</strong> – we believe <strong>coding is the future</strong> and we want to empower youth to make their footprint in this vast world."
            />
          </div>
        </div>
      </template>
      <template v-slot:slot6Bg>
        <div class="bg-bc-blue video-block-bg drop-shadow is-hidden--sm-down">
          <!--<matrix-bg style="z-index: 1; opacity: 0.25" fillStyle="rgba(0, 0, 0, 0.01)" :fontSize="27"></matrix-bg>-->
        </div>
      </template>
      <template v-slot:slot6Front>
        <div
          class="sm-flex flex-column flex-center flex-basis-half pad-top">
          <div class="content-block">
            <content-block-layout
              className="pad-top pad-bottom"
              subtitle="Expertise"
              description="In conjunction with partnering with the business landscape globally, Blue Collar provides <strong>training for underprivileged youth</strong> – we believe <strong>coding is the future</strong> and we want to empower youth to make their footprint in this vast world."
            />
          </div>
        </div>
      </template>
    </angle-mosaic>
  </div>
</template>

<script>
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';
  import TestimonialBlockLayout from "~/components/layouts/TestimonialBlockLayout";
  import AngleMosaic from "~/components/layouts/AngleMosaic";
  import ContentBlockLayout from "~/components/layouts/ContentBlockLayout";

  export default {
    mixins: [
      TestimonialMixin
    ],
    components: {
      ContentBlockLayout,
      TestimonialBlockLayout,
      AngleMosaic
    }
  }
</script>
