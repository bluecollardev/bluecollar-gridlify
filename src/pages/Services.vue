<template>
  <Layout>
    <Header/>
    <video-hero-layout01-col
      v-if="servicesHero"
      bgColor="bg-bc-blue"
      :title="servicesHero.title"
      subtitle=""
      :description="servicesHero.description"
      :link="servicesHero.link"
      :linkText="servicesHero.linkText"
      :image="servicesHero.image"
      imageClass="home-page-banner-image"
      :caption="servicesHero.caption"
      :subCaption="servicesHero.subCaption"
      :flipX="true"
      :angle="true"
      className="xs-pad-top sm-pad-top"
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
            <span class="letters">{{ servicesHero.title }}</span>
          </span>
        </h1>
      </template>

      <div class="xs-hide sm-flex flex-center flex-justify-center space-top-half">
        <div>
          <div class="sm-flex flex-wrap">
            <div class="flex-basis-half">
              <div>
                <div class="space-bottom g-get-started process-segment sm-flex">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 270 220" xml:space="preserve">
                    <path fill="white" d="M214.8,55.3c-2.1,0-4.2,0.1-6.3,0.3c-7-22.8-28.1-38.9-52.7-38.9c-2.9,0-6.8,0.2-10.4,0.7
                      C131.4,5.5,116.7,0,99.4,0C62.6,0,32.7,26.5,26.6,63.6C10.5,73.6,0,90.4,0,106.8c0,28.4,23.6,51.5,52.6,51.5h16.6l-0.3,51.4
                      c0,3.8,2.3,7.3,5.9,8.7c1.1,0.4,2.3,0.6,3.4,0.6c2.5,0,5-1.1,6.8-3l52.9-57.8h76.8c29.9,0,55.2-23.6,55.2-51.5
                      C270,78.9,244.7,55.3,214.8,55.3z M214.8,139.8h-80.9c-2.6,0-5.1,1.1-6.8,3l-39.4,43l0.2-36.7c0-2.5-0.9-4.8-2.7-6.6
                      c-1.7-1.8-4.1-2.7-6.6-2.7h-26c-21,0-34-17.1-34-32.9c0-10.9,8.6-22.9,20.8-29.2c2.8-1.4,4.7-4.2,5-7.3c3.2-30,26.3-51.8,55-51.8
                      c13.9,0,25.3,4.8,36.8,15.5c2.3,2.1,5.4,2.9,8.5,2.2c2.5-0.6,7.9-1,11.1-1c18.5,0,34.1,13.8,36.3,32.2c0.3,2.7,1.8,5.1,4,6.6
                      c2.2,1.5,5,2,7.6,1.3c3.6-1,7.3-1.4,11.1-1.4c19.5,0,36.7,15.4,36.7,32.9C251.4,124.4,234.3,139.8,214.8,139.8z">

                    </path>
                  </svg>
                  <div>
                    <p><b>Strategy</b></p>
                    <ul class="bullets">
                      <li>Design Sprints</li>
                      <li>Product Simplification</li>
                      <li>User Testing</li>
                      <li>Deployment Strategy</li>
                    </ul>
                  </div>
                </div>
                <!--<div class="g-get-started">
                  <p>Traditional HTML used to build standard websites for desktop browsers will inevitably be replaced by mobile-first languages. Enter AMP, the open source project spearheaded by Google, which is changing the nature of webpages to a truly mobile-first experience. Blue Collar places this language at the heart of all our web projects.</p>
                </div>-->
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="sm-space-left">
                <div class="space-bottom g-get-started process-segment sm-flex">
                  <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 220" xml:space="preserve">
                    <g>
                      <path fill="white" d="M36.1,107.5v4.1c0,2.8,2.3,5.1,5.1,5.1h131.9c2.8,0,5.1-2.3,5.1-5.1v-4.1c0-2.8-2.3-5.2-5.1-5.2H41.2
                        C38.4,102.4,36.1,104.7,36.1,107.5z"></path>
                      <path fill="white" d="M36.1,136v4.2c0,2.8,2.3,5.1,5.1,5.1h131.9c2.8,0,5.1-2.3,5.1-5.1V136c0-2.8-2.3-5.2-5.1-5.2H41.2
                        C38.4,130.9,36.1,133.2,36.1,136z"></path>
                      <path fill="white" d="M36.1,164.6v4.2c0,2.8,2.3,5.1,5.1,5.1h111.1c2.8,0,5.1-2.3,5.1-5.1v-4.2c0-2.8-2.3-5.2-5.1-5.2H41.2
                        C38.4,159.4,36.1,161.7,36.1,164.6z"></path>
                      <path fill="white" d="M211.6,37.7H39.8c-2.1,0-3.7,1.7-3.7,3.8v41.7c0,2.5,1.7,3.9,3.7,3.9h171.8c2.1,0,3.7-1.5,3.7-3.9V41.8
                        C215.3,39.4,213.6,37.7,211.6,37.7z M204.2,75.9L47.4,75.7v-27l156.9,0.2V75.9z"></path>
                      <g>
                        <path fill="white" d="M17.2,192V19h217v114c4,0.1,7.6,1.6,10.2,4.3c1.3-0.4,2.7-0.6,4.1-0.6c0.2,0,0.4,0,0.6,0
                          c0.8,0,1.5,0.2,2.2,0.3V8.6c0-4.7-3.9-8.6-8.6-8.6H8.6C3.9,0,0,3.8,0,8.6v192c0,4.7,3.9,8.6,8.6,8.6h175.9l-9.1-17.2H17.2z"></path>
                        <path fill="white" d="M251.4,148.9c-0.8-0.3-1.6-0.5-2.5-0.6c-0.1,0-0.2,0-0.3,0c-2.8,0-5.3,1.6-6.6,4l-0.5,0v-0.2
                          c0-4.1-3.2-7.3-7.2-7.4c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-3.3,0-6.1,2.2-7.1,5.1l0-1.4c0-4.1-3.4-7.5-7.5-7.5c0,0,0,0,0,0
                          c-3.3,0-6.1,2.2-7.1,5.1l0-31.9c0-4.1-3.4-7.5-7.5-7.5c0,0,0,0,0,0c-4.1,0-7.5,3.4-7.5,7.5l0,63.6l-7.7-14.6c-1.3-2.5-3.9-4-6.6-4
                          c-1.2,0-2.4,0.3-3.5,0.9c-3.6,1.9-5,6.5-3.1,10.1l11.6,21.8l9.1,17.2l3.3,6.3c0.3,0.8,0.7,1.5,1.3,2.1c0.4,0.4,0.8,0.7,1.2,0.9
                          c0.9,0.5,1.9,0.8,3,0.8l0,0c0.4,0.1,0.7,0.1,1.1,0.1c0.4,0,0.7,0,1.1-0.1l39.7,0c3.2,0,5.8-2.6,5.9-5.8l0.8-27.4l1.3-30
                          C256.1,152.9,254.2,150.1,251.4,148.9z"></path>
                      </g>
                    </g>
                  </svg>
                  <div>
                    <p><b>Design</b></p>
                    <ul class="bullets">
                      <li>Wireframing</li>
                      <li>Product Design</li>
                      <li>Icons & Illustration</li>
                      <li>UX Optimization</li>
                    </ul>
                  </div>
                </div>
                <!--<div class="g-get-started">
                  <p>In the era of big data, it makes sense to funnel data content into landing pages to provide accurate information to consumers. We are experts at taking MLS listing data, auto dealership data, e-commerce data, etc. and accurately funneling it into landing pages that our clients share with their customers across social media and web platforms.</p>
                </div>-->
              </div>
            </div>

            <div class="flex-basis-half">
              <div>
                <div class="space-bottom g-get-started process-segment sm-flex">
                  <svg version="1.1" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 259 220" xml:space="preserve">
                    <g>
                      <path fill="white" d="M250,0H9C4,0,0,4,0,9v201.2c0,5,4,9,9,9h241c5,0,9-4,9-9V9C259,4,255,0,250,0z M223,18.3c5,0,9.1,4.1,9.1,9.1
                        c0,5-4.1,9.1-9.1,9.1c-5,0-9.1-4.1-9.1-9.1C214,22.3,218,18.3,223,18.3z M190.7,18.3c5,0,9.1,4.1,9.1,9.1c0,5-4.1,9.1-9.1,9.1
                        s-9.1-4.1-9.1-9.1C181.6,22.3,185.6,18.3,190.7,18.3z M158.3,18.3c5,0,9.1,4.1,9.1,9.1c0,5-4.1,9.1-9.1,9.1c-5,0-9.1-4.1-9.1-9.1
                        C149.2,22.3,153.3,18.3,158.3,18.3z M241,201.2H18V52.8h223V201.2z"></path>
                      <path fill="white" d="M49.5,162.6c0.5,0.3,1.1,0.4,1.7,0.4c0.7,0,1.5-0.2,2.1-0.7l46-32.4c1-0.7,1.5-1.8,1.5-3v-13.6
                        c0-1.2-0.6-2.3-1.5-3l-46-32.2c-1.1-0.8-2.5-0.9-3.7-0.2c-1.2,0.6-1.9,1.9-1.9,3.2v16c0,1.1,0.5,2.1,1.4,2.8l25.3,20.1l-25.3,20.3
                        c-0.8,0.7-1.3,1.7-1.3,2.8v16.1C47.6,160.8,48.3,162,49.5,162.6z"></path>
                      <path fill="white" d="M96.5,162.7v5.8c0,3,2.4,5.4,5.4,5.4h59.6c3,0,5.4-2.4,5.4-5.4v-5.8c0-3-2.4-5.4-5.4-5.4h-59.6
                        C98.9,157.3,96.5,159.7,96.5,162.7z"></path>
                    </g>
                  </svg>
                  <div>
                    <p><b>Build</b></p>
                    <ul class="bullets">
                      <li>iOS and Android Native</li>
                      <li>Native, Hybrid or PWA</li>
                      <li>Cross-Platform Builds</li>
                      <li>API Backends</li>
                    </ul>
                  </div>
                </div>
                <!--<div class="g-get-started">
                  <p>Image is everything. We produce stunning creative work that tells a story to your customer. When customers understand how associating with you can define who they are, they have a compelling reason to buy (and are likely willing to pay a higher price).</p>
                </div>-->
              </div>
            </div>

            <div class="flex-basis-half">
              <div class="sm-space-left">
                <div class="space-bottom g-get-started process-segment sm-flex">
                  <svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 224 220" xml:space="preserve">
                    <g>
                      <path fill="white" d="M215.6,203.1H7.9c-4.4,0-7.9,3.6-7.9,7.9s3.5,7.9,7.9,7.9h207.7c4.4,0,7.9-3.6,7.9-7.9S220,203.1,215.6,203.1z
                        "></path>
                      <path fill="white" d="M35.3,190.6h31.3c2.6,0,4.8-2.1,4.8-4.8v-58.5c0-2.6-2.1-4.8-4.8-4.8H35.3c-2.6,0-4.8,2.1-4.8,4.8v58.5
                        C30.5,188.5,32.6,190.6,35.3,190.6z"></path>
                      <path fill="white" d="M95.5,149.3c-2.6,0-4.8,2.1-4.8,4.8v31.8c0,2.6,2.1,4.8,4.8,4.8h31.3c2.6,0,4.8-2.1,4.8-4.8V154
                        c0-2.6-2.1-4.8-4.8-4.8H95.5z"></path>
                      <path fill="white" d="M155.8,89.8c-2.6,0-4.8,2.1-4.8,4.8v91.3c0,2.6,2.1,4.8,4.8,4.8h31.3c2.6,0,4.8-2.1,4.8-4.8V94.6
                        c0-2.6-2.1-4.8-4.8-4.8H155.8z"></path>
                      <path fill="white" d="M47.4,68.6l54.2,43.8c1.2,0.9,2.6,1.4,4,1.4c1.8,0,3.5-0.7,4.8-2.2L179.6,32l10.7,8.9c0.9,0.7,1.9,1.1,3.1,1.1
                        c0.6,0,1.3-0.1,1.9-0.4c1.6-0.7,2.8-2.3,2.9-4.1l2.2-32.5c0.1-1.5-0.5-3-1.7-4c-1.2-1-2.7-1.3-4.2-1l-31.6,8
                        c-1.7,0.4-3.1,1.8-3.5,3.6c-0.4,1.8,0.2,3.6,1.6,4.7l9,7.5l-65,74.8l-49.4-40c-2.7-2.2-6.7-1.8-8.9,0.9
                        C44.3,62.4,44.7,66.4,47.4,68.6z"></path>
                    </g>
                  </svg>
                  <div>
                    <p><b>Launch</b></p>
                    <ul class="bullets">
                      <li>Cloud or Private Cloud</li>
                      <li>Analytics & Testing</li>
                      <li>User Feedback</li>
                      <li>Iteration Planning</li>
                    </ul>
                  </div>
                </div>
                <!--<div class="g-get-started">
                  <p>Integrating new technological features for its own sake is rarely at the heart of creating real value for clients. Effective solutions require a deep understanding of marketing principles, in particular the behavior of audiences consuming digital content. We use data-driven analysis to measure and validate the effectiveness of all our marketing campaigns.</p>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </video-hero-layout01-col>

    <section id="services" class="hero-section bg-white no-pad-bottom lg-flex">
      <div class="service-detail-card-top bg-white sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="service-detail-card-inner content-block">
          <div class="service-detail-card-front bg-white">
            <content-block-layout
              className="pad-top"
              v-if="getService(0).linkText"
              :title="getService(0).title"
              :description="getService(0).description"
              :link="getService(0).link"
              :linkText="getService(0).linkText"
            />

            <content-block-layout
              className="pad-top"
              v-if="getService(1).linkText"
              :title="getService(1).title"
              :description="getService(1).description"
              :link="getService(1).link"
              :linkText="getService(1).linkText"
            />

            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getService(2).linkText"
              :title="getService(2).title"
              :description="getService(2).description"
              :link="getService(2).link"
              :linkText="getService(2).linkText"
            />
          </div>

          <!-- Back -->
          <div class="service-detail-card-back bg-white">
            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getServiceHeroById('apps')"
              :title="getServiceHeroById('apps').title"
              subtitle=""
              :description="getServiceHeroById('apps').description"
              :link="getServiceHeroById('apps').link"
              :linkText="getServiceHeroById('apps').linkText"
              :image="getServiceHeroById('apps').image"
              :caption="getServiceHeroById('apps').caption"
              :subCaption="getServiceHeroById('apps').subCaption"
            />
            <content-block-layout
              className="pad-bottom"
              v-if="getServiceHeroById('software')"
              :title="getServiceHeroById('software').title"
              subtitle=""
              :description="getServiceHeroById('software').description"
              :link="getServiceHeroById('software').link"
              :linkText="getServiceHeroById('software').linkText"
              :image="getServiceHeroById('software').image"
              :caption="getServiceHeroById('software').caption"
              :subCaption="getServiceHeroById('software').subCaption"
            />
            <!--<content-block-layout
              className="pad-bottom"
              v-if="getServiceHeroById('websites')"
              :title="getServiceHeroById('websites').title"
              subtitle=""
              :description="getServiceHeroById('websites').description"
              :link="getServiceHeroById('websites').link"
              :linkText="getServiceHeroById('websites').linkText"
              :image="getServiceHeroById('websites').image"
              :caption="getServiceHeroById('websites').caption"
              :subCaption="getServiceHeroById('websites').subCaption"
            />-->
          </div>
        </div>
      </div>

      <div
        v-if="getTestimonial(0)"
        class="bg-light-grey sm-flex flex-column flex-center flex-basis-half pad-top">
        <testimonial-block-layout
          className="space-top space-bottom"
          :testimonial="getTestimonial(0).testimonial"
          :reviewedBy="getTestimonial(0).reviewedBy"
          :position="getTestimonial(0).position"
          :organization="getTestimonial(0).organization"
          :image="getTestimonial(0).image"
        />
      </div>
    </section>

    <section class="lg-flex">
      <div
        v-if="getTestimonial(1)"
        class="bg-light-grey flex flex-column flex-center flex-basis-half pad-top">
        <testimonial-block-layout
          className="space-top space-bottom"
          :testimonial="getTestimonial(1).testimonial"
          :reviewedBy="getTestimonial(1).reviewedBy"
          :position="getTestimonial(1).position"
          :organization="getTestimonial(1).organization"
          :image="getTestimonial(1).image"
        />
      </div>

      <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="service-detail-card-inner content-block">
          <div class="service-detail-card-front bg-white">
            <content-block-layout
              className="pad-top"
              v-if="getService(3).linkText"
              :title="getService(3).title"
              :description="getService(3).description"
              :link="getService(3).link"
              :linkText="getService(3).linkText"
            />

            <content-block-layout
              className="pad-top"
              v-if="getService(4).linkText"
              :title="getService(4).title"
              :description="getService(4).description"
              :link="getService(4).link"
              :linkText="getService(4).linkText"
            />

            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getService(5).linkText"
              :title="getService(5).title"
              :description="getService(5).description"
              :link="getService(5).link"
              :linkText="getService(5).linkText"
            />
          </div>

          <!-- Back -->
          <div class="service-detail-card-back bg-white">
            <content-block-layout
              className="pad-top pad-bottom"
              v-if="getServiceHeroById('apps')"
              :title="getServiceHeroById('apps').title"
              subtitle=""
              :description="getServiceHeroById('apps').description"
              :link="getServiceHeroById('apps').link"
              :linkText="getServiceHeroById('apps').linkText"
              :image="getServiceHeroById('apps').image"
              :caption="getServiceHeroById('apps').caption"
              :subCaption="getServiceHeroById('apps').subCaption"
            />
            <content-block-layout
              className="pad-bottom"
              v-if="getServiceHeroById('software')"
              :title="getServiceHeroById('software').title"
              subtitle=""
              :description="getServiceHeroById('software').description"
              :link="getServiceHeroById('software').link"
              :linkText="getServiceHeroById('software').linkText"
              :image="getServiceHeroById('software').image"
              :caption="getServiceHeroById('software').caption"
              :subCaption="getServiceHeroById('software').subCaption"
            />
            <!--<content-block-layout
              className="pad-bottom"
              v-if="getServiceHeroById('websites')"
              :title="getServiceHeroById('websites').title"
              subtitle=""
              :description="getServiceHeroById('websites').description"
              :link="getServiceHeroById('websites').link"
              :linkText="getServiceHeroById('websites').linkText"
              :image="getServiceHeroById('websites').image"
              :caption="getServiceHeroById('websites').caption"
              :subCaption="getServiceHeroById('websites').subCaption"
            />-->
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </Layout>
</template>

