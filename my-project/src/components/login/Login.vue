<style lang="scss" scoped>
@import "../../sass/commit";
.login {
    div {
    	text-align: center;
    }
    button {
	    margin-top: 40px;
	    width: 140px;
	    border: 0px;
	    height: 40px;
	    border-radius: 2px;
	    font-size: 18px;
    }
}
</style>

<template>
	<div class="login">
		 <div>
		 	欢迎来到登陆界面
		 </div>
		 <div>
		 	<button @click="login">登陆</button>
		 </div>

	</div>
</template>

<script>
	export default {
		data (){
			return {
				
			}
		},
		methods: {
			login:function(){
				//用户登录页面 请求后台  返回code code  是用来判断用户是否登录
				// 一开始想法是code 保存在 vuex 中
				// 但是考虑到 页面刷新 vuex 数据清空  所以讲code 保存在本地
				localStorage.setItem('login_code','op234234');
				this.$router.go(-1);
			}
		}
	}
</script>