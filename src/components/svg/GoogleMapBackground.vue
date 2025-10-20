<template>
  <div class="google-map flex">
    <GmapMap
      ref="mapRef"
      class="map-01"
      :center="this.gmapCenter"
      :zoom="14"
      style="width: 100%; height: 100%"
      :options="this.gmapOptions"
    >
    </GmapMap>
    <!--<GmapMarker
      :key="index"s
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />-->
  </div>
</template>

<script>
  // TODO: Update to use @fawmi/vue-google-maps or alternative
  // import { gmapApi } from '@fawmi/vue-google-maps';

  export default {
    data: () => ({
      lastWindowScroll: {
        x: 0,
        y: 0,
      },
      scrollThreshold: 5,
      parallaxMultiplier: 5,
      gmapCenter: {
        lat: 48.455,
        lng: -123.35
      },
      gmapOptions: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: 'none'
      },
      gmapScroll: {
        x: null,
        y: null
      },
      gmapEl: null
    }),
    computed: {
      // google: gmapApi
    },
    methods: {
      initializeMap() {
        // Check if map ref exists and has the promise
        if (!this.$refs.mapRef || !this.$refs.mapRef.$mapPromise) {
          console.warn('Google Maps not initialized - skipping map setup');
          return;
        }

        this.$refs.mapRef.$mapPromise.then((gmap) => {
          //new this.google.maps.Marker({
          //  map: map,
          //  position: map.getCenter()
          //});

          this.gmapEl = gmap.getDiv();

          const initialScroll = {
            x: window.scrollX,
            y: window.scrollY
          };

          this.gmapScroll = Object.assign({}, initialScroll);

          // TODO: Maybe an offset?
          /*const offset = {
            top: window.innerHeight - this.gmapEl.getBoundingClientRect().top,
            left: window.innerWidth - this.gmapEl.getBoundingClientRect().left
          };*/

          gmap.panBy(initialScroll.x, initialScroll.y / this.parallaxMultiplier);

          this.google.maps.event.addDomListener(window, 'scroll', this.scrollGoogleMap.bind(this, gmap));
        });
      },
      scrollGoogleMap(gmap) {
        const windowScroll = {
          x: window.scrollX,
          y: window.scrollY
        };

        // Throttle the scrolling or we will overload the API and DOM
        if (Math.abs(this.lastWindowScroll.y - windowScroll.y) <= this.scrollThreshold) return;

        // TODO: If debug mode...
        //console.log('map scroll');
        //console.log(JSON.stringify(this.gmapScroll));
        //console.log('new scroll');
        //console.log(JSON.stringify({ x: -(this.gmapScroll.x - windowScroll.x), y: -((this.gmapScroll.y - windowScroll.y) / this.parallaxMultiplier) }));

        if (this.gmapScroll) {
          gmap.panBy(-(this.gmapScroll.x - windowScroll.x), -((this.gmapScroll.y - windowScroll.y) / this.parallaxMultiplier));
        }

        this.gmapScroll = Object.assign({}, windowScroll);

        this.lastWindowScroll.y = windowScroll.y;
      }
    },
    mounted() {
      // At this point, the child GmapMap has been mounted, but the map has not been initialized...
      // Therefore we need to write mapRef.$mapPromise.then(() => ...)
      if (typeof window !== 'undefined') {
        this.initializeMap();
      }
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
    filter: grayscale(0.333) opacity(0.666);
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
