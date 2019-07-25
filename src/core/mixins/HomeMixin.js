import marked from 'marked';

// Import static data
import HomeData from '~/data/Home.yml';

export default {
  computed: {
    homePageServiceContent() {
      return HomeData.services;
    }
  },
  methods: {
    getHomePageServices(includeActive) {
      includeActive = typeof includeActive === 'boolean' ? includeActive : true;

      let services = (this.homePageServiceContent instanceof Array) ? this.homePageServiceContent : [];

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
    getHomePageService(id) {
      let items = this.homePageServiceContent;

      if (items instanceof Array && items.length > 0) {
        items = items.filter(item => item.id === id);

        if (!items.length > 0) return undefined;

        let item = items.pop();

        item = Object.assign({}, item, {
          //summary: (item.summary) ? marked(item.summary) : null,
          description: (item.description) ? marked(item.description) : null
        });

        return item;
      }

      return null
    },
    getHomePageServiceByIndex(idx) {
      let items = this.homePageServiceContent;

      if (items instanceof Array && items.length > idx) {
        return items[idx];
      }

      return null
    }
  }
}
