import marked from 'marked';

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
    titleAnimation: null,
    /*loopTitleAnimation: {
      type: Boolean,
      default: true
    },*/
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    descriptionAnimation: Object,
    loopDescriptionAnimation: {
      type: Boolean,
      default: true
    },
    image: {
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
    caption: {
      type: String,
      default: '',
    },
    subCaption: {
      type: String,
      default: '',
    },
  },
  computed: {
    classNameString() {
      return (typeof this.className === 'string' && this.className.length > 0) ? this.className : '';
    },
    compiledDescription() {
      return marked(this.description);
    }
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
    onWaypoint({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        //console.log('contentblock waypoint going in!');
        if (typeof this.$refs.titleAnimationContainer !== 'undefined') {
          this.$refs.titleAnimationContainer.timeline.play();
        }

        if (typeof this.$refs.descriptionAnimationContainer !== 'undefined') {
          this.$refs.descriptionAnimationContainer.timeline.play();
        }
      }

      if (going === this.$waypointMap.GOING_OUT) {
        //console.log('contentblock waypoint going out!');
        if (typeof this.$refs.titleAnimationContainer !== 'undefined') {
          this.$refs.titleAnimationContainer.timeline.seek(0);
          this.$refs.titleAnimationContainer.timeline.pause();
        }

        if (typeof this.$refs.descriptionAnimationContainer !== 'undefined') {
          this.$refs.descriptionAnimationContainer.timeline.seek(0);
          this.$refs.descriptionAnimationContainer.timeline.pause();
        }
      }
    }
  }
};
