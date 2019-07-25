<template>
  <div class="notifications" v-if="displayDisclaimer">
    <img class="under-construction xs-hide" src="/images/under-construction.svg" alt="" />
    <span class="notification">
      <span><span class="disclaimer-icon">ⓘ</span> <strong>Disclaimer!</strong> My portfolio is under construction. Projects details may not be 100% accurate or complete. Please check again in a couple days.</span>
      <button class="hide-notification" aria-label="Hide notification" v-on:click="hideDisclaimer()">&times;</button>
    </span>
  </div>
</template>
