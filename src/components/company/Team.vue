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
  }
}
</script>

<style lang="scss">
#team {
  min-height: 50vh;
}
</style>
