var each = function(list, iterator) {
	
	if(list.constructor === Array) {
		for (var i = 0; i < Object.keys(list).length; i++) {
			var key = Object.keys(list)[i];
			iterator(list[key], key, list);
		}
	} else {
		for (var i = 0; i < list.length; i++) {
			iterator(list[i], i, list);
		}
	}
}

var arr = [1,2,3,4,5,6,7];
arr.myprop = 'test';
var obj = {
	prop: 'val',
	prop2: 'val2',
	prop3: 'val3'
}
obj['prop'] = 'test';
obj.prop = 'test';

_.each(arr, function(item, index) {
	//console.log(item);	
});


var once = function(func) {
	var hasBeenCalled = false;
	return function() {
		if(hasBeenCalled === false) {
			hasBeenCalled = true;
			func();
		}
	}
}

var initialize = once(function() {
	console.log('initialize was called');
});

initialize();
initialize();