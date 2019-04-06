<template>
  <!--<ul id="about">
    <li v-for="item in About.items" :key="item.title">
      <h3>{{ item.title }}</h3>
      <p>
        {{ item.description }}
      </p>
    </li>
  </ul>-->
</template>

<script>
  import About from '~/data/About.yml'

	export default {
		computed: {
			About () {
				return About
			}
		}
	}
</script>
