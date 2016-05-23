angular.module('starter.controllers')
    .controller('ListController', ['$scope', '$http', '$state', '$ionicModal', '$stateParams', 'listService', '$location', '$rootScope', '$timeout', '$ionicLoading',
        function($scope, $http, $state, $ionicModal, $stateParams, listService, $location, $rootScope, $timeout, $ionicLoading) {

            if (window.localStorage['prodid'] == "") {
                window.localStorage['prodid'] = '';
            }


            $scope.proId = function(id) {
                window.localStorage['prodid'] = id;
                listService.getData(id).then(function(res) {
                    $scope.products = res.data;

                });




                $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                });

                // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
                $timeout(function() {
                    $ionicLoading.hide();
                }, 1000);

            }
            var sub_prod = "";
            var sub_id = '';
            var sub_id2 = '';
            var sub_id3 = '';
            var sub_id4 = '';
            $scope.sort = function(user) {
                var prodid = window.localStorage['prodid'];
                var sub_id = user.sub_prod;
                var sub_id2 = user.sub_prod2;
                var sub_id4 = user.sub_price;
                if (sub_id4 != '') {
                    var sub_id3 = 'commerce_price_amount';
                }
                var id = "";
                listService.getData(prodid, sub_id, sub_id2, sub_id3, sub_id4).then(function(res) {
                    $scope.products = res.data;
                    $scope.modal.hide();

                });
            };



            // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
            $timeout(function() {
                $ionicLoading.hide();
            }, 2000);


            //Load the modal from the given template URL
            $scope.user = {
                min: 0,
                max: 20000,
                value: 0
            }        

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


.controller('listDetailCtrl', ['$scope', '$http', '$state', '$timeout', '$ionicLoading',
    function($scope, $http, $state, $timeout, $ionicLoading) {

        var UrlPath = BASE_URL + "products/listing-page";
        // var UrlPath = BASE_URL;

        $http.get(UrlPath)
            .success(function(data, status, headers, config) {
                // $scope.products = data;
                $scope.whichproduct = $state.params.aId;
            })

        // Setup the loader
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
        $timeout(function() {
            $ionicLoading.hide();
        }, 1000);

    }
]);