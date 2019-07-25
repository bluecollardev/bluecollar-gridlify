// Import static data
import TestimonialData from '~/data/Testimonial.yml';

export default {
  computed: {
    testimonialContent() {
      return TestimonialData;
    }
  },
  methods: {
    getTestimonial(id) {
      if (!id) return null;

      let items = this.testimonialContent.items.filter(item => {
        return item.id === id;
      });

      if (items instanceof Array && items.length > 0) {
        return items[0];
      }

      return null
    },
    getTestimonialByIndex(idx) {
      let items = this.testimonialContent.items;

      if (items instanceof Array && items.length > idx) {
        return items[idx];
      }

      return null
    },
  }
}
