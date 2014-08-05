angular.module("services", [])
//define(['modules/app'] , function (app) {
.service('contactsService',['$http',function($http){

  	this.getContacts = function(callback) {
		return $http.get("/contacts");
  	};

  }]);