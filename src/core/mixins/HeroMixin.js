import HeroData from '~/data/Hero.yml';

import marked from 'marked';

export default {
  computed: {
    heroContent() {
      // TODO: Enforce pageData structure
      let data = this.pageData.heroes || HeroData;

      return data;
    }
  },
  methods: {
    getPageSections() {
      return (this.heroContent instanceof Array) ? this.heroContent : [];
    },
    getHero(idx) {
      let items = this.heroContent;

      if (items instanceof Array && items.length > idx) {
        console.log('hero found');
        console.log(items[idx]);
        return items[idx];
      }

      return null
    },
    getHeroById(itemId) {
      let items = this.heroContent.filter(item => {
        return item.id === itemId;
      });

      if (items instanceof Array && items.length > 0) {
        // TODO: Use an adapter or something
        let item = items[0] || {};
        item = Object.assign({}, item, {
          description: (item.description) ? marked(item.description) : ''
        });

        return item;
      }

      return null
    },
  }
}
