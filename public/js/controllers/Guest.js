angular.module('Guest', []).controller('Guest', function($scope, $http, $routeParams) {

	$scope.newMemberPh = "Add a member to your party.."

	$scope.editMessage = false

	$http.get('/api/guests/' + $routeParams.ticket).success(function(data) {
		$scope.guest = data[0]
		$scope.loaded = true
	})

	$scope.member = function(newMember) {
		$scope.guest.party.push({name:newMember, status:'pending'})
		$scope.save($scope.guest)
	}

	$scope.save = function(guest) {
		$http.put('/api/guests/' + guest._id, guest)
	}
})