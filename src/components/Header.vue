<template>
  <header class="fixed">
    <div class="wrap">
      <div id="hamburger" v-on:click="displayMenu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="/" aria-label="Home Page" class="logo-wrapper flex flex-center xs-flex-justify-center">
        <img class="logo" src="/images/blue-collar-dev.png" alt="" />
      </a>
      <nav id="menu">
        <ul>
          <li class="drop"><a href="/services" aria-label="Websites" v-on:mouseover="displayDropMenu()">Services  <i class="icon-arrow"></i></a>
          <ul class="drop-menu" v-on:mouseleave="hideDropMenu()">
            <li><a href="/services-web" aria-label="Websites" v-on:click="hideDropMenu()">Websites</a></li>
            <li><a href="/services-apps" aria-label="Hybrid Apps and PWAs" v-on:click="hideDropMenu()">Hybrid Apps + PWAs</a></li>
            <li><a href="/services-software" aria-label="Custom Software" v-on:click="hideDropMenu()">Custom Software</a></li>
            <li><a href="/pricing" aria-label="Pricing" v-on:click="hideDropMenu()">Pricing</a></li>
          </ul>
        </li>
        <!--<li class="drop"><a v-on:mouseover="displayDropMenu()">Marketing  <i class="icon-arrow"></i></a>
          <ul class="drop-menu" v-on:mouseleave="hideDropMenu()">
            <li><a href="/services-digital-marketing" v-on:click="hideDropMenu()">Targeted Ads</a></li>
            <li><a href="/services-digital-marketing" v-on:click="hideDropMenu()">Social Media Ads</a></li>
            <li><a href="/services-digital-marketing" v-on:click="hideDropMenu()">Social Media Concierge</a></li>
            <li><a href="/pricing" v-on:click="hideDropMenu()">Pricing</a></li>
          </ul>
        </li>-->
        <li class="drop"><a href="/company" aria-label="Team" v-on:mouseover="displayDropMenu()">Team  <i class="icon-arrow"></i></a>
          <ul class="drop-menu" v-on:mouseleave="hideDropMenu()">
            <li><a href="/" aria-label="Our Process" v-on:click="hideDropMenu()">Our Process</a></li>
            <li><a href="/" aria-label="Junior Dev Program" v-on:click="hideDropMenu()">Junior Dev Program</a></li>
          </ul>
        </li>
        <li><a href="/projects" aria-label="Projects" v-on:click="hideDropMenu()">Projects</a></li>
        <li><a href="/contact" aria-label="Contact" v-on:click="hideDropMenu()">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    mounted() {
      const that = this;

      window.addEventListener('resize', function(event) {
        that.hideMenu();
        document.getElementsByTagName('body')[0].classList.remove('display-menu');
      });

      let lastScroll = 0;
      window.onscroll = function() {
        /*if (!document.getElementById('loader')) {
          that.hideMenu();

          let header = document.getElementsByTagName('header')[0];

          if (Math.abs(lastScroll - this.scrollY) <= 5) return;

          (this.scrollY < lastScroll) ? header.style.top = '0': header.style.top = '-' + header.clientHeight + 'px';

          lastScroll = this.scrollY;
        }*/
      }
    },
    methods: {
      displayMenu() {
        let body = document.getElementsByTagName('body')[0];

        (!body.classList.contains('display-menu')) ? body.classList.add('display-menu') : body.classList.remove('display-menu');
      },
      hideMenu() {
        let body = document.getElementsByTagName('body')[0];

        (body.classList.contains('display-menu')) ? body.classList.remove('display-menu') : body.classList.add('display-menu');
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
        let lis = document.getElementById('menu').getElementsByTagName('li');
        Array.from(lis).forEach(function(e) {
          e.style.marginTop = 0;
        });

        let dropMenus = document.getElementsByClassName('drop-menu');

        Array.from(dropMenus).forEach(function(e) {
          e.classList.remove('display');
        });

        this.hideMenu();
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
  .wrap {min-width: 320px;}

  header {
    height: 48px;
    display: flex;
    z-index: 5;
    padding: 0;
    background-color: var(--cwhite);
    /*position: fixed;*/
    width: 100%;
    top: 0;
    justify-content: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    transition: 0.33s;
  }
  header .wrap {
    padding: 0 10% 0 11%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /*header img {
    width: 100px;
  }*/
  @media screen and (min-width: 40em) {
    header #menu, header #menu > ul {
      display: flex;
      flex-direction: row;
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
  @media screen and (max-width: 40em) {
    header #hamburger {
      cursor: pointer;
      border-radius: 50%;
      position: absolute;
      left: 3%;
      top: 25px;
      display: none;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    header .logo-wrapper {
      display: flex;
      height: 48px;
      flex: 1 1 auto;
      justify-content: center;
      align-items: center;
    }
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
      height: 0;
      transform-origin: 50% 0;
      transition: 0.33s ease;
      flex-direction: column;
    }
    .display-menu header #menu {
      height: calc(100vh - 64px);
      position: absolute;
      top: 48px;
      background: white;
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
      //top: var(--body_height_8);
      top: 200%;
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

</style>
