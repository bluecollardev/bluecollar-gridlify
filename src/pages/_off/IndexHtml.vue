<angle-mosaic bgColor="bg-bc-blue">
      <template v-slot:slot1Bg>
        <div class="bg-evening-blue video-block-bg drop-shadow rotate-right is-hidden--sm-down">
        </div>

      </template>
      <template v-slot:slot1Front>
        <!--<content-block-layout
          className="pad-top ml-auto mr-auto"
          v-if="getHomePageServiceByIndex(0).linkText"
          image="/images/icons/apps-02.svg"
          :title="getHomePageServiceByIndex(0).title"
          :description="getHomePageServiceByIndex(0).description"
          :link="getHomePageServiceByIndex(0).link"
          :linkText="getHomePageServiceByIndex(0).linkText"
          :titleAnimation="textEffects.slideUp"
          :descriptionAnimation="{
            effect: contentEffects.simple,
            settings: {
              opacity: [0, 1],
              duration: 2000
            }
          }"
        />-->
      </template>

      <template v-slot:slot2Front>
        <!--<div
          v-if="getTestimonialByIndex(1)"
          class="flex flex-column flex-center flex-basis-third">
          <testimonial-block-layout
            className="sm-space-top-half sm-space-bottom-half"
            :testimonial="getTestimonialByIndex(1).testimonial"
            :reviewedBy="getTestimonialByIndex(1).reviewedBy"
            :position="getTestimonialByIndex(1).position"
            :organization="getTestimonialByIndex(1).organization"
            :image="getTestimonialByIndex(1).image"
            :testimonialAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateY: [-60, 0],
                duration: 3000
              }
            }"
            :reviewedByAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateY: [60, 0],
                duration: 3000
              }
            }"
          />
        </div>-->
      </template>

      <template v-slot:slot3Bg>
        <div class="bg-evening-blue video-block-bg drop-shadow rotate-left is-hidden--sm-down">
        </div>
      </template>
      <template v-slot:slot3Front>
        <!--<content-block-layout
          className="pad-top ml-auto mr-auto pad-bottom"
          v-if="getHomePageServiceByIndex(2).linkText"
          image="/images/icons/websites.svg"
          :title="getHomePageServiceByIndex(2).title"
          :description="getHomePageServiceByIndex(2).description"
          :link="getHomePageServiceByIndex(2).link"
          :linkText="getHomePageServiceByIndex(2).linkText"
          :titleAnimation="textEffects.slideUp"
          :descriptionAnimation="{
            effect: contentEffects.simple,
            settings: {
              opacity: [0, 1],
              duration: 2000
            }
          }"
        />-->
      </template>

      <template v-slot:slot4Front>
        <!--<div
          v-if="getTestimonialByIndex(0)"
          class="sm-flex flex-column flex-center flex-basis-third md-pad-top">
          <testimonial-block-layout
            className="sm-space-top-half sm-space-bottom-half"
            :testimonial="getTestimonialByIndex(0).testimonial"
            :reviewedBy="getTestimonialByIndex(0).reviewedBy"
            :position="getTestimonialByIndex(0).position"
            :organization="getTestimonialByIndex(0).organization"
            :image="getTestimonialByIndex(0).image"
            :testimonialAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 3000
              }
            }"
            :reviewedByAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [60, 0],
                duration: 3000
              }
            }"
          />
        </div>-->
      </template>

      <template v-slot:slot5Bg>
        <div class="bg-evening-blue video-block-bg scale-center drop-shadow-up is-hidden--sm-down">
        </div>
      </template>
      <template v-slot:slot5Front>
        <!--<content-block-layout
          className="pad-top ml-auto mr-auto"
          v-if="getHomePageServiceByIndex(1).linkText"
          image="/images/icons/server.svg"
          :title="getHomePageServiceByIndex(1).title"
          :description="getHomePageServiceByIndex(1).description"
          :link="getHomePageServiceByIndex(1).link"
          :linkText="getHomePageServiceByIndex(1).linkText"
          :titleAnimation="textEffects.slideUp"
          :descriptionAnimation="{
            effect: contentEffects.simple,
            settings: {
              opacity: [0, 1],
              duration: 2000
            }
          }"
        />-->
      </template>

      <template v-slot:slot6Front>
        <!--<div
          v-if="getTestimonialByIndex(2)"
          class="sm-flex flex-column flex-center flex-basis-third md-pad-top">
          <testimonial-block-layout
            className="sm-space-top-half sm-space-bottom-half"
            :testimonial="getTestimonialByIndex(2).testimonial"
            :reviewedBy="getTestimonialByIndex(2).reviewedBy"
            :position="getTestimonialByIndex(2).position"
            :organization="getTestimonialByIndex(2).organization"
            :image="getTestimonialByIndex(2).image"
            :testimonialAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [60, 0],
                duration: 3000
              }
            }"
            :reviewedByAnimation="{
              effect: contentEffects.simple,
              settings: {
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 3000
              }
            }"
          />
        </div>-->
      </template>
    </angle-mosaic>
