<template>
  <div v-bind:class="className">
    <div class="space-bottom-half g-services">
      <p class="g-pstyle9">{{ this.title }}</p>
    </div>
    <div class="g-services">
      <p>{{ this.description }}</p>
    </div>
    <div class="g-services">
      <a class="space-top-half more-info-link g-pstyle11" v-bind:href="this.link">{{ this.linkText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  // TODO: Supply models via props??
  props: {
    class: {
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
    Home() {
      return Home;
    },
    className() {
      return (typeof this.class === 'string' && this.class.length > 0) ? this.class : '';
    }
  }
};
</script>
