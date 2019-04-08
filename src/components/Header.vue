<template>
  <!--<header>
    <ul>
      <li>
        <a href="/#work">Work</a>
      </li>
      <li>
        <a href="/#about">About</a>
      </li>
      <li class="Header__Profile__Image">
        <g-link to="/">
          <g-image src="~/assets//images/gridsome.png"/>
        </g-link>
      </li>
      <li style="text-align: right">
        <a href="/#blog">Blogs</a>
      </li>
      <li style="text-align: right">
        <a href="/#contact">Contact</a>
      </li>
    </ul>
  </header>-->
  <!--<header class="ampstart-headerbar fixed flex sm-flex-justify-start items-center top-0 left-0 right-0">
    <div role="button" on="tap:header-sidebar.toggle" tabindex="0" class="ampstart-navbar-trigger pr2">☰</div>
    <a href="/" class="flex-auto flex flex-center xs-flex-justify-center">
      <img class="logo" src="/images/firebrand-logo.png" />
    </a>
    <nav class="space-left ampstart-headerbar-nav ampstart-nav flex flex-center">
      <ul class="list-reset center m0 p0 flex flex-auto nowrap">
        <li class="ampstart-nav-item display-none">
          <a href="/" class="text-decoration-none block">Home</a>
        </li>
        <li class="ampstart-nav-item ampstart-nav-dropdown relative">
          <a href="/services-web" class="text-decoration-none block">Services</a>
        </li>
        <li class="ampstart-nav-item ampstart-nav-dropdown relative">
          <a href="/pricing" class="text-decoration-none block">Pricing</a>
        </li>
        <li class="ampstart-nav-item ampstart-nav-dropdown relative">
          <a href="/company" class="text-decoration-none block">Company</a>
        </li>
      </ul>
      <ul class="list-reset center m0 p0 flex flex-auto flex-justify-end nowrap space-right">
        <li class="ampstart-nav-item highlighted contact-us-nav-item">
          <a href="/contact" class="text-decoration-none block">Contact Us</a>
        </li>
      </ul>
    </nav>
  </header>-->
  <header class="fixed">
    <div class="wrap">
      <div id="hamburger" v-on:click="displayMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="/" class="flex flex-center xs-flex-justify-center">
        <img class="logo" src="/images/firebrand-logo.png" />
      </a>
      <nav id="menu">
        <li><a href="/company">Company</a></li>
        <li class="drop"><a v-on:mouseover="displayDropMenu()">Services  <i class="icon-arrow"></i></a>
          <ul class="drop-menu" v-on:mouseleave="hideDropMenu()">
            <a href="/services-web">Websites + Landing Pages</a>
            <a href="/services-digital-marketing">Digital Marketing</a>
            <a href="/services-software">Custom Software</a>
          </ul>
        </li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a>Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </nav>
    </div>
  </header>
</template>

<script>
  function closeAllMenus() {
    var lis = document.getElementById('menu').getElementsByTagName('li');
    Array.from(lis).forEach(function(e) {
      e.style.marginTop = 0;
    });

    let dropMenus = document.getElementsByClassName('drop-menu');

    Array.from(dropMenus).forEach(function(e) {
      e.classList.remove('display');
    });
  }

  export default {
    mounted() {
      window.addEventListener("resize", function(event) {
        closeAllMenus();
        document.getElementsByTagName("body")[0].classList.remove("display-menu");
      });
      let lastScroll = 0;
      window.onscroll = function() {
        if (!document.getElementById("loader")) {
          closeAllMenus();

          let header = document.getElementsByTagName("header")[0];

          if (Math.abs(lastScroll - this.scrollY) <= 5) return;

          (this.scrollY < lastScroll) ? header.style.top = "0": header.style.top = "-" + header.clientHeight + "px";

          lastScroll = this.scrollY;
        }
      }
    },
    methods: {
      displayMenu() {
        let body = document.getElementsByTagName('body')[0];

        (!body.classList.contains('display-menu')) ? body.classList.add('display-menu'): body.classList.remove('display-menu');
      },
      displayDropMenu() {
        let dropMenu = event.target.parentElement.getElementsByClassName('drop-menu')[0];
        let dropMenus = document.getElementsByClassName('drop-menu');

        Array.from(dropMenus).forEach(function(e) {
          if (e != dropMenu) {
            e.classList.remove('display');
          }
        });

        let lis = document.getElementById('menu').getElementsByTagName('li');
        Array.from(lis).forEach(function(e) {
          e.style.marginTop = 0;
        });

        (!dropMenu.classList.contains('display')) ? dropMenu.classList.add('display'): dropMenu.classList.remove('display');

        if (window.innerWidth < 660 && dropMenu.classList.contains('display')) {
          event.target.parentElement.nextSibling.nextSibling.style.marginTop = dropMenu.clientHeight + 'px';
        }
      },
      hideDropMenu() {
        closeAllMenus();
      },
      loaded: function() {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

        (this.load) ? this.load = false: this.load = true;
      }
    }
  }
