// Import static data
import TestimonialData from '~/data/Testimonial.yml';
import marked from "marked";

export default {
  computed: {
    testimonialContent() {
      return TestimonialData;
    }
  },
  methods: {
    getTestimonial(id) {
      if (!id || !this.testimonialContent) return null;

      let items = this.testimonialContent.items || [];

      if (items instanceof Array && items.length > 0) {
        items = items.filter(item => item.id === id);

        if (!items.length > 0) return null;

        return items.pop();
      }

      return null
    },
    getTestimonialByIndex(idx) {
      if (isNaN(idx) || !this.testimonialContent) return null;

      let items = this.testimonialContent.items || [];

      if (items instanceof Array && items.length > idx) {
        return items[idx];
      }

      return null
    },
  }
}
