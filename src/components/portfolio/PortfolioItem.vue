<template>
  <div class="timeline__item clearfix space-top-2x">
    <div class="timeline__item__date">{{ getFormattedDate(this.project) }}</div>
    <div class="timeline__item__content">
      <div class="timeline__item__content__logo">
        <span class="icon icon--content-logo"></span>
      </div>
      <h4 class="timeline__item__content__subtitle">
        {{ (typeof this.project.jobTypeText === 'string' && this.project.jobTypeText.length > 0) ? this.project.jobTypeText : 'Client' }}: {{ this.project.client }}
      </h4>
      <h3 class="timeline__item__content__title">
        {{ this.project.projectName }}
      </h3>
      <span class="timeline__item__content__subtitle">
        {{ `${getFormattedStartDate(this.project)} - ${getFormattedEndDate(this.project)}` }}
      </span>
      <div v-if="typeof this.project.image === 'string' && this.project.image.length > 3" class="project-image xs-pad-top xs-pad-bottom">
        <img v-if="this.project.displayImage" class="lozad space-top" v-bind:src="this.project.image" sizes="(max-width: 40rem) 320px, 1280px" v-bind:srcset="getImagesSrcSet(this.project.image)" alt="" />
      </div>
      <div class="timeline__item__content__description" v-html="compiledDescription"></div>
      <hr v-if="this.testimonial" class="space-top-half space-bottom-half" />
      <div v-if="this.testimonial" class="timeline__item__content__description">
        <!-- Testimonial -->
        <div class="testimonial flex">
          <div>
            <div class="g-services">
              <p><strong>{{ this.testimonial.testimonial }}</strong></p>
            </div>
            <div class="g-services flex flex-center space-top">
              <img class="banner-image badge" v-bind:src="this.testimonial.image" alt="" />
              <div class="space-left">
                <p><strong>{{ `${this.testimonial.reviewedBy}` }}</strong></p>
                <p>
                  <small>{{ `${this.testimonial.position}` }}</small><br />
                  <small>{{ `${this.testimonial.organization}` }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline__item__content__techs">
        <span class="icon icon--html5"></span>
        <span class="icon icon--css3"></span>
        <span class="icon icon--javascript"></span>
      </div>
    </div>
  </div>
</template>

<script>
  // Image lazy loader, just add class="lozad" to elements
  import lozad from 'lozad';

  // vue-markdown is broken, babel deps issues...
  // import VueMarkdown from 'vue-markdown'
  // Use marked instead
  import marked from 'marked';

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	export default {
	  props: {
	    project: {
	      type: Object
      },
      testimonial: {
	      type: Object
      }
    },
    filters: {
      truncate: function(text, length) {
        return "background-image: url(" + text.substring(length) + ")"
      }
    },
    computed: {
	    compiledDescription() {
	      if (this.project && this.project.description) {
	        return marked(this.project.description);
        }

	      return null;
      }
    },
    methods: {
      /**
       * Allows the browser to choose an appropriate resolution image by using srcset with x-descriptors and without sizes.
       * @param path
       */
      getImagesSrcSet(path) {
        const parts = path.split('.');
        let ext = parts.pop();
        let base = parts.join('.');


        // Load srcset small to large
        return `${base}-small.${ext} 100vw, ${base}-small@2x.${ext} 100vw 2x, ${base}-small@3x.${ext} 100vw 3x, ${base}.${ext} 1280px, ${base}@2x.${ext} 1280px 2x, ${base}@3x.${ext} 1280px 3x`;
      },
      getFormattedDate(project) {
        const startDate = new Date(project.startDate);
        const endDate = new Date(project.endDate);
        // Normalize dates, we don't care about exact time anyway
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);

        // TODO: Display a range for long term projects?
        return `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
      },
      getFormattedStartDate(project) {
        const startDate = new Date(project.startDate);
        const endDate = new Date(project.endDate);
        // Normalize dates, we don't care about exact time anyway
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);

        // TODO: Display a range for long term projects?
        return `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
      },
      getFormattedEndDate(project) {
        const startDate = new Date(project.startDate);
        const endDate = new Date(project.endDate);
        // Normalize dates, we don't care about exact time anyway
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);

        // TODO: Display a range for long term projects?
        return `${months[endDate.getMonth()]} ${endDate.getFullYear()}`;
      }
    },
    mounted() {
      const observer = lozad(); // lazy loads elements with default selector as '.lozad'
      observer.observe();
    }
  }
</script>

<style lang="scss">
  img.badge {
    width: 100px;
    height: 100px;
    -o-object-fit: cover;
    max-width: none;
    object-fit: cover;
  }

  .badge {
      border-radius: 50%;
  }

  @media screen and (min-width: 1400px) {
    .hero-testimonial .hero-image-wrapper img {
      top: 10vh !important;
    }

    .hero-testimonial .testimonial {
      position: relative;
      top: -7vh;
    }
  }
</style>
