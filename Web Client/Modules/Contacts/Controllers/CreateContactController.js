function CreateContactController ( $scope, $rootScope, $http, DataModel ){
    $scope.users = [];
    $scope.users.push( new DataModel.User());
    $scope.addAnotherUser = function () {
        $scope.users.push( new DataModel.User());
    };
    $scope.createUsers = function (){
        console.log( $scope.users );

        for( var i = 0 ; i < $scope.users.length ; i++){
            if( $scope.isValid() )
                $scope.users[i].save();

        }
    };
    function validateEmail( email ) {
        var re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return re.test(email);
    }
    function validateName ( name ){
        if( name === undefined )
            return false;
        if( name === null )
            return false;
        if ( name.length == 0 )
            return false;
        return true;
    }

    //Validation
    $scope.isValid = function ( ){
        for(var i = 0 ; i < $scope.users.length ; i++){
            $scope.users[i].invalidFirstName = !validateName( $scope.users[i].firstName );
            $scope.users[i].invalidLastName = !validateName( $scope.users[i].lastName );
            $scope.users[i].invalidEmail = !validateEmail( $scope.users[i].emails[0] );
            $scope.users[i].invalidType = !validateName( $scope.users[i].type );
        }
        return false;
    };

}
