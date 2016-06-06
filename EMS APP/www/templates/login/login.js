angular.module('starter.controllers')
 .controller('LoginCtrl', function($scope, $state,$timeout,$ionicLoading, $location, $http, appSvc, $rootScope) {

    $scope.formSubmit = function() {   

     // $state.go('app.home'); 

    	 $scope.user = {
                    "ca": $scope.ca,
                    "mobile": $scope.mobile              
        };

       $scope.user = angular.toJson($scope.user);
       localStorage.setItem("user", $scope.user);
    	 appSvc.createUser($scope.user).then(function (data) {
                    $rootScope.item = data;
                    localStorage.setItem("data", angular.toJson(data));
                       if (data.error) {
                        $scope.errorPoP = true;
                        $scope.message = data.errormsg;
                    } else {
                        $state.go('app.home');
                    }                   
                    
                    $rootScope.loader = false;
                }, function (data) {
                    console.log('Error--', data);
                    $rootScope.loader = false;
                });

		var coname = $scope.consumerNo;
    var monum = $scope.mobileNo;

    // if($scope.consumerNo == '' && $scope.mobileNo == '') {
    //     window.location.hash = '#/app/home'
    //     $location.path('/home');
    //     }else {
    //       alert('Wrong Stuff');
    //     }
    	

    	
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