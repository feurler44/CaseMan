function NewPracticeAreaController($scope, $modalInstance, data){
    $scope.name = data.name;
    $scope.title = data.title;
    $scope.save = function () {
        $modalInstance.close($scope.name);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}