<template>
  <div class="content-block testimonial-block-wrapper text-center sm-space-bottom-half">
    <div v-bind:class="classNameString">
      <div class="sm-space-bottom-half g-services">
        <p class="g-pstyle10 text-center" v-html="this.testimonial"></p>
      </div>
    </div>

    <div class="g-services flex flex-center">
      <div class="circle-composite small space-bottom-half ml-auto mr-auto testimonial-profile-circle">
        <div class="dark-blue-circle-mask">
          <div class="dark-blue-circle"></div>
        </div>
        <div class="inner-circle">
          <div class="blue-circle"></div>
          <img class="circle" v-bind:src="this.image" alt="" />
        </div>
      </div>

      <div v-bind:class="classNameString">
        <div class="g-services">
          <p class="g-pstyle10 text-center">
            <strong>{{ this.reviewedBy }}</strong><br />
            <strong>{{ this.position }}</strong>
          </p>
          <p class="g-pstyle10 text-center"><small><em>{{ this.organization }}</em></small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // TODO: Supply models via props??
  props: {
    className: {
      type: String,
      default: null
    },
    flipLayout: {
      type: Boolean,
      default: false,
    },
    testimonial: {
      type: String,
      default: '',
    },
    reviewedBy: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: '',
    },
    organization: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    classNameString() {
      return (typeof this.className === 'string' && this.className.length > 0) ? `${this.className}` : '';
    }
  }
};
</script>


<style>
</style>
