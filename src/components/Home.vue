<template>
  <!--<ul id="about">
    <li v-for="item in Home.items" :key="item.title">
      <h3>{{ item.title }}</h3>
      <p>
        {{ item.description }}
      </p>
    </li>
  </ul>-->
</template>

<script>
  import Home from '~/data/Home.yml'

  export default {
      computed: {
          Home () {
              return Home
          }
      }
  }
</script>
