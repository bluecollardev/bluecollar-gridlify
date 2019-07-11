<template>
  <div class="google-map flex">
    <GmapMap
      class="map-01"
      :center="{lat:48.44, lng:-123.35}"
      :zoom="14"
      style="width: 100%; height: 100%"
    >
    </GmapMap>
    <!--<GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />-->
  </div>
</template>

<script>
  import anime from 'animejs';

  export default {
    computed: {},
    methods: {},
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

  .map-01 {
    position: absolute;
    filter: grayscale(0.45) opacity(0.30);
    z-index: 0;


    &:before {
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      z-index: 0;
      background: rgba(255, 255, 255, 0.666);
    }
  }
</style>
