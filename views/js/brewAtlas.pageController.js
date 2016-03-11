angular.module('mainModule')
	.controller('mainController', ['$scope', '$http', '$routeParams', mainController])

function mainController ($scope, $http, $routeParams){
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