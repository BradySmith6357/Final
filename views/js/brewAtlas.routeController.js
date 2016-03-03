angular.module("mainModule")
	.controller("routeController", ["$scope","$http","$routeParams",routeController])

	 // function routeController ($scope, $http, $routeParams){
	 // 	console.log('Hello World!', $routeParams)
	 // }

	 var route = $routeParams.id  

	 $http.get('api/pages/' + route){
	 	.then(function(serverResponse){
	 		
	 	})
	 }