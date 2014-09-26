angular.module('GuestList', []).controller('GuestList', function($scope, $http) {

	$scope.newguest = "New guest.."
	$scope.find = "Find.."
	$scope.openMessage = false

	//get list of guests
	$http.get('/api/guests').success(function(guests){
		$scope.guests = guests
		$scope.totals = totals(guests)
	})

	//add a new guest
	$scope.add = function(name) {
		var guest = {
			name: name
		  ,	rsvp: 'pending'
		  , ticket: pad(Math.floor((Math.random() * 10000) + 1), 4)
		  , message: undefined
		}

		// update client
		$scope.guests.push(guest)

		// update server
		$http.post('/api/guests', guest).success(function() {
			console.log("Guest Added!")
		})
	}

	//remove a guest
	$scope.remove = function(id) {

		// update server
		$http.delete('/api/guests/' + id).success(function() {
			console.log("Guest Deleted.")
		})
	}

	$scope.viewMessage = function(message) {
		$scope.openMessage = true
		$scope.message = message
	}

	$scope.closeMessage = function() {
		$scope.openMessage = false
	}

})

//UTILITY
function pad(num, size) {     
	return ('000' + num).substr(-size); 
}

function totals(guests) {
	var totals = {
		pending: 0,
		accepted: 0,
		declined: 0
	}
	for (var i=0; i<guests.length; i++) {
		if (guests[i].rsvp == 'pending') totals.pending++
		if (guests[i].rsvp == 'accepted') totals.accepted++
		if (guests[i].rsvp == 'declined') totals.declined++			
	}
	return totals
}

