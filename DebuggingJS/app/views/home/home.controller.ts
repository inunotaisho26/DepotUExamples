app.controller('homeController', ['$scope', '$location', function($scope: angular.IScope, $location: angular.ILocationService){
	
	$scope['cheeseCakes'] = ['New York Style', 'Carrot Cake', 'Cookies and Creme', 'Tuxedo', 
		'Turtle', 'Raspberry Swirl']
	
	$scope['showDetails'] = function(cake: string) {
		console.log($location);
		$location.path('/details/' + cake);
	}
}]);