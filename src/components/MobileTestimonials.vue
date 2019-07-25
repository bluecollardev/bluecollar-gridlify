<template>
  <!-- TODO: Important! Make this pattern a layout before deleting! -->
  <!--<section class="hero-section col-2-squares n1-white n2-light-grey no-pad-bottom lg-flex">
    <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="service-detail-card-inner content-block">
        <div class="service-detail-card-front">
          <content-block-layout
            className="pad-top"
            v-if="getService(0).linkText"
            :title="getService(0).title"
            :description="getService(0).description"
            :link="getService(0).link"
            :linkText="getService(0).linkText"
          />
        </div>
        <div class="service-detail-card-back">
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
        </div>
      </div>
    </div>
  </section>-->

  <!--<section class="lg-flex">
    <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="service-detail-card-inner content-block">
        <div class="service-detail-card-front">
          <content-block-layout
            className="pad-top"
            v-if="getService(1).linkText"
            :title="getService(1).title"
            :description="getService(1).description"
            :link="getService(1).link"
            :linkText="getService(1).linkText"
          />
        </div>
        <div class="service-detail-card-back">
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
        </div>
      </div>
    </div>
  </section>-->

  <!--<section class="hero-section col-2-squares n1-white n2-light-grey no-pad-bottom lg-flex">
    <div class="service-detail-card-top sm-flex flex-center flex-justify-center flex-basis-half">
      <div class="service-detail-card-inner content-block">
        <div class="service-detail-card-front">
          <content-block-layout
            className="pad-top pad-bottom"
            v-if="getService(2).linkText"
            :title="getService(2).title"
            :description="getService(2).description"
            :link="getService(2).link"
            :linkText="getService(2).linkText"
          />
        </div>

        <div class="service-detail-card-back">
          <content-block-layout
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
          />
        </div>
      </div>
    </div>
  </section>-->
</template>
