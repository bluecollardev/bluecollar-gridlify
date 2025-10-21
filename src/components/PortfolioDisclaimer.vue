<template>
  <div class="notifications" v-if="displayDisclaimer">
    <img class="under-construction xs-hide" src="/images/under-construction.svg" alt=""/>
    <span class="notification">
      <span><span class="disclaimer-icon">ⓘ</span> <strong>{{
          $t('portfolio.disclaimer.title')
        }}</strong> {{ $t('portfolio.disclaimer.message') }}</span>
      <button class="hide-notification" aria-label="Hide notification" v-on:click="hideDisclaimer()">&times;</button>
    </span>
  </div>
</template>
