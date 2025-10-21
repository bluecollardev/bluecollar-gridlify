<template>
  <img ref="redSnapper" class="red-snapper fish" src="/images/red-snapper.svg" />
</template>

<script>
export default {
  name: 'RedSnapper'
}
</script>

<style lang="scss" scoped>
.red-snapper {
  width: 301px;
  height: 120px;
  position: absolute;
  max-width: 400px;
  left: -200px;
  bottom: -200px;
  transform: rotate(-45deg) scaleX(-1);
}
</style>
