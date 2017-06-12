import lazy  from "../common/routerComponent";

export default [
	{
		path: '/login',
		name: 'login',
		component: lazy('login/Login')
	}
]