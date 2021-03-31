<template>
  <div>pops p</div>
</template>

<page-query>
query ($id: ID!) {
	post (id: $id){
    id
		title
    content
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