<template>
  <Layout>

    
  </Layout>
</template>

<page-query>
query ($id: ID!) {
	post (id: $id){
    id
		title
    path
  }
}
</page-query>

<script>
export default {
  name: 'Page'
}

</script>
<style>
</style>