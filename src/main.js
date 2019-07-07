// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/css/main.scss';
import '~/assets/fonts/icomoon/style.css';

export default function (Vue, { head }) {
  //head.link.push({ rel: 'stylesheet', href: 'https://unpkg.com/ace-css/css/ace.min.css' });
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
