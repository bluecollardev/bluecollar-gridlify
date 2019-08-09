<template>
  <div class="flex-basis-half flex flex-column">
    <img ref="fishingRod" class="fishing-rod" src="/images/fishing-rod.svg" />
    <img ref="redSnapper" class="red-snapper" src="/images/red-snapper.svg" />
  </div>
</template>

<script>
  export default {
    methods: {
      animateOnParabolicPathTest() {
        let carNum = 0;
        return (self, target) => {
          let circle = document.createElement('div');
          circle.id = 'circle';
          circle.style.display = 'none';
          document.body.appendChild(circle);

          let a, b, c, x1, y1, x2, y2, y, sum, t;
          x1 = self.offsetLeft + self.clientWidth / 2;
          y1 = self.offsetTop;
          x2 = bar.offsetLeft + self.clientWidth / 2;
          y2 = bar.offsetTop;

          a = 0.001;
          b = (y1 - y2 - a * (x1 * x1 - x2 * x2)) / (x1 - x2);
          c = y1 - a * x1 * x1 - b * x1;

          sum = x1;

          t = setInterval(() => {
            circle.style.display = 'block';
            y = a * sum * sum + b * sum + c;
            circle.style.top = y + 'px';
            circle.style.left = sum + 'px';

            sum++;

            if (sum > x2) {
              clearInterval(t);
              document.body.removeChild(circle);
              carNum++;
              target.innerHTML = carNum;
            }
          }, 1);
        }
      },
      animateOnParabolicPath(el, fx) {

      },
      play() {
        let bar = document.getElementById('bar');
        let barChild = bar.getElementsByTagName('span')[0];
        this.animateOnParabolicPath(el, (x) => (-x * x));
      }
    }
  }
</script>

<style lang="scss">
  .fishing-rod {
    position: relative;
    left: 200px;
    top: 500px;
    transform: rotate(35deg);
    transform-origin: bottom right;
    cursor: pointer;
    animation-name: fishing_rod_hover;
    animation-duration: 3.5s;
    animation-iteration-count: infinite;

    &:hover {
      animation: none;
    }

    @keyframes fishing_rod_hover {
      0% {
        transform: rotate(35deg);
      }

      49% {
        transform: rotate(38deg);
      }

      99% {
        transform: rotate(35deg);
      }
    }
  }

  .red-snapper {
    position: relative;
    max-width: 400px;
    left: -200px;
    top: 200px;
    transform: scaleX(-1) rotate(75deg);
  }
</style>
