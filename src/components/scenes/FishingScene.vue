<template>
  <div class="flex-basis-half flex flex-column">
    <span ref="fishingRod" :class="`fishing-rod-object ${isCasting ? 'is-casting' : isOnHook ? 'fish-is-attached' : 'idle'}`">
      <span class="line-anchor"></span><img @click="doCast()" :class="`fishing-rod`" src="/images/fishing-rod.svg" />
    </span>
    <img ref="redSnapper" class="red-snapper fish" src="/images/red-snapper.svg" />
    <img ref="fishCaught" class="fish-caught fish" src="/images/red-snapper.svg" />
    <div id="casting-line"></div>
    <div id="reeling-line"></div>
  </div>
</template>

<script>
  import anime from 'animejs';
  import SVG from 'svg.js';

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
        this.drawReelingLine();

        if (typeof window !== 'undefined') {
          let requestId = null;
          let y = coords[0];

          const updatePosition = () => {
            //console.log(`test | y: ${fx(y)}`);
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

          const fromY = -100;
          const toY = 550;

          // requestAnimationFrame
          this.animateOnLine(el, (y) => y + 5, [fromY, toY]);
        }
      },
      doCast() {
        this.clearReelingLine();

        const fishCaught = document.querySelector('.fish-caught');
        fishCaught.style.right = '19%';
        fishCaught.style.bottom = '-350px';

        this.$set(this, 'isCasting', true);
        this.$set(this, 'isOnHook', false);

        const fishingRod = document.querySelector('.fishing-rod-object'); //this.$refs.fishingRod;
        fishingRod.addEventListener('webkitAnimationEnd', this.resetCast);
        fishingRod.addEventListener('oAnimationEnd', this.resetCast);
        fishingRod.addEventListener('msAnimationEnd', this.resetCast);
        fishingRod.addEventListener('animationend', this.resetCast);

        setTimeout(this.drawCastingLine, 2500); // Same time as css animation
      },
      resetCast() {
        // Something is making this animationend trigger fire waaaay too fast...
        setTimeout(() => {
          //this.$set(this, 'isCasting', false);

          const fishingRod = document.querySelector('.fishing-rod-object'); //this.$refs.fishingRod;
          fishingRod.removeEventListener('webkitAnimationEnd', this.resetCast);
          fishingRod.removeEventListener('oAnimationEnd', this.resetCast);
          fishingRod.removeEventListener('msAnimationEnd', this.resetCast);
          fishingRod.removeEventListener('animationend', this.resetCast);

          this.clearCastingLine();
          this.doFishCaught();
          //this.doFishJump();
        }, 3000);
      },
      drawCastingLine() {
        const anchorCoords = document.querySelector('.line-anchor').getBoundingClientRect();
        const a = 55 * Math.PI / 180;
        //const startY = anchorCoords.y * Math.cos(a) - anchorCoords.x * Math.sin(a);
        //const startX = anchorCoords.y * Math.sin(a) + anchorCoords.x * Math.cos(a);

        const startY = anchorCoords.y - 36;
        const startX = anchorCoords.x;

        //console.log(`orig x: ${anchorCoords.x}, y: ${anchorCoords.y}`);
        console.log(`start x: ${startX}, y: ${startY}`);

        const castingLine = SVG('casting-line');
        castingLine.size(document.body.clientWidth, 800);

        castingLine.path(`M ${startX} ${startY} S ${startX - 400},${startY} ${startX - 500}, 600`)
          .fill('none').stroke({ color: '#000', width: 1 });
      },
      drawReelingLine() {
        const anchorCoords = document.querySelector('.line-anchor').getBoundingClientRect();
        const fishCaughtCoords = document.querySelector('.fish-caught').getBoundingClientRect();

        const endY = fishCaughtCoords.y + 1000;
        const endX = fishCaughtCoords.x + 40;

        const startY = anchorCoords.y - 150;
        const startX = endX;

        console.log(`start x: ${startX}, y: ${startY}`);
        console.log(`end x: ${endX}, y: ${endY}`);

        const reelingLine = SVG('reeling-line');
        reelingLine.size(2, 2000);

        reelingLine.path(`M 1 ${startY} L 1 ${endY}`)
          .fill('none').stroke({color: '#000', width: 1});

        let requestId = null;
        const updatePosition = () => {
          const coords = document.querySelector('.line-anchor').getBoundingClientRect();
          document.querySelector('#reeling-line').style.top = `${coords.y}px`;
          document.querySelector('#reeling-line').style.left = `${coords.x}px`;
          document.querySelector('.fish-caught').style.left = `${coords.x - 86}px`;
          requestId = requestAnimationFrame(updatePosition);
        };

        requestId = requestAnimationFrame(updatePosition);
      },
      clearCastingLine() {
        if (document.querySelectorAll('#casting-line svg').length > 0) {
          document.querySelector('#casting-line').removeChild(document.querySelector('#casting-line svg'));
        }
      },
      clearReelingLine() {
        if (document.querySelectorAll('#reeling-line svg').length > 0) {
          document.querySelector('#reeling-line').removeChild(document.querySelector('#reeling-line svg'));
        }
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
  #casting-line {
    position: absolute;
    width: 100%;
    height: 800px;
    left: 0;
    top: 0;
    z-index: -1;

    path {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: casting_line 0.666s linear alternate;
      animation-fill-mode: forwards;
      transition-timing-function: ease-out;
    }
  }

  #reeling-line {
    position: absolute;
    width: 1px;
    height: 150vh;
    left: 64.5%;
    top: 0;
    z-index: -1;

    path {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: reeling_line 5s linear alternate;
      animation-fill-mode: forwards;
    }
  }

  .line-anchor {
    width: 1px;
    height: 1px;
    background: black;
    display: inline-block;
    top: 35px;
    position: relative;
    left: 29px;
  }

  @keyframes casting_line {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes reeling_line {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: 400;
    }
  }

  .fishing-rod-object {
    position: relative;
    left: 200px;
    top: 550px;
    transform: rotate(35deg);
    transform-origin: bottom right;
    cursor: pointer;
    //animation-name: fishing_rod_hover;
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
