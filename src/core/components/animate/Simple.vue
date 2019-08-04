<template>
  <div class="animation-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import anime from 'animejs';

  export default {
    props: {
      settings: Object,
      loop: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        timeline: null
      }
    },
    methods: {
      setupAnimation() {
        try {
          this.$set(this, 'timeline', anime.timeline({ loop: this.loop, autoplay: false }));

          this.timeline
            .add({
              targets: this.$el,
              opacity: 0,
              duration: 333
            })
            .add({
              targets: this.$el,
              ...this.settings
            })
            .add({
              targets: this.$el,
              duration: 5000
            })
        } catch (err) {
          console.log(err);
        }
      }
    },
    mounted() {
      if (typeof window !== 'undefined') {
        this.setupAnimation();
      }
    }
  }
</script>

<style lang="scss">
  .animation-wrapper {
    opacity: 0;
  }
</style>
