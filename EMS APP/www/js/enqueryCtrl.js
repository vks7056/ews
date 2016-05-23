angular.module('starter.controllers')
.controller('EnquiryCtrl', ['$scope',  
    function($scope) {

    	

    	$scope.submitForm = function() {

    		if($scope.enquiryForm.$valid) {

    			console.log('sending request')
				// alert('Thanks for your interest in our products, We will back to you shortly.');
    		}
		};

     
    }
]);