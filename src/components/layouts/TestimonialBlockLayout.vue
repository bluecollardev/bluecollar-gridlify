<template>
  <!--<div class="content-block testimonial-block-wrapper text-center sm-space-bottom-half" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">-->
  <div class="content-block testimonial-block-wrapper text-center sm-space-bottom-half">
    <div v-bind:class="classNameString">
      <div class="sm-space-bottom-half g-services">
        <p v-if="!this.testimonialAnimation" class="g-pstyle10 text-center" style="color: #33587a !important;" v-html="this.testimonial"></p>
        <component
          ref="testimonialAnimationContainer"
          v-if="this.testimonialAnimation"
          :is="this.testimonialAnimation.effect"
          :settings="this.testimonialAnimation.settings"
          :loop="false"
          :animate="false">
          <p class="g-pstyle10 text-center" style="color: #33587a !important;" v-html="this.testimonial"></p>
        </component>
      </div>
    </div>

    <div
      v-if="!this.reviewedByAnimation"
      class="g-services flex flex-center">
      <div v-if="typeof this.image === 'string' && this.image.length > 3"  class="circle-composite small space-bottom-half ml-auto mr-auto testimonial-profile-circle xs-hide sm-hide md-hide">
        <div class="dark-blue-circle-mask">
          <div class="dark-blue-circle"></div>
        </div>
        <div class="inner-circle">
          <div class="blue-circle"></div>
          <img class="circle" v-bind:src="this.image" alt="" />
        </div>
      </div>

      <div v-bind:class="classNameString">
        <div class="g-services">
          <p class="g-pstyle10 text-center">
            <strong>{{ this.reviewedBy }}</strong><br />
            <strong><small>{{ this.position }}</small></strong>
          </p>
          <p class="g-pstyle10 text-center"><small><em>{{ this.organization }}</em></small></p>
        </div>
      </div>
    </div>

    <component
      class="g-services flex flex-center"
      ref="reviewedByAnimationContainer"
      v-if="this.reviewedByAnimation"
      :is="this.reviewedByAnimation.effect"
      :settings="this.reviewedByAnimation.settings"
      :loop="false"
      :animate="false">
      <!--<div v-if="typeof this.image === 'string' && this.image.length > 3" class="circle-composite small space-bottom-half ml-auto mr-auto testimonial-profile-circle">
        <div class="dark-blue-circle-mask">
          <div class="dark-blue-circle"></div>
        </div>
        <div class="inner-circle">
          <div class="blue-circle"></div>
          <img class="circle" v-bind:src="this.image" alt="" />
        </div>
      </div>-->

      <div v-bind:class="classNameString">
        <div class="g-services">
          <p class="g-pstyle10 text-center">
            <strong>{{ this.reviewedBy }}</strong><br />
            <strong><small>{{ this.position }}</small></strong>
          </p>
          <p class="g-pstyle10 text-center"><small><em>{{ this.organization }}</em></small></p>
        </div>
      </div>
    </component>
  </div>
</template>

<script>
  import TestimonialMixin from '~/core/mixins/layouts/Testimonial';

  export default {
    mixins: [
      TestimonialMixin
    ]
  }
</script>
