<template>
  <div class="content-block testimonial-block-wrapper text-center sm-space-bottom-half">
    <div v-bind:class="classNameString">
      <div class="space-bottom-half g-services">
        <p class="g-pstyle8 text-center" v-html="this.testimonial"></p>
      </div>
    </div>
    <img class="circle space-bottom-half testimonial-profile-circle" v-bind:src="this.image" alt="" />
    <div v-bind:class="classNameString">
      <div class="g-services">
        <p class="g-pstyle10 text-center"><strong>{{ this.reviewedBy }} - {{ this.position }}</strong></p>
        <p class="g-pstyle10 text-center"><em>{{ this.organization }}</em></p>
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
  .testimonial-profile-circle {
    width: 50%;
  }
</style>
