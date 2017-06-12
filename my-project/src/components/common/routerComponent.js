
export default (routerComponent)=>{
	return ( resolve) => {
			return require(['../'+routerComponent], resolve);
		}
}