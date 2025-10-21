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
          :text="$t('contact.title')"
          class="title text-center pad-bottom">
      </typewriter-text-effect>
      <div class="hide">
        <label>{{ $t('contact.form.botField') }}:</label>
        <input name="bot-field"/>
      </div>

      <div
          class="relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
        <div>
          <p class="text-center">{{ $t('contact.location') }}</p>
          <p class="text-center">
            <i18n-t keypath="contact.contactInfo" tag="span">
              <template #phone>{{ $t('contact.phone') }}</template>
              <template #email>
                <a style="color: white; text-decoration: underline"
                   href="mailto:lucas@bluecollardev.com">{{ $t('contact.email') }}</a>
              </template>
            </i18n-t>
          </p>
        </div>
      </div>

      <div class="md-lg-flex flex-justify-center space-top">
        <div class="top-fields sm-flex flex-column flex-start">
          <div class="sm-flex">
            <!-- Start Input -->
            <div class="ampstart-input relative m0 p0 mb3">
              <label
                  for="fullname"
                  class="form-label"
                  style="display: block; margin-bottom: 0.5rem; color: white; font-weight: 500;"
              >{{ $t('contact.form.fullname') }} <span style="color: #ff6b6b;">*</span></label
              >
              <input
                  type="text"
                  value=""
                  name="fullname"
                  id="fullname"
                  class="block border-none p0 m0"
                  style="width: 100%; padding: 0.75rem; background: white; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 4px; color: #333;"
                  :placeholder="$t('contact.form.fullname')"
                  v-model="formData.fullname"
                  required
              />
            </div>
            <!-- End Input-->

            <!-- Start Input -->
            <div class="ampstart-input relative m0 p0 mb3">
              <label
                  for="phone"
                  class="form-label"
                  style="display: block; margin-bottom: 0.5rem; color: white; font-weight: 500;"
              >{{ $t('contact.form.phone') }} <span style="color: #ff6b6b;">*</span></label
              >
              <input
                  type="tel"
                  value=""
                  name="phone"
                  id="phone"
                  class="block border-none p0 m0"
                  style="width: 100%; padding: 0.75rem; background: white; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 4px; color: #333;"
                  :placeholder="$t('contact.form.phone')"
                  v-model="formData.phone"
                  required
              />
            </div>
            <!-- End Input-->

            <!-- Start Input -->
            <div class="ampstart-input relative m0 p0 mb3">
              <label
                  for="email"
                  class="form-label"
                  style="display: block; margin-bottom: 0.5rem; color: white; font-weight: 500;"
              >{{ $t('contact.form.email') }} <span style="color: #ff6b6b;">*</span></label
              >
              <input
                  type="email"
                  value=""
                  name="email"
                  id="email"
                  class="block border-none p0 m0"
                  style="width: 100%; padding: 0.75rem; background: white; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 4px; color: #333;"
                  :placeholder="$t('contact.form.email')"
                  v-model="formData.email"
                  required
              />
            </div>
            <!-- End Input-->
          </div>

          <div class="sm-flex">
            <!-- Start Input -->
            <div class="ampstart-input relative m0 p0 mb3">
              <label
                  for="budget"
                  class="form-label"
                  style="display: block; margin-bottom: 0.5rem; color: white; font-weight: 500;"
              >{{ $t('contact.form.budget') }} <span style="color: #ff6b6b;">*</span></label
              >
              <input
                  type="text"
                  value=""
                  name="budget"
                  id="budget"
                  class="block border-none p0 m0"
                  style="width: 100%; padding: 0.75rem; background: white; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 4px; color: #333;"
                  :placeholder="$t('contact.form.budget')"
                  v-model="formData.budget"
                  required
              />
            </div>
            <!-- End Input-->

            <!-- Start Input -->
            <div class="ampstart-input m0 p0 mb3" style="position: relative;">
              <label
                  for="city"
                  class="form-label"
                  style="display: block; margin-bottom: 0.5rem; color: white; font-weight: 500; position: relative; z-index: 1;"
              >{{ $t('contact.form.city') }} <span style="color: #ff6b6b;">*</span></label
              >
              <input
                  type="text"
                  value=""
                  name="city"
                  id="city"
                  class="border-none"
                  style="position: relative; z-index: 10; display: block; width: 100%; padding: 0.75rem; background: white; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 4px; color: #333;"
                  :placeholder="$t('contact.form.city')"
                  v-model="formData.city"
                  required
              />
            </div>
            <!-- End Input-->

            <!-- Start Input -->
            <div class="ampstart-input m0 p0 mb3" style="position: relative;">
              <label
                  for="country"
                  class="form-label"
                  style="display: block; margin-bottom: 0.5rem; color: white; font-weight: 500; position: relative; z-index: 1;"
              >{{ $t('contact.form.country') }}</label
              >
              <input
                  type="text"
                  value=""
                  name="country"
                  id="country"
                  class="border-none"
                  style="position: relative; z-index: 10; display: block; width: 100%; padding: 0.75rem; background: white; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 4px; color: #333;"
                  :placeholder="$t('contact.form.country')"
                  v-model="formData.country"
              />
            </div>
            <!-- End Input-->
          </div>
        </div>

        <div class="sm-flex flex-column flex-basis-third flex-start">
          <!-- Start Input -->
          <div class="message-wrapper ampstart-input relative m0 p0 mb3">
            <label
                for="message"
                class="form-label"
                style="display: block; margin-bottom: 0.5rem; color: white; font-weight: 500;"
            >{{ $t('contact.form.message') }} <span style="color: #ff6b6b;">*</span></label
            >
            <textarea
                name="message"
                id="message"
                class="block border-none m0"
                style="width: 100%; padding: 0.75rem; background: white; border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 4px; color: #333; min-height: 150px; resize: vertical;"
                :placeholder="$t('contact.form.message')"
                v-model="formData.message"
                required
            />
          </div>
          <!-- End Input-->
          <!-- Start Input -->
          <div class="ampstart-checkbox relative m0 p0 mb3" style="display: flex; align-items: center; height: auto;">
            <input
                type="checkbox"
                value=""
                name="nda"
                id="nda"
                class="border-none p0 m0"
                style="position: relative; width: auto; height: auto; margin-right: 0.5rem;"
                :placeholder="$t('contact.form.nda')"
                v-model="formData.nda"
            />
            <label
                for="nda"
                class="m0"
                style="position: relative; white-space: nowrap; cursor: pointer;"
            >{{ $t('contact.form.nda') }}</label
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
                :value="$t('contact.form.submit')"
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
import TypewriterTextEffect from '~/core/components/text/Typewriter.vue'

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
          .join('&')
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
        console.error
      } finally {
        this.$router.push('/')
      }
      // .then(() =>then this.$router.push('/'));
      //.catch(error => alert(error));
    }
  }
}
</script>
