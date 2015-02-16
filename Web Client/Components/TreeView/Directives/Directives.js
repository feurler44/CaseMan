
function treeView($timeout, $rootScope, DataFactory){
    return {
        restrict: 'E',
        templateUrl: "/Components/TreeView/Templates/tree.htm",
        controller: 'TreeController',
        scope: true,
        link: function (scope, element, attrs) {
            ///
        }
    }
}

function treeLine($timeout, $rootScope, DataFactory){
    return {
        restrict: 'E',
        templateUrl: "/Components/TreeView/Templates/treeLine.htm",
        controller: "TreeLineController",
        scope: true,
        link: function (scope, element, attrs) {
            scope.$on("containerUpdated", function(event ,c){
                if(c.id == scope.row.id ){
                    scope.$apply();
                }
            });
        }
    }
}
