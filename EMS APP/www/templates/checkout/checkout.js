angular.module('starter.controllers')
.controller('checkoutCtrl', function($scope, $timeout, $ionicLoading, $ionicSideMenuDelegate, $state, $http, appSvc, $rootScope){
 
  $scope.thanks = function() {
     $state.go('app.thanks');
       //  $scope.user = {             
       //       "mobile": $scope.mobile               
       //  };
       // $scope.user = angular.toJson($scope.user);
       // localStorage.setItem("user", $scope.user);
       //  localStorage.getItem("user");
        //$rootScope.userdata = localStorage.getItem("user");       
         
        console.log($rootScope.userdata);
        
        var ems = {ca:"125388345",mobile:$rootScope.userdata};

         $http.post("http://crazyninja.org/ewsdrupal/?q=ews/ews-sms", ems).success(function(data) {
          console.log("hi");
          $state.go('app.thanks');          
        })
    

  
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
