<template>
  <!--<ul id="pricing">
    <li v-for="item in Pricing.items" :key="pricing.title">
      <h3>{{ item.title }}</h3>
      <p>
        {{ item.description }}
      </p>
    </li>
  </ul>-->
</template>

<script>
  import Pricing from '~/data/Pricing.yml'

	export default {
		computed: {
			Pricing () {
				return Pricing
			}
		}
	}
</script>
