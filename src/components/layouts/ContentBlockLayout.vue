<template>
  <!--<div v-bind:class="classNameString" v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">-->
  <div v-bind:class="classNameString">
    <div class="content-block-heading g-services space-bottom-half">
      <div v-if="this.image" class="content-image">
        <img :src="this.image"/>
      </div>
      <p v-if="!this.titleAnimation && this.title" class="g-pstyle9">{{ this.title }}</p>
      <component
          ref="titleAnimationContainer"
          v-if="this.titleAnimation && this.title"
          :is="this.titleAnimation"
          tag="h3"
          class="content-block-title g-pstyle9"
          :text="this.title"
          :loop="false"
          :animate="false"
      />
    </div>
    <div class="content-block-body g-services">
      <div v-if="!this.descriptionAnimation" v-html="compiledDescription"></div>
      <component
          ref="descriptionAnimationContainer"
          v-if="this.descriptionAnimation"
          :is="this.descriptionAnimation.effect"
          :settings="this.descriptionAnimation.settings"
          :loop="false"
          :animate="false">
        <div class="content-block-description" v-html="compiledDescription"></div>
      </component>
    </div>

    <div v-if="typeof this.linkText === 'string' && this.linkText.length > 0" class="g-services">
      <a class="space-top-half action-link transparent g-pstyle3" v-bind:href="this.link"
         v-bind:aria-label="this.linkText">{{ this.linkText }}</a>
    </div>
  </div>
</template>

<script>
import ContentBlockMixin from '~/core/mixins/layouts/ContentBlock'

export default {
  mixins: [
    ContentBlockMixin
  ]
}
</script>

<style lang="scss">
.content-block-heading {
  display: flex;
  flex-flow: column;
}

.content-image {
  display: block;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  height: auto;

  img {
    position: relative;
    object-fit: contain;
    width: 200px;
    height: 150px;
    top: -35px;
  }
}

@media screen and (min-width: 64em) and (max-width: 102em) {
  .content-image {
    display: block;
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
  }
}

@media screen and (min-width: 64em) and (max-width: 84em) {
  .content-image {
    display: none;
  }
}

@media screen and (min-width: 102em) {
  .content-block-heading {
    display: flex;
    flex-flow: row;
  }

  .content-image {
    max-width: 33.33333%;
    margin-left: auto;
    margin-right: auto;
    height: 0;

    img {
      position: absolute;
      -o-object-fit: contain;
      object-fit: contain;
      width: 150px;
      height: 150px;
      top: 0;
      left: 0;
    }
  }
}

@media screen and (min-width: 115em) {
  .content-image {
    img {
      width: 200px;
      height: 200px;
      left: 25px;
      top: -50px;
    }
  }
}
</style>
