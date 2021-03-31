<template>
  <Layout>
    <div>
      <h1>Posts 2</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Posts2',
  
}
</script>

<style></style>
