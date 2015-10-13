var app = angular.module('myApp',[]);

app.controller('examplesController', ['$scope', '$sce', function($scope, $sce){
	
	$scope.message = '';
	
	$scope.alertInput = function() {
		alert($scope.message);
	}
	
	$scope.clickMe = function() {
		alert('Hi Class!');
	}
	
	// $scope.hoverColor = 'lightsalmon';
	// $scope.toggleColor = function(isOver) {
	// 	$scope.hoverColor = isOver ? 'darksalmon' : 'lightsalmon';
	// }
	$scope.names = ['Matt', 'David', 'Haley', 'Walter', 'Taylor', 'Jay', 'Afftene'
		, 'Hillary', 'Zyler', 'John', 'Lewis', 'Michael', 'Daniel', 'Ethan', 
		'Jackson', 'Jeff', 'Steve'];

	$scope.myContent = $sce.trustAsHtml('<span>Matt Landers</span>');
	
	$scope.getRandomColor = function() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		$scope.randomColor = color;
	}
	$scope.getRandomColor();
}]);