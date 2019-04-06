<template>
  <!--<ul id="services">
    <li v-for="item in Services.items" :key="item.title">
      <h3>{{ item.title }}</h3>
      <p>
        {{ item.description }}
      </p>
    </li>
  </ul>-->
</template>

<script>
  import Services from '~/data/Services.yml'

	export default {
		computed: {
			Services () {
				return Services
			}
		}
	}
</script>
