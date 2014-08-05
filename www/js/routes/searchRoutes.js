angular.module("routes", ["controllers"])
//define(['modules/app','controllers/searchController'], function(app){
.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/search',{
			controller : 'searchController',
			templateUrl : 'views/search.html'
		});
	}]);