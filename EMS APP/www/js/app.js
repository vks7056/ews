angular.module('starter', ['ionic', 'starter.controllers' , 'ngOpenFB','ngMessages'])

.run(function($ionicPlatform, ngFB) {
  ngFB.init({appId: '1664921837110246'});
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


//All Routing goes here
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
      url: '/',
      templateUrl: 'templates/login/login.html',
      controller: 'LoginCtrl'
    })
     .state('app', {
        url: "/app",
        cache: false,
        abstract: true,
        templateUrl: "templates/menu.html"      
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent' : {
          templateUrl: 'templates/home/home.html',
           controller: 'AgendaCtrl'
        }
      }
    })


       .state('app.payment', {
      url: '/payment',
      views: {
        'menuContent' : {
          templateUrl: 'templates/payment/payment.html'
          
         
        }
      }
    })


    .state('app.checkout', {
      url: '/checkout',
      views: {
        'menuContent' : {
          templateUrl: 'templates/checkout/checkout.html',
          controller: 'checkoutCtrl'
        }
      }
    })

    .state('app.thanks', {
      url: '/thanks',
      views: {
        'menuContent' : {
          templateUrl: 'templates/thanks/thanks.html'
          
         
        }
      }
    })

    //  .state('app.login', {
    //   url: '/login',
    //   views: {
    //     'menuContent' : {
    //       templateUrl: 'templates/login.html',
    //        controller: 'LoginCtrl'
         
    //     }
    //   }
    // })

  $urlRouterProvider.otherwise('/');
});




