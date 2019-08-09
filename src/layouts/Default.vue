<template>
  <main class="bg-black">
    <!--<intro></intro>-->
    <div :id="this.id" class="container relative">
      <div class="notifications" v-if="displayNotifications">
        <img class="under-construction xs-hide" src="/images/under-construction.svg" alt="" />
        <span class="notification">
          <span><span class="disclaimer-icon">ⓘ</span> <strong>Disclaimer!</strong> This site is currently under construction and is intended as a starting point for both Blue Collar Development, as well as the personal portfolio of Lucas Lopatka. Projects may not be as described.</span>
          <button class="hide-notification" aria-label="Hide notification" v-on:click="hideNotifications()">&times;</button>
        </span>
      </div>
      <Header/>
      <audio-controls
        style="position: fixed; bottom: 80px; right: 140px; z-index: 4000; opacity: 0.15"
        :onPreviousClicked="this.onPreviousClicked.bind(this, this.soundtrack)"
        :onNextClicked="this.onNextClicked.bind(this, this.soundtrack)"
        :onPlayPauseClicked="this.onSoundtrackPlay.bind(this)"
        :onShuffleClicked="this.onShuffleClicked.bind(this, this.soundtrack)"
        :onRandomClicked="this.onRandomClicked.bind(this, this.soundtrack)"
        :onVolumeChanged="this.onVolumeChanged.bind(this, this.soundtrack)"
      />
      <slot />
      <Footer/>
    </div>
  </main>
</template>

<script>
  // Import intro
  import Intro from '~/components/Intro.vue';
  // Import core components
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  import Contact from '~/components/Contact.vue';
  import Blog from '~/components/Blog.vue';

  // Import audio controls and mixin
  import AudioControls from '~/core/components/audio/AudioControls.vue';
  import AudioControlsMixin from '~/core/components/audio/AudioControlsMixin';

  export default {
    props: {
      id: {
        type: String,
        default: 'page-content'
      }
    },
    components: {
      // Inject components
      Header,
      Blog,
      Contact,
      Footer,
      Intro,
      // Import audio controls
      AudioControls,
    },
    mixins: [
      // Import audio controls mixin
      AudioControlsMixin,
    ],
    data() {
      return {
        displayNotifications: false,
        lastScroll: 0,
        soundtrack: null
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
      },
      onSoundtrackPlay() {
        this.initSoundtrack();
        this.onPlayPauseClicked(this.soundtrack);
      },
      initSoundtrack() {
        if (!(this.soundtrack instanceof Audio)) {
          this.soundtrack = new Audio();
          this.soundtrack.volume = 0.5;

          if (Math.random() > 0.5) {
            this.soundtrack.src = '/audio/soundtrack_to_war.mp3';
          } else {
            this.soundtrack.src = '/audio/bro_hymn.mp3';
          }

          this.soundtrack.loop = true;

          if (this.isAutoplayActive()) this.soundtrack.play();
        }
      },
      killSoundtrack() {
        if (this.soundtrack instanceof Audio) {
          this.soundtrack.pause();
          this.soundtrack = null;
        }
      }
    },
    mounted() {
      if (typeof window !== 'undefined') {
        this.attachScrollListener();
      }
    },
    beforeDestroy() {
      if (typeof window !== 'undefined') {
        this.killSoundtrack();
      }
    }
  }
</script>

<style lang="scss">
  footer path.ampstart-icon {
    fill: white;
  }
</style>
