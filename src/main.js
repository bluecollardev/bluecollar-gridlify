import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/main.scss'

export default function (Vue, { head }) {
  head.style.push({ rel: 'stylesheet', href: 'https://unpkg.com/ace-css/css/ace.min.css' })
  Vue.component('Layout', DefaultLayout)
}
