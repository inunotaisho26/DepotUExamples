/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />
/// <reference path="../typings/node/node.d.ts" />
var app = angular.module('myapp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/details/:name', {
            template: require('./views/details/details.template.html'),
            controller: 'detailsController'
        }).otherwise({
            template: require('./views/home/home.template.html'),
            controller: 'homeController'
        });
    }]);
app.controller('homeController', ['$scope', '$location', function ($scope, $location) {
        $scope['cheeseCakes'] = ['New York Style', 'Carrot Cake', 'Cookies and Creme', 'Tuxedo',
            'Turtle', 'Raspberry Swirl'];
        $scope['showDetails'] = function (cake) {
            console.log($location);
            $location.path('/details/' + cake);
        };
    }]);
/// <reference path="../../app.ts" />
app.controller('detailsController', ['$scope', function ($scope) {
        $scope['cheeseCake'] = 'New York Style';
        $scope['cheeseCakeImageUrl'] = 'http://sweetpeaskitchen.files.wordpress.com/2011/01/new-york-style-cheesecake-11.jpg';
    }]);
/// <reference path="app.ts" />
/// <reference path="views/home/home.controller.ts" />
/// <reference path="views/details/details.controller.ts" /> 
