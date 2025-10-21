// Utility to load and parse blog posts from markdown files
import { marked } from 'marked'

// Import blog posts directly
const blogPosts = [
  {
    id: '1',
    slug: '2018-11-10-test-01',
    title: 'Test Blog Post 01',
    date: '2018-11-10',
    path: '/blog/2018-11-10-test-01',
    content: `# Test Blog Post 01

This is a test blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Features

- Feature 1
- Feature 2
- Feature 3

Stay tuned for more updates!`
  },
  {
    id: '2',
    slug: '2018-11-10-test-02',
    title: 'Test Blog Post 02',
    date: '2018-11-10',
    path: '/blog/2018-11-10-test-02',
    content: `# Test Blog Post 02

Another test blog post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## More Information

Coming soon...`
  }
]

export function getAllBlogPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getBlogPostBySlug(slug) {
  const post = blogPosts.find(p => p.slug === slug)
  if (post) {
    return {
      ...post,
      content: marked(post.content)
    }
  }
  return null
}
