<template>
  <main>
    <div class="container">
      <div class="notifications" v-if="displayNotifications">
        <img class="under-construction xs-hide" src="/images/under-construction.svg" alt="" />
        <span class="notification">
          <span>ⓘ Disclaimer! This site is currently under construction and is intended as a starting point for both Blue Collar Development, as well as the personal portfolio of Lucas Lopatka. In-accuracies do exist and some projects may not be as described accurately.</span>
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
  background-color: rgba(17,17,17, 0.777);
}

.notification {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  color: white;
  text-align: center;
}

.hide-notification {
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  margin-left: 1rem;
  margin-right: 2rem;
  padding: 0;
  cursor: pointer;
  flex-basis: 2rem;
  flex: 0;
}

.under-construction {
  position: absolute;
  top: -161px;
  left: -195px;
  width: 500px;
  height: 500px;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 1;
}

.notification {
  padding: 0.5rem 1rem;
  font-size: 70%;
  font-weight: normal;
}

.notification > span {
  flex: 1;
}

@media screen and (min-width: 40em) {
  .notification {
    padding: 0.5rem 3.5rem 0.5rem 14rem;
    font-size: 80%;
    font-weight: bold;
  }
}

@media screen and (min-width: 102em) {
  .notification {
    padding: 0.5rem 3rem 0.5rem 18rem;
    text-align: left;
  }
}
</style>
