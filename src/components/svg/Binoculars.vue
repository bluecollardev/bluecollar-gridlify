<template>
  <div class="binoculars">
    <img src="/images/binoculars.svg" style="width: 320px;" />
  </div>
</template>

<script>
  import { TweenMax } from 'gsap';

  export default {
    mounted() {
      if (typeof window !== 'undefined') {
        //const blurFilter = this.$el.querySelector('#blur-gausssian-filter');
        //const photo = this.$el.querySelector('#photo-instance');

        let posX = 0;
        let posY = 0;

        let coords = [
          [200, 700],
          [500, 450],
          [700, 350],
          [500, 400]
        ];

        let counter = 0;

        const loop = () => {

          posX = coords[counter][0];
          posY = coords[counter][1];

          /*TweenMax.to(blurFilter, 3, {
            attr: {
              stdDeviation: 4
            },
            onComplete: () => {}
          }, 0);*/

          /*TweenMax.to(photo, 3, {
            ease: Power4.easeOut,
            attr: {
              x: -posX,
              y: -posY
            },
            onComplete: () => {

              const zoomInOut = 2;

              TweenMax.to(blurFilter, 1.5, {
                repeat: zoomInOut,
                yoyo: true,
                attr: {
                  stdDeviation: 0
                },
                onComplete: () => {
                  setTimeout(loop, 1000);
                }
              }, 0);
            }
          }, 0);*/

          counter++;
          if (counter === coords.length) {
            counter = 0;
          }

        };

        setTimeout(() => loop(), 500);
      }
    }
  }
</script>

<style lang="scss">
	.binoculars {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

		svg {
			margin: 0 auto;
			max-width: 100%;
		}
	}
</style>
