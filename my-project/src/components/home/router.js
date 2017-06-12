import lazy  from "../common/routerComponent";

export default [
	{
		path: '/tab/home',
		name: 'home',
		component: lazy('home/Home'),
	},{
		path: '/details',
		name: 'details',
		component: lazy('home/Details')
	}
]