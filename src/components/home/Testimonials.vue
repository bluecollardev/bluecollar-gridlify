<template>
  <section id="testimonials" class="hero-section angle bg-bc-blue">
    <div class="container pad-top-2x pad-bottom-2x">
      <shrink-words-one-by-one-text-effect
        tag="h2"
        text="What Our Clients Say"
        class="title text-center pad-bottom space-bottom-half"
        :loop="true">
      </shrink-words-one-by-one-text-effect>
      <div class="testimonials-grid">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="testimonial-item">
          <testimonial-block-layout
            :testimonial="testimonial.testimonial"
            :reviewedBy="testimonial.reviewedBy"
            :position="testimonial.position"
            :organization="testimonial.organization"
            :image="testimonial.image"
            :link="testimonial.link"
            :linkText="testimonial.linkText"
            :testimonialId="testimonial.testimonialId"
            textColor="white"
            @link-clicked="handleLinkClicked"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue'
import ShrinkWordsOneByOneTextEffect from '~/core/components/text/ShrinkWordsOneByOne.vue'

export default {
  name: 'Testimonials',
  components: {
    TestimonialBlockLayout,
    ShrinkWordsOneByOneTextEffect
  },
  props: {
    testimonials: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    handleLinkClicked(testimonialId) {
      this.$emit('link-clicked', testimonialId)
    }
  }
}
</script>

<style lang="scss" scoped>
#testimonials {
  position: relative;
  z-index: 5;

  h2 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .title {
    text-align: center;
    width: 100%;
    display: block;

    * {
      text-shadow: 1px 0 3px rgba(0, 0, 0, 0.975) !important;
      text-align: center;
    }
  }

  @media screen and (max-width: 64em) {
    h2 {
      font-size: 1.75rem;
    }
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .testimonial-item {
    display: flex;
    flex-direction: column;
    height: 100%;

    :deep(.content-block.testimonial-block-wrapper) {
      display: flex;
      flex-direction: column;
      height: 100%;
      color: white !important;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      padding: 0 !important;

      * {
        color: white !important;
      }

      .g-services {
        display: flex;
        flex-direction: column;

        &:first-child {
          flex: 1;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          max-height: 250px;
          overflow: hidden;
        }

        p.g-pstyle10[style] {
          color: white !important;
        }

        p.testimonial-text {
          color: white !important;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        p {
          color: white !important;
          margin-bottom: 0.75rem;
        }
      }

      .g-services[style*="position: relative"] {
        position: relative !important;
        padding-bottom: 2rem;

        .testimonial-link-wrapper {
          position: relative !important;
          margin-top: 0.5rem;
          pointer-events: auto !important;
        }
      }

      .flex.flex-center {
        margin-top: 1rem;

        .testimonial-profile-circle.xs-hide,
        .testimonial-profile-circle.sm-hide,
        .testimonial-profile-circle.md-hide {
          display: block !important;
          visibility: visible !important;
        }
      }
    }

    :deep(.g-pstyle10) {
      color: white !important;
    }

    :deep(p) {
      color: white !important;
    }

    :deep(strong) {
      color: white !important;
    }

    :deep(em), :deep(small) {
      color: #e0e0e0 !important;
    }
  }

  @media screen and (max-width: 64em) {
    .testimonials-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .testimonial-item {
      :deep(.circle-composite.testimonial-profile-circle) {
        display: block !important;
      }

      :deep(.content-block.testimonial-block-wrapper) {
        display: flex;
        flex-direction: column-reverse !important;
      }

      :deep(.flex.flex-center) {
        flex-direction: row !important;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;

        .testimonial-profile-circle {
          margin: 0 !important;
          flex-shrink: 0;
        }

        > div {
          flex: 1;
        }
      }

      :deep(.g-services:first-child) {
        margin-top: 1rem;
        order: 2;
      }

      :deep(.sm-space-bottom-half.g-services) {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    }
  }

  @media screen and (max-width: 40em) {
    .testimonial-item {
      :deep(.circle-composite.testimonial-profile-circle.xs-hide) {
        display: block !important;
      }
    }
  }

  @media screen and (min-width: 40em) and (max-width: 52em) {
    .testimonial-item {
      :deep(.circle-composite.testimonial-profile-circle.sm-hide) {
        display: block !important;
      }
    }
  }

  @media screen and (min-width: 52em) and (max-width: 64em) {
    .testimonial-item {
      :deep(.circle-composite.testimonial-profile-circle.md-hide) {
        display: block !important;
      }
    }
  }
}
</style>
