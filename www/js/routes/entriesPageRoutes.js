angular.module("routes", ["services", "controllers"])
//define(['modules/app','service/redirectService','controllers/entriesController'], function(app){
.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/entries/current',{
			resolve : {redirect : ['redirectService',function(redirectService) {
				redirectService.currentEntries();
			}]}	
		})
		.when('/entries/:month/:year',{
			controller : 'entriesController',
			templateUrl : 'views/entries.html'	
		});
	}]);