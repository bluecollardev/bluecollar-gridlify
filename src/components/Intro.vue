<template>
  <div ref="intro" class="intro bg-bc-blue">
    <div class="wrapper">
      <!--<Maze />-->
      <PhoneApp />
    </div>
  </div>
</template>

<script>
  import anime from 'animejs';

  import Maze from '~/components/svg/Maze.vue';
  import PhoneApp from '~/components/svg/PhoneApp.vue';

  export default {
    components: {
      Maze,
      PhoneApp
    },
    mounted() {
      document.body.classList.add('loading');

      const intro = this.$refs.intro;
      setTimeout(() => {
        anime({
          targets: intro,
          opacity: [1, 0],
          easing: 'easeOutQuad',
          complete: () => {
            intro.classList.add('display-none');
            if (document.body.classList.contains('loading')) {
              document.body.classList.remove('loading');
            }
          }
        });
      }, 3000);
    }
  }
</script>

<style lang="scss">
  body.loading {
    overflow-y: hidden;
  }

  .intro {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 5000;
  }

  .wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 5001;
    justify-content: center;
    align-items: center;
  }
</style>
