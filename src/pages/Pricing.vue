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
              <a class="action-link space-top g-pstyle3" routerLink="/contact">Get Started</a>
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

    <!-- Popular -->
    <section id="web-development" class="travel-popular pb4 pt3 relative">
      <header class="max-width-3 mx-auto px1 md-px2">
        <h3 class="h1 bold line-height-2 md-hide lg-hide" aria-hidden="true">Web<br>Development</h3>
        <h3 class="h1 bold line-height-2 xs-hide sm-hide center">Web Development</h3>
      </header>
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
                  <a class="action-link g-pstyle3" routerLink="/contact">Get Started</a>
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
                  <a class="action-link g-pstyle3" routerLink="/contact">Get Started</a>
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
                  <a class="action-link g-pstyle3" routerLink="/contact">Contact Us</a>
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
              <p class="g-pstyle2 text-center-force">E-commerce Payment Integrations</p>
            </div>
            <div class="g-banner">
              <p>E-commerce payment functionality can be added to custom projects. Whether you need a simple shopping cart and check-out system added to your website, or custom-built enterprise software, we can work with you to deliver the right solution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular -->
    <section id="social-media" class="travel-popular pb4 pt3 relative">
      <header class="max-width-3 mx-auto px1 md-px2">
        <h3 class="h1 bold line-height-2 md-hide lg-hide" aria-hidden="true">Social<br>Media</h3>
        <h3 class="h1 bold line-height-2 xs-hide sm-hide center">Social Media</h3>
      </header>
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
                  <a class="action-link g-pstyle3" routerLink="/contact">Get Started</a>
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
                  <a class="action-link g-pstyle3" routerLink="/contact">Get Started</a>
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
                  <a class="action-link g-pstyle3" routerLink="/contact">Contact Us</a>
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

    <!-- Popular -->
    <section id="seo-ppc" class="travel-popular pb4 pt3 relative">
      <header class="max-width-3 mx-auto px1 md-px2">
        <h3 class="h1 bold line-height-2 md-hide lg-hide" aria-hidden="true">SEO + PPC</h3>
        <h3 class="h1 bold line-height-2 xs-hide sm-hide center">SEO + PPC</h3>
      </header>
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
                  <a class="action-link g-pstyle3" routerLink="/contact">Get Started</a>
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
                  <a class="action-link g-pstyle3" routerLink="/contact">Get Started</a>
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
                  <a class="action-link g-pstyle3" routerLink="/contact">Contact Us</a>
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

    <!-- Featured -->
    <section class="travel-featured pt3 relative clearfix hide">
      <header class="max-width-2 mx-auto px1 md-px2 relative">
        <h3 class="travel-featured-heading h1 bold line-height-2 mb2 center">Featured Categories</h3>
      </header>
      <div class="max-width-3 mx-auto relative">
        <div class="travel-featured-grid sm-flex flex-wrap items-stretch">
          <div class="col-12 md-col-6 sm-flex items-stretch flex-auto">
            <a href="travel-results.amp" class="travel-featured-tile sm-flex flex-auto relative travel-featured-color-blue" on="tap:AMP.setState({fields_query: 'New York', query_query: 'New York'})">
              <div class="travel-object-cover flex-auto bg-firebrand-red" style="width: 336px; height: 507px"></div>
              <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="" srcset=""></amp-img>-->
              <div class="travel-featured-overlay absolute z1 center top-0 right-0 bottom-0 left-0 white p2">
                <div class="travel-featured-tile-heading caps bold line-height-2 h3">New York</div>
                <div class="h5">379 adventures</div>
              </div>
            </a>
            <div class="sm-flex flex-column items-stretch flex-auto">
              <a href="travel-results.amp" class="travel-featured-tile sm-flex flex-auto relative travel-featured-color-cyan" on="tap:AMP.setState({fields_query: 'Barcelona', query_query: 'Barcelona'})">
                <div class="travel-object-cover flex-auto bg-firebrand-red" style="width: 246px; height: 246px"></div>
                <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="" srcset=""></amp-img>-->
                <div class="travel-featured-overlay absolute z1 center top-0 right-0 bottom-0 left-0 white p2">
                  <div class="travel-featured-tile-heading bold caps line-height-2 h3">Barcelona</div>
                  <div class="h5">68 adventures</div>
                </div>
              </a>
              <a href="travel-results.amp" class="travel-featured-tile sm-flex flex-auto pointer relative travel-featured-color-orange" on="tap:AMP.setState({fields_query: 'Paris', query_query: 'Paris'})">
                <div class="travel-object-cover flex-auto bg-firebrand-red" style="width: 264px; height: 264px"></div>
                <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="" srcset=""></amp-img>-->
                <div class="travel-featured-overlay absolute z1 center top-0 right-0 bottom-0 left-0 white p2">
                  <div class="travel-featured-tile-heading bold caps line-height-2 h3">Paris</div>
                  <div class="h5">221 adventures</div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-12 md-col-6 sm-flex items-stretch flex-auto">
            <div class="sm-flex flex-column items-stretch flex-auto">
              <a href="travel-results.amp" class="travel-featured-tile sm-flex flex-auto pointer relative travel-featured-color-purple" on="tap:AMP.setState({fields_query: 'Tokyo', query_query: 'Tokyo'})">
                <div class="travel-object-cover flex-auto bg-firebrand-red" style="width: 276px; height: 207px"></div>
                <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="" srcset=""></amp-img>-->
                <div class="travel-featured-overlay absolute z1 center top-0 right-0 bottom-0 left-0 white p2">
                  <div class="travel-featured-tile-heading caps bold line-height-2 h3">Tokyo</div>
                  <div class="h5">500+ adventures</div>
                </div>
              </a>
              <a href="travel-results.amp" class="travel-featured-tile sm-flex flex-auto relative travel-featured-color-cornflower" on="tap:AMP.setState({fields_query: 'Chicago', query_query: 'Chicago'})">
                <div class="travel-object-cover flex-auto bg-firebrand-red" style="width: 264px; height: 286px"></div>
                <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="" srcset=""></amp-img>-->
                <div class="travel-featured-overlay absolute z1 center top-0 right-0 bottom-0 left-0 white p2">
                  <div class="travel-featured-tile-heading caps bold line-height-2 h3">Chicago</div>
                  <div class="h5">143 adventures</div>
                </div>
              </a>
            </div>
            <a href="travel-results.amp" class="travel-featured-tile sm-flex flex-auto relative travel-featured-color-teal" on="tap:AMP.setState({fields_query: 'Reykjavik', query_query: 'Reykjavik'})">
              <div class="travel-object-cover flex-auto bg-firebrand-red" style="width: 312px; height: 507px"></div>
              <!--<amp-img class="block rounded" width="346" height="200" noloading="" src="" srcset=""></amp-img>-->
              <div class="travel-featured-overlay absolute z1 center top-0 right-0 bottom-0 left-0 white p2">
                <div class="travel-featured-tile-heading caps bold h3">Reykjavik</div>
                <div class="h5">87 adventures</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--/ Featured -->


    <!-- Search -->
    <section class="travel-search py4 xs-hide sm-hide relative pad-top pad-bottom space-top bg-firebrand-red">
      <div class="px1 md-px2 pb1 relative">
        <h3 class="travel-search-heading travel-spacing-none h1 bold mb2 center">Sign up for our AMP Blogging App Demo</h3>

        <div class="sm-flex justify-center pb2">
          <div class="travel-input-group sm-flex items-center col-8">
            <input class="travel-input travel-input-big line-height-2 block col-12 flex-auto rounded-left" type="text" name="query" placeholder="Please enter your e-mail address. Don't worry, we won't spam you." on="change:AMP.setState({fields_query: event.value})" value="" [value]="fields_query">
            <span class="travel-input-group-sep travel-border-gray relative z1 block"></span>
            <a href="travel-results.amp" class="travel-link travel-input travel-input-big line-height-2 link rounded-right nowrap text-decoration-none" on="
              tap:AMP.setState({
                  ui_reset: false,
                  ui_filterPane: false,
                  query_query: fields_query,
                  fields_query_edited: false,
                  query_departure: fields_departure,
                  fields_departure_edited: false,
                  query_return: fields_return,
                  fields_return_edited: false,
                  query_maxPrice: fields_maxPrice,
                  fields_maxPrice_edited: false,
                  query_city: fields_city,
                  fields_city_edited: false,
                  query_type: fields_type,
                  fields_type_edited: false,
                  query_sort: fields_sort,
                  fields_sort_edited: false,
              })
            ">
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
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
