// Import static data
import TestimonialData from '~/data/Testimonial.yml';

export default {
  computed: {
    testimonialContent() {
      return TestimonialData;
    }
  },
  methods: {
    getTestimonial(idx) {
      let items = this.testimonialContent.items;

      if (items instanceof Array && items.length > idx) {
        return items[idx];
      }

      return null
    }
  }
}
