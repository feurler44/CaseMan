function UsersController($scope, $rootScope, $http ){
    $http.get ( 'http://localhost:3000/getUsers' )
        .success ( function ( data, status, headers, config ){
            $scope.users = data;
            $scope.users.sort(function( a, b ){
                if(a.lastName > b.lastName )
                    return 1;
                if(a.lastName < b.lastName )
                    return -1;
                return 0;
            });
        })
        .error( function ( data, status, headers, config ){
            console.log( data );
        })

}