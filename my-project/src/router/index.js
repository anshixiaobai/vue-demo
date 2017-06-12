import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import Tab from '@/components/Tab';
// import Details from "@/components/home/Details";

import HomeComtent from "../components/home/router";
import CartComtent from "../components/cart/router";
import PersonalComtent from "../components/personal/router";

import LoginComtent from "../components/login/router";

Vue.use(Vuex)
Vue.use(Router);

let HomeComtentCopy = HomeComtent.shift();
let PersonalComtentCopy = PersonalComtent.shift();
let CartComtentCopy = CartComtent.shift();


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'tab',
      component: Tab,
      redirect: { name: 'home' },
      children: [
        HomeComtentCopy,
        PersonalComtentCopy,
        CartComtentCopy
      ]
    },
    ...HomeComtent,
    ...PersonalComtent,
    ...CartComtent,
    ...LoginComtent
  ]
})

// 路由跳转之前  ,可以做登陆判断 等等
router.beforeEach((to, from, next) => {
  try {

  } catch(e) {
    // 可以做错误处理  报错上传等问题
    console.error(e);
  } finally {
    if((to.name == 'cart' || to.name == 'personal') && !localStorage.getItem('login_code')){
      next({ name: 'login' })
    }else{
      next();
    }
  }
})

// 路由跳转之后
router.afterEach(route => {
  try {
    
  } catch(e) {
    // 可以做错误处理  报错上传等问题
    console.error(e);
  } finally {

  }
})

export {router}
