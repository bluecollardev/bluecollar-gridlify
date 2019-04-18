<template>
  <section class="lg-flex flex-center flex-justify-center">
    <div class="sm-flex flex-wrap flex-center flex-justify-center flex-basis-two-thirds">
      <article class="hero-block" v-for="{ node } in $static.allBlogPost.edges" :key="node.id">
        <content-block-layout
          className="pad-top pad-bottom"
          :title="node.title"
          :description="node.content"
          :link="node.path"
          linkText="Read More"
        />
      </article>
    </div>
  </section>
</template>

<script>
  // Import components
  // Import generic component layouts
  import HeroLayout02Col02 from '~/components/layouts/HeroLayout02Col02.vue';
  import SectionBlockLayout02Col01 from '~/components/layouts/SectionBlockLayout02Col01.vue';
  import SectionBlockLayout02Col02 from '~/components/layouts/SectionBlockLayout02Col02.vue';
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';
  import TestimonialBlockLayout from '~/components/layouts/TestimonialBlockLayout.vue';

  export default {
    components: {
      // Inject components
      // Inject generic component layouts
      HeroLayout02Col02,
      SectionBlockLayout02Col01,
      SectionBlockLayout02Col02,
      ContentBlockLayout,
      TestimonialBlockLayout,
    }
  }
</script>

<static-query>
  query Blog {
    allBlogPost(sortBy: "DESC") {
      edges {
        node {
          id
          title
          date (format: "YYYY")
          path
          content
        }
      }
    }
  }
</static-query>
