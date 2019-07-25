<template>
  <!-- REPEAT and alternate -->
  <section class="services lg-flex">
    <div
      v-if="getTestimonialByIndex(0)"
      class="bg-light-grey sm-flex flex-column flex-center flex-basis-half pad-top bg-white">
      <testimonial-block-layout
        className="space-top"
        reviewedBy="Lucas Lopatka"
        position="Solutions Architect"
        organization="Welcome to Blue Collar! I'm Lucas, and I am a Full-Stack Solutions Architect with 15 years of experience designing and building custom software applications. I design, wireframe, prototype, and develop mobile, hybrid and progressive apps. I also architect, implement and deploy scalable, cloud-based RESTful services and multi-tier micro-services for clients of all sizes located in Canada and abroad."
        image="/images/company/me-ski.jpg"
      />
      <!--<div
        class="homepage-hero-action action-link-block text-center space-bottom">
        <a class="action-link space-top g-pstyle3" href="/lucas-profile" aria-label="My Work Experience">My Work Experience</a>
      </div>-->
    </div>

    <div class="sm-flex flex-center flex-justify-center flex-basis-half bg-bc-blue">
      <div class="content-block">
        <content-block-layout
          className="pad-top pad-bottom"
          title="Connect With Local IT Pros"
          description="In conjunction with partnering with the business landscape globally, Blue Collar provides <strong>training for underprivileged youth</strong> – we believe <strong>coding is the future</strong> and we want to empower youth to make their footprint in this vast world."
        />
      </div>
    </div>
  </section>
</template>
