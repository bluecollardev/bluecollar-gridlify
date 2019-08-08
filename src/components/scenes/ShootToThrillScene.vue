<template>
  <div class="guns-comp">
    <hand-gun ref="thunder" class="left-gun" :introDelay="0.3"></hand-gun>
    <hand-gun ref="lightning" class="right-gun" :introDelay="0.7"></hand-gun>
  </div>
</template>

<script>
  // Import SVG animations
  import HandGun from '~/components/svg/HandGun.vue';

  export default {
    components: {
      // Inject SVG animations
      HandGun,
    },
    methods: {
      fireGuns() {
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            this.$refs.thunder.shootToThrill(0);
          }, 500);

          setTimeout(() => {
            this.$refs.lightning.shootToThrill(0);
          }, 900);
        }
      }
    }
  }
</script>
