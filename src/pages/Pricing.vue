<template>
  <Layout>
    <Header/>
    <section class="hero-section bg-hero-grey sm-flex pad-top">
      <div class="sm-flex flex-center flex-justify-center flex-basis-half">
        <div class="hero-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2">Pricing suited to your business needs</p>
            </div>
            <div class="action-link-block">
              <a class="action-link space-top g-pstyle3" href="/contact">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="relative flex-basis-half">
        <img class="banner-image right" src="/images/hero-julia.png" />
        <div class="figure-caption figure-caption-right bg-cherry g-hero">
          <p class="g-pstyle4">Julia</p>
          <p class="g-pstyle5">Onboarding at Firebrand</p>
        </div>
      </div>
    </section>

    <section class="hero-section bg-light-grey sm-flex pad-top pad-bottom height-quarter">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2 text-center-force">Websites & Custom Software</p>
            </div>
            <div class="g-banner">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero-section bg-hero-grey sm-flex flex-justify-center pad-top pad-bottom">
      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="sm-flex flex-center flex-justify-center flex-basis-third">
        <div class="content-block">
          <img class="banner-image" src="/images/greg-and-steph-jimmy-poblanos.jpg" />
        </div>
      </div>
      <div class="sm-flex flex-center flex-justify-start flex-basis-two-thirds">
        <div>
          <div class="space-all">
            <div class="g-services">
              <p class="g-pstyle8">Firebrand designed and implemented an amazing website for our business, combining the effective elements of a solid technical design with the functionality and visual appeal to engage our customers. We've seen an immediate increase in sales and flow through business.</p>
            </div>
            <div class="g-services">
              <p>Greg L.</p>
              <p>Jimmy Poblanos</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular -->
    <section id="web-development" class="travel-popular pb4 pt3 relative">
      <div class="overflow-scroll">
        <div class="travel-overflow-container">
          <div class="sm-flex px1 md-px2 mxn1 flex-justify-evenly">
            <!-- Card -->
            <div class="fb-card m1 mt3 mb2">
              <div class="travel-popular-tilt-right mb1">
                <div class="relative travel-results-result">
                  <a class="travel-results-result-link block relative" href="#">
                    <div class="bg-firebrand-red" style="width: 346px; height: 200px"></div>
                    <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="" srcset=""></amp-img>-->
                    <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="../img/travel/activity/surf-day.jpg" srcset="../img/travel/activity/surf-day@2x.jpg 2x, ../img/travel/activity/surf-day.jpg 1x"></amp-img>-->
                  </a>
                  <div class="travel-results-result-like absolute top-0 right-0">
                    <div class="p1">

                      <!-- Like Button -->
                      <label class="travel-like">
                        <input type="checkbox" class="absolute">
                        <div class="travel-like-hearts circle inline-block relative">
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart travel-like-heart-white absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-solid absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-outline absolute mx-auto "></div>
                        </div>
                      </label>
                      <!--/ Like Button -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="h2 line-height-2 mb1">
                <span class="travel-results-result-text">Template</span>
                <span class="travel-results-result-subtext h3">&bull;</span>
                <span class="travel-results-result-subtext h3">$&nbsp;</span><span class="black bold">899 -</span>
              </div>

              <hr class="space-top-half space-bottom-half" />

              <!--<div class="h4 line-height-2">
                <div class="inline-block relative mr1 h3 line-height-2">
                  <div class="travel-results-result-stars green">★★★★★</div>
                </div>
                <span class="travel-results-result-subtext mr1">241 Reviews</span>
                <span class="travel-results-result-subtext"><svg class="travel-icon" viewBox="0 0 77 100"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="7.5" d="M38.794 93.248C58.264 67.825 68 49.692 68 38.848 68 22.365 54.57 9 38 9S8 22.364 8 38.85c0 10.842 9.735 28.975 29.206 54.398a1 1 0 0 0 1.588 0z"></path><circle cx="38" cy="39" r="10" fill="currentColor"></circle></g></svg> Oaxaca</span>
              </div>-->

              <div class="card-content-body space-top-half flex">
                <ul class="card-list">
                  <li>Accelerated mobile website (template)</li>
                  <li>Consultation on choosing template</li>
                  <li>Social media integration</li>
                  <li>Includes up to 5 free pages*</li>
                  <hr class="space-top-half space-bottom-half" />
                  <li>Extra pages are $200 each</li>
                  <li>Extra products or services are $15 each</li>
                  <li>Professional copywriting (optional) is $300/page</li>
                </ul>
              </div>

              <div class="card-content-action flex">
                <div class="action-link-block g-cta-contact text-center space-top-half space-bottom-half">
                  <a class="action-link g-pstyle3" href="/contact">Get Started</a>
                </div>
              </div>
            </div>

            <!-- Card -->
            <div class="fb-card m1 mt3 mb2">
              <div class="travel-results-result relative mb1">
                <div class="relative travel-results-result">
                  <a class="travel-results-result-link block relative" href="#">
                    <div class="bg-firebrand-red" style="width: 346px; height: 200px"></div>
                  </a>
                  <div class="travel-results-result-flags absolute top-0 left-0">
                    <div class="p1"><span class="travel-pill bold">NEW</span></div>
                  </div>
                  <div class="travel-results-result-like absolute top-0 right-0">
                    <div class="p1">

                      <!-- Like Button -->
                      <label class="travel-like">
                        <input type="checkbox" class="absolute">
                        <div class="travel-like-hearts circle inline-block relative">
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart travel-like-heart-white absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-solid absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-outline absolute mx-auto "></div>
                        </div>
                      </label>
                      <!--/ Like Button -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="h2 line-height-2 mb1">
                <span class="travel-results-result-text">Custom Website</span>
                <span class="travel-results-result-subtext h3">&bull;</span>
                <span class="travel-results-result-subtext h3">$&nbsp;</span><span class="black bold">3999 -</span>
              </div>

              <hr class="space-top-half space-bottom-half" />

              <!--<div class="h4 line-height-2">
                <div class="inline-block relative mr1 h3 line-height-2">
                  <div class="travel-results-result-stars green">★★★★★</div>
                </div>
                <span class="travel-results-result-subtext mr1">42 Reviews</span>
                <span class="travel-results-result-subtext"><svg class="travel-icon" viewBox="0 0 77 100"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="7.5" d="M38.794 93.248C58.264 67.825 68 49.692 68 38.848 68 22.365 54.57 9 38 9S8 22.364 8 38.85c0 10.842 9.735 28.975 29.206 54.398a1 1 0 0 0 1.588 0z"></path><circle cx="38" cy="39" r="10" fill="currentColor"></circle></g></svg> Oaxaca</span>
              </div>-->

              <div class="card-content-body space-top-half flex">
                <ul class="card-list">
                  <li>Unique site with customized AMP components</li>
                  <li>Mockup-provided (2-pages included)</li>
                  <li>In-depth consultation and strategic planning</li>
                  <li>Online payments integration possible</li>
                  <li>Custom forms*</li>
                  <li>Profession photo sourcing*</li>
                  <li>Social media integration</li>
                  <li>Google Analytics<sup>&reg;</sup></li>
                  <li>XML Sitemap</li>
                  <li>Includes up to 8 free pages*</li>
                  <hr class="space-top-half space-bottom-half" />
                  <li>Extra pages are $200 each</li>
                  <li>Extra products or services are $15 each</li>
                  <li>Professional copywriting (optional) is $300/page</li>
                </ul>
              </div>

              <div class="card-content-action flex">
                <div class="action-link-block g-cta-contact text-center space-top-half space-bottom-half">
                  <a class="action-link g-pstyle3" href="/contact">Get Started</a>
                </div>
              </div>
            </div>

            <!-- Card -->
            <div class="fb-card m1 mt3 mb2">
              <div class="travel-popular-tilt-left mb1">
                <div class="relative travel-results-result">
                  <a class="travel-results-result-link block relative" href="#">
                    <div class="bg-firebrand-red" style="width: 346px; height: 200px"></div>
                  </a>
                  <div class="travel-results-result-like absolute top-0 right-0">
                    <div class="p1">

                      <!-- Like Button -->
                      <label class="travel-like">
                        <input type="checkbox" class="absolute">
                        <div class="travel-like-hearts circle inline-block relative">
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart travel-like-heart-white absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-solid absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-outline absolute mx-auto "></div>
                        </div>
                      </label>
                      <!--/ Like Button -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="h2 line-height-2 mb1">
                <span class="travel-results-result-text">Web Software</span>
                <span class="travel-results-result-subtext h3">&bull;</span>
                <span class="travel-results-result-subtext h3">$&nbsp;</span><span class="black bold">Contact</span>
              </div>

              <hr class="space-top-half space-bottom-half" />

              <!--<div class="h4 line-height-2">
                <div class="inline-block relative mr1 h3 line-height-2">
                  <div class="travel-results-result-stars green">★★★★★</div>
                </div>
                <span class="travel-results-result-subtext mr1">17 Reviews</span>
                <span class="travel-results-result-subtext"><svg class="travel-icon" viewBox="0 0 77 100"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="7.5" d="M38.794 93.248C58.264 67.825 68 49.692 68 38.848 68 22.365 54.57 9 38 9S8 22.364 8 38.85c0 10.842 9.735 28.975 29.206 54.398a1 1 0 0 0 1.588 0z"></path><circle cx="38" cy="39" r="10" fill="currentColor"></circle></g></svg> Mexico City</span>
              </div>-->

              <div class="card-content-body space-top-half mb1">
                <!-- TODO: Fix/create card paragraph styles! -->
                We offer advanced custom solutions to enterprise clients – contact us for details!
              </div>

              <div class="card-content-action flex">
                <div class="action-link-block g-cta-contact text-center space-top-half space-bottom-half">
                  <a class="action-link g-pstyle3" href="/contact">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Popular -->

    <!--<section class="hero-section bg-light-grey sm-flex pad-top pad-bottom height-half">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2 text-center-force">E-commerce Payment Integrations</p>
            </div>
            <div class="g-banner">
              <p>E-commerce payment functionality can be added to custom projects. Whether you need a simple shopping cart and check-out system added to your website, or custom-built enterprise software, we can work with you to deliver the right solution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>-->

    <section class="hero-section bg-light-grey sm-flex pad-top pad-bottom height-half">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2 text-center-force">Social Ad Budgets</p>
            </div>
            <div class="g-banner">
              <p>If you select the Basic or Premium package, we recommend a monthly ad spend of $50 - $100. This will cover the cost for ad placements on social media platforms where your business is being promoted.</p>
              <p>&nbsp;</p>
              <p>To learn more about how the social media ad spend is used, please contact us.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero-section bg-hero-grey sm-flex pad-top">
      <div class="sm-flex flex-center flex-justify-center flex-basis-two-thirds">
        <div class="content-block">
          <div class="space-all">
            <div class="space-bottom-half g-services">
              <p class="g-pstyle8">Firebrand shaved hours per week off my social media schedule.  Now I get more leads from my social channels than any other source.</p>
            </div>
            <div class="g-services">
              <p>Carl Stevens</p>
              <p>Ace Coffee Roasters</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Position relatively, or absolute positioning of the caption will fail -->
      <div class="relative flex-basis-third">
        <img class="banner-image left" src="/images/hero-old-businessman.png" />
      </div>
    </section>

    <!-- Popular -->
    <section id="social-media" class="travel-popular pb4 pt3 relative">
      <div class="overflow-scroll">
        <div class="travel-overflow-container">
          <div class="sm-flex px1 md-px2 mxn1 flex-justify-evenly">
            <!-- Card -->
            <div class="fb-card m1 mt3 mb2">
              <div class="travel-popular-tilt-right mb1">
                <div class="relative travel-results-result">
                  <a class="travel-results-result-link block relative" href="#">
                    <div class="bg-firebrand-red" style="width: 346px; height: 200px"></div>
                    <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="" srcset=""></amp-img>-->
                    <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="../img/travel/activity/surf-day.jpg" srcset="../img/travel/activity/surf-day@2x.jpg 2x, ../img/travel/activity/surf-day.jpg 1x"></amp-img>-->
                  </a>
                  <div class="travel-results-result-like absolute top-0 right-0">
                    <div class="p1">

                      <!-- Like Button -->
                      <label class="travel-like">
                        <input type="checkbox" class="absolute">
                        <div class="travel-like-hearts circle inline-block relative">
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart travel-like-heart-white absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-solid absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-outline absolute mx-auto "></div>
                        </div>
                      </label>
                      <!--/ Like Button -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="h2 line-height-2 mb1">
                <span class="travel-results-result-text">Basic</span>
                <span class="travel-results-result-subtext h3">&bull;</span>
                <span class="travel-results-result-subtext h3">$&nbsp;</span><span class="black bold">299 <small>/ mo.</small></span>
              </div>

              <hr class="space-top-half space-bottom-half" />

              <!--<div class="h4 line-height-2">
                <div class="inline-block relative mr1 h3 line-height-2">
                  <div class="travel-results-result-stars green">★★★★★</div>
                </div>
                <span class="travel-results-result-subtext mr1">241 Reviews</span>
                <span class="travel-results-result-subtext"><svg class="travel-icon" viewBox="0 0 77 100"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="7.5" d="M38.794 93.248C58.264 67.825 68 49.692 68 38.848 68 22.365 54.57 9 38 9S8 22.364 8 38.85c0 10.842 9.735 28.975 29.206 54.398a1 1 0 0 0 1.588 0z"></path><circle cx="38" cy="39" r="10" fill="currentColor"></circle></g></svg> Oaxaca</span>
              </div>-->

              <div class="card-content-body space-top-half flex">
                <ul class="card-list">
                  <li>3 posts per week (per network)</li>
                  <li>Social media strategy</li>
                  <li>Facebook business page/account setup</li>
                  <li>Original content creation</li>
                  <li>Increase in followers</li>
                  <li>Account management</li>
                  <li>Ad spend limit of $2000/mo to boost posts</li>
                </ul>
              </div>

              <div class="card-content-action flex">
                <div class="action-link-block g-cta-contact text-center space-top-half space-bottom-half">
                  <a class="action-link g-pstyle3" href="/contact">Get Started</a>
                </div>
              </div>
            </div>

            <!-- Card -->
            <div class="fb-card m1 mt3 mb2">
              <div class="travel-results-result relative mb1">
                <div class="relative travel-results-result">
                  <a class="travel-results-result-link block relative" href="#">
                    <div class="bg-firebrand-red" style="width: 346px; height: 200px"></div>
                  </a>
                  <div class="travel-results-result-flags absolute top-0 left-0">
                    <div class="p1"><span class="travel-pill bold">NEW</span></div>
                  </div>
                  <div class="travel-results-result-like absolute top-0 right-0">
                    <div class="p1">

                      <!-- Like Button -->
                      <label class="travel-like">
                        <input type="checkbox" class="absolute">
                        <div class="travel-like-hearts circle inline-block relative">
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart travel-like-heart-white absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-solid absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-outline absolute mx-auto "></div>
                        </div>
                      </label>
                      <!--/ Like Button -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="h2 line-height-2 mb1">
                <span class="travel-results-result-text">Premium</span>
                <span class="travel-results-result-subtext h3">&bull;</span>
                <span class="travel-results-result-subtext h3">$&nbsp;</span><span class="black bold">499 <small>/ mo.</small></span>
              </div>

              <hr class="space-top-half space-bottom-half" />

              <!--<div class="h4 line-height-2">
                <div class="inline-block relative mr1 h3 line-height-2">
                  <div class="travel-results-result-stars green">★★★★★</div>
                </div>
                <span class="travel-results-result-subtext mr1">42 Reviews</span>
                <span class="travel-results-result-subtext"><svg class="travel-icon" viewBox="0 0 77 100"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="7.5" d="M38.794 93.248C58.264 67.825 68 49.692 68 38.848 68 22.365 54.57 9 38 9S8 22.364 8 38.85c0 10.842 9.735 28.975 29.206 54.398a1 1 0 0 0 1.588 0z"></path><circle cx="38" cy="39" r="10" fill="currentColor"></circle></g></svg> Oaxaca</span>
              </div>-->

              <div class="card-content-body space-top-half flex">
                <ul class="card-list">
                  <li>5 posts per week (per network)</li>
                  <li>Social media strategy (advanced)</li>
                  <li>Facebook business page/account setup</li>
                  <li>Original content creation</li>
                  <li>Increase in followers</li>
                  <li>Account management</li>
                  <li>Ad spend limit of $5000/mo to boost posts</li>
                  <li>Reputation management</li>
                  <li>Spam/comments monitoring</li>
                  <li>Monthly progress report</li>
                </ul>
              </div>

              <div class="card-content-action flex">
                <div class="action-link-block g-cta-contact text-center space-top-half space-bottom-half">
                  <a class="action-link g-pstyle3" href="/contact">Get Started</a>
                </div>
              </div>
            </div>

            <!-- Card -->
            <div class="fb-card m1 mt3 mb2">
              <div class="travel-popular-tilt-left mb1">
                <div class="relative travel-results-result">
                  <a class="travel-results-result-link block relative" href="#">
                    <div class="bg-firebrand-red" style="width: 346px; height: 200px"></div>
                  </a>
                  <div class="travel-results-result-like absolute top-0 right-0">
                    <div class="p1">

                      <!-- Like Button -->
                      <label class="travel-like">
                        <input type="checkbox" class="absolute">
                        <div class="travel-like-hearts circle inline-block relative">
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart travel-like-heart-white absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-solid absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-outline absolute mx-auto "></div>
                        </div>
                      </label>
                      <!--/ Like Button -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="h2 line-height-2 mb1">
                <span class="travel-results-result-text">Enterprise</span>
                <span class="travel-results-result-subtext h3">&bull;</span>
                <span class="travel-results-result-subtext h3">$&nbsp;</span><span class="black bold">Contact</span>
              </div>

              <hr class="space-top-half space-bottom-half" />

              <!--<div class="h4 line-height-2">
                <div class="inline-block relative mr1 h3 line-height-2">
                  <div class="travel-results-result-stars green">★★★★★</div>
                </div>
                <span class="travel-results-result-subtext mr1">17 Reviews</span>
                <span class="travel-results-result-subtext"><svg class="travel-icon" viewBox="0 0 77 100"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="7.5" d="M38.794 93.248C58.264 67.825 68 49.692 68 38.848 68 22.365 54.57 9 38 9S8 22.364 8 38.85c0 10.842 9.735 28.975 29.206 54.398a1 1 0 0 0 1.588 0z"></path><circle cx="38" cy="39" r="10" fill="currentColor"></circle></g></svg> Mexico City</span>
              </div>-->

              <div class="card-content-body space-top-half mb1">
                <!-- TODO: Fix/create card paragraph styles! -->
                We offer advanced custom solutions to enterprise clients – contact us for details!
              </div>

              <div class="card-content-action flex">
                <div class="action-link-block g-cta-contact text-center space-top-half space-bottom-half">
                  <a class="action-link g-pstyle3" href="/contact">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Popular -->

    <section class="hero-section bg-light-grey sm-flex pad-top pad-bottom height-half">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2 text-center-force">PPC Ad Budgets</p>
            </div>
            <div class="g-banner">
              <p>If you select the Basic or Premium package, we recommend a monthly ad spend of $200 - $300. This will cover the cost for ad placements on digital ad platforms (Google, Bing, etc.) where your business is being promoted.</p>
              <p>&nbsp;</p>
              <p>To learn more about how the PPC ad spend is used, please contact us.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular -->
    <section id="seo-ppc" class="travel-popular pb4 pt3 relative">
      <div class="overflow-scroll">
        <div class="travel-overflow-container">
          <div class="sm-flex px1 md-px2 mxn1 flex-justify-evenly">
            <!-- Card -->
            <div class="fb-card m1 mt3 mb2">
              <div class="travel-popular-tilt-right mb1">
                <div class="relative travel-results-result">
                  <a class="travel-results-result-link block relative" href="#">
                    <div class="bg-firebrand-red" style="width: 346px; height: 200px"></div>
                    <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="" srcset=""></amp-img>-->
                    <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="../img/travel/activity/surf-day.jpg" srcset="../img/travel/activity/surf-day@2x.jpg 2x, ../img/travel/activity/surf-day.jpg 1x"></amp-img>-->
                  </a>
                  <div class="travel-results-result-like absolute top-0 right-0">
                    <div class="p1">

                      <!-- Like Button -->
                      <label class="travel-like">
                        <input type="checkbox" class="absolute">
                        <div class="travel-like-hearts circle inline-block relative">
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart travel-like-heart-white absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-solid absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-outline absolute mx-auto "></div>
                        </div>
                      </label>
                      <!--/ Like Button -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="h2 line-height-2 mb1">
                <span class="travel-results-result-text">Basic</span>
                <span class="travel-results-result-subtext h3">&bull;</span>
                <span class="travel-results-result-subtext h3">$&nbsp;</span><span class="black bold">500 <small>/ mo.</small></span>
              </div>

              <hr class="space-top-half space-bottom-half" />

              <!--<div class="h4 line-height-2">
                <div class="inline-block relative mr1 h3 line-height-2">
                  <div class="travel-results-result-stars green">★★★★★</div>
                </div>
                <span class="travel-results-result-subtext mr1">241 Reviews</span>
                <span class="travel-results-result-subtext"><svg class="travel-icon" viewBox="0 0 77 100"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="7.5" d="M38.794 93.248C58.264 67.825 68 49.692 68 38.848 68 22.365 54.57 9 38 9S8 22.364 8 38.85c0 10.842 9.735 28.975 29.206 54.398a1 1 0 0 0 1.588 0z"></path><circle cx="38" cy="39" r="10" fill="currentColor"></circle></g></svg> Oaxaca</span>
              </div>-->

              <div class="card-content-body space-top-half flex">
                <ul class="card-list">
                  <li>Minimum 3 months required</li>
                  <li>Monthly analysis and review provided</li>
                  <li>Detailed plan fo SEO/PPC strategy</li>
                  <li>Keyword research and analysis</li>
                  <li>Includes minimum of 10 keywords/phrases</li>
                  <li>Provides 2 original blog articles</li>
                  <li>Ongoing optimization for Google</li>
                  <li>Qualtiy offsite link building (5 links)</li>
                </ul>
              </div>

              <div class="card-content-action flex">
                <div class="action-link-block g-cta-contact text-center space-top-half space-bottom-half">
                  <a class="action-link g-pstyle3" href="/contact">Get Started</a>
                </div>
              </div>
            </div>

            <!-- Card -->
            <div class="fb-card m1 mt3 mb2">
              <div class="travel-results-result relative mb1">
                <div class="relative travel-results-result">
                  <a class="travel-results-result-link block relative" href="#">
                    <div class="bg-firebrand-red" style="width: 346px; height: 200px"></div>
                  </a>
                  <div class="travel-results-result-flags absolute top-0 left-0">
                    <div class="p1"><span class="travel-pill bold">NEW</span></div>
                  </div>
                  <div class="travel-results-result-like absolute top-0 right-0">
                    <div class="p1">

                      <!-- Like Button -->
                      <label class="travel-like">
                        <input type="checkbox" class="absolute">
                        <div class="travel-like-hearts circle inline-block relative">
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart travel-like-heart-white absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-solid absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-outline absolute mx-auto "></div>
                        </div>
                      </label>
                      <!--/ Like Button -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="h2 line-height-2 mb1">
                <span class="travel-results-result-text">Premium</span>
                <span class="travel-results-result-subtext h3">&bull;</span>
                <span class="travel-results-result-subtext h3">$&nbsp;</span><span class="black bold">1000 <small>/ mo.</small></span>
              </div>

              <hr class="space-top-half space-bottom-half" />

              <!--<div class="h4 line-height-2">
                <div class="inline-block relative mr1 h3 line-height-2">
                  <div class="travel-results-result-stars green">★★★★★</div>
                </div>
                <span class="travel-results-result-subtext mr1">42 Reviews</span>
                <span class="travel-results-result-subtext"><svg class="travel-icon" viewBox="0 0 77 100"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="7.5" d="M38.794 93.248C58.264 67.825 68 49.692 68 38.848 68 22.365 54.57 9 38 9S8 22.364 8 38.85c0 10.842 9.735 28.975 29.206 54.398a1 1 0 0 0 1.588 0z"></path><circle cx="38" cy="39" r="10" fill="currentColor"></circle></g></svg> Oaxaca</span>
              </div>-->

              <div class="card-content-body space-top-half flex">
                <ul class="card-list">
                  <li>Minimum 3 months required</li>
                  <li>Monthly analysis and review provided</li>
                  <li>Detailed plan fo SEO/PPC strategy</li>
                  <li>Keyword research and analysis</li>
                  <li>Includes minimum of 10 keywords/phrases</li>
                  <li>Provides 2 original blog articles</li>
                  <li>Ongoing optimization for Google</li>
                  <li>Qualtiy offsite link building (5 links)</li>
                </ul>
              </div>

              <div class="card-content-action flex">
                <div class="action-link-block g-cta-contact text-center space-top-half space-bottom-half">
                  <a class="action-link g-pstyle3" href="/contact">Get Started</a>
                </div>
              </div>
            </div>

            <!-- Card -->
            <div class="fb-card m1 mt3 mb2">
              <div class="travel-popular-tilt-left mb1">
                <div class="relative travel-results-result">
                  <a class="travel-results-result-link block relative" href="#">
                    <div class="bg-firebrand-red" style="width: 346px; height: 200px"></div>
                  </a>
                  <div class="travel-results-result-like absolute top-0 right-0">
                    <div class="p1">

                      <!-- Like Button -->
                      <label class="travel-like">
                        <input type="checkbox" class="absolute">
                        <div class="travel-like-hearts circle inline-block relative">
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart-tiny travel-like-heart-solid absolute"></div>
                          <div class="travel-like-heart travel-like-heart-white absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-solid absolute mx-auto "></div>
                          <div class="travel-like-heart travel-like-heart-outline absolute mx-auto "></div>
                        </div>
                      </label>
                      <!--/ Like Button -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="h2 line-height-2 mb1">
                <span class="travel-results-result-text">Special Requests</span>
                <span class="travel-results-result-subtext h3">&bull;</span>
                <span class="travel-results-result-subtext h3">$&nbsp;</span><span class="black bold">Contact</span>
              </div>

              <hr class="space-top-half space-bottom-half" />

              <!--<div class="h4 line-height-2">
                <div class="inline-block relative mr1 h3 line-height-2">
                  <div class="travel-results-result-stars green">★★★★★</div>
                </div>
                <span class="travel-results-result-subtext mr1">17 Reviews</span>
                <span class="travel-results-result-subtext"><svg class="travel-icon" viewBox="0 0 77 100"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="7.5" d="M38.794 93.248C58.264 67.825 68 49.692 68 38.848 68 22.365 54.57 9 38 9S8 22.364 8 38.85c0 10.842 9.735 28.975 29.206 54.398a1 1 0 0 0 1.588 0z"></path><circle cx="38" cy="39" r="10" fill="currentColor"></circle></g></svg> Mexico City</span>
              </div>-->

              <div class="card-content-body space-top-half mb1">
                <!-- TODO: Fix/create card paragraph styles! -->
                We offer advanced custom solutions to enterprise clients – contact us for details!
              </div>

              <div class="card-content-action flex">
                <div class="action-link-block g-cta-contact text-center space-top-half space-bottom-half">
                  <a class="action-link g-pstyle3" href="/contact">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/ Popular -->
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
