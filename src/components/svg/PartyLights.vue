<template>
  <div class="party-lights flex flex-column flex-basis-full">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         preserveAspectRatio="xMidYMin slice" viewBox="0 0 640 360" ref="svg" class="button">
      <!-- Simplified light beams within viewBox 0 0 640 360 -->
      <path ref="poly1" d="M0,0 320,360 640,0 Z" class="color-1 opacity"/>
      <path ref="poly2" d="M640,360 320,0 0,360 Z" class="color-2 opacity"/>
      <path ref="poly3" d="M0,180 640,180 320,360 Z" class="color-3 opacity"/>
      <path ref="poly4" d="M320,0 0,360 640,360 Z" class="color-4 opacity"/>
      <!-- Lasers -->
      <path ref="laser1" d="M0,180 640,0 640,20 Z" class="color-1 opacity"/>
      <path ref="laser2" d="M0,180 640,360 640,340 Z" class="color-2 opacity"/>
      <path ref="laser3" d="M640,180 0,0 0,20 Z" class="color-3 opacity"/>
      <path ref="laser4" d="M640,180 0,360 0,340 Z" class="color-4 opacity"/>
      <!-- Circles -->
      <circle ref="circ1" cx="80" cy="120" r="20" class="color-4 opacity"/>
      <circle ref="circ2" cx="320" cy="180" r="20" class="color-3 opacity"/>
      <circle ref="circ3" cx="550" cy="100" r="20" class="color-2 opacity"/>
      <circle ref="circ4" cx="160" cy="280" r="20" class="color-1 opacity"/>
    </svg>
  </div>
</template>

<script>
  import { gsap } from 'gsap';

  export default {
    created() {
      console.log('%%% PartyLights CREATED %%%');
    },
    data() {
      return {
        audio: undefined,
        mainTl: null
      }
    },
    methods: {
      initAudioPlayer() {
        this.audio = new Audio();
        this.audio.src = 'http://uk2.internet-radio.com:8024/;stream';
        this.audio.loop = true;
        this.audio.play();
      },
      getRefs() {
        return {
          svg: this.$refs.svg,
          poly1: this.$refs.poly1,
          poly2: this.$refs.poly2,
          poly3: this.$refs.poly3,
          poly4: this.$refs.poly4,
          circ1: this.$refs.circ1,
          circ2: this.$refs.circ2,
          circ3: this.$refs.circ3,
          circ4: this.$refs.circ4,
          laser1: this.$refs.laser1,
          laser2: this.$refs.laser2,
          laser3: this.$refs.laser3,
          laser4: this.$refs.laser4
        }
      },
      getTl1() {
        let tl1 = gsap.timeline({
          repeat: -1,
          onStart: () => console.log('TL1 started - poly1 should appear'),
          onRepeat: () => console.log('TL1 repeating')
        });
        tl1.set(this.$refs.poly1, { autoAlpha: 1 });
        tl1.to(this.$refs.poly1, { duration: 2 }); // Hold visible
        tl1.set(this.$refs.poly1, { autoAlpha: 0});
        return tl1;
      },
      getTl2() {
        let tl2 = gsap.timeline({ repeat: -1 });
        tl2.set(this.$refs.poly2, { autoAlpha: 1 });
        tl2.to(this.$refs.poly2, { duration: 2 });
        tl2.set(this.$refs.poly2, { autoAlpha: 0 });
        return tl2;
      },
      getTl3() {
        let tl3 = gsap.timeline({ repeat: -1 });
        tl3.set(this.$refs.poly3, { autoAlpha: 1 });
        tl3.to(this.$refs.poly3, { duration: 2 });
        tl3.set(this.$refs.poly3, { autoAlpha: 0 });
        return tl3;
      },
      getTl4() {
        let tl4 = gsap.timeline({ repeat: -1 });
        tl4.set(this.$refs.poly4, { autoAlpha: 1});
        tl4.to(this.$refs.poly4, { duration: 2 });
        tl4.set(this.$refs.poly4, { autoAlpha: 0 });
        return tl4;
      },
      getTl5() {
        // Disable circle animations due to MorphSVG conflict
        let tl5 = gsap.timeline({ repeat: -1 });
        // Just add a delay to keep timeline timing
        tl5.to({}, { duration: 3.2 });
        return tl5;
      },
      getTl6() {
        let tl6 = gsap.timeline({ repeat: -1 });
        tl6.set(this.$refs.laser1, { autoAlpha: 1 });
        tl6.to(this.$refs.laser1, { duration: 1.5 });
        tl6.set(this.$refs.laser1, { autoAlpha: 0 });
        return tl6;
      },
      getTl7() {
        let tl7 = gsap.timeline({ repeat: -1 });
        tl7.set(this.$refs.laser2, { autoAlpha: 1 });
        tl7.to(this.$refs.laser2, { duration: 1.5 });
        tl7.set(this.$refs.laser2, { autoAlpha: 0 });
        return tl7;
      },
      getTl8() {
        let tl8 = gsap.timeline({ repeat: -1 });
        tl8.set(this.$refs.laser3, { autoAlpha: 1 });
        tl8.to(this.$refs.laser3, { duration: 1.5 });
        tl8.set(this.$refs.laser3, { autoAlpha: 0 });
        return tl8;
      },
      getTl9() {
        let tl9 = gsap.timeline({ repeat: -1 });
        tl9.set(this.$refs.laser4, { autoAlpha: 1 });
        tl9.to(this.$refs.laser4, { duration: 1.5 });
        tl9.set(this.$refs.laser4, { autoAlpha: 0 });
        return tl9;
      },
      init() {
        this.mainTl
          .add(this.getTl1(), 0)
          .add(this.getTl2(), 3)
          .add(this.getTl3(), 1)
          .add(this.getTl4(), 2)
          .add(this.getTl5(), 0)
          .add(this.getTl6(), 0)
          .add(this.getTl7(), 1)
          .add(this.getTl8(), 2)
          .add(this.getTl9(), 3);
      }
    },
    mounted() {
      console.log('%%% PartyLights MOUNTED %%%');
      // TODO: Auto rock n' roll?
      //this.initAudioPlayer();

      gsap.set(this.$refs.svg, { visibility: "visible" });

      // Set all to invisible first (animations will fade them in)
      gsap.set([
        this.$refs.poly1, this.$refs.poly2, this.$refs.poly3,
        this.$refs.poly4, this.$refs.circ1, this.$refs.circ2,
        this.$refs.circ3, this.$refs.circ4, this.$refs.laser1,
        this.$refs.laser2, this.$refs.laser3, this.$refs.laser4
      ], {
        autoAlpha: 0
      });

      this.mainTl = gsap.timeline({ repeat: -1 });
      this.mainTl.timeScale(1.8);

      this.init();
    }
  }

</script>

<style lang="scss">
  .party-lights {
    width: 100%;
    height: 130vh;
    position: absolute;
    z-index: 1;
    overflow: hidden;
    top: 0;

    svg {
      visibility: visible !important;
      width: 100%;
      padding-bottom: 0;
      height: 100%;
      overflow: visible;
    }

    .color-1 {
      fill: #78ff69
    }

    .color-2 {
      fill: #69c3ff
    }

    .color-3 {
      fill: #f069ff
    }

    .color-4 {
      fill: #ffa569
    }

    .color-5 {
      fill: #e5e5e3
    }

    .color-6 {
      fill: #002540
    }

    .color-7 {
      fill: #001626
    }

    .opacity {
      fill-opacity: .5
    }
  }
</style>
