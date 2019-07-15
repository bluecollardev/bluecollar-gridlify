// vue-markdown is broken, babel deps issues...
// import VueMarkdown from 'vue-markdown'
// Use marked instead
//import marked from 'marked';

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
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
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
    onLinkClicked: {
      type: Function,
      default: null,
    },
    caption: {
      type: String,
      default: '',
    },
    subCaption: {
      type: String,
      default: '',
    },
    datePublished: {
      type: String,
      default: '',
    },
  },
  computed: {
    classNameString() {
      return (typeof this.className === 'string' && this.className.length > 0) ? this.className : '';
    },
    compiledDescription() {
      // TODO: Either marked has an issue, or it can ONLY deal with markdown; this is blowing up in prod...
      return this.description;
      // return marked(this.description);
    }
  },
  methods: {
    linkClicked() {
      if (typeof this.onLinkClicked === 'function') {
        this.onLinkClicked();
      }
    }
  }
};
