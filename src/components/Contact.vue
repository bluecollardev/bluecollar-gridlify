<template>
  <form
      class="space-top-2x space-bottom-2x"
      id="contact-form"
      target="_top"
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/api/contact"
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
          class="pad-top relative flex xs-flex-basis-full sm-flex-basis-full md-lg-flex-basis-full lg-flex-basis-half xl-flex-basis-half flex-justify-center flex-center">
        <div>
          <p class="text-center">{{ $t('contact.location') }}</p>
          <p class="text-center">
            <i18n-t keypath="contact.contactInfo" tag="span">
              <template #phone>
                <a style="color: white; text-decoration: underline"
                   :href="`tel:${phoneE164}`">{{ $t('contact.phone') }}</a>
              </template>
              <template #email>
                <a style="color: white; text-decoration: underline"
                   href="mailto:info@bluecollardev.com">{{ $t('contact.email') }}</a>
              </template>
            </i18n-t>
          </p>
          <p class="text-center" style="margin-top: 0.75rem;">
            <a
                v-for="channel in messagingChannels"
                :key="channel.name"
                :href="channel.href"
                target="_blank"
                rel="noopener noreferrer"
                style="color: white; text-decoration: underline; margin: 0 0.5rem; white-space: nowrap;"
            >{{ channel.name }}</a>
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
                :value="status === 'sending' ? $t('contact.form.sending') : $t('contact.form.submit')"
                id="submit"
                class="action-link transparent space-top g-pstyle3"
                :disabled="status === 'sending'"
                :style="status === 'sending' ? 'opacity: 0.6; cursor: wait;' : ''"
            />
            <p
                v-if="status === 'sent'"
                class="text-center"
                style="margin-top: 1rem; color: #6bff9e;"
                role="status"
            >{{ $t('contact.form.sent') }}</p>
            <p
                v-if="status === 'error'"
                class="text-center"
                style="margin-top: 1rem; color: #ff6b6b;"
                role="alert"
            >{{ errorMessage || $t('contact.form.error') }}</p>
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
  data() {
    return {
      status: 'idle', // idle | sending | sent | error
      errorMessage: ''
    }
  },
  computed: {
    // The displayed number is formatted for humans ("+66 65-807-1545"); links need digits.
    phoneDigits() {
      return String(this.$t('contact.phone')).replace(/\D/g, '')
    },
    phoneE164() {
      return `+${this.phoneDigits}`
    },
    messagingChannels() {
      const channels = [
        { name: 'WhatsApp', href: `https://wa.me/${this.phoneDigits}` },
        { name: 'Viber', href: `viber://chat?number=${encodeURIComponent(this.phoneE164)}` },
        { name: 'SMS', href: `sms:${this.phoneE164}` }
      ]
      // LINE has no phone-number deep link — it needs a LINE ID or Official Account ID.
      // Set VITE_LINE_ID to switch it on.
      const lineId = import.meta.env.VITE_LINE_ID
      if (lineId) {
        channels.splice(1, 0, { name: 'LINE', href: `https://line.me/R/ti/p/~${lineId}` })
      }
      return channels
    }
  },
  methods: {
    async handleSubmit(e) {
      if (this.status === 'sending') return
      this.status = 'sending'
      this.errorMessage = ''

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            'bot-field': e.target.elements['bot-field']?.value || '',
            ...this.formData
          })
        })

        const result = await response.json().catch(() => ({}))

        if (!response.ok) {
          this.status = 'error'
          this.errorMessage = result.error || ''
          return
        }

        this.status = 'sent'
        Object.keys(this.formData).forEach(key => {
          this.formData[key] = typeof this.formData[key] === 'boolean' ? false : ''
        })
      } catch (err) {
        console.error('Contact form submission failed:', err)
        this.status = 'error'
      }
    }
  }
}
</script>
