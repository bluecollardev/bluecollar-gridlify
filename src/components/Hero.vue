<template>
  <!--<div class="Hero__Content">
		<h1>{{ Hero.title }}</h1>
		<p>{{ Hero.description }}</p>
    <ul class="Hero__Content__Icons">
      <li v-for="item in SocialMedia.items" :key="item.name">
        <a :href="item.link">
          <g-image immediate="true" :alt="item.name" :src="'/images/' + item.name + '.svg'" />
        </a>
      </li>
    </ul>
  </div>-->
</template>

<script>
	console.log(Hero.title)
	import Hero from '~/data/Hero.yml'
	import SocialMedia from '~/data/SocialMedia.yml'

	export default {
		computed: {
			Hero () {
				return Hero
			},
			SocialMedia () {
				return SocialMedia
			}
		}
	}
</script>
