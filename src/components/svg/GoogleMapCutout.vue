<template>
  <div class="google-map-cutout">
    <div id="map-canvas">
      <GmapMap
          class="map-02"
          :center="{lat:48.432, lng:-123.335}"
          :zoom="15"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
      >
      </GmapMap>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="150px" height="150px" id="daSVG">
      <clipPath id="chopChop">
        <path
            id="svgPath"
            d="M458.306721,357.359262 L458.306721,154.888126 C458.306721,154.888126 458.306721,123.735028 431.347502,108.158479 L330.082536,49.6444164 L330.082536,49.6684173 L256.112579,6.92291067 C256.112579,6.92291067 229.15336,-8.65363834 202.194141,6.92291067 L26.9592189,108.158479 C26.9592189,108.158479 1.13686838e-13,123.735028 1.13686838e-13,154.888126 L1.13686838e-13,357.359262 C1.13686838e-13,357.359262 1.13686838e-13,388.51236 26.9592189,404.088909 L202.194141,505.324477 C202.194141,505.324477 229.15336,520.901026 256.112579,505.324477 L351.765039,450.050529 L431.347502,404.088909 C431.347502,404.088909 458.306721,388.51236 458.306721,357.359262"/>
      </clipPath>
      <path
          id="svgMask"
          d="M458.306721,357.359262 L458.306721,154.888126 C458.306721,154.888126 458.306721,123.735028 431.347502,108.158479 L330.082536,49.6444164 L330.082536,49.6684173 L256.112579,6.92291067 C256.112579,6.92291067 229.15336,-8.65363834 202.194141,6.92291067 L26.9592189,108.158479 C26.9592189,108.158479 1.13686838e-13,123.735028 1.13686838e-13,154.888126 L1.13686838e-13,357.359262 C1.13686838e-13,357.359262 1.13686838e-13,388.51236 26.9592189,404.088909 L202.194141,505.324477 C202.194141,505.324477 229.15336,520.901026 256.112579,505.324477 L351.765039,450.050529 L431.347502,404.088909 C431.347502,404.088909 458.306721,388.51236 458.306721,357.359262"/>
    </svg>
  </div>
</template>

<script>

export default {
  computed: {},
  methods: {},
  mounted() {
  }
}
</script>

<style lang="scss">
@mixin clip-path($clip) {
  -webkit-clip-path: url($clip);
  -moz-clip-path: url($clip);
  -ms-clip-path: url($clip);
  clip-path: url($clip);
}

#map-canvas {
  @include clip-path(#chopChop);

  .gm-style > div:nth-child(2) {
    bottom: 30px !important;
    left: 195px !important;

    &:div div {
      cursor: default;
    }
  }
}

.google-map-cutout {

}

.map-02 {
  position: absolute;
  width: 500px;
  height: 500px;
  bottom: 0;
  z-index: 10;
}

@media screen and (max-width: 84em) {
  .google-map-cutout {
    display: none;
  }
}
</style>
