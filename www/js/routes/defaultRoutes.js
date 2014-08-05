angular.module("routes", ["services"])
//define(['modules/app','service/redirectService'], function(app){
.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{
			resolve : {redirect : ['redirectService',function(redirectService) {
				redirectService.loadProjectsAndContacts();
			}]}	
		})
		.otherwise({ redirectTo: '/' })
	}]);