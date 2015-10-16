app.controller('homeController', ['$scope', '$location', function ($scope, $location) {
        $scope['cheeseCakes'] = ['New York Style', 'Carrot Cake', 'Cookies and Creme', 'Tuxedo',
            'Turtle', 'Raspberry Swirl'];
        $scope['showDetails'] = function (cake) {
            console.log($location);
            $location.path('/details/' + cake);
        };
    }]);
