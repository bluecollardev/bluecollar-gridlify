<template>
  <div class="google-map-cutout">
    <div id="map-canvas">
      <GmapMap
        class="map-02"
        :center="{lat:48.4284, lng:-123.3656}"
        :zoom="14"
        map-type-id="terrain"
        style="width: 500px; height: 500px"
      >
        <!--<GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />-->
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
  import anime from 'animejs';

  export default {
    computed: {
    },
    methods: {
    },
    mounted() {
      /*function initialize() {
        var mapOptions = {
          center: { lat: 52.517010, lng: 13.378540},
          zoom: 14,
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}],
          disableDefaultUI: true
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);*/
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

  #map-canvas{
    @include clip-path(#chopChop);
    .gm-style>div:nth-child(2) {
      bottom: 30px !important;
      left: 195px !important;
      &:div div {
        cursor: default;
      }
    }
  }

  .google-map-cutout {

  }
</style>
