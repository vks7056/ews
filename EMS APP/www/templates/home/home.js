angular.module('starter.controllers')
.controller('AgendaCtrl', function($scope, $timeout, $ionicLoading, $ionicSideMenuDelegate, $state){
  $scope.goPayment = function() {
  $state.go('app.payment');
}

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
