<template>
  <section id="team" class="hero-section angle">
    <shoot-to-thrill-scene ref="shootToThrill" v-if="activeDetail === 'CONSULTANTS'"></shoot-to-thrill-scene>
    <commando-skull-scene v-if="activeDetail === 'CONSULTANTS'"></commando-skull-scene>
    <team-block v-if="activeDetail === 'CONSULTANTS'"></team-block>
  </section>
</template>

<script>
import ShootToThrillScene from '~/components/scenes/ShootToThrillScene.vue'
import CommandoSkullScene from '~/components/scenes/CommandoSkullScene.vue'
import TeamBlock from '~/components/TeamBlock.vue'

export default {
  props: {
    activeDetail: {
      type: String,
      default: 'CONSULTANTS'
    }
  },
  components: {
    ShootToThrillScene,
    CommandoSkullScene,
    TeamBlock
  },
  data() {
    return {
      hasTriggered: false
    }
  },
  methods: {
    handleScroll() {
      if (this.hasTriggered) return

      const teamSection = this.$el
      if (!teamSection) return

      const rect = teamSection.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight

      // Trigger when section is 50% visible
      if (rect.top <= windowHeight * 0.5 && rect.bottom >= 0) {
        this.hasTriggered = true
        this.fireGuns()
      }
    },
    fireGuns() {
      if (this.$refs.shootToThrill) {
        this.$refs.shootToThrill.fireGuns()
      }
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll)
      // Check on mount in case already in view
      this.handleScroll()
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style lang="scss">
#team {
  min-height: 50vh;
}
</style>
