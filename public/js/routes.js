angular.module('Routes', [])
  .config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'Home',
		})
		.when('/guestlist', {
			templateUrl: 'views/guestlist.html',
			controller: 'GuestList',
		})
		.when('/:guest', {
			templateUrl: 'views/guest.html',
			controller: 'Guest'	
		})
		.otherwise({
	      redirectTo: '/'
	    })
	$locationProvider.html5Mode(true)
})