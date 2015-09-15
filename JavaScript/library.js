var library = (function(){
	var counter = 0;
	var count = function() {
		console.log(counter);
		return counter++;
	}
	
	return {
		count: count
	}
})();