<template>
  <div class="helicopter" @mouseenter="getToTheChopper()">
    <p class="speech-bubble">Get to the chopper!!!</p>
    <div class="helicopter-inner">
      <img
        class="helicopter-body"
        src="/images/bladeless-helicopter.png"
        alt="Helicopter with No Blades" />
      <img
        class="blade"
        src="/images/rotary-blade.png"
        alt="Helicopter Blades" />
      <span class="tailblade"></span>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
    props: {
      onGetToTheChopper: {
        type: Function,
        default: () => {}
      }
    },
    methods: {
      initAudioClips() {
        this.arnoldAudio = new Audio();
        this.arnoldAudio.volume = 0.60;
        this.arnoldAudio.src = '/audio/get_to_the_choppa.mp3';
        this.arnoldAudio.loop = false;
      },
      getToTheChopper() {
        this.arnoldAudio.onended = () => {
          this.$el.querySelector('.speech-bubble').style.opacity = 0;
          this.arnoldAudio.pause();
          this.arnoldAudio.currentTime = 0;

          if (typeof this.onGetToTheChopper === 'function') {
            this.onGetToTheChopper();
          }
        };

        this.$el.querySelector('.speech-bubble').style.opacity = 1;

        if (!this.arnoldAudio.currentTime > 0) {
          this.arnoldAudio.play();
        }
      },
      trackMouse(e) {
        const helicopter = this.$el;
        if (!helicopter) return;

        const helicopterInner = helicopter.querySelector('.helicopter-inner');
        if (!helicopterInner) return;

        // Get modal/container bounds
        const container = helicopter.closest('.commando-skull-scene') || helicopter.parentElement;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const helicopterRect = helicopter.getBoundingClientRect();

        // Calculate mouse position relative to container
        const relativeX = e.clientX - containerRect.left;
        const relativeY = e.clientY - containerRect.top;

        // Constrain within container bounds (with margins)
        const margin = 60; // Half helicopter width
        const maxX = containerRect.width - margin;
        const maxY = containerRect.height - margin;

        const targetX = Math.max(margin, Math.min(maxX, relativeX - margin));
        const targetY = Math.max(margin, Math.min(maxY, relativeY - margin));

        // Flip helicopter based on direction
        const currentX = helicopterRect.left - containerRect.left;
        if (targetX < currentX) {
          helicopterInner.querySelector('.helicopter-body').style.transform = 'scaleX(-1)';
          helicopterInner.querySelector('.blade').style.left = '0px';
        } else {
          helicopterInner.querySelector('.helicopter-body').style.transform = 'scaleX(1)';
          helicopterInner.querySelector('.blade').style.left = '31px';
        }

        // Animate to target position
        anime({
          targets: helicopter,
          left: targetX + 'px',
          top: targetY + 'px',
          easing: 'easeOutQuad',
          duration: 800
        });
      }
    },
    mounted() {
      this.initAudioClips();

      // Make helicopter follow mouse
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', this.trackMouse);
      }
    },
    beforeUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', this.trackMouse);
      }
    }
  }
</script>

<style lang="scss">
  @keyframes primaryblade {
    from {
      transform: rotateY(0deg);
    }

    to {
      transform: rotateY(-360deg);
    }
  }

  @keyframes tailblade {
    from {
      transform: rotate3d(0, 0, 1, 0deg);
    }

    to {
      transform: rotate3d(0, 0, 1, -360deg);
    }
  }

  @keyframes float {
    from {
      transform: translateY(8px) rotate3d(0, 0, 1, 3deg);
    }

    to {
      transform: translateY(-8px) rotate3d(0, 0, 1, 0deg);
    }
  }

  .helicopter {
    position: absolute;
    width: 120px;
    height: 80px;
    top: 20%;
    left: 10%;
    z-index: 1000;
    cursor: pointer !important;
  }

  .helicopter-inner {
    position: relative;
    animation-duration: 1s;
    animation-name: float;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-play-state: running;
    z-index: 1001;
  }

  .blade {
    position: absolute;
    top: 0;
    left: 31px;
    animation-duration: 0.2s;
    animation-name: primaryblade;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: running;
  }

  .tailblade {
    width: 3px;
    height: 7px;
    background-color: black;
    position: absolute;
    top: 9px;
    left: 10px;
    transform-origin: 50% 100%;
    animation-duration: .1s;
    animation-name: tailblade;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-play-state: running;
  }

  p.speech-bubble {
    // layout
    display: inline-block;
    opacity: 0;
    position: absolute;
    cursor: pointer;
    max-width: 30em;
    top: -75px;
    // looks
    color: black;
    text-transform: uppercase;
    background-color: #fff;
    padding: 1.125em 1.5em;
    font-size: 0.75em;
    font-weight: 900 !important;
    white-space: nowrap;
    border-radius: 1rem;
    box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);
  }

  p.speech-bubble::before {
    // layout
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: -0.6em;
    left: 2.5em; // offset should move with padding of parent
    border: .75rem solid transparent;
    border-bottom: none;
    // looks
    border-top-color: #fff;
    filter: drop-shadow(0 0.0625rem 0.0625rem rgba(0, 0, 0, .1));
  }
</style>
