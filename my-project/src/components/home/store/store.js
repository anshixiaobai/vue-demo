export default{
	state: {
		homeNumber: 0
	},
	mutations: {
		countAdd(state,n){
			state.homeNumber = state.homeNumber + n;
		}
	}
}