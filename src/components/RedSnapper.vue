<template>
  <img ref="redSnapper" class="red-snapper fish" src="/images/red-snapper.svg" :style="fishStyle" />
</template>

<script>
export default {
  name: 'RedSnapper',
  props: {
    // Animation speed (pixels per frame)
    speed: {
      type: Number,
      default: 15
    },
    // Jump height (yVertex for parabolic path)
    jumpHeight: {
      type: Number,
      default: 300
    },
    // Jump distance (xVertex for parabolic path)
    jumpDistance: {
      type: Number,
      default: 700
    },
    // Minimum interval between jumps (milliseconds)
    minJumpInterval: {
      type: Number,
      default: 5000
    },
    // Maximum interval between jumps (milliseconds)
    maxJumpInterval: {
      type: Number,
      default: 13000
    },
    // Starting rotation angle
    startRotation: {
      type: Number,
      default: -65
    },
    // Ending rotation angle
    endRotation: {
      type: Number,
      default: 55
    },
    // Maximum X distance for rotation calculation
    rotationMaxX: {
      type: Number,
      default: 1200
    },
    // Parabolic function for jump path
    parabolicFx: {
      type: Function,
      default: (x, vtx) => -0.001 * Math.pow(x - vtx.x, 2) + vtx.y
    },
    // Auto-start jumping on mount
    autoStart: {
      type: Boolean,
      default: true
    },
    // Size scale percentage (100 = normal size, 50 = half size, 200 = double size)
    scale: {
      type: Number,
      default: 100,
      validator: (value) => value > 0
    }
  },
  data() {
    return {
      interval: null
    }
  },
  computed: {
    fishStyle() {
      const scalePercent = this.scale / 100;
      return {
        transform: `rotate(-45deg) scale(${scalePercent}, -${scalePercent})`
      };
    }
  },
  methods: {
    setFishJumpRotation(el, { x }) {
      const rotationDelta = this.endRotation - this.startRotation;
      let xPct = x / this.rotationMaxX;
      const scalePercent = this.scale / 100;

      el.style.transform = `rotate(${ this.startRotation + (rotationDelta * xPct) }deg) scale(${scalePercent}, -${scalePercent})`;
    },
    animateOnParabolicPath(el, fx, vtx, cb) {
      if (typeof window !== 'undefined') {
        let x = this.speed;
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
            x += this.speed;
            requestId = requestAnimationFrame(updatePosition);
          }
        };

        requestId = requestAnimationFrame(updatePosition);
      }
    },
    scheduleNextJump() {
      const randomDelay = Math.random() * (this.maxJumpInterval - this.minJumpInterval) + this.minJumpInterval;
      this.interval = setTimeout(() => {
        this.jump();
        this.scheduleNextJump();
      }, randomDelay);
    },
    jump() {
      if (typeof window !== 'undefined') {
        const el = this.$refs.redSnapper;

        // requestAnimationFrame
        this.animateOnParabolicPath(el,
          this.parabolicFx,
          { x: this.jumpDistance, y: this.jumpHeight },
          this.setFishJumpRotation
        );
      }
    },
    start() {
      this.scheduleNextJump();
    },
    stop() {
      if (this.interval) {
        clearTimeout(this.interval);
        this.interval = null;
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined' && this.autoStart) {
      this.scheduleNextJump();
    }
  },
  beforeUnmount() {
    this.stop();
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
  transform-origin: center;
}
</style>
