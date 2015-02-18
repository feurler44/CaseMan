function CasesController($scope, $rootScope, $http ){
    $http.post ( 'http://localhost:3000/getCases', $rootScope.firm )
        .success ( function ( data, status, headers, config ){
            $scope.cases = data;
            console.log( data );
        })
        .error( function ( data, status, headers, config ){
            console.log( data );
        })

}