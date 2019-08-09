<template>
  <!-- REPEAT and alternate -->
  <div class="team-block flex flex-column">
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
  </div>
</template>

<script>
  import AngleMosaicLayout from '~/components/layouts/AngleMosaicLayout.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';
  import TestimonialMixin from '~/core/mixins/TestimonialMixin';

  export default {
    mixins: [
      TestimonialMixin
    ],
    components: {
      ContentBlockLayout,
      TestimonialBlockLayout,
      AngleMosaicLayout
    }
  }
</script>

<style lang="scss">
  .team-block {
    .content-block {
      max-width: 75%;
      margin-left: auto;
      margin-right: auto;
    }

    .content-block-heading {
      margin-top: 0;
    }

    .content-block-heading p {
      display: block;
      width: 100%;
      text-align: center;
    }

    .content-block-body {
      margin: 2.5rem 0;
    }

    .content-block-body p {
      text-align: left;
    }
  }

  @media screen and (min-width: 40em) {
    .content-block {
      max-width: 60%;
    }

    .content-block-heading {
      margin-top: 5rem;
    }

    .content-block-body {
      margin: 5rem 0;
    }
  }

  @media screen and (min-width: 84em) {
    .content-block {
      max-width: 50%;
    }
  }
</style>
