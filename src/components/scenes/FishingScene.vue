<template>
  <div class="fishing-scene">
    <RedSnapper ref="redSnapper" class="desktop-fish" />
    <div class="fishing-interactive">
      <span ref="fishingRod" @click="doCast()" :class="`fishing-rod-object ${isCasting ? 'is-casting' : isOnHook ? 'fish-is-attached' : 'idle'}`">
        <span class="line-anchor"></span><img :class="`fishing-rod`" src="/images/fishing-rod.svg" />
      </span>
      <img ref="fishCaught" class="fish-caught fish" src="/images/red-snapper.svg" />
      <div id="casting-line"></div>
      <div id="reeling-line"></div>
    </div>
  </div>
</template>
<script>
  import anime from 'animejs';
  import SVG from 'svg.js';
  import 'svg.pathmorphing.js';
  import RedSnapper from '../RedSnapper.vue';

  export default {
    components: {
      RedSnapper
    },
    data() {
      return {
        isCasting: false,
        isOnHook: false,
        resizeHandler: null,
        fishCaughtOffset: 470 // Vertical offset for fish-caught position on line
      }
    },
    methods: {
      doFishCaught() {
        if (typeof window !== 'undefined') {
          this.isCasting = false;
          this.isOnHook = true;

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
        document.querySelector('#reeling-line').style.display = 'none';

        this.isCasting = true;
        this.isOnHook = false;

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
        //console.log(`start x: ${startX}, y: ${startY}`);

        const canvas = SVG('casting-line');
        canvas.size(document.body.clientWidth, 1200);

        const curveDef = `M ${startX} ${startY} C ${startX - 400},${startY} ${startX - 500},${startY + 200} ${startX - 500},700`;
        //console.log('curve def ' + curveDef);
        const castingLine = canvas.path(curveDef)
          .fill('none').stroke({ color: '#000', width: 1 });

        setTimeout(() => {
          castingLine.animate().plot(`M ${startX} ${startY} L ${startX - 500} 1000`);
          setTimeout(() => {
            castingLine.animate().plot(`M ${startX} ${startY} L ${startX} 1000`);
          },500);
        }, 333);
      },
      drawReelingLine() {
        document.querySelector('#reeling-line').style.display = 'block';

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
              //console.log(`line length: ${endY - coords.top}`);
              document.querySelector('.fish-caught').style.top = `${endY + this.fishCaughtOffset}px`;
            }

            const fishX = coords.left;
            //console.log(`fish x: ${fishX}, y: ${endY}`);
            // Subtract half the width of the fish so it's centered
            document.querySelector('.fish-caught').style.left = `${fishX - 69}px`;

            requestId = requestAnimationFrame(updatePosition);
          }
        };

        requestId = requestAnimationFrame(updatePosition);
      },
      clearCastingLine() {
        const castingLineContainer = document.querySelector('#casting-line');
        if (castingLineContainer) {
          // Remove all SVG elements, not just the first one
          while (castingLineContainer.firstChild) {
            castingLineContainer.removeChild(castingLineContainer.firstChild);
          }
        }
      },
      clearReelingLine() {
        const reelingLineContainer = document.querySelector('#reeling-line');
        if (reelingLineContainer) {
          // Remove all SVG elements, not just the first one
          while (reelingLineContainer.firstChild) {
            reelingLineContainer.removeChild(reelingLineContainer.firstChild);
          }
        }
      },
      handleResize() {
        // Clear the fish and reeling line on resize
        const fishCaught = document.querySelector('.fish-caught');
        if (fishCaught) {
          fishCaught.style.display = 'none';
        }
        this.clearReelingLine();
        this.clearCastingLine();

        // Reset casting state
        this.isCasting = false;
        this.isOnHook = false;
      }
    },
    mounted() {
      if (typeof window !== 'undefined') {
        setTimeout(this.doCast, 1500);

        // Add resize listener to clear fish and reeling line
        this.resizeHandler = this.handleResize.bind(this);
        window.addEventListener('resize', this.resizeHandler);
      }
    },
    beforeUnmount() {
      if (typeof window !== 'undefined') {
        // Remove resize listener
        if (this.resizeHandler) {
          window.removeEventListener('resize', this.resizeHandler);
        }
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

  // Show desktop fish on tablets and desktop
  .desktop-fish {
    display: block;

    // Hide on mobile phones only (max-width: 48em / 768px)
    @media screen and (max-width: 48em) {
      display: none !important;
    }
  }

  .fishing-interactive {
    @media screen and (max-width: 52em) {
      display: none !important;
    }
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
    top: 36px;
    position: relative;
    left: 16px;
  }

  /* Can't use standard breakpoint for this one */
  @media screen and (min-width: 90em) {
    .line-anchor {
      width: 2px;
      height: 2px;
      background: #000;
      display: inline-block;
      top: -77px;
      position: relative;
      left: 36px;
    }
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

    &::after {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      bottom: 0;
      right: 0;
      cursor: pointer;
      z-index: 10;
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

  .fish-caught {
    width: 301px;
    height: 120px;
    position: absolute;
    max-width: 400px;
    bottom: -350px;
    transform: rotate(270deg);
    transform-origin: top left;
    animation: fish_caught 1.75s ease-in-out alternate infinite;
    z-index: 1;

    @keyframes fish_caught {
      0%, 100% {
        transform: rotate(267deg);
      }

      50% {
        transform: rotate(273deg);
      }
    }
  }
</style>
