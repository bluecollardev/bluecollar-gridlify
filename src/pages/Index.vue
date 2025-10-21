<template>
  <Layout id="home-page">
    <hero-layout01-col
        bgColor="transparent"
        title="We Build User Experiences That Reel in the Results"
        subtitle=""
        description=""
        imageClass="home-page-banner-image"
        image="/images/jungle-stream.svg"
        :flipX="true"
        :angle="true"
        slotPos="top"
        className="jungle-stream hero-first sm-pad-top pad-bottom-2x text-shadow relative"
    >
      <template v-slot:bg>
        <fishing-scene></fishing-scene>
      </template>

      <template v-slot:title>
        <shrink-words-one-by-one-text-effect
            v-if="!isServer"
            tag="h2"
            :text="currentPhraseText"
            class="title text-center pad-bottom"
            :loop="false"
            :key="currentPhraseIndex"
            @animationComplete="nextPhrase">
        </shrink-words-one-by-one-text-effect>
      </template>

      <template>
        <div
            class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
          <div>
            <p class="text-center">{{ $t('home.intro1') }}</p>
            <p class="text-center xs-hide">{{ $t('home.intro2') }}</p>
            <p class="text-center xs-hide"><small><small><b>{{ $t('home.fishingHint') }}</b></small></small></p>
            <div class="text-center">
              <a @click="viewDetail('PORTFOLIO')"
                 class="action-link transparent space-top-half g-pstyle3">{{ $t('home.browseCaseStudies') }}</a>
            </div>
          </div>
        </div>
      </template>
    </hero-layout01-col>

    <services
        ref="services"
        :content="servicesContent"
        :testimonials="serviceTestimonials"
        @link-clicked="handleTestimonialLinkClick"
    />

    <!-- DO NOT DELETE THIS IS THE GUITAR!!! -->
    <hero-layout01-col
        id="rock"
        v-if="servicesHero"
        bgColor="bg-bc-blue"
        title="Ready to Rock?"
        subtitle=""
        description=""
        imageClass="home-page-banner-image"
        :flipX="true"
        :angle="true"
        slotPos="top"
        className="text-shadow sm-pad-top pad-bottom-2x"
    >
      <!--<template v-slot:bg2>
        <matrix-bg></matrix-bg>
      </template>-->

      <template v-slot:title>
        <shrink-words-one-by-one-text-effect
            tag="h2"
            :text="$t('home.areYouReadyToRock')"
            class="title text-center pad-bottom pad-top-2x"
            :loop="true">
        </shrink-words-one-by-one-text-effect>
      </template>

      <template v-slot:bg>
        <simple-party-lights v-if="rockAndRoll"></simple-party-lights>
      </template>

      <template>
        <div
            class="guitar-content relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
          <div style="width: 100%;" class="flex flex-column flex-center flex-justify-center">
            <p class="text-center">{{ $t('home.rockIntro1') }}</p>
            <p class="text-center">{{ $t('home.rockIntro2') }}</p>
            <br/>
            <p class="text-center"><small><small><b>{{ $t('home.guitarHint') }}</b></small></small></p>
            <div
                class="guitar-block text-center"
                @mouseenter="startRockin"
                @mouseleave="stopRockin">
              <interactive-guitar :key="Math.random()"></interactive-guitar>
            </div>
          </div>

        </div>
      </template>
    </hero-layout01-col>
    <!-- END NOT DELETE THIS IS THE GUITAR!!! -->

    <section id="contact" class="hero-section text-shadow bg-black angle no-pad-top">
      <google-map-background></google-map-background>
      <div class="flex flex-center flex-justify-center">
        <div class="flex md-flex-basis-half space-top text-center">
          <contact :formData="formData"></contact>
        </div>
      </div>
    </section>

    <content-detail-modal ref="contentDetail" :title="this.activeDetail === 'PORTFOLIO' ? $t('home.caseStudies') : ''" :scrollable="true">
      <shoot-to-thrill-scene ref="shootToThrill" v-if="this.activeDetail === 'CONSULTANTS'"></shoot-to-thrill-scene>
      <commando-skull-scene v-if="this.activeDetail === 'CONSULTANTS'"></commando-skull-scene>
      <team-block v-if="this.activeDetail === 'CONSULTANTS'"></team-block>
      <portfolio-vertical-timeline v-if="this.activeDetail === 'PORTFOLIO'"></portfolio-vertical-timeline>
      <portfolio-vertical-timeline v-if="this.activeDetail === 'PORTFOLIO'"></portfolio-vertical-timeline>
    </content-detail-modal>
  </Layout>
</template>

