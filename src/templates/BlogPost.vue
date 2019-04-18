<template>
  <Layout>
    <Header/>
    <section class="hero-section sm-flex space-top-2x space-bottom-2x pad-top pad-bottom">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div>
            <div class="space-bottom">
              <p class="g-pstyle2 text-center-force">{{ $page.blogPost.title }}</p>
            </div>
            <div class="g-banner">
              <div v-html="$page.blogPost.content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
