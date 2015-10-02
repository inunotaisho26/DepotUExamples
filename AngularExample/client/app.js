var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'template.html',
				controller: 'exampleController'
			})
			.when('/otherpage', {
				templateUrl: 'otherpage.html',
				controller: 'otherPageController'
			})
			.otherwise({
				redirectTo: '/'
			})
}]);

app.controller('otherPageController',['$scope', '$location', 
	function($scope, $location) {
		$scope.foo = 'TESTING';
	}
]);

app.controller('exampleController', function($scope, $location) {
	$scope.name = 'World!';
	
	$scope.doStuffs = function() {
		$location.path('/otherpage');
	};
	
});