// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import {router} from './router';
import store from "./store/store";

import direcList from "./directive/directive-all";
import filList from "./filter/filter-all";

// 将指令全部注入进来
Object.keys(direcList).forEach((key)=>{
  Vue.directive(key,direcList[key]);
})
// 将过滤器全部注入进来
Object.keys(filList).forEach((key)=>{
  Vue.filter(key,filList[key]);
})

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
