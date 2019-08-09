<template>
  <!-- REPEAT and alternate -->
  <div class="team-block flex flex-column space-bottom-2x">
    <div class="sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="content-block">
        <content-block-layout
          className="pad-top"
          title="Need Backup? We Got You."
          description="To survive and thrive in the 21st century's digital battleground, you need the right skills. At Blue Collar, our elite technology warriors build software that's ready for tomorrow's challenges."
          link="/"
          linkText="Back to Home"
          :onLinkClicked="this.onHomeLinkClicked"
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
    props: {
      onHomeLinkClicked: {
        type: Function,
        default: (e) => {}
      }
    },
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
    .team-block {
      .content-block {
        max-width: 60%;
      }

      .content-block-heading {
        margin-top: 5rem;
        margin-right: 3rem;
      }

      .content-block-body {
        margin: 5rem 0;
      }
    }
  }

  @media screen and (min-width: 84em) {
    .team-block {
      .content-block {
        max-width: 50%;
      }
    }
  }
</style>
