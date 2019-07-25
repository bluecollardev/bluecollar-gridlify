/**
 * Used to display/hide mobile menu - usually triggered by clicking a hamburger.
 */
export default {
  data: () => ({ lastScroll: 0 }),
  methods: {
    displayMenu() {
      let body = document.getElementsByTagName('body')[0];

      (!body.classList.contains('display-menu')) ? body.classList.add('display-menu') : body.classList.remove('display-menu');
    },
    hideMenu() {
      let body = document.getElementsByTagName('body')[0];

      (body.classList.contains('display-menu')) ? body.classList.remove('display-menu') : body.classList.add('display-menu');
    },
    attachScrollListener() {
      this.lastScroll = 0;
      window.addEventListener('scroll', this.handleScroll.bind(this));
    },
    handleScroll() {
      if (!document.getElementById('loader')) {
        this.hideMenu();

        let header = document.getElementsByTagName('header')[0];

        if (Math.abs(this.lastScroll - window.scrollY) <= 5) return;

        (window.scrollY < this.lastScroll) ? header.style.top = '0': header.style.top = '-' + header.clientHeight + 'px';

        this.lastScroll = window.scrollY;
      }
    }
  }
}
