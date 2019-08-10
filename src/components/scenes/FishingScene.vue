<template>
  <div class="flex-basis-half flex flex-column">
    <img ref="fishingRod" @click="reelInFish()" class="fishing-rod" src="/images/fishing-rod.svg" />
    <img ref="redSnapper" class="red-snapper fish" src="/images/red-snapper.svg" />
  </div>
</template>

<script>
  import anime from 'animejs';

  export default {
    methods: {
      animateOnParabolicPath(el, fx, cb) {
        if (typeof window !== 'undefined') {
          let x = 20;
          const timer = setInterval(() => {
            //console.log(`test | y: ${fx(x)}, x: ${x}`);

            el.style.bottom = fx(x) + 'px';
            el.style.left = x + 'px';

            cb({ x, y: fx(x) });

            // 100 is a fudge factor to allow element to clear off screen
            if (x > 800 + 800) clearInterval(timer);
            x += 20;
          }, 33);
        }
      },
      play() {
        if (typeof window !== 'undefined') {
          const el = document.querySelector('.fish');
          const xMax = 1400;
          const xVertex = 700;
          const yVertex = 500;
          const startRotation = -65;
          const completeRotation = 55;
          const rotationDelta = completeRotation - startRotation;

          let elRotation = startRotation;

          this.animateOnParabolicPath(el, (x) => -0.001 * Math.pow(x - xVertex, 2) + yVertex, ({ x, y }) => {
            console.log(`current coords: ${x}, ${y}`);
            // Get x coord % of max
            let xPct = x / xMax;
            console.log(`x pct: ${xPct * 100}`);

            el.style.transform = `rotate(${ startRotation + (rotationDelta * xPct) }deg) scaleX(-1)`;
          });
        }
      },
      reelInFish() {
        this.play();
      }
    },
    mounted() {
      const timer = setInterval(this.play, 8000);
    }
  }
</script>

<style lang="scss">
  .fishing-rod {
    position: relative;
    left: 200px;
    top: 500px;
    transform: rotate(35deg);
    transform-origin: bottom right;
    cursor: pointer;
    animation-name: fishing_rod_hover;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;

    &:hover {
      animation: none;
    }

    @keyframes fishing_rod_hover {
      0% {
        transform: rotate(35deg);
      }

      49% {
        transform: rotate(38deg);
      }

      99% {
        transform: rotate(35deg);
      }
    }
  }

  .red-snapper {
    position: absolute;
    max-width: 400px;
    left: -200px;
    bottom: -200px;
    transform: rotate(-45deg) scaleX(-1);
  }
</style>
