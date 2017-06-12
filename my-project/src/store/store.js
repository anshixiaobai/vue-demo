import Vue from 'vue';
import Vuex from 'vuex';
import cart from "../components/cart/store/store";
import home from "../components/home/store/store";
import personal from "../components/Personal/store/store";
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		cart,
		home,
		personal
	}
});