<script>
import Vue from 'vue'
import Layout from '~/layouts/Default.vue'
import anime from 'animejs'

// Import generic component layouts
import VideoHeroLayout01Col from '~/components/layouts/VideoHeroLayout01Col.vue'
import HeroLayout01Col from '~/components/layouts/HeroLayout01Col.vue'
import ContentDetailModal from '~/components/layouts/ContentDetailModal.vue'

// Import page components
import Services from '~/components/home/Services.vue'
import PortfolioVerticalTimeline from '~/components/portfolio/PortfolioVerticalTimeline.vue'
import TeamBlock from '~/components/TeamBlock.vue'
import Contact from '~/components/Contact.vue'

// Import SVG animations
import Jungle from '~/components/svg/Jungle.vue'
import Binoculars from '~/components/svg/Binoculars.vue'
import GoogleMapBackground from '~/components/svg/GoogleMapBackground.vue'
import MatrixBg from '~/components/svg/MatrixBg.vue'
import InteractiveGuitar from '~/components/svg/InteractiveGuitar.vue'
import SimplePartyLights from '~/components/svg/SimplePartyLights.vue'

// Import scenes
import ForestScene from '~/components/scenes/ForestScene.vue'
import FishingScene from '~/components/scenes/FishingScene.vue'
import ShootToThrillScene from '~/components/scenes/ShootToThrillScene.vue'
import CommandoSkullScene from '~/components/scenes/CommandoSkullScene.vue'
import RedSnapper from '~/components/RedSnapper.vue'

// Import animated text effects
import TypewriterTextEffect from '~/core/components/text/Typewriter.vue'
import ShrinkWordsOneByOneTextEffect from '~/core/components/text/ShrinkWordsOneByOne.vue'
import RotateWordsTextEffect from '~/core/components/text/RotateWords.vue'
import SlideUpTextEffect from '~/core/components/text/SlideUp.vue'
import FadeInTextEffect from '~/core/components/text/FadeIn.vue'

// Import animated content effects
import SimpleEffect from '~/core/components/animate/Simple.vue'

// Import mixins
import TestimonialMixin from '~/core/mixins/TestimonialMixin'
import HomeMixin from '~/core/mixins/HomeMixin'

// Import static data
import HeroData from '~/data/Hero.yml'

