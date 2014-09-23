angular.module('Guest', []).controller('Guest', function($scope, $routeParams) {

	if ($routeParams.guest != 'guest') {
		window.location.href = '/'
	}

});