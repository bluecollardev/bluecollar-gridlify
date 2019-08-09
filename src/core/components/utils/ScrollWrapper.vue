<template>

</template>

<script>
  export default {
    props: {
      lastWindowScroll: {
        x: { type: Number, default: 0 },
        y: { type: Number, default: 0 },
      },
      scrollThreshold: { type: Number, default: 5 },
      targetScroll: {
        x: { type: Number, default: null },
        y: { type: Number, default: null },
      },
      targetEl: null
    },
    methods: {
      initializeScroll() {
        const initialScroll = {
          x: window.scrollX,
          y: window.scrollY
        };
      },
      doScroll() {
        const windowScroll = {
          x: window.scrollX,
          y: window.scrollY
        };

        // Throttle the scrolling or we will overload the API and DOM
        if (Math.abs(this.lastWindowScroll.y - windowScroll.y) <= this.scrollThreshold) return;

        this.lastWindowScroll.y = windowScroll.y;
      }
    }
  }
</script>
