<template>
  <canvas ref="matrix1" class="canvas-matrix"></canvas>
</template>

<script>
  export default {
    props: {
      fillStyle: {
        type: String,
        default: 'rgba(0, 0, 0, 0.06)'
      },
      fontSize: {
        type: Number,
        default: 11
      }
    },
    methods: {
      doMatrix() {
        const matrix1 = this.$refs.matrix1;
        const ctx = matrix1.getContext('2d');

        matrix1.height = window.innerHeight;
        matrix1.width = window.innerWidth;

        // Chinese characters
        let chinese = '唱、借、洗 菜、茶、鸡蛋、歌、牛奶、票、汽车、昨天 形容词 饿、干净、渴、累、努力';

        chinese = chinese.split('');

        let fontSize = this.fontSize;
        let columns = matrix1.width / fontSize;

        let drops = [];

        // x coordinate
        for (let x = 0; x < columns; x++)
          drops[x] = 1;

        // Drawing characters
        const draw = () => {
          // Black background for the canvas, low opacity for the trail
          ctx.fillStyle = this.fillStyle;
          ctx.fillRect(0, 0, matrix1.width, matrix1.height);
          ctx.fillStyle = '#33587a'; //blue text
          ctx.font = fontSize + 'px Helvetica';

          // Iterate over drops
          for (let i = 0; i < drops.length; i++) {
            let text = chinese[Math.floor(Math.random() * chinese.length)]; // Print a random chinese character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Randomness to the reset to make drops scattered on the y axis
            if (drops[i] * fontSize > matrix1.height && Math.random() > 0.975)
              drops[i] = 0;
            drops[i]++; // Increment y coordinate
          }
        };

        setInterval(draw, 30);
      }
    },
    mounted() {
      // Start the matrix background
      this.doMatrix();
    }
  }
</script>

<style>
  .canvas-matrix {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.3;
  }

  /* Mod for home page */
  .canvas-matrix {
    left: -10vw;
    width: calc(100% + 10vw);
  }
</style>
