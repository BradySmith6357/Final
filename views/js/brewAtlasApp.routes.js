angular.module('mainModule')
	.config(['$routeProvider'], function($routeProvider){

		$routeProvider
			.when('/', {
				templateUrl : '/html/homepage.html',
				controller : 'routeController'
			})
			.when('/beerlibrary', {
				templateUrl : '/html/beerlibrary.html',
				controller : 'routeController'
			})
			.when('/beermap', {
				templateUrl : '/html/beermap.html',
				controller : 'routeController'
			})
			.when('/brewingtools', {
				templateUrl : '/html/brewingtools.html',
				controller : 'routeController'
			})
			.when('/activeuser', {
				templateUrl : '/html/activeuser.html',
				controller : 'routeController'
			})



	})