export default {
  components: {
    Layout,
    // Inject components
    Services,
    PortfolioVerticalTimeline,
    TeamBlock,
    Contact,
    // Inject generic component layouts
    VideoHeroLayout01Col,
    HeroLayout01Col,
    ContentDetailModal,
    // Inject SVG animations
    Jungle,
    Binoculars,
    GoogleMapBackground,
    MatrixBg,
    SimplePartyLights,
    InteractiveGuitar,
    // Inject scenes
    ForestScene,
    FishingScene,
    ShootToThrillScene,
    CommandoSkullScene,
    RedSnapper,
    // Inject animated text effects
    TypewriterTextEffect,
    ShrinkWordsOneByOneTextEffect,
    RotateWordsTextEffect,
    SlideUpTextEffect,
    FadeInTextEffect,
    // Inject animated content effects
    SimpleEffect
  },
  mixins: [
    HomeMixin,
    TestimonialMixin,
  ],
  computed: {
    isServer() {
      //console.log('vue');
      //console.log(Vue);
      console.log('is server?')
      console.log(Vue.prototype.$isServer)
      return (typeof Vue.prototype.$isServer === 'boolean') ? Vue.prototype.$isServer : false
    },
    currentPhraseText() {
      const phrases = [
        this.$t('home.deliverResults1'),
        this.$t('home.deliverResults2'),
        this.$t('home.deliverResults3')
      ]
      return phrases[this.currentPhraseIndex]
    },
    heroContent() {
      return HeroData
    },
    servicesHero() {
      let items = this.heroContent.items.filter(item => {
        return item.id === 'services-hero'
      })

      if (items instanceof Array && items.length > 0) {
        return items[0]
      }

      return null
    },
    servicesContent() {
      // Use i18n translations instead of YAML data
      return [
        {
          title: this.$t('services.sexyMobileApps.title'),
          description: this.$t('services.sexyMobileApps.description'),
          link: '/#contact',
          linkText: this.$t('services.sexyMobileApps.linkText')
        },
        {
          title: this.$t('services.bulletproofSoftware.title'),
          description: this.$t('services.bulletproofSoftware.description'),
          link: '/#contact',
          linkText: this.$t('services.bulletproofSoftware.linkText')
        },
        {
          title: this.$t('services.deliciousWebsites.title'),
          description: this.$t('services.deliciousWebsites.description'),
          link: '/#contact',
          linkText: this.$t('services.deliciousWebsites.linkText')
        }
      ]
    },
    allTestimonials() {
      // All 6 testimonials available
      return [
        {
          testimonial: this.$t('testimonials.phase3.quote'),
          reviewedBy: this.$t('testimonials.phase3.reviewer'),
          position: this.$t('testimonials.phase3.position'),
          organization: this.$t('testimonials.phase3.organization'),
          image: '/images/testimonials/phase3.leigh-w.jpg',
          link: '#',
          linkText: 'View Project',
          testimonialId: 'phase3'
        },
        {
          testimonial: this.$t('testimonials.active24.quote'),
          reviewedBy: this.$t('testimonials.active24.reviewer'),
          position: this.$t('testimonials.active24.position'),
          organization: this.$t('testimonials.active24.organization'),
          image: '/images/testimonials/active24.dirk-s.jpg',
          link: '#',
          linkText: 'View Project',
          testimonialId: 'active24'
        },
        {
          testimonial: this.$t('testimonials.carsgone.quote'),
          reviewedBy: this.$t('testimonials.carsgone.reviewer'),
          position: this.$t('testimonials.carsgone.position'),
          organization: this.$t('testimonials.carsgone.organization'),
          image: '/images/testimonials/carsgone.ray-r.jpg',
          link: '#',
          linkText: 'View Project',
          testimonialId: 'carsgone'
        },
        {
          testimonial: this.$t('testimonials.jimmyp.quote'),
          reviewedBy: this.$t('testimonials.jimmyp.reviewer'),
          position: this.$t('testimonials.jimmyp.position'),
          organization: this.$t('testimonials.jimmyp.organization'),
          image: '/images/greg-and-steph-jimmy-poblanos.jpg',
          link: '#',
          linkText: 'View Project',
          testimonialId: 'jimmyp'
        },
        {
          testimonial: this.$t('testimonials.spasation.quote'),
          reviewedBy: this.$t('testimonials.spasation.reviewer'),
          position: this.$t('testimonials.spasation.position'),
          organization: this.$t('testimonials.spasation.organization'),
          image: '/images/testimonials/spasation.danny-a.jpg',
          link: '#',
          linkText: 'View Project',
          testimonialId: 'spasation'
        },
        {
          testimonial: this.$t('testimonials.bincvfx.quote'),
          reviewedBy: this.$t('testimonials.bincvfx.reviewer'),
          position: this.$t('testimonials.bincvfx.position'),
          organization: this.$t('testimonials.bincvfx.organization'),
          image: '/images/testimonials/bincvfx.bryn-c.jpg',
          link: '#',
          linkText: 'View Project',
          testimonialId: 'bincvfx'
        }
      ]
    },
    serviceTestimonials() {
      // Return the currently selected testimonials from state
      return this.currentTestimonials
    }
  },
  data() {
    let state = {
      activeDetail: null,
      formData: {},
      repaint: Math.random(),
      textEffects: {
        typewriter: TypewriterTextEffect,
        shrinkWordsOneByOne: ShrinkWordsOneByOneTextEffect,
        rotateWords: RotateWordsTextEffect,
        slideUp: SlideUpTextEffect,
        fadeIn: FadeInTextEffect
      },
      contentEffects: {
        simple: SimpleEffect
      },
      rockAndRoll: false,
      currentPhraseIndex: 0,
      currentTestimonials: [],
      testimonialCycleTimers: [],
      usedTestimonialIndices: [],
      isAnimating: false
    }

    return state
  },
  methods: {
    /**
     * @deprecated
     * Deprecated as far as this site is concerned right now... this could also be moved to a mixin
     */
    /*getProcessStep(idx) {
      let items = this.homeContent.processSteps;

      if (items instanceof Array && items.length > idx) {
        return items[idx];
      }

      return null
    },*/
    selectRandomTestimonial(currentIndex) {
      const all = this.allTestimonials
      const currentTestimonial = this.currentTestimonials[currentIndex]

      // Get all testimonials except the current one and ones already shown
      const availableIndices = []
      for (let i = 0; i < all.length; i++) {
        const testimonial = all[i]
        const isCurrent = currentTestimonial &&
          testimonial.reviewedBy === currentTestimonial.reviewedBy &&
          testimonial.organization === currentTestimonial.organization
        const isAlreadyShown = this.currentTestimonials.some((t, idx) =>
          idx !== currentIndex &&
          t.reviewedBy === testimonial.reviewedBy &&
          t.organization === testimonial.organization
        )

        if (!isCurrent && !isAlreadyShown) {
          availableIndices.push(i)
        }
      }

      // If all testimonials are used, allow reusing (shouldn't happen with 6 testimonials and 3 slots)
      if (availableIndices.length === 0) {
        for (let i = 0; i < all.length; i++) {
          const testimonial = all[i]
          const isCurrent = currentTestimonial &&
            testimonial.reviewedBy === currentTestimonial.reviewedBy &&
            testimonial.organization === currentTestimonial.organization
          if (!isCurrent) {
            availableIndices.push(i)
          }
        }
      }

      // Randomly select one
      const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]
      return all[randomIndex]
    },
    cycleTestimonial(slotIndex) {
      // Fade out one testimonial, then fade in a new one
      if (typeof window !== 'undefined' && this.$refs.services && this.$refs.services.$el) {
        const testimonialWrappers = this.$refs.services.$el.querySelectorAll('.testimonial-block-wrapper')

        if (testimonialWrappers[slotIndex]) {
          // Fade out
          anime({
            targets: testimonialWrappers[slotIndex],
            opacity: [1, 0],
            duration: 2000,
            easing: 'easeInOutQuad',
            complete: () => {
              // Change this testimonial
              const newTestimonial = this.selectRandomTestimonial(slotIndex)
              this.$set(this.currentTestimonials, slotIndex, newTestimonial)

              // Wait for DOM update, then fade in
              this.$nextTick(() => {
                anime({
                  targets: testimonialWrappers[slotIndex],
                  opacity: [0, 1],
                  duration: 2000,
                  easing: 'easeInOutQuad'
                })
              })
            }
          })
        }
      }
    },
    selectInitialTestimonials() {
      const all = this.allTestimonials
      // Randomly select 3 different testimonials
      const shuffled = [...all].sort(() => Math.random() - 0.5)
      return shuffled.slice(0, 3)
    },
    startTestimonialCycle() {
      // Set initial testimonials
      this.currentTestimonials = this.selectInitialTestimonials()

      // Set up independent timers for each slot with staggered start times
      if (typeof window !== 'undefined') {
        // Slot 0: starts after 30 seconds
        this.testimonialCycleTimers.push(
          setInterval(() => {
            this.cycleTestimonial(0)
          }, 30000)
        )

        // Slot 1: starts after 40 seconds (10 second offset)
        this.testimonialCycleTimers.push(
          setTimeout(() => {
            this.cycleTestimonial(1)
            this.testimonialCycleTimers.push(
              setInterval(() => {
                this.cycleTestimonial(1)
              }, 30000)
            )
          }, 10000)
        )

        // Slot 2: starts after 50 seconds (20 second offset)
        this.testimonialCycleTimers.push(
          setTimeout(() => {
            this.cycleTestimonial(2)
            this.testimonialCycleTimers.push(
              setInterval(() => {
                this.cycleTestimonial(2)
              }, 30000)
            )
          }, 20000)
        )
      }
    },
    stopTestimonialCycle() {
      this.testimonialCycleTimers.forEach(timer => {
        clearInterval(timer)
        clearTimeout(timer)
      })
      this.testimonialCycleTimers = []
    },
    nextPhrase() {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % 3
    },
    startRockin() {
      console.log('START ROCKIN - rockAndRoll set to true')
      this.rockAndRoll = true
    },
    stopRockin() {
      this.rockAndRoll = false
    },
    initSoundtrack() {
      // TODO: Implement soundtrack initialization if needed
      // This method was called but never implemented
    },
    handleTestimonialLinkClick(testimonialId) {
      this.viewDetail('PORTFOLIO', testimonialId)
    },
    viewDetail(activeDetail, testimonialId = null) {
      if (typeof window !== 'undefined') {

        this.activeDetail = activeDetail
        this.$refs.contentDetail.viewDetail(activeDetail, () => {
          // TODO: Call parent!
          this.initSoundtrack()
          if (this.$refs.shootToThrill) {
            this.$refs.shootToThrill.fireGuns()
          }

          // Scroll to specific project if testimonialId is provided
          if (testimonialId && activeDetail === 'PORTFOLIO') {
            this.$nextTick(() => {
              const projectElement = document.querySelector(`[data-testimonial-id="${testimonialId}"]`)
              if (projectElement) {
                projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            })
          }
        })
      }
    }
  },
  mounted() {
    // Start testimonial cycling when component is mounted
    this.startTestimonialCycle()
  },
  beforeUnmount() {
    // Clean up timer when component is destroyed
    this.stopTestimonialCycle()
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.guitar-content {
  z-index: 11;
}

/* Temporarily disable labels */
.ampstart-input label {
  display: none;
}

#rock {
  z-index: 1;
}

@media screen and (min-width: 52em) {
  #rock {
    height: 115vh;
    position: relative;
    top: -5vh;
  }
}

