
var f = function(name, oname) {
	name = 'David';
	//console.log('in function: ' + name);
	oname.name = 'Walter';
	
}
	
var n = 'Matt';
var o = { name: 'John' };

//console.log('n before: ' + n);
//console.log('o before: ' + o.name);
f(n, o);
//console.log('n after: ' + n);
//console.log('o after: ' + o.name);

//closure

var colorSetter = function(color) {
	
	return function(selector) {
		var e = document.body.querySelectorAll(selector);
		if(e.length) {
			for (var i = 0; i < e.length; i++) {
				var element = e[i];
				element.style.backgroundColor = color;
			}
		} else {
			e.style.backgroundColor = color;
		}
	}
}

var myload = function() {
	var blue = colorSetter('blue');
	var red = colorSetter('red');	
	
	blue('.box');
	red('#mydiv');
	
};

var createFunction = function(j) {
	return function() {
		console.log(j);
	}
}

var arr = [];
var otherarr = [];

for (var j = 0; j < 3; j++) {
	arr.push(createFunction(j));
	otherarr[j] = function() {
		console.log(j);
	};
	otherarr[j]();
}

arr[0]();
arr[1]();
arr[2]();
otherarr[0]();
otherarr[1]();
otherarr[2]();