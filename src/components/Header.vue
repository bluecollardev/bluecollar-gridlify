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
          <li><a href="/#services" aria-label="Websites" @click="hideMenu()">Services</a></li>
          <li><a href="/#contact" aria-label="Enquire" @click="hideMenu()">Contact</a></li>
          <li><a href="/projects" aria-label="Portfolio" @click="hideMenu()">Portfolio</a></li>
        </ul>
        <div class="site-navbar-top d-flex">
          <a href="https://www.instagram.com/bluecollardev" class="d-flex align-items-center mr-4">
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
  :root {
    --cblue: #33587a;
    --ccherry: #720500;
    --cgrey : #3E3A37;
    --cwhite : #ffffff;
    --ccream : #FAFBFC;
    --cgrey_green: #435466;
    --clightgrey : #DAD9D7;

    --body_height_8: calc((100vh - 113px)/8);
    --body_height_4: calc((100vh - 113px)/4);
  }

  .icon-arrow {
    mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.929 284.929'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
  }
  i {
    vertical-align: middle;
    display: inline-block;
    background-repeat: no-repeat;
  }

  ul {padding: 0; margin: 0;}
  li {list-style: none;}

  //.wrap {max-width: 1024px; min-width: 320px;}
  .wrap {min-width: 320px; height: 100%;}

  header {
    height: 54px;
    display: flex;
    z-index: 200;
    padding: 0;
    /*background-color: var(--cwhite);*/
    position: fixed;
    width: 100%;
    top: 0;
    justify-content: center;
    /*box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);*/
    transition: 0.33s;
  }

  header.fixed {
    background-color: var(--cwhite);
    transition: 0.33s;
  }

  header .wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /*header img {
    width: 100px;
  }*/

  #menu * {
    /*font-family: serif;*/
    text-transform: uppercase !important;
    color: #5B7E9D !important;
  }

  #menu li i {
    background-color: #5B7E9D !important;
  }

  @media screen and (min-width: 40em) {
    header #menu, header #menu > ul {
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: flex-end;
    }

    header #menu > ul > li {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  @media screen and (min-width: 102em) {
    header .wrap {
      padding: 0 10% 0 11%;
    }

    header #menu > ul > li {
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  header #menu li {
    position: relative;
    user-select: none;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    i {margin-left: 0.5rem; width: 12px; height: 12px; background-color: var(--cgrey);}
    a {
      color: var(--cgrey);
      cursor: pointer;
      display: flex;
      white-space: nowrap;
      align-items: center;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.9rem;
      font-weight: normal;
      &:hover {
        text-decoration: none;
      }
    }
  }

  header .drop-menu {
    position: absolute;
    display: block;
    top: 100%;
    transform: scaleY(0);
    width: auto;
    transform-origin: top;
    background-color: var(--cwhite);
    transition: 0.25s;
    padding-bottom: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
    a {
      margin-left: 20px;
      display: block;
      transition: 0.45s;
      opacity: 0;
      margin-right: 20px;
      padding: 10px 0 0 0;
    }
  }

  header .drop-menu.display {
    transform: scaleY(1);
    a {
      opacity: 1;
    }
  }

  header #hamburger {
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    left: 3%;
    top: 30px;
    display: none;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 40em) {
    /*header {
      position: absolute !important;
    }*/

    header #hamburger {
      cursor: pointer;
      border-radius: 50%;
      position: absolute;
      left: 3%;
      top: 25px;
      display: none;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      z-index: 9999;
    }

    header .logo-wrapper {
      display: flex;
      height: 48px;
      flex: 1 1 auto;
      justify-content: center;
      align-items: center;
    }

    .site-navbar-top {
      display: none;
      padding-right: 20px;
    }

    .display-menu .site-navbar-top {
      margin-top: 15px;
      margin-bottom: 15px;
      display: flex;
    }

    .display-menu .site-menu {
      margin-top: 4rem;
    }
  }

  header #hamburger span {
    height: 3px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: var(--cblue);
    display: block;
    transition: 0.33s;
    &:nth-child(1) {width: 32px;}
    &:nth-child(2) {width: 32px;}
    &:nth-child(3) {width: 32px;}
  }
  .display-menu header #hamburger {
    span:nth-child(1) {transform: rotate(45deg) translate(8px, 8px); }
    span:nth-child(2) {transform: rotate(-45deg) ;}
    span:nth-child(3) {transform: rotate(45deg) translate(-8px, -8px);}
  }
  #loader {
    display: block;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 3;
    margin-left: -25px;
    margin-top: -25px;
    animation: spin 1s infinite linear;
    span {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      border-width: 0px 0px 10px 10px;
      border-style: solid;
      border-color: transparent;
      &:nth-child(0) {border-left-color: var(--cblue);}
      &:nth-child(1) {transform: rotate(-40deg); border-left-color: var(--cblue);}
      &:nth-child(2) {transform: rotate(-80deg); border-left-color: var(--cblue);}
      &:nth-child(3) {transform: rotate(-130deg); border-left-color: var(--cgrey_green);}
      &:nth-child(4) {transform: rotate(-170deg); border-left-color: var(--cgrey_green);}
      &:nth-child(5) {transform: rotate(-210deg); border-left-color: var(--cgrey_green);}
      &:nth-child(6) {transform: rotate(-250deg); border-left-color: var(--cgrey);}
      &:nth-child(7) {transform: rotate(-280deg); border-left-color: var(--cgrey);}
      &:nth-child(8) {transform: rotate(-320deg); border-left-color: var(--cgrey);}
      &:nth-child(9) {transform: rotate(-360deg); border-left-color: var(--cblue);}
    }
  }
  @keyframes spin { from {transform: rotate(0deg);} to {transform: rotate(-360deg);}}
  #overlay {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: var(--cgrey);
    opacity: 0.5;
  }
  @media screen and (max-width: 660px) {
    body {padding-top: 48px;}
    header .wrap {
      height: 48px;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      padding: 0;
    }

    header #hamburger {
      display: block;
    }
    header #menu {
      width: 100%;
      display: block;
      /*height: 0;*/
      transform-origin: 50% 0;
      transition: 0.33s ease;
      flex-direction: column;
    }

    .display-menu header #menu {
      height: 100vh;
      /*height: calc(100vh - 48px);*/
      background: white;
      position: absolute;
      top: 0; /* Required for Safari/iOS */
      z-index: -1;
      li {
        height: var(--body_height_8);
        border-bottom: 1px solid var(--clightgrey);
        transition: 0.25s ease;
        opacity: 1;
        display: block;
        a {
        }
      }
    }
    header #menu li {
      height: 0;
      opacity: 0;
      margin-left: 0;
      margin-right: 0;
      transition: 0.25s ease;
      a {
        left: 0;
        line-height: var(--body_height_8);
        padding-left: 20px;
        border: none;
        height: 100%;
        width: 100%;
        display: flex;

        &:hover {
          color: var(--cwhite) !important;
          background-color: var(--cblue);
          i {background-color: var(--cwhite);}
        }
      }
      i {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--cgrey);
      }
    }
    header .drop-menu {
      top: var(--body_height_8);
      box-shadow: none;
      left: 0;
      padding-bottom: 0;
      width: 100%;
      a {
        width: 100%;
        padding: 0 !important;
        padding-left: 40px !important;
        margin: 0;
        border-bottom: 1px solid var(--clightgrey) !important;
      }
    }
  }
  @media screen
  and(max-width: 660px)
  and(max-height: 500px){

    .display-menu header  {
      max-height: 100vh;
      overflow-y: scroll;
    }
    .display-menu header #menu {
      li {
        height: var(--body_height_4);
      }
    }
    header #menu li {
      a {
        line-height: var(--body_height_4);
      }
    }
    header .drop-menu {
      top: 67px;
    }
  }
  i {
    vertical-align: middle;
    display: inline-block;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 660px) {
    header .drop-menu {
      box-shadow: none;
      left: 0;
      padding-bottom: 0;
      width: 100%;
    }

    #menu {
      flex: 1 1 100%;
      justify-content: space-around;
      max-width: 100%;
      padding-top: 0rem;
      padding-bottom: 0rem;
    }
  }

  .site-navbar-top {
    text-transform: uppercase;
    justify-content: flex-end;
  }

  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    font-size: 1.5rem;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
