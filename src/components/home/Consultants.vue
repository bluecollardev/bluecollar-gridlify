<template>
  <hero-layout01-col
    v-if="this.activeDetail === 'CONSULTANTS'"
    bgColor="transparent"
    title="Elite Software Commandos"
    subtitle=""
    description=""
    imageClass="home-page-banner-image"
    :flipX="true"
    :angle="true"
    slotPos="top"
    className="elite-software pad-top-2x pad-bottom-2x text-shadow"
    style="padding-bottom: 20vh;"
  >
    <template v-slot:bg>
      <!--<matrix-bg style="margin-top: 54px;"></matrix-bg>-->
    </template>

    <template v-slot:title>
      <!--<typewriter-text-effect
        v-if="!isServer"
        tag="h2"
        text="Elite Software Commandos"
        class="title text-center pad-bottom"
        :loop="true">
      </typewriter-text-effect>-->
    </template>

    <template>
      <div class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
        <div>
          <p class="text-center">To survive and thrive in the 21st century's digital battleground, you need the right skills. At Blue Collar, our elite technology warriors build software that's ready for tomorrow's challenges.</p>
          <br />
          <p class="text-center"><small><small>Click the slide to cock, and the trigger to shoot!</small></small></p>

          <div class="text-center" style="position: relative; top: -140px">
            <a href="/#services" class="action-link transparent space-top g-pstyle3">What We Do</a>
          </div>
        </div>
      </div>
    </template>
  </hero-layout01-col>
</template>
