<template>
  <Layout>
    <div>
      <h1>Posts 2</h1>
      <ul>
        <li v-for="post in $pages.posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </Layout>
</template>

<page>
query {
	posts: post (){
    id
		title
    content
  }
}
</-page>

<script>

export default {
  name: 'Posts2'
}
</script>

<style></style>
