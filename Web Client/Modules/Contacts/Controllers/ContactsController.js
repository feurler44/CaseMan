function ContactsController($scope, $rootScope, $http ){
    $http.get ( 'http://localhost:3000/getContacts' )
        .success ( function ( data, status, headers, config ){
        console.log(data);
            $scope.contacts = data;
            $scope.contacts.sort(function( a, b ){
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