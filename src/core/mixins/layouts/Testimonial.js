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
