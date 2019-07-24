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
    mounted() {
      let timeline = anime.timeline({ loop: this.loop });

      timeline
        .add({
          targets: this.$el,
          duration: 2000
        })
        .add({
          targets: this.$el,
          ...this.settings
        })
        .add({
          targets: this.$el,
          duration: 5000
        })
    }
  }
</script>

<style lang="scss">
  .animation-wrapper {
    opacity: 0;
  }
</style>
