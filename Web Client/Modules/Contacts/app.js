(function(){
    angular
        .module("contacts", ['dataModel'])
        .controller( 'ContactsController', ['$scope', '$rootScope', '$http', ContactsController])
        .controller( 'ContactController', ['$scope', '$rootScope', '$http', 'DataModel', ContactController])
        .directive( 'contactForm', [contactForm] )
        .filter('phone', function(){
            return function( input ){
                if ( input.length > 0 && input.length < 3 ){
                    return '' + input;
                }
                if ( input.length >= 3 && input.length < 7 ){
                    return '(' + input.toString().substring(0,3) + ') ' + input.toString().substring(3);
                }
                if ( input.length >= 7 && input.length < 11 ){
                    return '(' + input.toString().substring(0,3) + ') ' + input.toString().substring(3,6) + '-' + input.substring(6);
                }
            }
        })
    ;
})();