import lazy  from "../common/routerComponent";

export default [
	{
		path: 'tab/cart',
		name: 'cart',
		component: lazy('cart/Cart')
	}
]