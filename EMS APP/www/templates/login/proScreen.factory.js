(function () {
  'use strict';
  angular.module('starter.controllers', []).factory('appSvc', function ($http, $q) {
    var baseURL = "http://ews.crazyninja.org/";
    var svc = {
     

      createUser: function (user) {
        var deferred = $q.defer();
        var api_url = "http://ews.crazyninja.org/ews/ews-user-detail";
        $http.post(api_url, user).success(function (data) {
          deferred.resolve(data);
        }).error(function (data) {
          console.log("----ERROR------------>", data);
          deferred.reject();
        });
        return deferred.promise;
      },
      dataToSubmit: function (data) {
        var deferred = $q.defer();
        var api_url = "http://ews.crazyninja.org/ews/ews-sms";
        $http.post(api_url, data).success(function (data) {
          deferred.resolve(data);
        }).error(function (data) {
          console.log("----ERROR------------>", data);
          deferred.reject();
        });
        return deferred.promise;
      }
    };
    return svc;
  });
})();
