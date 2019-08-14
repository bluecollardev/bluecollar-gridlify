<template>
  <div class="fishing-scene">
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
  //import SVG from 'svg.js';
  //import 'svg.pathmorphing.js';

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
        const xMax = 1200;
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
          let x = 25;
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
              x += 25;
              requestId = requestAnimationFrame(updatePosition);
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
          el.style.display = 'block';
        }
      },
      getFishingRodAnchorCoords() {
        let scene = document.querySelector('.fishing-scene').getBoundingClientRect();
        //let comp = document.querySelector('.fishing-rod-object').getBoundingClientRect();
        let anchor = document.querySelector('.line-anchor').getBoundingClientRect();
        let coords = {};

        // Calc diff between anchor, comp and scene
        //coords.top = anchor.top - comp.top - scene.top;
        //coords.right = anchor.right - comp.right - scene.right;
        //coords.bottom = anchor.bottom - comp.bottom - scene.bottom;
        //coords.left = anchor.left - comp.left - scene.left;

        coords.top = anchor.top - scene.top;
        coords.right = anchor.right - scene.right;
        coords.bottom = anchor.bottom - scene.bottom;
        coords.left = anchor.left - scene.left;

        return coords;
      },
      doCast() {
        this.clearReelingLine();

        this.$set(this, 'isCasting', true);
        this.$set(this, 'isOnHook', false);

        const fishingRod = document.querySelector('.fishing-rod-object'); //this.$refs.fishingRod;
        fishingRod.addEventListener('webkitAnimationEnd', this.resetCast);
        fishingRod.addEventListener('oAnimationEnd', this.resetCast);
        fishingRod.addEventListener('msAnimationEnd', this.resetCast);
        fishingRod.addEventListener('animationend', this.resetCast);

        document.querySelector('.fish-caught').style.display = 'none';

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
          this.drawReelingLine();
          //this.doFishJump();
        }, 3000);
      },
      drawCastingLine() {
        const anchorCoords = this.getFishingRodAnchorCoords();

        const startY = anchorCoords.top; // + 10;
        const startX = anchorCoords.left;

        //console.log(`orig x: ${anchorCoords.x}, y: ${anchorCoords.y}`);
        console.log(`start x: ${startX}, y: ${startY}`);

        const canvas = SVG('casting-line');
        canvas.size(document.body.clientWidth, 1200);

        const curveDef = `M ${startX} ${startY} C ${startX - 400},${startY} ${startX - 500},${startY + 200} ${startX - 500},700`;
        console.log('curve def ' + curveDef);
        const castingLine = canvas.path(curveDef)
          .fill('none').stroke({ color: '#000', width: 1 });

        setTimeout(() => {
          castingLine.animate().plot(`M ${startX} ${startY} L ${startX - 500} 700`);
          setTimeout(() => {
            castingLine.animate().plot(`M ${startX} ${startY} L ${startX} 1000`);
          },500);
        }, 333);
      },
      drawReelingLine() {
        const canvas = SVG('reeling-line');
        canvas.size(1, 1000);

        const reelingLine = canvas.path(`M 1 0 L 1 ${1000}`)
          .fill('none').stroke({color: '#000', width: 1});

        let requestId = null;
        let endY = 1000;

        const updatePosition = () => {
          const coords = this.getFishingRodAnchorCoords();

          endY = endY - 2;

          if (endY < coords.top) {
            cancelAnimationFrame(requestId);
          } else {
            // Fix to anchor point
            document.querySelector('#reeling-line').style.top = `${coords.top}px`;
            document.querySelector('#reeling-line').style.left = `${coords.left}px`;

            // Update line length
            if (endY > coords.top + 100) {
              reelingLine.plot(`M 0 0 L 1 ${endY}`);
              console.log(`line length: ${endY - coords.top}`);
            }

            if (endY > coords.top +  350) {
              document.querySelector('.fish-caught').style.top = `${endY}px`;
            }

            const fishX = coords.left;
            console.log(`fish x: ${fishX}, y: ${endY}`);
            // Subtract half the width of the fish so it's centered
            document.querySelector('.fish-caught').style.left = `${fishX - 69}px`;

            requestId = requestAnimationFrame(updatePosition);
          }
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
      require('svg.js');
      require('svg.pathmorphing.js');

      if (typeof window !== 'undefined') {
        this.interval = setInterval(this.doFishJump, 30000);
        setTimeout(this.doCast, 1500);
      }
    },
    beforeDestroy() {
      if (typeof window !== 'undefined') {
        clearInterval(this.interval);
      }
    }
  }
</script>

<style lang="scss">
  .fishing-scene {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #casting-line {
    position: absolute;
    width: 100%;
    height: 1200px;
    left: 0;
    top: 0;
    z-index: -1;

    path {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: casting_line 0.666s linear alternate;
      animation-fill-mode: forwards;
    }
  }

  #reeling-line {
    position: absolute;
    width: 1px;
    height: 1000px;
    z-index: 0;
  }

  .line-anchor {
    width: 2px;
    height: 2px;
    background: black;
    display: inline-block;
    top: -77px;
    position: relative;
    left: 36px;
  }

  @keyframes casting_line {
    from {
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  .fishing-rod-object {
    position: absolute;
    left: 45%;
    top: 75%;
    transform: rotate(35deg);
    transform-origin: bottom right;
    cursor: pointer;
    animation-name: fishing_rod_hover;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;

    .fishing-rod {
      width: 780px;
      height: 100px;
    }

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
        transform: rotate(38deg);
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

  .red-snapper, .fish-caught {
    width: 301px;
    height: 120px;
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
    z-index: 1;

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
