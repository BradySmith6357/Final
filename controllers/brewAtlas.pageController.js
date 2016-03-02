angular.module('HeroesApp')
	.controller('heroController', ['$scope', '$http', '$routeParams', heroController])

function heroController ($scope, $http, $routeParams){
// Express -> req.params to hold our paramters
// $routeParams -> req.params for angular

	// console.log('yay heroes', $routeParams)
	var pageID = $routeParams.id

	$http.get('/api/' + pageID)
		.then(function(serverResponse){
			// console.log(serverResponse)
			$scope.page = serverResponse.data
		})

}