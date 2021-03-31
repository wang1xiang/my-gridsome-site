<template>
  <Layout>
    <div>
      <h1>Posts 2</h1>
      <ul>
        <li v-for="post in $page.allPost.edges.node" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
query {
	allPost {
		edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>

export default {
  name: 'Posts2'
}
</script>

<style></style>
