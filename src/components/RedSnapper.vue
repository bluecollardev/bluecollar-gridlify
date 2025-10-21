<template>
  <img ref="redSnapper" class="red-snapper fish" src="/images/red-snapper.svg" />
</template>

<script>
export default {
  name: 'RedSnapper',
  props: {
    parabolicFx: {
      type: Function,
      default: (x, vtx) => -0.001 * Math.pow(x - vtx.x, 2) + vtx.y
    }
  },
  data() {
    return {
      interval: null
    }
  },
  methods: {
    setFishJumpRotation(el, { x }) {
      const xMax = 1200;
      const startRotation = -65;
      const completeRotation = 55;
      const rotationDelta = completeRotation - startRotation;

      let xPct = x / xMax;

      el.style.transform = `rotate(${ startRotation + (rotationDelta * xPct) }deg) scaleX(-1)`;
    },
    animateOnParabolicPath(el, fx, vtx, cb) {
      if (typeof window !== 'undefined') {
        let x = 15;
        let requestId = null;

        const updatePosition = () => {
          const y = fx(x, vtx);

          el.style.bottom =  `${y}px`;
          el.style.left = `${x}px`;

          if (typeof cb === 'function') cb(el, { x, y });

          // Second 800 is a fudge factor to allow element to clear off screen
          if (x > 800 + 800) {
            cancelAnimationFrame(requestId);
          } else {
            x += 15;
            requestId = requestAnimationFrame(updatePosition);
          }
        };

        requestId = requestAnimationFrame(updatePosition);
      }
    },
    scheduleNextJump() {
      // Random interval between 5 and 13 seconds
      const randomDelay = Math.random() * (13000 - 5000) + 5000;
      this.interval = setTimeout(() => {
        this.jump();
        this.scheduleNextJump();
      }, randomDelay);
    },
    jump() {
      if (typeof window !== 'undefined') {
        const el = this.$refs.redSnapper;

        const xVertex = 700;
        const yVertex = 300;

        // requestAnimationFrame
        this.animateOnParabolicPath(el,
          this.parabolicFx,
          { x: xVertex, y: yVertex },
          this.setFishJumpRotation
        );
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.scheduleNextJump();
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      clearTimeout(this.interval);
    }
  }
}
</script>

<style lang="scss" scoped>
.red-snapper {
  width: 301px;
  height: 120px;
  position: absolute;
  max-width: 400px;
  left: -200px;
  bottom: -200px;
  transform: rotate(-45deg) scaleX(-1);
}
</style>
