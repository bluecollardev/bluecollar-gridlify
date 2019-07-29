// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/css/main.scss';
import '~/assets/fonts/icomoon/style.css';

export default function (Vue, { head }) {
  head.meta.push({
    property: 'og:locale',
    content: 'en_US'
  });

  head.meta.push({
    property: 'og:type',
    content: 'website'
  });

  head.meta.push({
    property: 'og:site_name',
    content: 'Blue Collar Development'
  });

  head.meta.push({
    property: 'og:url',
    content: 'https://www.bluecollardev.com'
  });

  head.meta.push({
    property: 'og:title',
    content: 'Blue Collar Dev - Local Software and App Development in Victoria and Vancouver, BC'
  });

  head.meta.push({
    property: 'og:description',
    content: 'Blue Collar Development is a boutique software development house located in Victoria, BC. Specializing in mobile (iOS/Android), hybrid and web app development, Blue Collar creates amazing applications using cutting edge technology to help you bring your concept to life.'
  });

  head.meta.push({
    name: 'keywords',
    content: 'blue collar, boutique software, software development, hybrid app development, mobile app development, website development, local developers, IT consulting, vancouver, victoria, vancouver island, british columbia'
  });

  head.meta.push({
    name: 'description',
    content: 'Blue Collar Development is a boutique software development house located in Victoria, BC. Specializing in mobile (iOS/Android), hybrid and web app development, Blue Collar creates amazing applications using cutting edge technology to help you bring your concept to life.'
  });

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0'
  });

  head.link.push({ rel: 'canonical', href: 'https://www.bluecollardev.com' });

  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato&display=swap' });
  //head.script.push({ type: 'application/javascript', src: 'https://maps.googleapis.com/maps/api/gjs?key=AIzaSyBSDlMWErr_gwT5d5wze8oK9muKPuHLtKQ' });
  //head.script.push({ type: 'application/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js' });
  //head.script.push({ type: 'application/javascript', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js' });
  // Set default layout as a global component
  if (typeof window !== 'undefined') {
    const VueWaypoint = require('vue-waypoint');
    const VueGoogleMaps = require('vue2-google-maps');

    Vue.use(VueWaypoint.default);
    Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyBSDlMWErr_gwT5d5wze8oK9muKPuHLtKQ',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do sTo:
        // v: '3.26',
      },

      //// If you intend to programmatically custom event listener code
      //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
      //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
      //// you might need to turn this on.
      // autobindAllEvents: false,

      //// If you want to manually install components, e.g.
      //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
      //// Vue.component('GmapMarker', GmapMarker)
      //// then disable the following:
      // installComponents: true,
    });
  }

  Vue.component('Layout', DefaultLayout);
}
