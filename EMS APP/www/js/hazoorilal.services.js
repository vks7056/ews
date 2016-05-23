MyAppModule.factory('EventData', function($http,$log){
    return {
        getEvent : function(successcb){

            $http({method: 'GET', url: 'http://10.20.2.14/hazoorilal/products/listing-page'}).

            success(function(data) {
                $scope.artists = data;
                $scope.whichproduct=$state.params.aId;
            }).
            error(function(data) {
                $log.info("error");
            });
        }
    };
});