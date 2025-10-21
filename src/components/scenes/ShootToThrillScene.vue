<template>
  <div class="shoot-to-thrill-scene flex flex-center flex-justify-center">
    <div class="guns-comp">
      <hand-gun ref="thunder" class="left-gun" :introDelay="0.3"></hand-gun>
      <hand-gun ref="lightning" class="right-gun" :introDelay="0.7"></hand-gun>
    </div>
  </div>
</template>

<script>
// Import SVG animations
import HandGun from '~/components/svg/HandGun.vue'

export default {
  components: {
    // Inject SVG animations
    HandGun,
  },
  methods: {
    fireGuns() {
      if (typeof window !== 'undefined') {
        this.$refs.thunder.shootToThrill(0)

        setTimeout(() => {
          this.$refs.lightning.shootToThrill(0)
        }, 400)
      }
    }
  }
}
</script>

<style lang="scss">
.shoot-to-thrill-scene {
  transform: scale(0.625);
  transform-origin: center center;
}

@media screen and (max-width: 40em) {
  .guns-comp {
    height: 30vh;
    width: 100%;
    transform: translateY(100px);
    display: flex;
  }

  .left-gun {
    left: -6%;
    width: 200px !important;
    height: 200px !important;
    position: relative;
    top: 10%;
  }

  .right-gun {
    transform: scaleX(-1);
    right: -1%;
    width: 200px !important;
    height: 200px !important;
    position: relative;
    top: 10%;
  }
}

@media screen and (min-width: 64em) {
  .shoot-to-thrill-scene {
    position: relative;
    width: 100%;
    height: 50%;
    top: calc(10vh + 54px);
    left: 0;
    z-index: 1000;
  }

  .guns-comp {
    height: 70vh;
    width: 80%;
    transform: translateY(100px);
  }

  .left-gun, .right-gun {
    position: absolute;
  }

  .left-gun {
    left: -30%;
  }

  .right-gun {
    transform: scaleX(-1);
    right: -30%;
  }
}
</style>
