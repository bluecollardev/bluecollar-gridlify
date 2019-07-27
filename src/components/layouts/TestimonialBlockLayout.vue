<template>
  <!--<div class="content-block testimonial-block-wrapper text-center sm-space-bottom-half" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">-->
  <div class="content-block testimonial-block-wrapper text-center sm-space-bottom-half">
    <div v-bind:class="classNameString">
      <div class="sm-space-bottom-half g-services">
        <p v-if="!this.testimonialAnimation" class="g-pstyle10 text-center" v-html="this.testimonial"></p>

        <component
          ref="testimonialAnimationContainer"
          v-if="this.testimonialAnimation"
          :is="this.testimonialAnimation.effect"
          :settings="this.testimonialAnimation.settings"
          :loop="false"
          :animate="false">
          <p class="g-pstyle10 text-center" v-html="this.testimonial"></p>
        </component>
      </div>
    </div>

    <div
      v-if="!this.reviewedByAnimation"
      class="g-services flex flex-center">
      <div class="circle-composite small space-bottom-half ml-auto mr-auto testimonial-profile-circle">
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
      <div class="circle-composite small space-bottom-half ml-auto mr-auto testimonial-profile-circle">
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
    </component>
  </div>
</template>

<script>
export default {
  // TODO: Supply models via props??
  props: {
    className: {
      type: String,
      default: null
    },
    flipLayout: {
      type: Boolean,
      default: false,
    },
    testimonial: {
      type: String,
      default: '',
    },
    testimonialAnimation: Object,
    reviewedBy: {
      type: String,
      default: '',
    },
    reviewedByAnimation: Object,
    position: {
      type: String,
      default: '',
    },
    organization: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0.33333]
      }
    }
  },
  computed: {
    classNameString() {
      return (typeof this.className === 'string' && this.className.length > 0) ? `${this.className}` : '';
    }
  },
  methods: {
    /**
     * Options:
     * @going: in, out
     * @direction: top, right, bottom, left
     *
     * Usage:
     * if (going === this.$waypointMap.GOING_IN) {
     *   console.log('waypoint going in!')
     * }
     *
     * if (direction === this.$waypointMap.DIRECTION_TOP) {
     *   console.log('waypoint going top!')
     * }
     */
    onWaypoint({going, direction}) {
      if (going === this.$waypointMap.GOING_IN) {
        //console.log('testimonial waypoint going in!');
        if (typeof this.$refs.testimonialAnimationContainer !== 'undefined') {
          this.$refs.testimonialAnimationContainer.timeline.play();
        }

        if (typeof this.$refs.reviewedByAnimationContainer !== 'undefined') {
          this.$refs.reviewedByAnimationContainer.timeline.play();
        }
      }

      if (going === this.$waypointMap.GOING_OUT) {
        //console.log('testimonial waypoint going out!');
        if (typeof this.$refs.testimonialAnimationContainer !== 'undefined') {
          this.$refs.testimonialAnimationContainer.timeline.seek(0);
          this.$refs.reviewedByAnimationContainer.timeline.pause();
        }

        if (typeof this.$refs.reviewedByAnimationContainer !== 'undefined') {
          this.$refs.reviewedByAnimationContainer.timeline.seek(0);
          this.$refs.reviewedByAnimationContainer.timeline.pause();
        }
      }
    }
  }
};
</script>
