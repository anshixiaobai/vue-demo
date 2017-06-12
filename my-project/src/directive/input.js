module.exports = {
	bind: function(){
		console.log('初始化数据');
	},
	inserted: function (el) {
		    // 聚焦元素
		    el.focus();
	},
	update: function(value,oldValue){
		console.log(value,oldValue);
	},
	componentUpdated: function(value,oldValue){
	  	//console.log(value,oldValue);
  	},
  	unbind: function(){
	  	console.log('asdf');
 	 }
}