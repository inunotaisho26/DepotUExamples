var func = function() {
	
	var add = function(a,b){
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

function testFunc() {
	return 'hi';
}

module.exports = {
	add: function(a,b) {
		return a+b;
	},	
	subtract: function(a,b) {
		return a-b;
	}
};