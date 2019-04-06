<template>
  <!--<ul id="work" class="Portfolio">
    <li v-for="item in Portfolio.items" class="Portfolio__Content__Card" :style="item.image | truncate(8)" :key="item.title">
      <h2>{{ item.title }}</h2>
    </li>
  </ul>-->
</template>

<script>
	import Portfolio from '~/data/Portfolio.yml'

	export default {
		computed: {
			Portfolio () {
				return Portfolio
			}
    },
    filters: {
      truncate: function(text, length) {
        return "background-image: url(" + text.substring(length) + ")"
      }
    }
  }
</script>
