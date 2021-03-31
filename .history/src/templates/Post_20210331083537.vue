<template>
  <div>pops p</div>
</template>
<page-query>
query {
	post (id: 1){
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