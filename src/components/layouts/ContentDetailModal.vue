<template>
  <div ref="contentDetail" class="detailed-content-panel bg-midnight-blue semi-clear">
    <div class="panel-header flex flex-center pad-left-half pad-right-half" style="height: 5rem; position: absolute; right: 0; z-index: 9999; width: 100%">
      <div class="flex-grow">
        <h2 v-if="this.title" class="text-center no-space-top no-space-bottom">{{ this.title }}</h2>
      </div>
      <b @click="hideDetail()" style="font-size: 1.5rem; cursor: pointer">X</b>
    </div>
    <div class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import ContentDetailModalMixin from '~/core/mixins/layouts/ContentDetailModal';

  export default {
    mixins: [
      ContentDetailModalMixin
    ]
  }
</script>

<style lang="scss">
  .detailed-content-panel {
    opacity: 1;
    width: 100vw;
    height: calc(100vh - 54px);
    position: fixed;
    /*top: 54px;*/ /* Match header */
    top: 100%;
    left: 0;
    z-index: 5000;
    overflow-y: auto;
  }

  @media screen and (min-width: 40em) {
    .detailed-content-panel {
      opacity: 1;
      top: 100%;
      left: 0;
    }
  }
</style>
