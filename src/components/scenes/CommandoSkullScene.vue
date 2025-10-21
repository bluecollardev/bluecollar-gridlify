<template>
  <div class="commando-skull-scene flex flex-center flex-justify-center">
    <helicopter :onGetToTheChopper="fireGuns.bind(this)"></helicopter>
    <div class="special-forces-skull"
         style="z-index: 2; position: absolute; width: 367px; height: 404px; background-image: url(/images/special-forces-skull.png); background-size: contain; background-repeat: no-repeat; background-position: center center"></div>
    <div class="sergeant-stripes"
         style="z-index: 1; position: absolute; width: 100%; height: 100%; filter: invert(100); opacity: 0.1; background-image: url(/images/sergeant-major-of-the-army.png); background-size: contain; background-repeat: no-repeat; background-position: center 210px"></div>
  </div>
</template>

<script>
import anime from 'animejs'

// Import SVG animations
import Helicopter from '~/components/svg/Helicopter.vue'

export default {
  components: {
    // Inject SVG animations
    Helicopter
  },
  methods: {
    fireGuns() {
      // Stub method for helicopter callback
      console.log('Fire guns!')
    },
    play() {
      if (typeof window !== 'undefined') {
        const stripes = document.querySelector('.sergeant-stripes')
        const skull = document.querySelector('.special-forces-skull')

        anime({
          targets: stripes,
          translateY: [450, 0],
          easing: 'easeOutExpo',
          duration: 3000
        })

        anime({
          targets: skull,
          translateY: [300, 50],
          easing: 'easeInOutQuad',
          duration: 1500,
          complete: () => {
            let skullTimeline = anime.timeline({loop: true})
            skullTimeline
                .add({
                  targets: skull,
                  translateY: [50, 35],
                  easing: 'easeInOutQuad',
                  duration: 2500
                })
                .add({
                  targets: skull,
                  translateY: [35, 50],
                  easing: 'easeInOutQuad',
                  duration: 2500
                })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.commando-skull-scene {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 54px;
  left: 0
}

.special-forces-skull {
  transform: scale(0.5) translateY(-30rem);
  transform-origin: center center;
}

@media screen and (max-width: 40em) {
  .special-forces-skull {
    top: 0;
    width: 157px !important;
    height: 175px !important;
  }
}
</style>
