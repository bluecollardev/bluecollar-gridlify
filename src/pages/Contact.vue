<template>
  <Layout>
    <Header/>
    <section class="hero-section bg-hero-grey sm-flex flex-column pad-top-2x">
      <div class="sm-flex flex-center flex-justify-stretch flex-basis-two-thirds">
        <div class="sm-flex flex-basis-two-thirds flex-center flex-justify-center space-all">
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
        <div class="sm-flex flex-basis-third content-block">
          <div class="bg-white ampstart-card alp-form-container pt3 mx2 relative flex justify-center center">

            <form method="GET" action="/" target="_top" class="p0 m0 px3 mb4">
              <fieldset class="flex flex-column border-none p0 m0 pad-all">
                <h2 class="h3 block mb4 space-top">Contact us for a free consultation</h2>

                <!-- Start Input -->
                <div class="ampstart-input inline-block relative m0 p0 mb3 ">
                  <input type="text" value="" name="fullnameid" id="fullnameid" class="block border-none p0 m0"
                         placeholder="Full name">
                  <label for="fullnameid" class="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Full name</label>
                </div>
                <!-- End Input-->


                <!-- Start Input -->
                <div class="ampstart-input inline-block relative m0 p0 mb3 ">
                  <input type="text" value="" name="stateid" id="stateid" class="block border-none p0 m0" placeholder="Location">
                  <label for="stateid" class="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Location</label>
                </div>
                <!-- End Input-->


                <!-- Start Input -->
                <div class="ampstart-input inline-block relative m0 p0 mb3 ">
                  <input type="phone" value="" name="phoneid" id="phoneid" class="block border-none p0 m0" placeholder="Phone">
                  <label for="phoneid" class="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Phone</label>
                </div>
                <!-- End Input-->


                <!-- Start Input -->
                <div class="ampstart-input inline-block relative m0 p0 mb3 ">
                  <input type="email" value="" name="emailid" id="emailid" class="block border-none p0 m0" placeholder="Email">
                  <label for="emailid" class="absolute top-0 right-0 bottom-0 left-0" aria-hidden="true">Email</label>
                </div>
                <!-- End Input-->


                <!-- Start Submit -->
                <input type="submit" name="submit" value="Submit" id="submit" class="ampstart-btn mb3 ">
                <!-- End Submit -->


              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!--<section class="ampstart-card px3 mx2 my3 relative">
      <h2 class="py2 h3 bold center">Accolades & Testimonials</h2>
      <ul class="mb3">
        <li>Award</li>
        <li>Award</li>
      </ul>
      <blockquote class="m0 pb2 clearfix">
        <p>"Testimonial. Morbi vulputate purus sodales dapibus ultrices.Donec commodo condimentum enim, eget congue dui
          dapibus vel.Pellentesque porttitor sit amet justo eu scelerisque."</p>
        <div class="right">- Notable Client</div>
      </blockquote>
    </section>-->
    <!--<section class="relative">
      <h2 class="pb3 h3 bold center">Verified and secured by</h2>
      <div class="flex flex-wrap justify-center pb2 mb3">
        <amp-img src="../../img/alp/fake_verified.png" width="218" height="102" alt="Fake Verfied" layout="responsive"
                 class="col-5 mr1"></amp-img>
        <amp-img src="../../img/alp/fake_verified2.png" width="218" height="102" alt="Fake Verified2" layout="responsive"
                 class="col-5"></amp-img>
      </div>
    </section>-->
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import Portfolio from '~/components/Portfolio.vue';
  import About from '~/components/Home.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Header,
      Hero,
      Portfolio,
      About,
      Blog,
      Contact,
      Footer
    },
  }
</script>
