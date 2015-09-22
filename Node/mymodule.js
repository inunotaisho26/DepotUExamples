
var mymodule = function() {
	
	var add = function(a,b) {
		return a+b;
	}
	var subtract = function(a,b) {
		return b-a;
	}
	return {
		add: add,
		subtract: subtract
	}
}

module.exports = mymodule();