<template>
  <!--<ul id="blog">
    <li v-for="{ node } in $static.allBlogPost.edges" :key="node.id">
      <g-link :to="node.path">
        <h6 v-html="node.title"/>
      </g-link>
      <span v-html="node.date"/>
    </li>
  </ul>-->
</template>

<static-query>
  query Blog {
    allBlogPost(sortBy: "DESC") {
      edges {
        node {
          id
          title
          date (format: "YYYY")
          path
        }
      }
    }
  }
</static-query>
