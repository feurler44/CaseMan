function ContactController ( $scope, $rootScope, $http, DataModel ){
    $scope.contacts = [];
    $scope.contacts.push( new DataModel.Contact());
    $scope.addAnotherContact = function () {
        $scope.contacts.push( new DataModel.Contact());
    };
    $scope.createContacts = function (){
        for( var i = 0 ; i < $scope.contacts.length ; i++){
            if( $scope.isValid( $scope.contacts[i] ) )
                $scope.contacts[i].save();
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
    $scope.isValid = function ( contact ){
        contact.invalidFirstName = !validateName( contact.firstName );
        contact.invalidLastName = !validateName( contact.lastName );
        contact.invalidEmail = !validateEmail( contact.emails[0] );
        contact.invalidCompany = !validateName( contact.company );
        contact.invalidType = !validateName( contact.type );
        return !contact.invalidFirstName &&!contact.invalidLastName &&!contact.invalidEmail &&!contact.invalidCompany &&!contact.invalidType;
    };
    $scope.parsePhoneNumber = function( e, value ){
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
        if( value.length >= 10 ){
            e.preventDefault();
            return;
        }

    };
}
