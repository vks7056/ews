angular.module('starter.controllers')
 .controller('LoginCtrl', function($scope, $state,$timeout,$ionicLoading, $location, $http) {

    $scope.formSubmit = function() {   

      $state.go('app.home'); 

  //   	 $scope.user = {
  //                   "ca": $scope.ca,
  //                   "mobile": $scope.mobile              
  //       };

  //   	$http({
		//     url: 'http://crazyninja.org/ewsdrupal/?q=ews/ews-user-detail',
		//     dataType: 'json',
		//     method: 'POST',
		//     data: '',
		//     headers: {
		//         "Content-Type": "application/json"
		//     }

		// }).success(function(response){
		// 	console.log("success");
		//     $scope.response = response;
		    
    
		// }).error(function(error){
		//     $scope.error = error;
		// });

		// var coname = $scope.consumerNo;
  //   var monum = $scope.mobileNo;

  //   if($scope.consumerNo == '' && $scope.mobileNo == '') {
  //       window.location.hash = '#/app/home'
  //       $location.path('/home');
  //       }else {
  //         alert('Wrong Stuff');
  //       }
    	

    	
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