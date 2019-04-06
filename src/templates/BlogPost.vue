<template>
  <Layout>
    <Header/>
    <div class="article">
      <div class="meta">
        <h1>{{ $page.blogPost.title }}</h1>
        <span>{{ $page.blogPost.date }}</span>
      </div>
      <div class="article__content" v-html="$page.blogPost.content" />
    </div>
    <Footer/>
  </Layout>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    },
    metaInfo () {
      return {
        title: this.$page.blogPost.title
      }
    }
  }
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "DD MMMM YYYY")
      content
    }
  }
</page-query>
