<template>
	<!--<div id="contact">
		<h2>{{ Contact.title }}</h2>
		<div class="Contact__Content">
			<div class="Contact__Info">
				<p>{{ Contact.description }} </p>
				<ul class="Contact__SocialMedia__Icons">
					<li v-for="item in SocialMedia.items" :key="item.name">
						<a :href="item.link">
							<g-image immediate="true" :alt="item.name" :src="'//images/' + item.name + '.svg'" />
						</a>
					</li>
				</ul>
			</div>
			<div class="Contact__Form">
				<form action="/thank-you">
					<label for="name">Name</label>
					<input type="name" placeholder="Incognito">

					<label for="email">Email</label>
					<input type="email" placeholder="incognito@email.com">

					<label for="message">Message</label>
					<textarea type="message" placeholder="Your message..."/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	</div>-->
</template>

<script>
	import Contact from '~/data/Contact.yml'
	import SocialMedia from '~/data/SocialMedia.yml'

	export default {
		computed: {
			Contact () {
				return Contact
			},
			SocialMedia () {
				return SocialMedia
			}
		}
	}
</script>

