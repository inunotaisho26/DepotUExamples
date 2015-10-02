angular.module('MyApp', [])
	.controller('TweetsController',['$scope', '$http', function($scope, $http) {
		
		$scope.tweets = [];
		
		getTweets();
		
		$scope.user = 'Me';
		$scope.text = '';
		
		$scope.sendTweet = function() {
			if($scope.text === '') {
				console.log('tweet requires text');
				return;
			}
			var tweet = { userName: $scope.user, text: $scope.text };
			$http.post('/messages', JSON.stringify(tweet))
				.then(function() {
					$scope.tweets.unshift(tweet);
					$scope.text = '';
				}).catch(function(err) {
					console.log(err);
					alert('Something went terribly wrong!');
				});
		};
		
		function getTweets() {
			$http.get('/messages')
				.then(function(result){
					result.data.forEach(function(tweet){
						$scope.tweets.unshift(tweet);
					});
				}).catch(function(err) {
					console.log(err);
				});
		}
	}]);