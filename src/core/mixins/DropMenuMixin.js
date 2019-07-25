/**
 * Used for drop menus.
 *
 * Sample usage:
 *
 * <nav id="menu" class="site-navbar align-items-center justify-content-center">
    <ul class="site-menu mb-0">
      <li><a href="/#services" aria-label="Websites" v-on:mouseover="displayDropMenu()">Services  <i class="icon-arrow"></i></a>
        <ul class="drop-menu" v-on:mouseleave="hideDropMenu()">
          <li><a href="/services-apps" aria-label="Hybrid Apps and PWAs" @click="hideDropMenu()">Hybrid Apps + PWAs</a></li>
          <li><a href="/services-software" aria-label="Custom Software" @click="hideDropMenu()">Custom Software</a></li>
          <li><a href="/services-web" aria-label="Websites" @click="hideDropMenu()">Websites</a></li>
          <li><a href="/pricing" aria-label="Pricing" @click="hideDropMenu()">Pricing</a></li>
        </ul>
      </li>
      <li class="drop"><a v-on:mouseover="displayDropMenu()">Marketing  <i class="icon-arrow"></i></a>
        <ul class="drop-menu" v-on:mouseleave="hideDropMenu()">
          <li><a href="/services-digital-marketing" @click="hideDropMenu()">Targeted Ads</a></li>
          <li><a href="/services-digital-marketing" @click="hideDropMenu()">Social Media Ads</a></li>
          <li><a href="/services-digital-marketing" @click="hideDropMenu()">Social Media Concierge</a></li>
          <li><a href="/pricing" @click="hideDropMenu()">Pricing</a></li>
        </ul>
      </li>
      <li class="drop"><a href="/company" aria-label="Team" v-on:mouseover="displayDropMenu()">Team  <i class="icon-arrow"></i></a>
        <ul class="drop-menu" v-on:mouseleave="hideDropMenu()">
          <li><a href="/consulting" aria-label="Consulting" @click="hideDropMenu()">Consulting Services</a></li>
          <li><a href="/junior-dev-program" aria-label="Junior Dev Program" @click="hideDropMenu()">Junior Dev Program</a></li>
        </ul>
      </li>
      <li><a href="/#contact" aria-label="Enquire" @click="hideDropMenu()">Contact</a></li>
      <li><a href="/projects" aria-label="Portfolio" @click="hideDropMenu()">Portfolio</a></li>
    </ul>
    <!-- Social media, contact, etc. -->
    <div class="site-navbar-top d-flex">
      <a href="https://www.instagram.com/myusername" class="d-flex align-items-center mr-4">
        <span class="icon-instagram mr-2"></span>
      </a>
      <a href="https://www.facebook.com/myusername" class="d-flex align-items-center mr-4">
        <span class="icon-facebook mr-2"></span>
      </a>
      <a href="#" class="d-flex align-items-center mr-4">
        <span class="icon-phone mr-2"></span>
      </a>
      <a href="#" class="d-flex align-items-center">
        <span class="icon-envelope mr-2"></span>
      </a>
    </div>
  </nav>
 */
export default {
  methods: {
    displayDropMenu() {
      let dropMenu = event.target.parentElement.getElementsByClassName('drop-menu')[0];
      let dropMenus = document.getElementsByClassName('drop-menu');
      // Lucas is correct to use forEach here. He has shown Sean a good reason to use it, even if it's a stupid reason because fuck the DOM
      Array.from(dropMenus).forEach((e) => {
        if (e != dropMenu) e.classList.remove('display');
      });

      let lis = document.getElementById('menu').getElementsByTagName('li');
      Array.from(lis).forEach((e) => {
        e.style.marginTop = 0;
      });

      (dropMenu && !dropMenu.classList.contains('display')) ? dropMenu.classList.add('display'): dropMenu.classList.remove('display');

      if (window.innerWidth < 660 && dropMenu.classList.contains('display')) {
        //event.target.parentElement.nextSibling.nextSibling.style.marginTop = dropMenu.clientHeight + 'px';
        event.target.parentElement.nextSibling.style.marginTop = dropMenu.clientHeight + 'px';
      }
    },
    hideDropMenu() {
      let lis = document.getElementById('menu').getElementsByTagName('li');
      Array.from(lis).forEach((e) => {
        e.style.marginTop = 0;
      });

      let dropMenus = document.getElementsByClassName('drop-menu');

      Array.from(dropMenus).forEach((e) => {
        e.classList.remove('display');
      });

      this.hideMenu();
    },
  }
}
