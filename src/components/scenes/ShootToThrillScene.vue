<template>
  <div class="shoot-to-thrill-scene flex flex-center flex-justify-center">
    <div class="guns-comp">
      <hand-gun ref="thunder" class="left-gun" :introDelay="0.3" :playIntro="playIntro"></hand-gun>
      <hand-gun ref="lightning" class="right-gun" :introDelay="0.7" :playIntro="playIntro"></hand-gun>
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
  data() {
    return {
      playIntro: false
    }
  },
  methods: {
    playIntroAnimation() {
      this.playIntro = true
    },
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
  // TODO: Fix the mobile display, it's disabled for now!
  .shoot-to-thrill-scene, .guns-comp {
    display: none;
  }

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

@media screen and (max-width: 63.999em) {
  // TODO: Fix the mobile display, it's disabled for now!
  .shoot-to-thrill-scene, .guns-comp {
    display: none;
  }

  .shoot-to-thrill-scene {
    position: relative;
    width: 100%;
    height: 50%;
    top: calc(54px);
    left: 0;
    z-index: 1000;
  }

  .guns-comp {
    height: 40vh;
    width: 80%;
  }

  .left-gun, .right-gun {
    position: absolute;
  }

  .left-gun {
    left: -25%;
  }

  .right-gun {
    transform: scaleX(-1);
    right: -25%;
  }
}

@media screen and (min-width: 64em) {
  .shoot-to-thrill-scene {
    position: relative;
    width: 100%;
    height: 50%;
    top: calc(54px);
    left: 0;
    z-index: 1000;
  }

  .guns-comp {
    height: 30vh;
    width: 80%;
  }

  .left-gun, .right-gun {
    position: absolute;
  }

  .left-gun {
    left: 0;
  }

  .right-gun {
    transform: scaleX(-1);
    right: 0;
  }
}
</style>
