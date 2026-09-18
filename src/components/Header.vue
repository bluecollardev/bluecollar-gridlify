<template>
  <header class="fixed">
    <div class="wrap">
      <div id="hamburger" @click="handleMenuDisplay()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="/" aria-label="Home Page" class="logo-wrapper flex flex-center xs-flex-justify-center">
        <img class="logo" src="/images/blue-collar-dev.png" alt=""/>
      </a>
      <nav id="menu" class="site-navbar align-items-center justify-content-center">
        <ul class="site-menu mb-0" v-if="isMobile ? menuDisplayed : true">
          <!-- Home hidden for now; the logo still links to / -->
          <li v-if="false"><a href="/" aria-label="Our Team" @click="hideMenu()">{{ $t('nav.home') }}</a></li>
          <li><a href="/#services" aria-label="Services" @click="hideMenu()">{{ $t('nav.whatWeBuild') }}</a></li>
          <li><a href="/company" aria-label="Websites" @click="hideMenu()">{{ $t('nav.ourPeople') }}</a></li>
          <li><a href="/case-studies" aria-label="Case Studies"
                 @click.prevent="viewCaseStudies()">{{ $t('nav.caseStudies') }}</a></li>
          <!-- The products sit in the home page's Open Source section; on mobile the
               menu is the only way to reach them without scrolling for it -->
          <li v-if="isMobile" v-for="product in products" :key="product.slug" class="product-menu-item">
            <a :href="`/products/${product.slug}`" :aria-label="product.name"
               @click.prevent="viewProduct(product.slug)">{{ product.name }}</a>
          </li>
          <li><a href="/#contact" aria-label="Enquire" @click="hideMenu()">{{ $t('nav.getInTouch') }}</a></li>
          <li style="height: auto" class="language-switcher-menu-item">
            <language-switcher/>
          </li>
          <li style="height: auto" class="soundtrack-controls-menu-item pad-bottom">
            <a style="flex-direction: column; align-items: flex-start">
              <span style="display: block">Soundtrack Controls</span>
            </a>
            <slot name="audioControls"></slot>
          </li>
          <li style="height: auto" class="social-links-menu-item">
            <a style="flex-direction: column; align-items: flex-start">
              <span style="display: block">Social Media</span>
            </a>
          </li>
        </ul>
        <div class="site-navbar-top d-flex" v-if="isMobile ? menuDisplayed : true">
          <a href="https://github.com/bluecollardev" target="_blank" rel="noopener"
             aria-label="GitHub" class="d-flex align-items-center mr-4 ml-4">
            <span class="icon-github mr-2"></span>
          </a>
          <a href="https://www.linkedin.com/in/lucaslopatka" target="_blank" rel="noopener"
             aria-label="Link to LinkedIn" class="d-flex align-items-center mr-4">
            <span class="icon-linkedin mr-2"></span>
            <!-- TODO: Implement tooltip -->
          </a>
          <!-- Facebook disabled for now
          <a href="https://www.facebook.com/bluecollardev" class="d-flex align-items-center mr-4">
            <span class="icon-facebook mr-2"></span>
          </a>
          -->
          <a :href="`sms:${phoneE164}`" aria-label="Text us" class="d-flex align-items-center mr-4">
            <span class="icon-chat_bubble mr-2"></span>
          </a>
          <a href="#" class="d-flex align-items-center mr-4 header-phone" :aria-expanded="String(phoneDisplayed)"
             aria-label="Show phone number" @click.prevent="phoneDisplayed = !phoneDisplayed">
            <span class="icon-phone mr-2"></span>
          </a>
          <a v-if="phoneDisplayed" :href="`tel:${phoneE164}`" class="d-flex align-items-center mr-4 header-phone__number">
            {{ phoneNumber }}
          </a>
          <a href="mailto:lucas@bluecollardev.com" aria-label="Email us" class="d-flex align-items-center">
            <span class="icon-envelope mr-2"></span>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import ProductsData from '~/data/Products.yml'
import MenuMixin from '~/core/mixins/MenuMixin'
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

export default {
  components: {
    LanguageSwitcher
  },
  mixins: [
    MenuMixin
  ],
  data() {
    return {
      menuDisplayed: false,
      phoneDisplayed: false,
      windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1024
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 640
    },
    products() {
      return ProductsData.items
    },
    phoneNumber() {
      return this.$t('contact.phone')
    },
    phoneE164() {
      return `+${String(this.phoneNumber).replace(/\D/g, '')}`
    }
  },
  methods: {
    /**
     * Case Studies live in a modal on the home page; /case-studies renders the
     * home page and opens it, so the link works from any page and can be shared.
     */
    viewProduct(slug) {
      this.hideMenu()
      this.$router.push(`/products/${slug}`).catch(() => {})
    },
    viewCaseStudies() {
      this.hideMenu()
      this.$router.push('/case-studies').catch(() => {})
    },
    handleMenuDisplay() {
      this.displayMenu()
      this.$nextTick(() => {
        if (typeof window !== 'undefined') {
          const body = document.getElementsByTagName('body')[0]
          this.menuDisplayed = body.classList.contains('display-menu')
        }
      })
    },
    hideMenu() {
      const body = document.getElementsByTagName('body')[0]
      if (body.classList.contains('display-menu')) {
        body.classList.remove('display-menu')
      }
      this.menuDisplayed = false
    },
    handleResize() {
      if (typeof window !== 'undefined') {
        this.windowWidth = window.innerWidth
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize)
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize)
    }
  }
}
</script>

<style lang="scss">
/* The phone icon reveals the number, which is itself a tel: link */
.header-phone__number {
  white-space: nowrap;
  text-decoration: underline;
}

/* The d-flex/align-items-center classes on these anchors are Bootstrap names the
   site's CSS never defined, so the anchors stayed display:inline and the 24px
   icons baseline-aligned against the 16px phone number, which read low. */
.site-navbar-top {
  display: flex;
  align-items: center;
}

.site-navbar-top > a {
  display: flex;
  align-items: center;
  line-height: 1;
}

.site-navbar-top [class^='icon-'],
.site-navbar-top [class*=' icon-'] {
  display: inline-flex;
  align-items: center;
  line-height: 1;
}

@media screen and (max-width: 40em) {
  /* Products read as a group under the main links */
  .product-menu-item a {
    padding-left: 1.5rem;
    font-size: 0.95rem;
    opacity: 0.85;
  }

  .site-menu {
    .controls {
      button {
        text-shadow: none;
      }
    }
  }

  .social-links-menu-item {
    border-bottom: none !important;
  }

  .site-navbar-top {
    justify-content: flex-start !important;
  }
}

@media screen and (min-width: 40em) {
  .social-links-menu-item,
  .soundtrack-controls-menu-item {
    display: none !important;
  }
}
</style>
