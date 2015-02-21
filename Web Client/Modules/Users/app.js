(function(){
    angular
        .module("users", ['dataModel'])
        .controller( 'UsersController', ['$scope', '$rootScope', '$http', UsersController])
        .controller( 'CreateUserController', ['$scope', '$rootScope', '$http', 'DataModel', CreateUserController])
    ;
})();