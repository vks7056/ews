angular.module('starter.controllers')
 .controller('LoginCtrl', function($scope, $state,$timeout,$ionicLoading, $location) {

    $scope.formSubmit = function() {
    	var coname = $scope.consumerNo;
    	var monum = $scope.mobileNo;

    	if($scope.consumerNo == '123456789' && $scope.mobileNo == '123456789') {
    		window.location.hash = '#/app/home'
    		$location.path('/home');
    	}else {
    		alert('Wrong Stuff');
    	}
    
  }
   // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

   $timeout(function () {
    $ionicLoading.hide();    
  }, 2000);  
  
})