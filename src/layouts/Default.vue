<template>
  <main class="bg-bc-blue">
    <div :id="this.id"
         :class="`page-container container relative ${isSafari ? 'is-safari' : isChrome ? 'is-chrome' : ''}`">
      <div class="notifications" v-if="displayNotifications">
        <img class="under-construction xs-hide" src="/images/under-construction.svg" alt=""/>
        <span class="notification">
          <span><span class="disclaimer-icon">ⓘ</span> <strong>Disclaimer!</strong> This site is currently under construction and is intended as a starting point for both Blue Collar Development, as well as the personal portfolio of Lucas Lopatka. Projects may not be as described.</span>
          <button class="hide-notification" aria-label="Hide notification"
                  v-on:click="hideNotifications()">&times;</button>
        </span>
      </div>
      <Header>
        <template v-slot:audioControls>
          <audio-controls class="nav-audio-controls ml-2" style="height: 50px; width: 100%"></audio-controls>
        </template>
      </Header>
      <slot/>
      <Footer/>
      <ChatBubble @open-chat="openChatModal"/>
      <ChatModal ref="chatModal"
                 :whatsappNumber="whatsappNumber"
                 :lineId="lineId"
                 :phoneNumber="phoneNumber"
                 :intergramId="intergramId"/>
    </div>
  </main>
</template>

<script>
// Import intro
import Intro from '~/components/Intro.vue'
// Import core components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Contact from '~/components/Contact.vue'
import Blog from '~/components/Blog.vue'
import ChatBubble from '~/components/ChatBubble.vue'
import ChatModal from '~/components/ChatModal.vue'

// Import audio controls and mixin
import AudioControls from '~/core/components/audio/AudioControls.vue'
import AudioControlsMixin from '~/core/components/audio/AudioControlsMixin'

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
    ChatBubble,
    ChatModal,
    // Import audio controls
    AudioControls,
  },
  mixins: [
    // Import audio controls mixin
    AudioControlsMixin,
  ],
  data() {
    return {
      isSafari: null,
      isChrome: null,
      displayNotifications: false,
      lastScroll: 0,
      soundtrack: null,
      whatsappNumber: '66812345678',
      lineId: 'lucas.lopatka',
      phoneNumber: '+66 81 234 5678',
      intergramId: ''
    }
  },
  methods: {
    openChatModal() {
      this.$refs.chatModal.viewDetail()
    },
    hideNotifications() {
      this.displayNotifications = false
    },
    attachScrollListener() {
    },
    /**
     * TODO: This is janky... and no longer necessary... besides, it screws up in IE and FF
     */
    handleScroll() {
    },
    removeHash() {
      if (typeof window !== 'undefined') window.location.hash = ''
    },
    onSoundtrackPlay() {
      this.initSoundtrack()
      this.onPlayPauseClicked(this.soundtrack)
    },
    initSoundtrack() {
      if (!(this.soundtrack instanceof Audio)) {
        this.soundtrack = new Audio()
        this.soundtrack.volume = 0.5

        if (Math.random() > 0.5) {
          this.soundtrack.src = '/audio/soundtrack_to_war.mp3'
        } else {
          this.soundtrack.src = '/audio/bro_hymn.mp3'
        }

        this.soundtrack.loop = true

        if (this.isAutoplayActive()) this.soundtrack.play()
      }
    },
    killSoundtrack() {
      if (this.soundtrack instanceof Audio) {
        this.soundtrack.pause()
        this.soundtrack = null
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.isChrome = this.$browserDetect.isChrome
      this.isSafari = this.$browserDetect.isSafari
      this.attachScrollListener()
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      this.killSoundtrack()
    }
  }
}
</script>

<style lang="scss">
footer path.ampstart-icon {
  fill: white;
}

@media screen and (max-width: 40em) {
  .main-audio-controls {
    display: none;
  }
}

@media screen and (min-width: 40em) {
  .nav-audio-controls {
    display: none;
  }
}
</style>
