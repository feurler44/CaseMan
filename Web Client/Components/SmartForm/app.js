(function(){
    angular
        .module('smartForm', [])
        .controller('TreeController', ['$scope', '$rootScope', TreeController])
        .controller("TreeLineController", ['$scope', TreeLineController])
        .directive('treeView', ['$timeout', '$rootScope', treeView])
        .directive('treeLine', ['$timeout', '$rootScope', treeLine])
    ;
})();