<template>
  <header class="fixed">
    <div class="wrap">
      <div id="hamburger" @click="handleMenuDisplay()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="/" aria-label="Home Page" class="logo-wrapper flex flex-center xs-flex-justify-center">
        <img class="logo" src="/images/blue-collar-dev.png" alt="" />
      </a>
      <nav id="menu" class="site-navbar align-items-center justify-content-center">
        <ul class="site-menu mb-0">
          <li><a href="/" aria-label="Our Team" @click="hideMenu()">Home</a></li>
          <li><a href="/#services" aria-label="Services" @click="hideMenu()">What We Build</a></li>
          <!--<li><a href="/company" aria-label="Websites" @click="hideMenu()">Our People</a></li>-->
          <li><a href="/#contact" aria-label="Enquire" @click="hideMenu()">Get In Touch</a></li>
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
        <div class="site-navbar-top d-flex">
          <a href="https://www.instagram.com/bluecollardev" class="d-flex align-items-center mr-4 ml-4">
            <span class="icon-instagram mr-2"></span>
            <!-- TODO: Implement tooltip -->
            <!--<span class="d-none d-md-inline-block">@bluecollardev</span>-->
          </a>
          <a href="https://www.facebook.com/bluecollardev" class="d-flex align-items-center mr-4">
            <span class="icon-facebook mr-2"></span>
            <!-- TODO: Implement tooltip -->
            <!--<span class="d-none d-md-inline-block">bluecollardev</span>-->
          </a>
          <a href="#" class="d-flex align-items-center mr-4">
            <span class="icon-phone mr-2"></span>
            <!-- TODO: Implement tooltip -->
            <!--<span class="d-none d-lg-inline-block">(250) 532-0083</span>-->
          </a>
          <a href="#" class="d-flex align-items-center">
            <span class="icon-envelope mr-2"></span>
            <!-- TODO: Implement tooltip -->
            <!--<span class="d-none d-lg-inline-block">info@bluecollardev.com</span>-->
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  import MenuMixin from '~/core/mixins/MenuMixin';

  export default {
    mixins: [
      MenuMixin
    ],
    methods: {
      handleMenuDisplay() {
        this.displayMenu();
      }
    }
  }
</script>

<style lang="scss">
  @media screen and (max-width: 40em) {
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
