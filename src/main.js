import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import i18n from './i18n'

// Import global CSS
import '~/assets/css/main.scss'
import '~/assets/fonts/icomoon/style.css'

const app = createApp(App)

// Browser detection utility
const browserDetect = () => {
  if (typeof navigator === 'undefined') return {}
  const ua = navigator.userAgent
  return {
    isChrome: /Chrome/.test(ua) && /Google Inc/.test(navigator.vendor),
    isSafari: /Safari/.test(ua) && /Apple Computer/.test(navigator.vendor),
    isFirefox: /Firefox/.test(ua),
    isEdge: /Edg/.test(ua),
    isMobile: /Mobile|Android|iPhone/.test(ua)
  }
}

app.config.globalProperties.$browserDetect = browserDetect()

app.use(router)
app.use(i18n)
app.mount('#app')