@media screen and (min-width: 64em) {
  #rock {
    top: -20vh;
  }
}

#contact {
  z-index: 0;
  height: auto;
  top: 0;
  position: relative;
}

@media screen and (min-width: 40em) {
  #contact {
    z-index: 0;
    top: -30vh;
    height: 130vh;
    margin-bottom: -5vh;
  }
}

@media screen and (min-width: 64em) {
  #contact {
    margin-bottom: -30vh;
  }
}

/* Override colors */
#services {
  //background-color: #bdcad9;
  //background-image: linear-gradient(315deg, #bdcad9 0%, #e1dada 74%);
  //background-color: #111822;
  //background-image: linear-gradient(15deg, #111822 0%, #33587a 90%);
  background-color: #d2e6d6;
  background-image: linear-gradient(175deg, #cce3ea 0%, #d2e6d6 74%);
}

#services .top-row-under * {
  color: #33587a !important;
  text-shadow: none !important;
}

/* Override colors */
@media screen and (max-width: 64em) {
  #services {
    background-color: #111822;
    background-image: linear-gradient(15deg, #111822 0%, #33587a 90%);
  }

  /* iOS background-attachment doesn't play well - Force WebP on mobile */
  .hero-section-01-col.jungle-stream {
    background-image: url(/images/jungle-stream.webp) !important;
    background-position: center bottom !important;
    background-repeat: no-repeat !important;
  }

  /* Portrait - contain to show full image */
  @media screen and (max-width: 64em) and (orientation: portrait) {
    .hero-section-01-col.jungle-stream {
      background-size: auto 100% !important;
    }
  }

  /* Landscape - cover to fill the space */
  @media screen and (max-width: 64em) and (orientation: landscape) {
    .hero-section-01-col.jungle-stream {
      background-size: cover !important;
    }
  }
}

