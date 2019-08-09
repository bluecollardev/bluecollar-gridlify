<template>
  <div class="forest-background">
    <!--<matrix-bg></matrix-bg>-->
    <span class="army-tank" />
    <span class="grass">
      <img src="/images/grass.svg" />
    </span>
    <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" class="ground-path" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="2820px"
       viewBox="0 0 2820 15.2" xml:space="preserve">
    <path class="ground" fill="transparent" d="M1920,9.5c-35.2-0.3-71.5-2.2-105.7-3.4c-38.3,0-90.5-2.5-128.8-2.5c-38.3-1.5-76.6,4-118.3,4
c-69.6,1.5-146.2,6-219.3,4.5c-153.1-6-313.2-7.5-466.4-7.5c-34.8,0-62.6,0-100.9-1.5c-41.8-1.5-73.1,4.5-111.4,6
c-90.5,4.5-174-1.5-257.6,0c-45.2,0-97.5,2-139.2,2c-17.4-1.5-31.3-5-52.2-5c-24.4,0-41.8,2.5-62.6,2.5c-20.9-1.5-38.3,0-59.2,0
c-24.4,0-41.8,3.5-66.1,5c-10.6,0.8-21.1-0.4-32.2-1.3" />
    </svg>
  </div>
</template>

<script>
  import anime from 'animejs';

  export default {
    methods: {
      play() {
        if (typeof window !== 'undefined') {
          const groundPath = anime.path('.ground-path .ground');
          const tank = document.querySelector('.army-tank');

          console.log(groundPath('x'));

          const tankTimeline = anime.timeline({ loop: true});

          tankTimeline
            .add({
              targets: tank,
              translateX: groundPath('x'),
              translateY: groundPath('y'),
              rotate: groundPath('angle'),
              easing: 'linear',
              direction: 'reverse',
              duration: 12000,
              delay: 3000
              // Move off screen
            }).add({
              targets: tank,
              translateX: [0, -900],
              easing: 'linear',
              duration: 5000,
              delay: 0
            });
        }
      }
    },
    mounted() {
      this.play();
    }
  }
</script>
