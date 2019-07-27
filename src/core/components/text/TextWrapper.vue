<script>
  const validTypes = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b', 'strong', 'i', 'em', 'div'];

  // Create wrapper component
  export default {
    props: {
      tag: {
        type: String,
        default: 'span',
        validator: (value) => validTypes.indexOf(value) !== -1
      },
      text: String
    },
    render(createElement) {
      if (!this.$isServer) {
        return createElement(
          this.tag,
          {
            class: 'title text-center mr-3 ml-3',
            props: this.props,
          },
          this.$slots.default
        );
      }

      return false;
    }
  }
</script>
