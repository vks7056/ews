// infinite scroll example function to populate feedpage
/**
 * todo : Need to do this using requireJS
 * */
appModuleController.factory('DataFactory', function ($http, $q, $rootScope, $ionicLoading, $timeout) {
    
   doLoginFactory: function (email, password, firstname, lastname) {
            var deferred = $q.defer();
            obj = {name: email, mail: email, pass: password};
            $http.post('login_out/user/register', obj).success(function (data) {
                // console.log(data);
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;

        }

    };
});
