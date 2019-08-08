<template>
  <main class="bg-evening-blue">
    <!--<intro></intro>-->
    <div class="container relative">
      <div class="notifications" v-if="displayNotifications">
        <img class="under-construction xs-hide" src="/images/under-construction.svg" alt="" />
        <span class="notification">
          <span><span class="disclaimer-icon">ⓘ</span> <strong>Disclaimer!</strong> This site is currently under construction and is intended as a starting point for both Blue Collar Development, as well as the personal portfolio of Lucas Lopatka. Projects may not be as described.</span>
          <button class="hide-notification" aria-label="Hide notification" v-on:click="hideNotifications()">&times;</button>
        </span>
      </div>
      <slot />
    </div>
  </main>
</template>

<script>
  import Intro from '~/components/Intro.vue';

  export default {
    components: {
      Intro
    },
    data() {
      return {
        displayNotifications: false,
        lastScroll: 0
      }
    },
    methods: {
      hideNotifications() {
        this.displayNotifications = false
      },
      attachScrollListener() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
      },
      handleScroll() {
        if (!document.getElementById('loader')) {
          if (Math.abs(this.lastScroll - window.scrollY) <= 5) return;

          // Strip the hash
          this.removeHash();

          this.lastScroll = window.scrollY;
        }
      },
      removeHash () {
        if (typeof window !== 'undefined') window.location.hash = '';
      }
    },
    mounted() {
      this.attachScrollListener();
    }
  }
</script>
