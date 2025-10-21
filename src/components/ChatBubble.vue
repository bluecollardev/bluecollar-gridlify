<template>
  <div
    class="chat-bubble"
    @click="handleClick">
    <div class="bubble-image"></div>
    <div class="speech-bubble" v-if="showTooltip">{{ currentMessage }}</div>
  </div>
</template>

<script>
export default {
  name: 'ChatBubble',
  data() {
    return {
      showTooltip: true,
      currentMessageIndex: 0,
      messages: [
        "Hi, I'm Lucas.",
        "How can I help you..."
      ],
      rotationInterval: null,
      isDragging: false,
      x: 0,
      y: 0
    }
  },
  computed: {
    currentMessage() {
      return this.messages[this.currentMessageIndex]
    }
  },
  methods: {
    handleClick() {
      if (!this.isDragging) {
        this.hideTooltip()
        this.$emit('open-chat')
      }
    },
    hideTooltip() {
      this.showTooltip = false
      if (this.rotationInterval) {
        clearInterval(this.rotationInterval)
      }
    },
    startRotation() {
      this.rotationInterval = setInterval(() => {
        this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length
      }, 3000)
    },
    handleResize() {
      const el = this.$el
      const maxX = window.innerWidth - el.offsetWidth
      const maxY = window.innerHeight - el.offsetHeight

      this.x = Math.min(this.x, maxX)
      this.y = Math.min(this.y, maxY)
      this.x = Math.max(0, this.x)
      this.y = Math.max(0, this.y)

      el.style.left = `${this.x}px`
      el.style.top = `${this.y}px`
    },
    initDraggable() {
      const el = this.$el
      let startX, startY, initialX, initialY

      el.addEventListener('mousedown', (e) => {
        this.isDragging = false
        startX = e.clientX
        startY = e.clientY
        initialX = this.x
        initialY = this.y

        const onMouseMove = (e) => {
          const deltaX = e.clientX - startX
          const deltaY = e.clientY - startY

          if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
            this.isDragging = true
          }

          this.x = initialX + deltaX
          this.y = initialY + deltaY
          el.style.left = `${this.x}px`
          el.style.top = `${this.y}px`
        }

        const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove)
          document.removeEventListener('mouseup', onMouseUp)
          setTimeout(() => { this.isDragging = false }, 100)
        }

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
      })

      el.addEventListener('touchstart', (e) => {
        this.isDragging = false
        const touch = e.touches[0]
        startX = touch.clientX
        startY = touch.clientY
        initialX = this.x
        initialY = this.y

        const onTouchMove = (e) => {
          const touch = e.touches[0]
          const deltaX = touch.clientX - startX
          const deltaY = touch.clientY - startY

          if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
            this.isDragging = true
          }

          this.x = initialX + deltaX
          this.y = initialY + deltaY
          el.style.left = `${this.x}px`
          el.style.top = `${this.y}px`
        }

        const onTouchEnd = () => {
          document.removeEventListener('touchmove', onTouchMove)
          document.removeEventListener('touchend', onTouchEnd)
          setTimeout(() => { this.isDragging = false }, 100)
        }

        document.addEventListener('touchmove', onTouchMove)
        document.addEventListener('touchend', onTouchEnd)
      })
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.x = window.innerWidth - 100
      this.y = window.innerHeight - 100
      this.$el.style.left = `${this.x}px`
      this.$el.style.top = `${this.y}px`

      this.startRotation()
      this.initDraggable()
      window.addEventListener('resize', this.handleResize)
    }
  },
  beforeUnmount() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval)
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-bubble {
  position: fixed;
  z-index: 9960;
  cursor: grab;
  transition: transform 0.2s ease;
  user-select: none;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    transform: scale(1.05);
  }

  .bubble-image {
    width: 80px;
    height: 80px;
    background-image: url('/images/bc-001-lucas-bubble.png');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .speech-bubble {
    position: absolute;
    bottom: 100%;
    right: 0;
    margin-bottom: 15px;
    background: white;
    color: #2c3e50;
    padding: 12px 16px;
    border-radius: 20px;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    font-weight: bold;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: 2px solid #78b7d6;
    animation: fadeIn 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      bottom: -10px;
      right: 15px;
      width: 20px;
      height: 20px;
      background: white;
      border-right: 2px solid #78b7d6;
      border-bottom: 2px solid #78b7d6;
      transform: rotate(45deg);
      border-radius: 0 0 20px 0;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      right: 17px;
      width: 16px;
      height: 16px;
      background: white;
      transform: rotate(45deg);
      z-index: -1;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 40em) {
  .chat-bubble {
    .bubble-image {
      width: 60px;
      height: 60px;
    }

    .speech-bubble {
      font-size: 0.75rem;
      padding: 10px 14px;
    }
  }
}
</style>
