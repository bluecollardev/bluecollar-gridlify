<template>
  <Layout :key="repaint">
    <hero-layout01-col
        bgColor="bg-evening-blue"
        :title="$t('company.heroTitle')"
        subtitle=""
        description=""
        imageClass="home-page-banner-image"
        image=""
        :flipX="true"
        :angle="true"
        slotPos="top"
        className="hero-first sm-pad-top pad-bottom-2x text-shadow"
    >
      <template v-slot:bg>
        <div class="jungle-bg-container xs-hide" style="align-self: flex-start">
          <jungle class="jungle-bg"></jungle>
          <div style="position: fixed; bottom: 15vh; width: 100%;">
            <img ref="combatRadio" @click="scrollToTeam" class="combat-radio xs-hide sm-hide"
                 src="/images/walkie-talkie.svg"/>
          </div>
        </div>
      </template>

      <template v-slot:bg2>
        <forest-scene ref="forestScene"></forest-scene>
      </template>

      <template>
        <div
            class="hero-first-content flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center pad-top"
            style="position: relative; z-index: 10;">
          <div>
            <p class="text-center">{{ $t('company.intro1') }}</p>
            <p class="text-center">{{ $t('company.intro2') }}</p>
            <div class="text-center">
              <a @click="scrollToTeam" class="action-link transparent space-top g-pstyle3"
                 style="cursor: pointer;">{{ $t('company.meetConsultants') }}</a>
            </div>
          </div>
        </div>
      </template>
    </hero-layout01-col>

    <team ref="team" :activeDetail="'CONSULTANTS'" />
    <profile ref="profile" @view-resume="viewResume" />

    <!-- Resume Modal -->
    <content-detail-modal ref="resumeModal" title="Resume - Lucas Michael Lopatka">
      <div class="resume-viewer">
        <iframe
          src="/docs/resume.lucas_lopatka.2025.pdf"
          width="100%"
          height="100%"
          style="border: none; min-height: calc(100vh - 200px);"
        ></iframe>
      </div>
    </content-detail-modal>

    <!--<content-detail-modal ref="contentDetail" :title="this.activeDetail === 'CONSULTANTS' ? $t('company.ourTeam') : ''">
      <shoot-to-thrill-scene ref="shootToThrill" v-if="this.activeDetail === 'CONSULTANTS'"></shoot-to-thrill-scene>
      <commando-skull-scene v-if="this.activeDetail === 'CONSULTANTS'"></commando-skull-scene>
      <team-block v-if="this.activeDetail === 'CONSULTANTS'"></team-block>
    </content-detail-modal>-->
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'

// Import components
import Header from '~/components/Header.vue'
import Blog from '~/components/Blog.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

// Import generic component layouts
import VideoHeroLayout01Col from '~/components/layouts/VideoHeroLayout01Col.vue'
import HeroLayout01Col from '~/components/layouts/HeroLayout01Col.vue'
import HeroLayout02Col02 from '~/components/layouts/HeroLayout02Col02.vue'
import SectionBlockLayout02Col01 from '~/components/layouts/SectionBlockLayout02Col01.vue'
import SectionBlockLayout02Col02 from '~/components/layouts/SectionBlockLayout02Col02.vue'
import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue'
import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue'
import TestimonialHeroLayout from '~/components/layouts/TestimonialHeroLayout.vue'
import ContentDetailModal from '~/components/layouts/ContentDetailModal.vue'

// Import page components
import Services from '~/components/home/Services.vue'
import Team from '~/components/company/Team.vue'
import Profile from '~/components/company/Profile.vue'

// Import static blocks
import ProcessBlock from '~/blocks/ProcessBlock.vue'

// Import SVG animations
import AppFactory from '~/components/svg/AppFactory.vue'
import InteractiveGuitar from '~/components/svg/InteractiveGuitar.vue'
import GoogleMapBackground from '~/components/svg/GoogleMapBackground.vue'
import GoogleMapCutout from '~/components/svg/GoogleMapCutout.vue'
import PartyLights from '~/components/svg/PartyLights.vue'
import MatrixBg from '~/components/svg/MatrixBg.vue'
import Jungle from '~/components/svg/Jungle.vue'

// Import scenes
import ForestScene from '~/components/scenes/ForestScene.vue'
import ShootToThrillScene from '~/components/scenes/ShootToThrillScene.vue'
import CommandoSkullScene from '~/components/scenes/CommandoSkullScene.vue'

// Import team block
import TeamBlock from '~/components/TeamBlock.vue'

// Import animated text effects
import TypewriterTextEffect from '~/core/components/text/Typewriter.vue'
import ShrinkWordsOneByOneTextEffect from '~/core/components/text/ShrinkWordsOneByOne.vue'
import RotateWordsTextEffect from '~/core/components/text/RotateWords.vue'
import SlideUpTextEffect from '~/core/components/text/SlideUp.vue'
import FadeInTextEffect from '~/core/components/text/FadeIn.vue'

