angular.module('starter.controllers')
    .controller('ListController', ['$scope', '$http', '$state', '$ionicModal', '$stateParams', 'listService', '$location', '$rootScope',
        function($scope, $http, $state, $ionicModal, $stateParams, listService, $location, $rootScope) {
            $scope.proId = function(id) {
                listService.getData(id).then(function(res) {
                    $scope.products = res.data;

                });

            }


            // $scope.detailPage = function(item){

            //   $rootScope.detailItem = item;    
            //   $state.go('detail');
            // };

            //var urlPath = BASE_URL + "products/listing-page";
            // var UrlPath = BASE_URL;

            //  $http.get(UrlPath)
            //   .success(function(data, status, headers, config) {
            //       $scope.products = data;
            //       //$scope.whichproduct=$state.params.aId;


            // })
            //Load the modal from the given template URL


            $scope.user = {
                min: 0,
                max: 20000,
                value: 0
            }

            $ionicModal.fromTemplateUrl('modal-1.html', function($ionicModal) {
                $scope.modal = $ionicModal;
            }, {

                id: '1', // We need to use and ID to identify the modal that is firing the event!
                scope: $scope,
                backdropClickToClose: false,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.Modal1 = modal;
            });

            $ionicModal.fromTemplateUrl('modal-2.html', function($ionicModal) {
                $scope.modal = $ionicModal;
            }, {

                id: '2', // We need to use and ID to identify the modal that is firing the event!
                scope: $scope,
                backdropClickToClose: false,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.Modal2 = modal;
            });

            $scope.openModal = function(index) {
                if (index == 1) $scope.Modal1.show();
                else $scope.Modal2.show();
            };

            $scope.closeModal = function(index) {
                if (index == 1) $scope.Modal1.hide();
                else $scope.Modal2.hide();
            };


        }
    ])


.controller('listDetailCtrl', ['$scope', '$http', '$state',
    function($scope, $http, $state) {

        var UrlPath = BASE_URL + "products/listing-page";
        // var UrlPath = BASE_URL;

        $http.get(UrlPath)
            .success(function(data, status, headers, config) {
                // $scope.products = data;
                $scope.whichproduct = $state.params.aId;


            })

    }
]);