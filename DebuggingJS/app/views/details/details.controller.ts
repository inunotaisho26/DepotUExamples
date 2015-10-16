/// <reference path="../../app.ts" />
app.controller('detailsController', ['$scope', function($scope: angular.IScope){
	
	$scope['cheeseCake'] = 'New York Style';
	$scope['cheeseCakeImageUrl'] = 'http://sweetpeaskitchen.files.wordpress.com/2011/01/new-york-style-cheesecake-11.jpg';
	
}]);