<template>
  <Layout>
    <Header />
    <section class="hero-section bg-bc-blue sm-flex pad-top-2x height-half">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom pad-top">
              <p class="g-pstyle2 text-center-force">Get Started!</p>
            </div>
            <div class="g-banner pad-bottom-2x">
              <p class="text-center">We’d love to help you bring an idea to life in our application development studio in the heart of downtown Victoria.</p>
              <p class="text-center">We want to be your technology services partner —not just a developer. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="sm-flex flex-basis-two-thirds">
          <div class="sm-flex flex-basis-two-thirds">
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

                <div class="sm-flex flex-justify">
                  <div class="sm-flex flex-column flex-basis-half flex-start">
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
                  <div class="sm-flex flex-column flex-basis-half flex-end">
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
                <div>
                  <!-- Start Input -->
                  <div class="message-wrapper ampstart-input relative m0 p0 mb3 ">
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
                </div>
              </fieldset>
            </form>
          </div>
          <div class="sm-flex flex-basis-third">
            <div class="border-none p0 m0 pad-all">
              <h3 class="h3 block mb4 space-top">General Inquiries</h3>
              <br />
              <br />
              <p>For information on job opportunities or informational interviews please email: <b>careers@bluecollardev.com</b></p>
              <p>For sponsorship, media, events, and opportunities to help us grow please email: <b>marketing@bluecollardev.com</b></p>
              <p>For other inquiries that don’t fit the descriptions above, ask us who you’d like to connect with by sending an email to: <b>info@bluecollardev.com</b></p>
            </div>
          </div>
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
        .then(() => this.$router.push('/'));
        //.catch(error => alert(error));
    }
  }
};
</script>

<style>
  form {
    width: 100%;
  }

  #message,
  .message-wrapper {
    width: 100%;
  }

  #message {
    height: 10rem;
  }
</style>
