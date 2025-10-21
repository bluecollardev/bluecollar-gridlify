<template>
  <div class="party-lights-wrapper">
    <div class="backdrop"></div>
    <div class="stage_floor"></div>

    <!-- Multiple spotlights -->
    <div class="spotlight_swivel spotlight1">
      <div class="lamp"></div>
      <div class="spotlight"></div>
    </div>

    <div class="spotlight_swivel spotlight2">
      <div class="lamp"></div>
      <div class="spotlight"></div>
    </div>

    <div class="spotlight_swivel spotlight3">
      <div class="lamp"></div>
      <div class="spotlight"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimplePartyLights'
}
</script>

<style lang="scss">
.party-lights-wrapper {
  width: 100%;
  height: 130vh;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  top: 0;
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(#000000, rgba(25, 53, 93, 0.3) 90%, rgba(25, 53, 93, 0.3));
}

.stage_floor {
  content: '';
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  height: 150%;
  background-image: radial-gradient(rgba(54, 90, 143, 0.5), rgba(54, 90, 143, 0));
  transform: scale(1.0, 0.3);
}

.spotlight_swivel {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotate_spotlight 5s linear infinite;
}

/* Offset different spotlights */
.spotlight1 {
  left: -20%;
  animation-delay: 0s;
}

.spotlight2 {
  left: 20%;
  animation-delay: 1.66s;
}

.spotlight3 {
  left: 0;
  animation-delay: 3.33s;
}

.lamp {
  position: absolute;
  width: 40vh;
  height: 400vh;
  background-image: radial-gradient(ellipse, rgba(82, 116, 168, 0.5), rgba(82, 116, 168, 0.2) 25%, rgba(82, 116, 168, 0) 50%);
  top: -220vh;
  left: 55vh;
  transform: perspective(23vh) rotateX(30deg);
}

.spotlight {
  opacity: 0.5;
  transform: scale(1.5, 3);
  position: absolute;
  top: -20vh;
  left: calc(50% - 75vh);
}

.spotlight::after {
  content: '';
  position: absolute;
  top: -50vh;
  background-image: radial-gradient(ellipse closest-corner at 75% 75%, rgba(55, 89, 138, 0.2), rgba(55, 89, 138, 0));
  border-radius: 100%;
  width: 100vh;
  height: 100vh;
  clip: rect(50vh, 100vh, 100vh, 50vh);
  transform: rotate(45deg);
}

@keyframes rotate_spotlight {
  0% {
    transform: rotate(0deg) scaleY(1) translateY(0);
  }
  25% {
    transform: rotate(-15deg) scaleY(1.1) translateY(-3vh);
  }
  50% {
    transform: rotate(0deg) scaleY(1) translateY(0);
  }
  75% {
    transform: rotate(15deg) scaleY(1.1) translateY(-3vh);
  }
}
</style>
