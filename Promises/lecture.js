document.querySelector('button').addEventListener('click', function() {
	
	Promise.race([getCustomer(1), getOrders([1,2,3,4,5])])
	.then(function(results){
		console.log(results);
		//console.log(results[0]);
		//console.log(results[1]);
	});
	
	/*getCustomer(parseInt(document.querySelector('input').value))
	.then(function(result){
		console.log('Customer: ' + result);
		return getOrders(result.orders);
	})
	.then(function(result) {
		console.log('Orders: ' + result);
		return result;	
	}).then(function(result){
		//do something
		
		console.log('Hello DAVID!');	
	}).catch(function(err){
		console.log(err);
	});	*/
});

function getCustomer(id) {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			if(id < 0) {
				reject('Invalid ID');
				return;
			}
			if(id === 1) {
				resolve({
					name: 'Matt', 
					orders: [1,2,3,4,5]
				});
			} else {
				resolve({
					name: 'David', 
					orders: [6,7,8,9,0]
				});		
			}
		}, 1000);
	});
}

function getOrders(ids) {
	return new Promise(function(resolve, reject) {
		
		setTimeout(function(){
			var orders = [];
			ids.forEach(function(item){
				orders.push({ orderQuantity: item + 10 })
			});
			resolve(orders);
		}, 5000);
		
	});
}

/*
getCustomer(1).then(function(result) {
	console.log(result.name);
	console.log(result.orders);
});

getCustomer(2).then(function(result){
	console.log(result.name);
	console.log(result.orders);
});

getCustomer(-1).then(function(result){
	console.log(result);
}).catch(function(err){
	console.log(err);
});
*/