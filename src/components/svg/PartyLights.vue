<template>
  <div class="party-lights flex flex-column flex-basis-full">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         preserveAspectRatio="xMidYMin slice" viewBox="0 0 640 360" ref="svg" class="button">
      <circle ref="circ1" cx="80" cy="120" r="20" class="color-4 opacity"/>
      <circle ref="circ2" cx="320" cy="70" r="20" class="color-3 opacity"/>
      <circle ref="circ3" cx="550" cy="100" r="20" class="color-2 opacity"/>
      <circle ref="circ4" cx="160" cy="280" r="20" class="color-1 opacity"/>
      <path ref="laser1" d="M-180,80 700,-750 700,-740z" class="color-1 opacity"/>
      <path ref="laser2" d="M-180,80 700,-750 700,-740z" class="color-2 opacity"/>
      <path ref="laser3" d="M-180,80 700,-750 700,-740z" class="color-3 opacity"/>
      <path ref="laser4" d="M-180,80 700,-750 700,-740z" class="color-4 opacity"/>
      <path ref="poly1" d="M1200,0 500,510 1400,0 Z" class="color-1 opacity"/>
      <path ref="poly2" d="M100,-150 -400,360 -640,360Z" class="color-2 opacity"/>
      <path ref="poly3" d="M500,-150 1400,360 1200,360Z" class="color-3 opacity"/>
      <path ref="poly4" d="M-640,0 100,510 -400,0Z" class="color-4 opacity"/>
    </svg>
  </div>
</template>

<script>
  import { gsap, TimelineMax } from 'gsap';

  export default {
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
        let tl1 = new TimelineMax({ repeat: -1 });
        tl1.set(this.$refs.poly1, { autoAlpha: 1 });
        tl1.to(this.$refs.poly1, 4, { attr: { d: 'M-640,0 100,510 -400,0Z' }, ease: "none"});
        tl1.set(this.$refs.poly1, { autoAlpha: 0});
        return tl1;
      },
      getTl2() {
        let tl2 = new TimelineMax({ repeat: -1 });
        tl2.set(this.$refs.poly2, { autoAlpha: 1 });
        tl2.to(this.$refs.poly2, 4, { attr: { d: 'M500,-150 1400,360 1200,360Z' }, ease: "none"});
        tl2.set(this.$refs.poly2, { autoAlpha: 0 });
        return tl2;
      },
      getTl3() {
        let tl3 = new TimelineMax({ repeat: -1 });
        tl3.set(this.$refs.poly3, { autoAlpha: 1 });
        tl3.to(this.$refs.poly3, 4, { attr: { d: 'M100,-150 -400,360 -640,360Z' }, ease: "none"});
        tl3.set(this.$refs.poly3, { autoAlpha: 0 });
        return tl3;
      },
      getTl4() {
        let tl4 = new TimelineMax({ repeat: -1 });
        tl4.set(this.$refs.poly4, { autoAlpha: 1});
        tl4.to(this.$refs.poly4, 4, { attr: { d: 'M1200,0 500,510 1400,0Z' }, ease: "none"});
        tl4.set(this.$refs.poly4, { autoAlpha: 0 });
        return tl4;
      },
      getTl5() {
        let tl5 = new TimelineMax({ repeat: -1 });
        tl5.to(this.$refs.circ1, .4, { autoAlpha: 1, attr: { r: '50' } });
        tl5.to(this.$refs.circ1, .4, { autoAlpha: 0, attr: { r: '20' } });
        tl5.to(this.$refs.circ3, .4, { autoAlpha: 1, attr: { r: '50' } });
        tl5.to(this.$refs.circ3, .4, { autoAlpha: 0, attr: { r: '20' } });
        tl5.to(this.$refs.circ4, .4, { autoAlpha: 1, attr: { r: '50' } });
        tl5.to(this.$refs.circ4, .4, { autoAlpha: 0, attr: { r: '20' } });
        tl5.to(this.$refs.circ2, .4, { autoAlpha: 1, attr: { r: '50' } });
        tl5.to(this.$refs.circ2, .4, { autoAlpha: 0, attr: { r: '20' } });
        return tl5;
      },
      getTl6() {
        let tl6 = new TimelineMax({ repeat: -1 });
        tl6.set(this.$refs.laser1, { autoAlpha: 1 });
        tl6.to(this.$refs.laser1, 4, { attr: { d: 'M-200,280 700,940 700,955z' } , ease: "none"});
        tl6.set(this.$refs.laser1, { autoAlpha: 0 });
        return tl6;
      },
      getTl7() {
        let tl7 = new TimelineMax({ repeat: -1 });
        tl7.set(this.$refs.laser2, { autoAlpha: 1 });
        tl7.to(this.$refs.laser2, 4, { attr: { d: 'M-200,280 700,940 700,955z' }, ease: "none"});
        tl7.set(this.$refs.laser2, { autoAlpha: 0 });
        return tl7;
      },
      getTl8() {
        let tl8 = new TimelineMax({ repeat: -1 });
        tl8.set(this.$refs.laser3, { autoAlpha: 1 });
        tl8.to(this.$refs.laser3, 4, { attr: { d: 'M-200,280 700,940 700,955z' }, ease: "none"});
        tl8.set(this.$refs.laser3, { autoAlpha: 0 });
        return tl8;
      },
      getTl9() {
        let tl9 = new TimelineMax({ repeat: -1 });
        tl9.set(this.$refs.laser4, { autoAlpha: 1 });
        tl9.to(this.$refs.laser4, 4, { attr: { d: 'M-200,280 700,940 700,955z' }, ease: "none"});
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
      // TODO: Auto rock n' roll?
      //this.initAudioPlayer();

      gsap.set(this.$refs.svg, { visibility: "visible" });

      gsap.set([
        this.$refs.poly1, this.$refs.poly2, this.$refs.poly3,
        this.$refs.poly4, this.$refs.circ1, this.$refs.circ2,
        this.$refs.circ3, this.$refs.circ4, this.$refs.laser1,
        this.$refs.laser2, this.$refs.laser3, this.$refs.laser4
      ], {
        autoAlpha: 0
      });

      this.mainTl = new TimelineMax({ repeat: -1 });
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
    z-index: 10;
    overflow: hidden;
    top: 0;

    svg {
      visibility: hidden;
      width: 100%;
      padding-bottom: 0;
      height: 1px;
      overflow: visible
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
      fill-opacity: .2
    }
  }
</style>
