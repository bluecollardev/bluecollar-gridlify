import { createRouter, createWebHistory } from 'vue-router'

// Import pages
import Index from '~/pages/Index.vue'
import Company from '~/pages/Company.vue'
import Product from '~/pages/Product.vue'
import OpenSource from '~/pages/OpenSource.vue'
import Contact from '~/pages/Contact.vue'
import Blog from '~/pages/Blog.vue'
import BlogPost from '~/templates/BlogPost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    // Directory of the public repositories, grouped by project
    path: '/open-source',
    name: 'OpenSource',
    component: OpenSource
  },
  {
    // One page per product, driven by src/data/Products.yml
    path: '/products/:slug',
    name: 'Product',
    component: Product
  },
  {
    // Case Studies is a modal on the home page; this path just opens it
    path: '/case-studies',
    name: 'CaseStudies',
    component: Index
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {top: 0}
    }
  }
})

export default router
