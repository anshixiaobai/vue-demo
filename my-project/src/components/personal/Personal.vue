<style lang="scss" scoped>
@import "../../sass/commit";
	.personal {
		ul{
			padding: 0;
			li{
				font-size: 20px;
			    text-align: center;
			    padding: 0px;
			    background: $selected;
			    color: white;
			    padding: 10px 0;
			}
		}
	}
</style>
<template>
	<div class="personal">
		 我的页面Personal
		 <ul>
		 	<li @click="loginOut">退出</li>
		 </ul>
	</div>
</template>

<script>
	export default {
		name: 'Personal',
		data (){
			return {
				indexValue:1,
				queryIndex : this.$route.query.id
			}
		},
		methods: {
			loginOut: function(){
				localStorage.setItem('login_code','');
				this.$router.push({ name: 'login'});
			}
		}
	}
</script>