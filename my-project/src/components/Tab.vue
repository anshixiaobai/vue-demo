<style lang="scss" scoped>
	@import "../sass/commit";
	.tab {
		bottom: 0px;
		position: fixed;
		width: 100%;
		align-items: center;
		display: flex;
		border-top: 1px solid #f1f1f1;
		font-size: 19px;
		height: 50px;
		span {
			height: 50px;
			line-height: 50px;
			flex: 1 0 0;
			text-align: center;
		}
		.onSelected {
			color: $selected;
		}

	}
</style>
<template>
<div>
	
	<div class="tab">
		<span :class="{'onSelected': routerName == 'home'}"
		 @click="hostFun('home')">商城</span>
		<span :class="{'onSelected': routerName == 'cart'}"
		 @click="hostFun('cart')">购物车</span>
		<span :class="{'onSelected': routerName == 'personal'}"
		 @click="hostFun('personal')">我的</span>
	</div>
	<router-view></router-view>
</div>
</template>

<script>
	export default {
		data (){
			return {
				routerName: this.$route.name
			}
		},
		methods: {
			hostFun: function(index){
				this.routerName = index;
				this.$router.push({ name: index})
		    }
		},
		beforeRouterEnter (to, from ,next){
			console.log(1);
		}
	}
</script>