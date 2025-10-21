<template>
  <!-- REPEAT and alternate -->
  <div class="team-block flex flex-column space-bottom-2x">
    <div class="sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="content-block">
        <content-block-layout
            className="pad-top"
            :title="$t('company.needBackup')"
            :description="$t('company.backupDescription')"
            link="#team-profile"
            :linkText="$t('company.meetOurConsultants')"
            :onLinkClicked="this.scrollToProfile"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AngleMosaicLayout from '~/components/layouts/AngleMosaicLayout.vue'
import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue'
import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue'
import TestimonialMixin from '~/core/mixins/TestimonialMixin'

export default {
  props: {
    onHomeLinkClicked: {
      type: Function,
      default: (e) => {
      }
    }
  },
  mixins: [
    TestimonialMixin
  ],
  components: {
    ContentBlockLayout,
    TestimonialBlockLayout,
    AngleMosaicLayout
  },
  methods: {
    scrollToProfile(e) {
      e.preventDefault()
      if (typeof window !== 'undefined') {
        const profileSection = document.getElementById('team-profile')
        if (profileSection) {
          profileSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }
}
</script>

<style lang="scss">
.team-block {
  position: relative;
  z-index: 1001;

  .content-block {
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
  }

  .content-block-heading {
    margin-top: 0;
  }

  .content-block-heading p {
    display: block;
    width: 100%;
    text-align: center;
  }

  .content-block-body {
    margin: 2.5rem 0;
  }

  .content-block-body p {
    text-align: left;
  }
}

@media screen and (min-width: 40em) {
  .team-block {
    .content-block {
      max-width: 60%;
    }

    .content-block-heading {
      margin-top: 5rem;
      margin-right: 3rem;
    }

    .content-block-body {
      margin: 5rem 0;
    }
  }
}

@media screen and (min-width: 84em) {
  .team-block {
    .content-block {
      max-width: 50%;
    }
  }
}
</style>
