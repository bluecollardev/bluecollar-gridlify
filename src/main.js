// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/css/main.scss';
import '~/assets/fonts/icomoon/style.css';

//import VueWaypoint from 'vue-waypoint'
import * as VueGoogleMaps from 'vue2-google-maps';

export default function (Vue, { head }) {
  //head.link.push({ rel: 'stylesheet', href: 'https://unpkg.com/ace-css/css/ace.min.css' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato&display=swap' });
  //head.script.push({ type: 'application/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBSDlMWErr_gwT5d5wze8oK9muKPuHLtKQ' });
  //head.script.push({ type: 'application/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js' });
  //head.script.push({ type: 'application/javascript', src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js' });
  // Set default layout as a global component
  //Vue.use(VueWaypoint);
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBSDlMWErr_gwT5d5wze8oK9muKPuHLtKQ',
      libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)

      //// If you want to set the version, you can do so:
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

  Vue.component('Layout', DefaultLayout);
}
