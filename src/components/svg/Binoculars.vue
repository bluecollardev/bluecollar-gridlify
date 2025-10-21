<template>
  <div class="binoculars">
    <img src="/images/binoculars.svg" style="width: 320px;"/>
  </div>
</template>

<script>

export default {
  mounted() {
    if (typeof window !== 'undefined') {
      let posX = 0
      let posY = 0

      let coords = [
        [200, 700],
        [500, 450],
        [700, 350],
        [500, 400]
      ]

      let counter = 0

      const loop = () => {

        posX = coords[counter][0]
        posY = coords[counter][1]

        counter++
        if (counter === coords.length) {
          counter = 0
        }

      }

      setTimeout(() => loop(), 500)
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
