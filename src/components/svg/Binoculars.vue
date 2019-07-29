<template>
  <div class="binoculars">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="500" viewBox="0 0 1000 500">
			<defs>
				<symbol id="glass">
					<circle r="151" cx="152" cy="152" id="circle-outer" fill="#364a55" mask="url(#mask-outer)"></circle>
					<circle r="135" cx="152" cy="152" id="circle-inner-top" fill="#212d34" mask="url(#mask-top)"></circle>
					<circle r="135" cx="152" cy="152" id="circle-inner-top" stroke-width="19" fill="#445c69" mask="url(#mask-bottom)"></circle>
				</symbol>

				<mask id="mask-outer" x="0" y="0" width="304" height="304">
					<circle r="152" cx="152" cy="152" fill="none" stroke="#ffffff" stroke-width="35"></circle>
				</mask>

				<mask id="mask-top" x="0" y="0" width="304" height="304">
					<rect x="0" y="0" width="304" height="152" style="fill: #ffffff"/>
					<circle r="115" cx="152" cy="152" fill="#000000"></circle>
				</mask>

				<mask id="mask-bottom" x="0" y="0" width="304" height="304">
					<rect x="0" y="152" width="304" height="152" style="fill: #ffffff"/>
					<circle r="115" cx="152" cy="152" fill="#000000"></circle>
				</mask>

				<mask id="photo-mask" x="0" y="0" width="1500" height="500">
					<rect x="0" y="0" width="1500" height="500" style="fill: #ffffff"/>
					<circle r="115" cx="259" cy="250" fill="#000000"></circle>
					<circle r="115" cx="741" cy="250" fill="#000000"></circle>
				</mask>

				<filter id="blur-filter" x="0" y="0">
				  <feGaussianBlur stdDeviation="3" id="blur-gausssian-filter" />
				</filter>

				<!--<image xlink:href="https://farm9.staticflickr.com/8365/8466761830_024aaf8129_h.jpg" x="0" y="0" width="1600" height="1063" id="photo" filter="url(#blur-filter)" />-->

				<symbol id="middle-circle-small-elements" >
					<rect x="485" y="223" width="30" height="14" rx="10" ry="10" style="fill: #364a55" />
				</symbol>
			</defs>

			<use xlink:href="#photo" width="1000" height="500" x="0" y="0" id="photo-instance" />

			<rect width="1000" height="500" fill="rgba(255,255,255,0)" x="0" y="0" mask="url(#photo-mask)"></rect>

			<g mask="url(#photo-mask)">
				<rect x="279" y="80" width="235" height="109" rx="50" ry="50" style="fill: #212d34" transform = "rotate(30 279 150)" />
			</g>

			<g mask="url(#photo-mask)">
				<rect x="485" y="80" width="235" height="109" rx="50" ry="50" style="fill: #212d34" transform = "rotate(330 720 150)" />
			</g>

			<circle r="57" cx="500" cy="230" fill="#364a55"></circle>
			<circle r="46" cx="500" cy="230" fill="#19252c"></circle>
			<circle r="40" cx="500" cy="230" fill="#212d34"></circle>

			<use xlink:href="#middle-circle-small-elements" x="0" y="0"  transform="translate(0, -55) rotate(0 500 230)"  />
			<use xlink:href="#middle-circle-small-elements" x="0" y="0"  transform="translate(0, 55) rotate(0 500 230)"  />
			<use xlink:href="#middle-circle-small-elements" x="0" y="0"  transform="translate(-55, 0) rotate(90 500 230)"  />
			<use xlink:href="#middle-circle-small-elements" x="0" y="0"  transform="translate(55, 0) rotate(90 500 230)"  />

			<use xlink:href="#middle-circle-small-elements" x="0" y="0"  transform="translate(-40, -40) rotate(135 500 230)"  />
			<use xlink:href="#middle-circle-small-elements" x="0" y="0"  transform="translate(40, -40) rotate(45 500 230)"  />
			<use xlink:href="#middle-circle-small-elements" x="0" y="0"  transform="translate(-40, 40) rotate(225 500 230)"  />
			<use xlink:href="#middle-circle-small-elements" x="0" y="0"  transform="translate(40, 40) rotate(315 500 230)"  />

			<use xlink:href="#glass" x="107" y="98" />
			<use xlink:href="#glass" x="589" y="98" />
		</svg>
  </div>
</template>

<script>
  import { TweenMax } from 'gsap';

  export default {
    mounted() {
      if (typeof window !== 'undefined') {
        const blurFilter = this.$el.querySelector('#blur-gausssian-filter');
        const photo = this.$el.querySelector('#photo-instance');

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

          TweenMax.to(blurFilter, 3, {
            attr: {
              stdDeviation: 4
            },
            onComplete: () => {}
          }, 0);

          TweenMax.to(photo, 3, {
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
          }, 0);

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
    width: 100%;
    position: relative;
    top: -80vh;

		svg {
			margin: 0 auto;
			max-width: 35%;
		}
	}
</style>
