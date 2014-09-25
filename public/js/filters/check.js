angular.module('check', [])
  .filter('check', function() {
  	return function (input) {
  		if (input=='accepted') return '\u2713'
  		if (input=='declined') return '\u2718'
  		return input
  	}
  })