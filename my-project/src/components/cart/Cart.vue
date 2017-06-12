<template>
	<div>
		<div @click="shopping">
			Cart
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data (){
			return {
				indexValue:1,
				queryIndex : this.$route.query.id
			}
		},
		methods: {
		    shopping: function () {
		          this.$router.push({ path: 'index'});
		        }
		  }
	}
</script>