</script>

<style lang="scss">
  :root {
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
  .wrap {min-width: 320px;}

  header {
    display: flex;
    z-index: 1;
    padding: 10px 0;
    background-color: var(--cwhite);
    position: fixed;
    width: 100%;
    top: 0;
    justify-content: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    transition: 0.33s;
  }
  header .wrap {
    padding: 0 10% 0 14%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  /*header img {
    width: 100px;
  }*/
  header #menu {
    display: flex;
    flex-direction: row;
  }
  header #menu li {
    position: relative;
    user-select: none;
    margin-left: 20px;
    i {width: 12px; height: 12px; background-color: var(--cgrey);}
    a {
      color: var(--cgrey);
      cursor: pointer;
      font-size: 1.15em;
      border: none;
      border-bottom: 2px solid var(--cwhite);
      transition: 0.15s;
      background: none;
      text-decoration: none;
      white-space: nowrap;
      &:hover {
        text-decoration: none;
      }
    }
  }
  header .drop-menu {
    position: absolute;
    display: block;
    top: 149%;
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
  header #hamburger span {
    height: 2px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: var(--cgrey);
    display: block;
    transition: 0.33s;
    &:nth-child(1) {width: 12px;}
    &:nth-child(2) {width: 24px;}
    &:nth-child(3) {width: 12px;}
  }
  .display-menu header #hamburger {
    span:nth-child(1) {transform: rotate(45deg) translate(2px, 1px); }
    span:nth-child(2) {transform: rotate(-45deg) ;}
    span:nth-child(3) {transform: rotate(45deg) translate(6px, -9px);}
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
      &:nth-child(0) {border-left-color: var(--ccherry);}
      &:nth-child(1) {transform: rotate(-40deg); border-left-color: var(--ccherry);}
      &:nth-child(2) {transform: rotate(-80deg); border-left-color: var(--ccherry);}
      &:nth-child(3) {transform: rotate(-130deg); border-left-color: var(--cgrey_green);}
      &:nth-child(4) {transform: rotate(-170deg); border-left-color: var(--cgrey_green);}
      &:nth-child(5) {transform: rotate(-210deg); border-left-color: var(--cgrey_green);}
      &:nth-child(6) {transform: rotate(-250deg); border-left-color: var(--cgrey);}
      &:nth-child(7) {transform: rotate(-280deg); border-left-color: var(--cgrey);}
      &:nth-child(8) {transform: rotate(-320deg); border-left-color: var(--cgrey);}
      &:nth-child(9) {transform: rotate(-360deg); border-left-color: var(--ccherry);}
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
    body {padding-top: 70px;}
    header .wrap {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0;
    }
    header img {width: 50px;}
    header #hamburger {
      display: block;
    }
    header #menu {
      width: 100%;
      display: block;
      height: 0;
      transform-origin: 50% 0;
      transition: 0.33s ease;
      flex-direction: column;
    }
    .display-menu header #menu {
      height: calc(100vh - 64px);
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
      transition: 0.25s ease;
      a {
        left: 0;
        line-height: var(--body_height_8);
        padding-left: 20px;
        border: none;
        height: 100%;
        width: 100%;
        display: block;
        &:hover {
          color: var(--cwhite);
          background-color: var(--ccherry);
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
      //top: var(--body_height_8);
      top: 135px;
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
      top: var(--body_height_4);
    }
  }
  i {
    vertical-align: middle;
    display: inline-block;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 660px) {
    header .drop-menu {
      top: 8rem;
      box-shadow: none;
      left: 0;
      padding-bottom: 0;
      width: 100%;
    }

    #menu {
      flex: 1 1 100%;
      justify-content: space-around;
      max-width: 100%;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

</style>
