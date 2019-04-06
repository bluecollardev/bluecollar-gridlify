<template>
  <!--<ul id="company">
    <li v-for="item in Company.items" :key="company.title">
      <h3>{{ item.title }}</h3>
      <p>
        {{ item.description }}
      </p>
    </li>
  </ul>-->
</template>

<script>
  import Company from '~/data/Company.yml'

	export default {
		computed: {
			Company () {
				return Company
			}
		}
	}
</script>
