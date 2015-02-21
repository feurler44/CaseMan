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


    //Validation
    $scope.isValid = function ( ){
        switch ( $scope.step ){
            case 1 :
                if ( $scope.case.name == null || $scope.case.name.length == 0 )
                break;
            case 2 :
                break;
            case 3 :
                break;
            case 4 :
                break;
            default :
                break;
        }
    };

}
