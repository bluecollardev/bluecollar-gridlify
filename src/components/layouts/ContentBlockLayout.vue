<template>
  <div v-bind:class="classNameString">
    <div class="space-bottom-half g-services">
      <p class="g-pstyle9">{{ this.title }}</p>
    </div>
    <div class="g-services">
      <div v-html="compiledDescription"></div>
    </div>
    <div v-if="typeof this.linkText === 'string' && this.linkText.length > 0" class="g-services">
      <a class="space-top-half more-info-link g-pstyle11" v-bind:href="this.link" v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
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
