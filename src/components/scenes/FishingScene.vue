<template>
  <div class="flex-basis-half flex flex-column">
    <img ref="fishingRod" @click="doCast()" :class="`fishing-rod ${isCasting ? 'is-casting' : isOnHook ? 'fish-is-attached' : 'idle'}`" src="/images/fishing-rod.svg" />
    <img ref="redSnapper" class="red-snapper fish" src="/images/red-snapper.svg" />
    <img ref="fishCaught" class="fish-caught fish" src="/images/red-snapper.svg" />
  </div>
</template>

<script>
  import anime from 'animejs';

  export default {
    props: {
      parabolicFx: {
        type: Function,
        default: (x, vtx) => -0.001 * Math.pow(x - vtx.x, 2) + vtx.y
      }
    },
    data() {
      return {
        isCasting: false,
        isOnHook: false,
        interval: null
      }
    },
    methods: {
      setFishJumpRotation(el, { x, y}) {
        const xMax = 1400;
        const startRotation = -65;
        const completeRotation = 55;
        const rotationDelta = completeRotation - startRotation;

        //console.log(`current coords: ${x}, ${y}`);
        // Get x coord % of max
        let xPct = x / xMax;
        //console.log(`x pct: ${xPct * 100}`);

        el.style.transform = `rotate(${ startRotation + (rotationDelta * xPct) }deg) scaleX(-1)`;
      },
      animateOnParabolicPath(el, fx, vtx, cb) {
        if (typeof window !== 'undefined') {
          let x = 20;
          let requestId = null;

          const updatePosition = () => {
            //console.log(`test | y: ${fx(x)}, x: ${x}`);
            const y = fx(x, vtx);

            el.style.bottom =  `${y}px`;
            el.style.left = `${x}px`;

            if (typeof cb === 'function') cb(el, { x, y });

            // Second 800 is a fudge factor to allow element to clear off screen
            if (x > 800 + 800) {
              cancelAnimationFrame(requestId);
            } else {
              x += 20;
              requestId = requestAnimationFrame(updatePosition);
            }
          };

          requestId = requestAnimationFrame(updatePosition);
        }
      },
      animateOnLine(el, fx, coords, cb) {
        if (typeof window !== 'undefined') {
          let requestId = null;
          let y = coords[0];

          const updatePosition = () => {
            console.log(`test | y: ${fx(y)}`);
            y = fx(y);

            el.style.bottom =  `${y}px`;

            if (typeof cb === 'function') cb(el, { y });

            // Second 800 is a fudge factor to allow element to clear off screen
            if (y > coords[1]) {
              cancelAnimationFrame(requestId);
            } else {
              requestId = requestAnimationFrame(updatePosition)
            }
          };

          requestId = requestAnimationFrame(updatePosition);
        }
      },
      reelInFish() {
        this.doFishJump();
      },
      doFishJump() {
        if (typeof window !== 'undefined') {
          const el = document.querySelector('.fish');

          const xVertex = 700;
          const yVertex = 500;

          // requestAnimationFrame
          this.animateOnParabolicPath(el,
            this.parabolicFx,
            { x: xVertex, y: yVertex },
            this.setFishJumpRotation
          );
        }
      },
      doFishCaught() {
        if (typeof window !== 'undefined') {
          this.$set(this, 'isCasting', false);
          this.$set(this, 'isOnHook', true);

          const el = document.querySelector('.fish-caught');

          const fromY = -500;
          const toY = 550;

          // requestAnimationFrame
          this.animateOnLine(el, (y) => y + 5, [fromY, toY]);
        }
      },
      doCast() {
        const fishCaught = document.querySelector('.fish-caught');
        fishCaught.style.right = '19%';
        fishCaught.style.bottom = '-350px';

        this.$set(this, 'isCasting', true);
        this.$set(this, 'isOnHook', false);

        const fishingRod = document.querySelector('.fishing-rod'); //this.$refs.fishingRod;
        fishingRod.addEventListener('webkitAnimationEnd', this.resetCast);
        fishingRod.addEventListener('oAnimationEnd', this.resetCast);
        fishingRod.addEventListener('msAnimationEnd', this.resetCast);
        fishingRod.addEventListener('animationend', this.resetCast);
      },
      resetCast() {
        // Something is making this animationend trigger fire waaaay too fast...
        setTimeout(() => {
          //this.$set(this, 'isCasting', false);

          const fishingRod = document.querySelector('.fishing-rod'); //this.$refs.fishingRod;
          fishingRod.removeEventListener('webkitAnimationEnd', this.resetCast);
          fishingRod.removeEventListener('oAnimationEnd', this.resetCast);
          fishingRod.removeEventListener('msAnimationEnd', this.resetCast);
          fishingRod.removeEventListener('animationend', this.resetCast);

          this.doFishCaught();
          //this.doFishJump();
        }, 3000);
      }
    },
    mounted() {
      this.interval = setInterval(this.doFishJump, 30000);
      setTimeout(this.doCast, 1500);
    },
    beforeDestroy() {
      clearInterval(this.interval);
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

    /* TODO: Eventually use a GSAP tween instead...? Then we can flex the rod... */
    &.is-casting {
      animation-name: fishing_rod_cast;
      animation-iteration-count: 1;
      animation-duration: 2.5s;
    }

    /* TODO: Eventually use a GSAP tween instead...? Then we can flex the rod... */
    &.fish-is-attached {
      animation-name: fishing_rod_catch;
      animation-iteration-count: 1;
      animation-duration: 4s;
      transform: rotate(55deg);
    }

    @keyframes fishing_rod_hover {
      0% {
        transform: rotate(35deg);
      }

      49% {
        transform: rotate(45deg);
      }

      99% {
        transform: rotate(35deg);
      }
    }

    @keyframes fishing_rod_cast {
      0% {
        transform: rotate(35deg);
      }

      74% {
        transform: rotate(100deg);
      }

      99% {
        transform: rotate(35deg);
      }
    }

    @keyframes fishing_rod_catch {
      0% {
        transform: rotate(35deg);
      }

      100% {
        transform: rotate(55deg);
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

  .fish-caught {
    position: absolute;
    max-width: 400px;
    bottom: -350px;
    transform: rotate(-90deg) scaleX(-1);
    transform-origin: top left;
    animation: fish_caught 1.75s ease-in-out alternate infinite;

    @keyframes fish_caught {
      0%, 100% {
        transform: rotate(-93deg) scaleX(-1);
      }

      50% {
        transform: rotate(-87deg) scaleX(-1);
      }
    }
  }
</style>
