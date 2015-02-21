(function(){
    angular
        .module("contacts", ['dataModel'])
        .controller( 'ContactsController', ['$scope', '$rootScope', '$http', ContactsController])
        .controller( 'CreateContactController', ['$scope', '$rootScope', '$http', 'DataModel', CreateContactController])
    ;
})();