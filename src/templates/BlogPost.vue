<template>
  <Layout>
    <Header/>
    <section class="hero-section sm-flex space-top-2x space-bottom-2x pad-top pad-bottom">
      <div class="sm-flex flex-auto flex-center flex-justify-center">
        <div class="content-block">
          <div v-if="post">
            <div class="space-bottom">
              <p class="g-pstyle2 text-center-force">{{ post.title }}</p>
            </div>
            <div class="g-banner">
              <div v-html="post.content"></div>
            </div>
          </div>
          <div v-else>
            <p>Blog post not found.</p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </Layout>
</template>

<script>
import { getBlogPostBySlug } from '~/utils/blog.js'
import Layout from '~/layouts/Default.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Layout,
    Header,
    Footer
  },
  data() {
    return {
      post: null
    }
  },
  mounted() {
    const slug = this.$route.params.slug
    this.post = getBlogPostBySlug(slug)

    if (this.post) {
      document.title = this.post.title
    }
  },
  watch: {
    '$route.params.slug'(newSlug) {
      this.post = getBlogPostBySlug(newSlug)
    }
  }
}
</script>
