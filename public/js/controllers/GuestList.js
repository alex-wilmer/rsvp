angular.module('GuestList', []).controller('GuestList', function($scope, $http) {

	$http.get('/api/guests').success(function(data){
		$scope.guests = data
	})

	$scope.add = function(name) {
		var guest = {
			name: name
		  ,	rsvp: false
		}

		// client
		$scope.guests.push(guest)

		// server
		$http.post('/api/guests', guest).success(function() {
			console.log("Guest Added!")
		})
	}

})