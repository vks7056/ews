/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])
//All Controller goes here

.controller('paymentCtrl', function($scope, $state) {

$scope.backToHome = function() { 
  $state.go($state.current, {}, {reload: true});
  $state.go('/',null,{reload:true});
  localStorage.clear();

}

  
});

