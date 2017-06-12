module.exports = {
	bind: function(){
		console.log('asdf');
	},
	inserted: function (el) {
	    // ¾Û½¹ÔªËØ
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
};