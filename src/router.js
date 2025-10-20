import { createRouter, createWebHistory } from 'vue-router'

// Import pages
import Index from '~/pages/Index.vue'
import Company from '~/pages/Company.vue'
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
      return { top: 0 }
    }
  }
})

export default router
