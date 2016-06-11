angular.module('starter.controllers')
.controller('AgendaCtrl', function($scope, $timeout, $ionicLoading, $ionicSideMenuDelegate, $state){
  $scope.goPayment = function() {
  $state.go('app.payment');
}

$scope.logout = function() {   
  $state.go($state.current, {}, {reload: true});
  $state.go('/');
  localStorage.clear();
  $scope.loginData.ca = '';
  $scope.loginData.mobile = '';
  $state.go('/login', null, {reload: true});

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
