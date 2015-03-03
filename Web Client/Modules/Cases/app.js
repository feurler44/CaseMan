(function(){
    angular
        .module("cases", ['dataModel'])
        .controller( 'CasesController', ['$scope', '$rootScope', '$http', CasesController])
        .controller( 'CreateCaseController', ['$scope', '$rootScope', '$http', 'DataModel', CreateCaseController])
    ;
})();