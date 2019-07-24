<template>
  <div v-bind:class="classNameString" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
    <div class="space-bottom-half g-services">
      <!--<p v-if="!this.titleAnimation" class="g-pstyle9">{{ this.title }}</p>-->
      <p class="g-pstyle9">{{ this.title }}</p>

      <!--<component
        ref="titleAnimationContainer"
        v-if="this.titleAnimation"
        :is="this.titleAnimation"
        tag="h3"
        class="content-block-title g-pstyle9"
        :text="this.title"
        :loop="false"
      />-->
    </div>
    <div class="g-services">
      <!--<div v-if="!this.descriptionAnimation" v-html="compiledDescription"></div>-->
      <div v-html="compiledDescription"></div>

      <!--<component
        ref="descriptionAnimationContainer"
        v-if="this.descriptionAnimation"
        :is="this.descriptionAnimation.effect"
        :settings="this.descriptionAnimation.settings"
        :loop="false"
        :animate="false"
      >
        <div v-html="compiledDescription"></div>
      </component>-->

    </div>
    <div v-if="typeof this.linkText === 'string' && this.linkText.length > 0" class="g-services">
      <a class="space-top-half action-link transparent g-pstyle3" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
    </div>
  </div>
</template>

<script>
// vue-markdown is broken, babel deps issues...
// import VueMarkdown from 'vue-markdown'
// Use marked instead
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
</script>
