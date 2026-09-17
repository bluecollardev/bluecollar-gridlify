<template>
  <teleport to="body">
    <div v-if="open" class="portfolio-gallery" role="dialog" aria-modal="true" :aria-label="title"
         @click.self="close" @touchstart.passive="onTouchStart" @touchend="onTouchEnd">
      <button type="button" class="portfolio-gallery__close" aria-label="Close gallery" @click="close">&times;</button>

      <button v-if="images.length > 1" type="button" class="portfolio-gallery__nav portfolio-gallery__nav--prev"
              aria-label="Previous image" @click="prev">&#8249;</button>

      <figure class="portfolio-gallery__figure" @click.self="close">
        <img class="portfolio-gallery__image" :src="images[index]" :alt="`${title} (${index + 1} of ${images.length})`"/>
        <figcaption class="portfolio-gallery__caption">
          <span>{{ title }}</span>
          <span v-if="images.length > 1" class="portfolio-gallery__counter">{{ index + 1 }} / {{ images.length }}</span>
        </figcaption>
      </figure>

      <button v-if="images.length > 1" type="button" class="portfolio-gallery__nav portfolio-gallery__nav--next"
              aria-label="Next image" @click="next">&#8250;</button>
    </div>
  </teleport>
</template>

<script>
const SWIPE_THRESHOLD = 40

export default {
  props: {
    images: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['close'],
  data() {
    return {
      open: false,
      index: 0,
      touchStartX: null,
      previousBodyOverflow: ''
    }
  },
  methods: {
    show(startIndex = 0) {
      if (!this.images.length) return
      this.index = Math.min(Math.max(startIndex, 0), this.images.length - 1)
      this.open = true
      this.previousBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      // Capture phase on window runs before the Case Studies modal's own
      // window keydown listener, so Escape closes only the gallery
      window.addEventListener('keydown', this.onKeydown, true)
      this.preloadAdjacent()
    },
    close() {
      if (!this.open) return
      this.open = false
      document.body.style.overflow = this.previousBodyOverflow
      window.removeEventListener('keydown', this.onKeydown, true)
      this.$emit('close')
    },
    prev() {
      this.index = (this.index - 1 + this.images.length) % this.images.length
      this.preloadAdjacent()
    },
    next() {
      this.index = (this.index + 1) % this.images.length
      this.preloadAdjacent()
    },
    preloadAdjacent() {
      if (this.images.length < 2) return
      const n = this.images.length
      ;[(this.index + 1) % n, (this.index - 1 + n) % n].forEach(i => {
        const img = new Image()
        img.src = this.images[i]
      })
    },
    onKeydown(event) {
      if (event.key === 'Escape') {
        event.stopImmediatePropagation()
        event.preventDefault()
        this.close()
      } else if (event.key === 'ArrowRight' && this.images.length > 1) {
        event.stopImmediatePropagation()
        event.preventDefault()
        this.next()
      } else if (event.key === 'ArrowLeft' && this.images.length > 1) {
        event.stopImmediatePropagation()
        event.preventDefault()
        this.prev()
      }
    },
    onTouchStart(event) {
      this.touchStartX = event.changedTouches[0].clientX
    },
    onTouchEnd(event) {
      if (this.touchStartX === null || this.images.length < 2) return
      const dx = event.changedTouches[0].clientX - this.touchStartX
      this.touchStartX = null
      if (Math.abs(dx) < SWIPE_THRESHOLD) return
      dx < 0 ? this.next() : this.prev()
    }
  },
  beforeUnmount() {
    this.close()
  }
}
</script>

<style lang="scss">
/* The leading image in PortfolioItem.vue opens the gallery */
.project-image__trigger {
  cursor: zoom-in;

  &:focus-visible {
    outline: 3px solid #78b7d6;
    outline-offset: 4px;
  }
}

.portfolio-gallery {
  position: fixed;
  inset: 0;
  /* Above ContentDetailModal (9993) and the site's fixed scroll/chat buttons */
  z-index: 2147483000;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Opaque: the device mockups are transparent PNGs, so a see-through backdrop lets the page bleed through them */
  background: rgb(10, 14, 20);

  &__figure {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 92vw;
  }

  &__image {
    display: block;
    max-width: 92vw;
    max-height: 86vh;
    object-fit: contain;
    user-select: none;
  }

  &__caption {
    display: flex;
    gap: 1rem;
    margin-top: 0.75rem;
    color: #eee;
    font-size: 0.95rem;
    text-align: center;
  }

  &__counter {
    color: #aaa;
  }

  &__close,
  &__nav {
    position: absolute;
    border: 0;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    cursor: pointer;
    line-height: 1;
    transition: background-color 0.2s ease;

    &:hover,
    &:focus-visible {
      background: rgba(255, 255, 255, 0.25);
    }
  }

  &__close {
    top: 1rem;
    right: 1rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    font-size: 2rem;
  }

  &__nav {
    top: 50%;
    transform: translateY(-50%);
    width: 3rem;
    height: 4.5rem;
    border-radius: 6px;
    font-size: 3rem;

    &--prev {
      left: 1rem;
    }

    &--next {
      right: 1rem;
    }

    @media screen and (max-width: 40em) {
      width: 2.25rem;
      height: 3.5rem;
      font-size: 2.25rem;

      &--prev {
        left: 0.25rem;
      }

      &--next {
        right: 0.25rem;
      }
    }
  }
}
</style>
