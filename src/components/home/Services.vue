<template>
  <section id="services" class="hero-section angle">
    <!--<matrix-bg></matrix-bg>-->
    <angle-mosaic-layout primaryColor="transparent" secondaryColor="bg-light-grey">
      <template v-slot:slot1Bg>
        <div class="bg-bc-blue video-block-bg drop-shadow rotate-right is-hidden--sm-down">
        </div>

      </template>
      <template v-slot:slot1Front>
        <!--<content-block-layout
          className="pad-top ml-auto mr-auto"
          v-if="content[0].linkText"
          image="/images/icons/apps-02.svg"
          :title="content[0].title"
          :description="content[0].description"
          :link="content[0].link"
          :linkText="content[0].linkText"
          :titleAnimation="textEffects.slideUp"
          :descriptionAnimation="{
            effect: contentEffects.simple,
            settings: {
              opacity: [0, 1],
              duration: 2000
            }
          }"
        />-->
        <content-block-layout
            className="content-block pad-top-2x pad-bottom-2x ml-auto mr-auto"
            v-if="content[0]"
            image="/images/icons/apps-02.svg"
            :title="content[0].title"
            :description="content[0].description"
            :link="content[0].link"
            :linkText="content[0].linkText"
        />
      </template>

      <template v-slot:slot2Front>
        <div
            v-if="testimonials[1]"
            class="flex flex-column flex-center flex-basis-third">
          <!--<testimonial-block-layout
            className="sm-space-top-half sm-space-bottom-half"
            :testimonial="testimonials[1].testimonial"
            :reviewedBy="testimonials[1].reviewedBy"
            :position="testimonials[1].position"
            :organization="testimonials[1].organization"
            :image="testimonials[1].image"
            :testimonialAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateY: [-60, 0],
                duration: 3000
              }
            }"
            :reviewedByAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateY: [60, 0],
                duration: 3000
              }
            }"
          />-->
          <testimonial-block-layout
              className="sm-space-top-half sm-space-bottom-half"
              :testimonial="testimonials[1].testimonial"
              :reviewedBy="testimonials[1].reviewedBy"
              :position="testimonials[1].position"
              :organization="testimonials[1].organization"
              :image="testimonials[1].image"
              :link="testimonials[1].link"
              :linkText="testimonials[1].linkText"
              :testimonialId="testimonials[1].testimonialId"
              @link-clicked="handleLinkClicked"
          />
        </div>
      </template>

      <template v-slot:slot3Bg>
        <div class="bg-bc-blue video-block-bg drop-shadow rotate-left is-hidden--sm-down">
        </div>
      </template>
      <template v-slot:slot3Front>
        <!--<content-block-layout
          className="pad-top ml-auto mr-auto pad-bottom"
          v-if="content[2].linkText"
          image="/images/icons/websites.svg"
          :title="content[2].title"
          :description="content[2].description"
          :link="content[2].link"
          :linkText="content[2].linkText"
          :titleAnimation="textEffects.slideUp"
          :descriptionAnimation="{
            effect: contentEffects.simple,
            settings: {
              opacity: [0, 1],
              duration: 2000
            }
          }"
        />-->
        <content-block-layout
            className="content-block pad-top-2x pad-bottom-2x ml-auto mr-auto pad-bottom"
            v-if="content[2]"
            image="/images/icons/websites.svg"
            :title="content[2].title"
            :description="content[2].description"
            :link="content[2].link"
            :linkText="content[2].linkText"
        />
      </template>

      <template v-slot:slot4Front>
        <div
            v-if="testimonials[0]"
            class="sm-flex flex-column flex-center flex-basis-third md-pad-top">
          <!--<testimonial-block-layout
            className="sm-space-top-half sm-space-bottom-half"
            :testimonial="testimonials[0].testimonial"
            :reviewedBy="testimonials[0].reviewedBy"
            :position="testimonials[0].position"
            :organization="testimonials[0].organization"
            :image="testimonials[0].image"
            :testimonialAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 3000
              }
            }"
            :reviewedByAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [60, 0],
                duration: 3000
              }
            }"
          />-->
          <testimonial-block-layout
              className="sm-space-top-half sm-space-bottom-half"
              :testimonial="testimonials[0].testimonial"
              :reviewedBy="testimonials[0].reviewedBy"
              :position="testimonials[0].position"
              :organization="testimonials[0].organization"
              :image="testimonials[0].image"
              :link="testimonials[0].link"
              :linkText="testimonials[0].linkText"
              :testimonialId="testimonials[0].testimonialId"
              @link-clicked="handleLinkClicked"
          />
        </div>
      </template>

      <template v-slot:slot5Bg>
        <div class="bg-bc-blue video-block-bg scale-center drop-shadow-up is-hidden--sm-down">
        </div>
      </template>
      <template v-slot:slot5Front>
        <!--<content-block-layout
          className="pad-top ml-auto mr-auto"
          v-if="content[1]"
          image="/images/icons/server.svg"
          :title="content[1].title"
          :description="content[1].description"
          :link="content[1].link"
          :linkText="content[1].linkText"
          :titleAnimation="textEffects.slideUp"
          :descriptionAnimation="{
            effect: contentEffects.simple,
            settings: {
              opacity: [0, 1],
              duration: 2000
            }
          }"
        />-->
        <content-block-layout
            className="content-block pad-top-2x pad-bottom-2x ml-auto mr-auto"
            v-if="content[1]"
            image="/images/icons/server.svg"
            :title="content[1].title"
            :description="content[1].description"
            :link="content[1].link"
            :linkText="content[1].linkText"
        />
      </template>

      <template v-slot:slot6Front>
        <div
            v-if="testimonials[2]"
            class="sm-flex flex-column flex-center flex-basis-third md-pad-top">
          <!--<testimonial-block-layout
            className="sm-space-top-half sm-space-bottom-half"
            :testimonial="testimonials[2].testimonial"
            :reviewedBy="testimonials[2].reviewedBy"
            :position="testimonials[2].position"
            :organization="testimonials[2].organization"
            :image="testimonials[2].image"
            :testimonialAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [60, 0],
                duration: 3000
              }
            }"
            :reviewedByAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 3000
              }
            }"
          />-->
          <testimonial-block-layout
              className="sm-space-top-half sm-space-bottom-half"
              :testimonial="testimonials[2].testimonial"
              :reviewedBy="testimonials[2].reviewedBy"
              :position="testimonials[2].position"
              :organization="testimonials[2].organization"
              :image="testimonials[2].image"
              :link="testimonials[2].link"
              :linkText="testimonials[2].linkText"
              :testimonialId="testimonials[2].testimonialId"
              @link-clicked="handleLinkClicked"
          />
        </div>
      </template>
    </angle-mosaic-layout>
  </section>
</template>

<script>
import AngleMosaicLayout from '~/components/layouts/AngleMosaicLayout.vue'
import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue'
import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue'
import TestimonialMixin from '~/core/mixins/TestimonialMixin'

import MatrixBg from '~/components/svg/MatrixBg.vue'

export default {
  props: {
    content: {
      type: Array,
      default: () => []
    },
    testimonials: {
      type: Array,
      default: () => []
    }
  },
  mixins: [
    TestimonialMixin
  ],
  components: {
    // Inject generic component layouts
    AngleMosaicLayout,
    ContentBlockLayout,
    TestimonialBlockLayout,
    MatrixBg
  },
  methods: {
    handleLinkClicked(testimonialId) {
      this.$emit('link-clicked', testimonialId)
    }
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 64em) {
  #services {
    .content-block {
      margin-top: auto;
    }
  }
}
</style>
