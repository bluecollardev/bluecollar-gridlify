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
      <!-- Social icons live in the header now -->

    </div>
  </footer>
</template>
