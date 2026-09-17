<template>
  <footer class="flex flex-column">
    <div class="sm-flex space-top flex-wrap space-bottom">
      <div
          class="sm-flex xs-flex-basis-full sm-flex-basis-half md-flex-basis-half md-lg-flex-basis-three-quarters lg-flex-basis-three-quarters space-bottom">
        <div class="flex-basis-two-thirds sm-flex sm-flex-justify-left">
          <div class="sm-flex flex-justify-between">
            <div class="copyright g-footer">
              <p class="g-pstyle15">{{ $t('footer.copyright') }}<br/><small><small>{{
                  $t('footer.location')
                }}</small></small></p>
            </div>
          </div>
        </div>
      </div>
      <div
          class="sm-flex xs-flex-basis-full sm-flex-basis-half md-flex-basis-half md-lg-flex-basis-quarter lg-flex-basis-quarter xl-flex-basis-quarter flex-justify-end">
        <div class="social">
          <ul class="ampstart-social-follow list-reset flex justify-around xs-flex-justify-center items-center flex-wrap m0">
            <!-- Facebook disabled for now
            <li>
              <a href="https://www.facebook.com/bluecollardev/" target="_blank" class="inline-block p1"
                 aria-label="Link to Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47.2" viewBox="0 0 56 55"><title>
                  Facebook</title>
                  <path
                      d="M47.5 43c0 1.2-.9 2.1-2.1 2.1h-10V30h5.1l.8-5.9h-5.9v-3.7c0-1.7.5-2.9 3-2.9h3.1v-5.3c-.6 0-2.4-.2-4.6-.2-4.5 0-7.5 2.7-7.5 7.8v4.3h-5.1V30h5.1v15.1H10.7c-1.2 0-2.2-.9-2.2-2.1V8.3c0-1.2 1-2.2 2.2-2.2h34.7c1.2 0 2.1 1 2.1 2.2V43"
                      class="ampstart-icon ampstart-icon-fb"></path>
                </svg>
              </a>
            </li>
            -->
            <li>
              <a href="https://www.linkedin.com/in/lucaslopatka" target="_blank" rel="noopener" class="inline-block p1"
                 aria-label="Link to LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47.2" viewBox="-5.1 -4.6 32.7 32.7"><title>
                  LinkedIn</title>
                  <path
                      d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.02h4.52V24H.24V8.02zM8.34 8.02h4.33v2.18h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.52v-7.3c0-1.74-.03-3.98-2.42-3.98-2.43 0-2.8 1.9-2.8 3.86V24H8.34V8.02z"
                      class="ampstart-icon ampstart-icon-linkedin"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
