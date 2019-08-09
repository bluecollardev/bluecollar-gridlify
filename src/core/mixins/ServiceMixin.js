import marked from 'marked';

// Import static data
import ServiceData from '~/data/Services.yml';

export default {
  computed: {
    serviceContent() {
      return ServiceData;
    }
  },
  methods: {
    getServices(includeActive) {
      includeActive = typeof includeActive === 'boolean' ? includeActive : true;

      let services = (this.serviceContent.services instanceof Array) ? this.serviceContent.services : [];

      if (!includeActive && this.activeService !== null) {
        return services.filter((service) => service.id !== this.activeService.id);
      }

      services = services.map(item => {
        item = item || {};

        item = Object.assign({}, item, {
          //summary: (item.summary) ? marked(item.summary) : null,
          description: (item.description) ? marked(item.description) : null
        });

        return item;
      });

      return services;
    },
    getService(id) {
      if (!id || !this.serviceContent) return null;

      let items = this.serviceContent.services || [];

      if (items instanceof Array && items.length > 0) {
        items = items.filter(item => item.id === id);

        if (!items.length > 0) return null;

        let item = items.pop();

        item = Object.assign({}, item, {
          //summary: (item.summary) ? marked(item.summary) : null,
          description: (item.description) ? marked(item.description) : null
        });

        return item;
      }

      return null
    },
    getServiceByIndex(idx) {
      if (isNaN(idx) || !this.serviceContent) return null;

      let items = this.serviceContent.services || [];

      if (items instanceof Array && items.length > idx) {
        return items[idx];
      }

      return null
    }
  }
}
