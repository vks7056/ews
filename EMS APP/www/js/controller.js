/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])
//All Controller goes here

.controller('LoadingCtrl', function($scope, $timeout, $ionicLoading) {
  // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  
  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  $timeout(function () {
    $ionicLoading.hide();
  }, 2000);
  
})



// .controller('AgendaCtrl', function($scope, $timeout, $ionicLoading, $ionicSideMenuDelegate, $state){
//   $scope.$on('$ionicView.enter', function(){
//       $ionicSideMenuDelegate.canDragContent(false);
//     });
//   $scope.$on('$ionicView.leave', function(){
//       $ionicSideMenuDelegate.canDragContent(true);
//     });

//   $scope.goPayment = function() {
//   $state.go('app.payment');
// }

//   // Setup the loader
//   $ionicLoading.show({
//     content: 'Loading',
//     animation: 'fade-in',
//     showBackdrop: true,
//     maxWidth: 200,
//     showDelay: 0
//   });
  
//   // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
//   $timeout(function () {
//     $ionicLoading.hide();
//   }, 2000);
// })

// .controller('IntroCtrl', function($scope, $state, $timeout, $ionicLoading) {

// $scope.formSubmit = function() {
//   $state.go('app.home');
// }
//    // Setup the loader
//   $ionicLoading.show({
//     content: 'Loading',
//     animation: 'fade-in',
//     showBackdrop: true,
//     maxWidth: 200,
//     showDelay: 0
//   });

//    $timeout(function () {
//     $ionicLoading.hide();    
//   }, 2000);  
// })

