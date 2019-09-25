<template>
	<form
		class="space-top-2x space-bottom-2x"
		id="contact-form"
		target="_top"
		name="contact"
		method="post"
		v-on:submit.prevent="handleSubmit"
		action="/"
		data-netlify="true"
		data-netlify-honeypot="bot-field"
	>
		<fieldset class="border-none p0 m0 pad-all">
			<typewriter-text-effect
				tag="h2"
				text="Get in Touch"
				class="title text-center pad-bottom">
			</typewriter-text-effect>
			<h2 class="block text-center mb-4 space-top">

			</h2>
			<div class="hide">
				<label>Hello bee:</label>
				<input name="bot-field" />
			</div>

			<div class="md-lg-flex flex-justify-center space-top">
				<div class="top-fields sm-flex flex-column flex-start">
					<div class="sm-flex">
						<!-- Start Input -->
						<div class="ampstart-input relative m0 p0 mb3 ">
							<input
								type="text"
								value=""
								name="fullname"
								id="fullname"
								class="block border-none p0 m0"
								placeholder="Full name"
								v-model="formData.fullname"
								required
							/>
							<label
								for="fullname"
								class="absolute top-0 right-0 bottom-0 left-0"
								aria-hidden="true"
								>Full name</label
							>
						</div>
						<!-- End Input-->

						<!-- Start Input -->
						<div class="ampstart-input relative m0 p0 mb3 ">
							<input
								type="tel"
								value=""
								name="phone"
								id="phone"
								class="block border-none p0 m0"
								placeholder="Phone"
								v-model="formData.phone"
								required
							/>
							<label
								for="phone"
								class="absolute top-0 right-0 bottom-0 left-0"
								aria-hidden="true"
								>Phone</label
							>
						</div>
						<!-- End Input-->

						<!-- Start Input -->
						<div class="ampstart-input relative m0 p0 mb3 ">
							<input
								type="email"
								value=""
								name="email"
								id="email"
								class="block border-none p0 m0"
								placeholder="Email"
								v-model="formData.email"
								required
							/>
							<label
								for="email"
								class="absolute top-0 right-0 bottom-0 left-0"
								aria-hidden="true"
								>Email</label
							>
						</div>
						<!-- End Input-->
					</div>

					<div class="sm-flex">
						<!-- Start Input -->
						<div class="ampstart-input relative m0 p0 mb3 ">
							<input
								type="text"
								value=""
								name="budget"
								id="budget"
								class="block border-none p0 m0"
								placeholder="Project Budget"
								v-model="formData.budget"
								required
							/>
							<label
								for="budget"
								class="absolute top-0 right-0 bottom-0 left-0"
								aria-hidden="true"
								>Project Budget</label
							>
						</div>
						<!-- End Input-->

						<!-- Start Input -->
						<div class="ampstart-input relative m0 p0 mb3 ">
							<input
								type="text"
								value=""
								name="city"
								id="city"
								class="block border-none p0 m0"
								placeholder="City"
								v-model="formData.city"
								required
							/>
							<label
								for="city"
								class="absolute top-0 right-0 bottom-0 left-0"
								aria-hidden="true"
								>City</label
							>
						</div>
						<!-- End Input-->

						<!-- Start Input -->
						<div class="ampstart-input relative m0 p0 mb3 ">
							<input
								type="text"
								value=""
								name="country"
								id="country"
								class="block border-none p0 m0"
								placeholder="Country"
								v-model="formData.country"
							/>
							<label
								for="country"
								class="absolute top-0 right-0 bottom-0 left-0"
								aria-hidden="true"
								>Country</label
							>
						</div>
						<!-- End Input-->
					</div>
				</div>

				<div class="sm-flex flex-column flex-basis-third flex-start">
					<!-- Start Input -->
					<div class="message-wrapper ampstart-input relative m0 p0 mb3">
						<textarea
							name="message"
							id="message"
							class="block border-none p0 m0"
							placeholder="Message"
							v-model="formData.message"
							required
						/>
						<label
							for="message"
							class="absolute top-0 right-0 bottom-0 left-0"
							aria-hidden="true"
							>Message</label
						>
					</div>
					<!-- End Input-->
					<!-- Start Input -->
					<div class="ampstart-checkbox relative m0 p0 mb3 ">
						<input
							type="checkbox"
							value=""
							name="nda"
							id="nda"
							class="block border-none p0 m0"
							placeholder="NDA Required"
							v-model="formData.nda"
						/>
						<label
							for="nda"
							class="absolute top-0 right-0 bottom-0 left-0 space-left"
							aria-hidden="true"
							>NDA Required</label
						>
					</div>
					<!-- End Input-->

				</div>
				<div class="sm-flex flex-column flex-basis-third flex-center flex-justify-center">
					<!-- Start Submit -->
					<div class="text-center">
						<input
							type="submit"
							name="submit"
							value="Submit Form"
							id="submit"
							class="action-link transparent space-top g-pstyle3"
							style=""
						/>
					</div>
					<!-- End Submit -->
				</div>
			</div>
		</fieldset>
	</form>
</template>

<script>
	// Import animated text effects
  import TypewriterTextEffect from '~/core/components/text/Typewriter.vue';

	export default {
		components: {
			// Inject animated text effects
			TypewriterTextEffect
		},
		props: {
			formData: Object
		},
		// TODO: encode and handleSubmit should be moved to a mixin or something
		methods: {
			encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
      },
      async handleSubmit(e) {
				try {
					await fetch('https://bluecollardev.netlify.com/', {
						method: 'POST',
						headers: {'Content-Type': 'application/x-www-form-urlencoded'},
						body: this.encode({
							'form-name': e.target.getAttribute('name'),
							...this.formData
						})
					})
				} catch (err) {
					console.error;
				} finally {
					this.$router.push('/');
				}
          // .then(() =>then this.$router.push('/'));
          //.catch(error => alert(error));
      }
		}
	}
</script>
