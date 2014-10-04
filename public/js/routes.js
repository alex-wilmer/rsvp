angular.module('Routes', [])
  .config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'Home',
		})
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'Login'
		})
		.when('/guestlist', {
			templateUrl: 'views/guestlist.html',
			controller: 'GuestList',
		})
		.when('/:ticket', {
			templateUrl: 'views/guest.html',
			controller: 'Guest'	
		})
		.otherwise({
	      redirectTo: '/'
	    })
	$locationProvider.html5Mode(true)
})