// Import animated content effects
import SimpleEffect from '~/core/components/animate/Simple.vue'

// Import static data
import HomeData from '~/data/Home.yml'
import HeroData from '~/data/Hero.yml'
import GeneralData from '~/data/General.yml'

// Import mixins
import FlipCardsMixin from '~/core/mixins/FlipCardsMixin'
import TestimonialMixin from '~/core/mixins/TestimonialMixin'
import HomeMixin from '~/core/mixins/HomeMixin'

export default {
  components: {
    Layout,
    // Inject components
    Header,
    Blog,
    Contact,
    Footer,
    // Inject generic component layouts
    Services,
    Team,
    Profile,
    VideoHeroLayout01Col,
    HeroLayout01Col,
    HeroLayout02Col02,
    SectionBlockLayout02Col01,
    SectionBlockLayout02Col02,
    ContentBlockLayout,
    TestimonialBlockLayout,
    TestimonialHeroLayout,
    // Inject SVG animations
    AppFactory,
    InteractiveGuitar,
    GoogleMapBackground,
    GoogleMapCutout,
    PartyLights,
    MatrixBg,
    Jungle,
    // Inject scenes
    ForestScene,
    ShootToThrillScene,
    CommandoSkullScene,
    // Import static HTML blocks
    ProcessBlock,
    ContentDetailModal,
    TeamBlock,
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
    FlipCardsMixin
  ],
  data() {
    return {
      formData: {},
      repaint: Math.random(),
      rockAndRoll: false,
      activeDetail: null,
      arnoldAudio: null,
      textEffects: {
        typewriter: TypewriterTextEffect,
        shrinkWordsOneByOne: ShrinkWordsOneByOneTextEffect,
        rotateWords: RotateWordsTextEffect,
        slideUp: SlideUpTextEffect,
        fadeIn: FadeInTextEffect
      },
      contentEffects: {
        simple: SimpleEffect
      }
    }
  },
  computed: {
    homeContent() {
      return HomeData
    },
    heroContent() {
      return HeroData
    },
    generalContent() {
      return GeneralData
    },
    homepageHero() {
      let items = this.heroContent.items.filter(item => {
        return item.id === 'homepage-hero'
      })

      if (items instanceof Array && items.length > 0) {
        return items[0]
      }

      return null
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
    projectsSection() {
      let items = this.heroContent.items.filter(item => {
        return item.id === 'projects-hero'
      })

      return items instanceof Array && items.length > 0 ? items[0] : null
    },
  },
  methods: {
    scrollToTeam() {
      if (typeof window !== 'undefined') {
        // Play audio
        if (this.arnoldAudio) {
          this.arnoldAudio.currentTime = 0
          this.arnoldAudio.play().catch(err => {
            console.log('Arnold audio play failed:', err)
          })
        }

        // Scroll to team section
        const teamSection = document.getElementById('team')
        if (teamSection) {
          teamSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

          // Prime audio and trigger guns after scroll completes
          setTimeout(() => {
            if (this.$refs.team) {
              this.$refs.team.primeAudio()
              this.$refs.team.fireGuns()
            }
          }, 1000)
        }
      }
    },
    startRockin() {
      this.rockAndRoll = true
    },
    stopRockin() {
      this.rockAndRoll = false
    },
    isLoaded() {
      // let isLoaded = false;

      return sessionStorage.getItem('isLoaded') ? parseInt(sessionStorage.getItem('isLoaded')) === 1 : false
    },
    getProcessStep(idx) {
      let items = this.homeContent.processSteps

      if (items instanceof Array && items.length > idx) {
        return items[idx]
      }

      return null
    },
    viewDetail(activeDetail) {
      if (typeof window !== 'undefined') {
        console.log('viewDetail called with:', activeDetail)
        console.log('contentDetail ref:', this.$refs.contentDetail)
        this.activeDetail = activeDetail
        if (this.$refs.contentDetail) {
          this.$refs.contentDetail.viewDetail(activeDetail, () => {
            if (this.$refs.shootToThrill) {
              this.$refs.shootToThrill.fireGuns()
            }
          })
        } else {
          console.error('contentDetail ref not found!')
        }
      }
    },
    viewResume() {
      if (this.$refs.resumeModal) {
        this.$refs.resumeModal.viewDetail()
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.arnoldAudio = new Audio()
      this.arnoldAudio.volume = 0.60
      this.arnoldAudio.src = '/audio/get_to_the_choppa.mp3'
      this.arnoldAudio.loop = false

      window.addEventListener('resize', () => {
        this.repaint = Math.random()
      })
    }
  },
  beforeUnmount() {
    console.log('remove wrapTitleText resize listener')
    window.removeEventListener('resize', this.rewrapTitleText)
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 64em) {
  .hero-first {
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
}
</style>
