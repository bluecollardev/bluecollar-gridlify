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
          el.style.display = 'block';

          const fromY = 0;
          const toY = 550;

          // requestAnimationFrame
          this.animateOnLine(el, (y) => y + 4.9, [fromY, toY]);
        }
      },
      getFishingRodAnchorCoords() {
        let parentPos = document.querySelector('.fishing-scene').getBoundingClientRect();
        let childPos = document.querySelector('.fishing-rod-object').getBoundingClientRect();
        let coords = {};

        coords.top = childPos.top - parentPos.top;
        coords.right = childPos.right - parentPos.right;
        coords.bottom = childPos.bottom - parentPos.bottom;
        coords.left = childPos.left - parentPos.left;

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
          //this.doFishJump();
        }, 3000);
      },
      drawCastingLine() {
        const anchorCoords = this.getFishingRodAnchorCoords();

        const startY = anchorCoords.top + 43; // + 10;
        const startX = anchorCoords.left + 89;

        //console.log(`orig x: ${anchorCoords.x}, y: ${anchorCoords.y}`);
        console.log(`start x: ${startX}, y: ${startY}`);

        const canvas = SVG('casting-line');
        canvas.size(document.body.clientWidth, 1200);

        const curveDef = `M ${startX} ${startY} C ${startX - 400},${startY} ${startX - 500},${startY + 400} ${startX - 500}, 600`;
        console.log('curve def ' + curveDef);
        const castingLine = canvas.path(curveDef)
          .fill('none').stroke({ color: '#000', width: 1 });

        setTimeout(() => {
          castingLine.animate().plot(`M ${startX} ${startY} L ${startX - 500} 600`);
          setTimeout(() => {
            castingLine.animate().plot(`M ${startX} ${startY} L ${startX} 1000`);
          },500);
        }, 333);
      },
      drawReelingLine() {
        const anchorCoords = this.getFishingRodAnchorCoords();
        const fishCaughtCoords = document.querySelector('.fish-caught').getBoundingClientRect();

        const endY = fishCaughtCoords.y + 500;
        const endX = fishCaughtCoords.x;

        const startY = anchorCoords.top;
        const startX = endX;

        console.log(`start x: ${startX}, y: ${startY}`);
        console.log(`end x: ${endX}, y: ${endY}`);

        const reelingLine = SVG('reeling-line');
        reelingLine.size(2, 1000);

        reelingLine.path(`M 1 ${startY} L 1 ${endY}`)
          .fill('none').stroke({color: '#000', width: 1});

        let requestId = null;
        const updatePosition = () => {
          const coords = this.getFishingRodAnchorCoords();
          document.querySelector('#reeling-line').style.top = `${coords.top + 43 - 296}px`;
          document.querySelector('#reeling-line').style.left = `${coords.left + 89}px`;
          // Subtract half the width of the fish so it's centered
          document.querySelector('.fish-caught').style.left = `${coords.left + 89 - 65}px`;
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
      animation: reeling_line 4s linear alternate;
      animation-fill-mode: forwards;
    }
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

  @keyframes reeling_line {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: 700;
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
