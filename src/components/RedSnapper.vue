<template>
  <img ref="redSnapper" class="red-snapper fish" src="/images/red-snapper.svg" :style="fishStyle"/>
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
    // Maximum height the fish jumps (pixels above starting point)
    jumpHeight: {
      type: Number,
      default: 400
    },
    // Total horizontal distance the fish travels (pixels)
    jumpDistance: {
      type: Number,
      default: 900
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
    },
    // Wiggle intensity during jump (degrees of rotation oscillation, 0 = no wiggle)
    wiggleIntensity: {
      type: Number,
      default: 5
    },
    // Wiggle speed during jump (higher = faster wiggle)
    wiggleSpeed: {
      type: Number,
      default: 0.3
    }
  },
  data() {
    return {
      interval: null,
      wiggleOffset: 0
    }
  },
  computed: {
    fishStyle() {
      const scalePercent = this.scale / 100
      return {
        transform: `rotate(-45deg) scale(${scalePercent})`
      }
    }
  },
  methods: {
    setFishJumpRotation(el, {x, y, maxDistance, maxHeight}) {
      const scalePercent = this.scale / 100

      // Calculate tangent of the parabolic arc
      // For y = maxHeight * sin(progress * π), derivative is:
      // dy/dx = (maxHeight * π / maxDistance) * cos(progress * π)
      const progress = x / maxDistance
      const slope = (maxHeight * Math.PI / maxDistance) * Math.cos(progress * Math.PI)

      // Convert slope to angle in degrees
      // Negate because SVG is flipped horizontally
      const tangentAngle = -Math.atan(slope) * (180 / Math.PI)

      // Calculate wiggle offset using sine wave
      this.wiggleOffset += this.wiggleSpeed
      const wiggle = Math.sin(this.wiggleOffset) * this.wiggleIntensity

      const rotation = tangentAngle + wiggle

      el.style.transform = `rotate(${rotation}deg) scale(${scalePercent})`
    },
    animateOnParabolicPath(el, maxDistance, maxHeight, cb) {
      if (typeof window !== 'undefined') {
        // Get the initial bottom and left positions from CSS
        const computedStyle = window.getComputedStyle(el)
        const initialBottom = parseFloat(computedStyle.bottom) || -200
        const initialLeft = parseFloat(computedStyle.left) || -200

        let x = this.speed
        let requestId = null

        const updatePosition = () => {
          // Simple parabola: apex at middle of jump
          const progress = x / maxDistance
          const y = maxHeight * Math.sin(progress * Math.PI)

          // Add the parabolic offset to the initial bottom position
          el.style.bottom = `${initialBottom + y}px`
          // Start from initial left position and move horizontally
          el.style.left = `${initialLeft + x}px`

          if (typeof cb === 'function') cb(el, {x, y, maxDistance, maxHeight})

          // Stop when we reach the jump distance
          if (x >= maxDistance) {
            cancelAnimationFrame(requestId)
          } else {
            x += this.speed
            requestId = requestAnimationFrame(updatePosition)
          }
        }

        requestId = requestAnimationFrame(updatePosition)
      }
    },
    scheduleNextJump() {
      const randomDelay = Math.random() * (this.maxJumpInterval - this.minJumpInterval) + this.minJumpInterval
      this.interval = setTimeout(() => {
        this.jump()
        this.scheduleNextJump()
      }, randomDelay)
    },
    jump() {
      if (typeof window !== 'undefined') {
        const el = this.$refs.redSnapper

        // Reset wiggle offset for each jump
        this.wiggleOffset = 0

        // Animate: jumpDistance = how far horizontally, jumpHeight = max height
        this.animateOnParabolicPath(
            el,
            this.jumpDistance,
            this.jumpHeight,
            this.setFishJumpRotation
        )
      }
    },
    start() {
      this.scheduleNextJump()
    },
    stop() {
      if (this.interval) {
        clearTimeout(this.interval)
        this.interval = null
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined' && this.autoStart) {
      this.scheduleNextJump()
    }
  },
  beforeUnmount() {
    this.stop()
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
