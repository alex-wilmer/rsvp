angular.module('Guest', []).controller('Guest', function($scope, $http, $routeParams) {

	$http.get('/api/guests/' + $routeParams.ticket).success(function(data) {
		$scope.guest = data[0]
		$scope.loaded = true
	})

	$scope.save = function(guest) {
		$http.put('/api/guests/' + guest._id, guest)
	}
})