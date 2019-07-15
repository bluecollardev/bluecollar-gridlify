/**
 * This has no purpose other than to serve as a template
 */

export default {
  computed: {
    pageSectionContent() {
      throw new Error('pageSectionContent must be implemented in classes that use SectionMixin');
    }
  },
  methods: {
    getPageSections() {
      return (this.pageSectionContent instanceof Array) ? this.pageSectionContent : [];
    },
    getSection(idx) {
      let items = this.pageSectionContent;

      if (items instanceof Array && items.length > idx) {
        console.log('section found');
        console.log(items[idx]);
        return items[idx];
      }

      return null
    }
  }
}
