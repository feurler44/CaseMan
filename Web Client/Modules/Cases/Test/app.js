(function(){
    angular
        .module("cases", ['ui.bootstrap'])
        .controller("Controller", ['$scope', '$modal', Controller])
        .controller("NewPracticeAreaController", ['$scope', '$modalInstance', 'data', NewPracticeAreaController])
        .controller("DeletePracticeAreaConfirmController", ['$scope', '$modalInstance', DeletePracticeAreaConfirmController])
        .directive("practiceAreas", [practiceAreas])
    ;
})();