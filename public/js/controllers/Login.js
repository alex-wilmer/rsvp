angular.module('Login', []).controller('Login', function($scope, $location, $http, $routeParams, Authenticate) {

	$scope.login = function(user) {
		$http.post('/api/authenticate', user).success(function(data) {
			if (data.status === 'Success!') {
				Authenticate.logged = true
				$location.path('/guestlist')
			}
		})
	}

})