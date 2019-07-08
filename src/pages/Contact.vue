<template>
  <Layout>
    <Header />
    <!--<section class="hero-section bg-bc-blue sm-flex pad-top-2x height-half angle">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom pad-top">
              <h1 class="g-pstyle2 text-center-force">Get Started!</h1>
            </div>
            <div class="g-banner pad-bottom-2x">
              <p class="text-center">

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <video-hero-layout01-col
      title="Get Started Today"
      subtitle=""
      description="At Blue Collar, every challenge is just a puzzle waiting to be solved! We strive to create innovative solutions for our clients using the latest advances
        in technology and development. Let us help take your business idea to the next level."
      image=""
      imageClass="home-page-banner-image"
      caption=""
      subCaption=""
      :flipX="false"
      :angle="true"
      bgColor="bg-bc-blue"
    >
      <template v-slot:title>
        <h1 class="title">
          <span class="text-wrapper">
            <span class="line blink">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" xml:space="preserve">
                <g>
                  <path fill="white" d="M71.129,91.224c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.606,0-6.864-1.473-9.224-3.852   C47.64,93.527,44.383,95,40.776,95h-8.128c-2.077,0-3.776-1.69-3.776-3.776c0-2.086,1.699-3.776,3.776-3.776h8.128   c3.002,0,5.447-2.445,5.447-5.447V18c0-3.002-2.445-5.447-5.447-5.447h-8.128c-2.077,0-3.776-1.69-3.776-3.776   C28.871,6.69,30.571,5,32.648,5h8.128C44.383,5,47.64,6.473,50,8.852C52.36,6.473,55.617,5,59.224,5h8.128   c2.077,0,3.776,1.69,3.776,3.776c0,2.086-1.699,3.776-3.776,3.776h-8.128c-3.002,0-5.447,2.445-5.447,5.447v64   c0,3.002,2.445,5.447,5.447,5.447h8.128C69.429,87.447,71.129,89.137,71.129,91.224z" />
                </g>
              </svg>
            </span>
            <span class="letters">Get Started Today</span>
          </span>
        </h1>
      </template>
    </video-hero-layout01-col>

    <section class="hero-section bg-light-grey">
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
  import anime from 'animejs';

  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';

  // Import generic component layouts
  import VideoHeroLayout01Col from '~/components/layouts/VideoHeroLayout01Col.vue';


  export default {
    components: {
      Header,
      Footer,
      // Inject generic component layouts
      VideoHeroLayout01Col,
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
    },
    mounted() {
      // Wrap every letter in a span
      document.querySelectorAll('.title .letters').forEach((letters) => {
        letters.outerHTML = `<span class="letters">${letters.textContent.replace(/([^\x00-\x80]|\w)/g, '<span class="letter">$&</span>')}</span>`;
      });

      const textTarget = document.querySelector('.title');
      const lineTarget = document.querySelector('.title .line');
      const lettersTarget = document.querySelector('.title .letters');
      const letterTargets = document.querySelectorAll('.title .letter');

      let timeline = anime.timeline({ loop: true });

      timeline.add({
        targets: lineTarget,
        scaleY: [1,1],
        opacity: [0.5,1],
        easing: 'easeOutExpo',
        duration: 700
      })
      .add({
        targets: lineTarget,
        scaleY: [1,1],
        opacity: [1,0],
        easing: 'easeOutExpo',
        duration: 300
      })
      .add({
        targets: letterTargets,
        scale: [1.5, 1],
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 150,
        //offset: '-=775',
        delay: (el, i) => {
          return letterTargets.length * (i+1)
        }
      })
      .add({
        targets: lettersTarget,
        scaleY: [1,1],
        opacity: [1,0],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 10000
      });
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

<style>
  ul.bullets {
    list-style: square inside;
  }

  ul.bullets li {
    list-style: square inside;
  }

  .video-banner video {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 0;
    object-fit: cover !important;
  }

  .text-banner {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  .text-banner .text {
    margin-left: auto;
    margin-right: auto;
    width: 33vw;
    z-index: 1;
  }

  /* TODO: This is ripped clean it up */
  .title {
    font-weight: 900;
    font-size: 3.5em;
  }

  .title .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .title .line {
    opacity: 0;
    position: absolute;
    left: -1em;
    height: auto;
    width: 1rem;
    transform-origin: 0 50%;
  }

  .title .line svg {
    height: 1.7em;
    -webkit-filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.666));
    filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.666));
  }

  .title .letter {
    display: inline-block;
    line-height: 1em;
  }

  @keyframes blink {
  50% {
      opacity: 0.0;
    }
  }
  @-webkit-keyframes blink {
    50% {
      opacity: 0.0;
    }
  }
</style>
