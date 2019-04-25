<template>
  <main>
    <div class="container">
      <div class="notifications" v-if="displayNotifications">
        <img class="under-construction" src="/images/under-construction.svg" alt="" />
        <span class="notification">
          <span>ⓘ Disclaimer - this site is currently under construction and is intended as a starting point for both Blue Collar Development, as well as the personal portfolio of Lucas Lopatka. In-accuracies do exist and some projects are not correctly described, and working relationships have not been identified as contract or employee. Employee relationships will be moved to lucaslopatka.com. I am currently working on customizing the project repeater as to distinguish between client and employee projects, and password protect the project's section. If you have any issue with the content of this site, contact me at lucas@bluecollardev.com.</span>
          <button class="hide-notification" aria-label="Hide notification" v-on:click="hideNotifications()">&times;</button>
        </span>
      </div>
      <slot/>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        displayNotifications: true
      }
    },
    methods: {
      hideNotifications() {
        this.displayNotifications = false
      }
    }
  }
</script>

<style>
.notifications {
  position: absolute;
  display: flex;
  align-items: flex-start;
  top: 48px;
  height: auto;
  width: 100vw;
  z-index: 100;
}

.notification {
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 14rem;
  color: white;
  font-weight: bold;
  font-size: 80%;
  text-align: justify;
  background-color: rgba(17,17,17, 0.777);
}

.hide-notification {
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  margin-left: 1rem;
  cursor: pointer;
}

.under-construction {
  position: absolute;
  top: -154px;
  left: -200px;
  width: 500px;
  height: 500px;
  object-fit: cover;
  z-index: 1;
}
</style>
