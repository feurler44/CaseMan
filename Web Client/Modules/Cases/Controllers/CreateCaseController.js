function CreateCaseController ( $scope, $rootScope, $http, DataModel ){
    //Setting css
    var h = $("#create-new-case-step1").outerHeight();
    if ( $("#create-new-case-step2").outerHeight() > h )
        h = $("#create-new-case-step2").outerHeight();
    if ( $("#create-new-case-step3").outerHeight() > h )
        h = $("#create-new-case-step3").outerHeight();
    if ( $("#create-new-case-step4").outerHeight() > h )
        h = $("#create-new-case-step4").outerHeight();

    $("#create-new-case-steps").css({
        height: h + 70
    });
    $scope.step = 1;
    $scope.steps = [{},{},{},{}];
    $scope.case = new DataModel.Case();
    $scope.createCase = function (){};

    $scope.goToNextStep = function (){
        $scope.step++;
    };
    $scope.goToPreviousStep = function () {
        $scope.step--;
    }
}
