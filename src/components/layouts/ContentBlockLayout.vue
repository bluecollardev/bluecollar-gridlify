<template>
  <div v-bind:class="classNameString">
    <div class="space-bottom-half g-services">
      <p v-if="!this.titleAnimation" class="g-pstyle9">{{ this.title }}</p>

      <component
        v-if="this.titleAnimation"
        :is="this.titleAnimation"
        tag="h3"
        class="g-pstyle9"
        :text="this.title"
        :loop="false"
      />
    </div>
    <div class="g-services">
      <div v-if="!this.descriptionAnimation" v-html="compiledDescription"></div>

      <component
        v-if="this.descriptionAnimation"
        :is="this.descriptionAnimation.effect"
        :settings="this.descriptionAnimation.settings"
        :loop="false"
      >
        <div v-html="compiledDescription"></div>
      </component>

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
  }
};
</script>