<script>
  import anime from 'animejs';

  // Import components
  import Header from '~/components/Header.vue';
  import Hero from '~/components/Hero.vue';
  import About from '~/components/Home.vue';
  import Blog from '~/components/Blog.vue';
  import Contact from '~/components/Contact.vue';
  import Footer from '~/components/Footer.vue';

  // Import generic component layouts
  import VideoHeroLayout01Col from '~/components/layouts/VideoHeroLayout01Col.vue';
  import HeroLayout01Col from '~/components/layouts/HeroLayout01Col.vue';
  import HeroLayout02Col02 from '~/components/layouts/HeroLayout02Col02.vue';
  import SectionBlockLayout02Col01 from '~/components/layouts/SectionBlockLayout02Col01.vue';
  import SectionBlockLayout02Col02 from '~/components/layouts/SectionBlockLayout02Col02.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  // Import static data
  import HomeData from '~/data/Home.yml';
  import HeroData from '~/data/Hero.yml';
  import GeneralData from '~/data/General.yml';
  import ServiceData from '~/data/Services.yml';
  import TestimonialData from '~/data/Testimonial.yml';

  export default {
    components: {
      // Inject components
      Header,
      Hero,
      About,
      Blog,
      Contact,
      Footer,
      // Inject generic component layouts
      VideoHeroLayout01Col,
      HeroLayout01Col,
      HeroLayout02Col02,
      SectionBlockLayout02Col01,
      SectionBlockLayout02Col02,
      ContentBlockLayout,
      TestimonialBlockLayout,
    },
    computed: {
      homeContent() {
        return HomeData;
      },
      heroContent() {
        return HeroData;
      },
      generalContent() {
        return GeneralData;
      },
      servicesContent() {
        return ServiceData
      },
      testimonialContent() {
        return TestimonialData;
      },
      homepageHero() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'homepage-hero';
        });

        if (items instanceof Array && items.length > 0) {
          return items[0];
        }

        return null
      },
      servicesHero() {
        let items = this.heroContent.items.filter(item => {
          return item.id === 'services-hero';
        });

        if (items instanceof Array && items.length > 0) {
          return items[0];
        }

        return null
      },
    },
    methods: {
      getTestimonial(idx) {
        let items = this.testimonialContent.items;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      getService(idx) {
        let items = this.homeContent.services;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      getServiceById(id) {
        let content = this.servicesContent;

        if (content && content.services instanceof Array && content.services.length > 0) {
          let items = content.services.filter(item => {
            return item.id === id;
          });

          if (items instanceof Array && items.length > 0) {
            return items[0];
          }
        }

        return null
      },
      getServiceHeroById(id) {
        let content = this.servicesContent;

        if (content && content.services instanceof Array && content.services.length > 0) {
          let items = content.services.filter(item => {
            return item.id === id;
          });

          if (items instanceof Array && items.length > 0) {
            if (items[0].hero instanceof Array && items[0].hero.length > 0) {
              return items[0].hero[0] // TODO: Support for multiple heroes!
            }
          }
        }

        return null
      },
      getServiceBackupsByIdx(id, idx) {
        let content = this.servicesContent;
        idx = idx || 0;

        if (content && content.services instanceof Array && content.services.length > 0) {
          let items = content.services.filter(item => {
            return item.id === id;
          });

          if (items instanceof Array && items.length > 0) {
            if (items[0].backup instanceof Array && items[0].backup.length > 0) {
              return items[0].backup[idx] // TODO: Support for multiple heroes!
            }
          }
        }

        return null
      },
      getProcessStep(idx) {
        let items = this.homeContent.processSteps;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      // Anime.js card flip helpers
      onCardEnter(element) {
        if (element.animeJS.reversed) element.animeJS.reverse();
        element.animeJS.play();
      },
      onCardLeave(element) {
        if (!element.animeJS.reversed) element.animeJS.reverse();
        element.animeJS.play();
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

      const flipCardSelector = '.service-detail-card-inner';
      const flipCardsContent = document.querySelectorAll(flipCardSelector);

      flipCardsContent.forEach(((element, index) => {
        // Set the height of the wrapper, we need to absolute position the content
        element.style.height = `${element.getBoundingClientRect().height}px`;
        element.style.width = `${element.getBoundingClientRect().width}px`;

        const cardFaces = element.querySelectorAll('.service-detail-card-front, .service-detail-card-back');
        cardFaces.forEach((cardFace) => {
          cardFace.style.position = 'absolute';
          cardFace.style.top = '0';

          if (cardFace.classList.contains('service-detail-card-back')) {
            cardFace.style.display = 'block';
          }

          // Freeze the heights of the faces
          cardFace.style.height = `${element.getBoundingClientRect().height}px`;
          cardFace.style.width = `${element.getBoundingClientRect().width}px`;
        });

        element.animeJS = anime.timeline({
          autoplay: false
        });

        element.animeJS.add({
          targets: element,
          rotateY: [{ value: '180deg', duration: 100 }]
        });

        element.querySelectorAll('.more-info-link').forEach(((link) => {
          link.addEventListener('click', ((e) => {
            e.preventDefault();
            e.stopPropagation();
            this.onCardEnter(element);
          }).bind(this));
        }).bind(this));

        element.addEventListener('mouseleave', (() => {
          this.onCardLeave(element);
        }).bind(this));
      }).bind(this));
    }
  }
</script>

<style>
  .process-segment svg {
    -webkit-filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.333));
    filter: drop-shadow(1px 0 5px rgba(0, 0, 0, 0.333));
    max-width: 100px;
  }

  .process-segment > *:nth-child(1) {
    flex: 1;
    padding: 0 3rem;
  }

  .process-segment > *:nth-child(2) {
    flex: 2;
  }

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

  .service-detail-card {
    perspective: 1000px
  }

  .service-detail-card-inner {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  .service-detail-card-front,
  .service-detail-card-back {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .service-detail-card-front {
  }

  .service-detail-card-back {
    display: none;
    transform: rotateY(180deg);
  }
</style>
