<template>
  <div ref="intro" class="intro bg-bc-blue">
    <div class="wrapper">
      <img src="/images/blue-collar-dev.png" alt="" class="intro-logo image-whiteify">
      <!--<skull />-->
      <div class="animation-wrapper">
        <phone-app />
      </div>
    </div>
  </div>
</template>

<script>
  import anime from 'animejs';

  //import Maze from '~/components/svg/Maze.vue';
  //import Skull from '~/components/svg/Skull.vue';
  import PhoneApp from '~/components/svg/PhoneApp.vue';

  export default {
    components: {
      //Maze,
      //Skull,
      PhoneApp
    },
    mounted() {
      const intro = this.$refs.intro;

      if (parseInt(sessionStorage.getItem('isLoaded')) !== 1) {
        if (!document.body.classList.contains('loading')) {
          document.body.classList.add('loading');
        }

        setTimeout(() => {
          anime.timeline()
            .add({
              targets: intro,
              duration: 333,
              opacity: [1, 0],
              easing: 'easeOutQuad',
              complete: () => {
                sessionStorage.setItem('isLoaded', '1');
                intro.classList.add('display-none');
                if (document.body.classList.contains('loading')) {
                  document.body.classList.remove('loading');
                }
              }
            });
        }, 3000);
      } else {
        intro.classList.add('display-none');
        if (document.body.classList.contains('loading')) {
          document.body.classList.remove('loading');
        }
      }
    }
  }
</script>

<style lang="scss">
  body.loading {
    overflow-y: hidden;
  }

  .intro {
    position: absolute;
    width: 100%;
    height: 110%;
    z-index: 5000;
    top: 0;
    overflow: hidden;

    .intro-logo {
      margin-top: 5rem;
      width: 300px;
      margin-bottom: 3rem;
    }

     .wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 5001;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .wrapper .animation-wrapper {
      margin: 0 2rem 3rem;
    }
  }
</style>