@media screen and (max-width: 64em) {
  .jungle-stream {
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;

    .hero-section-content {
      align-items: center;
      justify-content: center;
      display: flex;
      margin-top: -20rem;
    }
  }

  #services {
    z-index: 3;
  }

  #rock {
    z-index: 2;
  }

  #contact {
    z-index: 1;
  }
}

@media screen and (max-width: 64em) and (orientation: landscape) {
  .jungle-stream {
    padding-bottom: 50vh;
  }

  #services {
    top: -10vh;
    padding-top: 20vh; /* Offset */
    padding-bottom: 20vh;
    position: relative;
  }

  #rock {
  }

  #contact {
    top: 0;
  }
}

@media screen and (max-width: 64em) and (orientation: portrait) {
  #services {
    top: -10vh;
    padding-top: 10vh; /* Offset */
    padding-bottom: 10vh;
    position: relative;
    border-bottom: none !important;
  }

  #rock {
    padding-bottom: 30vh;
  }

  #contact {
    top: 0;
  }
}

@media screen and (max-width: 84em) and (orientation: portrait) {
  .bottom-row .service-detail-card-top {
    border-bottom: none !important;
  }
}


.video-block-bg {
  //background-color: #33587a;
  //background-image: linear-gradient(135deg, #525E61 0%, #33587a 100%);
  background-color: #7FB5D5;
}

.top-row-under *,
.bottom-row .col-3-squares > .service-detail-card-top:nth-child(2n + 1) * {
  color: #33587a !important; /* Midnight blue */
  text-shadow: none !important;
}

@media screen and (min-width: 64em) {
  .hero-first {
    &.hero-section-01-col .hero-block {
      position: relative;
      top: -3rem;
      /* top: 6rem; */
      max-width: 40%;

      .text-shadow * {
        text-shadow: 1px 0 3px rgba(0, 0, 0, 0.975) !important;
      }
    }
  }
}

@media screen and (min-width: 64em) {
  .jungle-stream {
    background-position: 60% 0;
  }
}

@media screen and (min-width: 84em) {
  .jungle-stream {
    background-position: -420px 0;
  }
}

@media screen and (min-width: 130em) {
  .jungle-stream {
    background-position: 50% 50%;
  }
}

.panel-header {
  h2 {
    font-size: 27px;
  }
}

@media screen and (max-width: 40em) {
  #contact .ampstart-input {
    > * {
      margin: 0 auto;
      width: 100%;
    }
  }
}

// Hero Browse Case Studies button styling
.hero-first .action-link.transparent {
  background-color: rgba(120, 183, 214, 0.7);
  padding: 12px 24px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(120, 183, 214, 0.85);
  }
}
</style>
