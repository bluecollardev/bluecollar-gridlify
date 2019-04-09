<template>
  <Layout>
    <Header />
    <section class="hero-section bg-hero-grey sm-flex flex-column pad-top-2x">
      <div
        class="sm-flex flex-center flex-justify-stretch flex-basis-two-thirds"
      >
        <div
          class="sm-flex flex-basis-two-thirds flex-center flex-justify-center space-all"
        >
          <div class="sm-flex">
            <div class="space-bottom">
              <p class="text-center g-pstyle2">
                <span class="md-hide lg-hide">
                  <span class="no-wrap">Have a question?</span>
                </span>
                <span class="xs-hide sm-hide">
                  <span class="no-wrap">Have a question?</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="sm-flex flex-basis-third text-center">
          <form
            target="_top"
            name="contact"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <fieldset class="border-none p0 m0 pad-all">
              <h2 class="h3 block mb4 space-top">
                Contact us for a free consultation
              </h2>
              <div class="hide">
                <label>Hello bee:</label>
                <input name="bot-field" />
              </div>

              <!-- Start Input -->
              <div class="ampstart-input inline-block relative m0 p0 mb3 ">
                <input
                  type="text"
                  value=""
                  name="fullname"
                  id="fullname"
                  class="block border-none p0 m0"
                  placeholder="Full name"
                  v-model="formData.fullnamme"
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
              <div class="ampstart-input inline-block relative m0 p0 mb3 ">
                <input
                  type="text"
                  value=""
                  name="location"
                  id="location"
                  class="block border-none p0 m0"
                  placeholder="Location"
                  v-model="formData.location"
                />
                <label
                  for="location"
                  class="absolute top-0 right-0 bottom-0 left-0"
                  aria-hidden="true"
                  >Location</label
                >
              </div>
              <!-- End Input-->

              <!-- Start Input -->
              <div class="ampstart-input inline-block relative m0 p0 mb3 ">
                <input
                  type="tel"
                  value=""
                  name="phone"
                  id="phone"
                  class="block border-none p0 m0"
                  placeholder="Phone"
                  v-model="formData.phone"
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
              <div class="ampstart-input inline-block relative m0 p0 mb3 ">
                <input
                  type="email"
                  value=""
                  name="email"
                  id="email"
                  class="block border-none p0 m0"
                  placeholder="Email"
                  v-model="formData.email"
                />
                <label
                  for="email"
                  class="absolute top-0 right-0 bottom-0 left-0"
                  aria-hidden="true"
                  >Email</label
                >
              </div>
              <!-- End Input-->

              <br />
              <!-- Start Submit -->
              <input
                type="submit"
                name="submit"
                value="Submit Form"
                id="submit"
                class="action-link space-top g-pstyle3"
              />
              <!-- End Submit -->
            </fieldset>
          </form>
        </div>
      </div>
    </section>
    <Footer />
  </Layout>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
    },
    handleSubmit(e) {
      fetch('https://bluecollardev.netlify.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData
        })
      })
        .then(() => this.$router.push('/success')); 
        //.catch(error => alert(error));
    }
  }
};
</script>
