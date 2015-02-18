function Controller($scope, $modal){
    var p = new PracticeArea(1);
    //console.log(p);
    p.getName();
    p = new PracticeArea(20);
    p.getName();
    $scope.init = function(){
        $scope.editing = false;
        $scope.selectedItems = [];
        $scope.sortBy = "creator";
        $scope.practiceAreas = [
            {
                name : "Bankruptcy",
                activeCases : [{},{}],
                creator : "Attorney 1"
            },
            {
                name : "Business",
                activeCases : [{},{},{},{}],
                creator : "Attorney 2"
            },
            {
                name : "Civil",
                activeCases : [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                creator : "Attorney 3"
            },
            {
                name : "Criminal Defence",
                activeCases : [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                creator : "Anther Attorney"
            },
            {
                name : "Divorce/Separation",
                activeCases : [{},{},{},{},{},{},{},{},{},{}],
                creator : "Lawyer Greg"
            },
            {
                name : "DUI/DWI",
                activeCases : [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                creator : "Lawyer Chris"
            },
            {
                name : "Employment",
                activeCases : [],
                creator : ""
            },
            {
                name : "Estate Planning",
                activeCases : [],
                creator : ""
            },
            {
                name : "Family",
                activeCases : [],
                creator : ""
            },
            {
                name : "Foreclosure",
                activeCases : [],
                creator : ""
            },
            {
                name : "Immigration",
                activeCases : [{},{},{},{},{},{},{},{},{},,{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                creator : "Zcreator"
            },
            {
                name : "Landlord/Tenant",
                activeCases : [{},{},{},{},{},{},{},{},{},{},{}],
                creator : "xcreator"
            },
            {
                name : "Personal Injury",
                activeCases : [{},{},{},{},{},{},{},{},{},{},{}],
                creator : "xcreator"
            },
            {
                name : "Real Estate",
                activeCases : [{},{},{},{},{},{},{}],
                creator : "dcreator"
            },
            {
                name : "Tax",
                activeCases : [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
                creator : "ecreator"
            }
        ];
        $scope.sortPracticeAreas();
    };
    $scope.addRemove = function(p){
        if(p.selected)
            $scope.selectedItems.push(p);
        else
            $scope.selectedItems.splice($scope.selectedItems.indexOf(p), 1);
    };
    $scope.newPracticeArea = function(){
        var modalInstance = $modal.open({
            templateUrl: '/Modules/Cases/Templates/newPracticeArea.htm',
            controller: 'NewPracticeAreaController',
            resolve: {
                data: function () {
                    return {
                        title : "New Practice Area"
                    };
                }
            }
        });

        modalInstance.result.then(function (name) {
            $scope.practiceAreas.push({
                name : name,
                activeCases : [],
                creator : ""
            });
            $scope.sortPracticeAreas();

        }, function () {
            //console.log('Modal dismissed at: ' + new Date());
        });
    };
    $scope.changeSortBy = function(string){
        $scope.sortBy = string;
        $scope.sortPracticeAreas();
    };
    $scope.sortPracticeAreas = function(){
        $scope.practiceAreas.sort(function(a, b){
            if(Array.isArray(a[$scope.sortBy])){
                if(a[$scope.sortBy].length < b[$scope.sortBy].length)
                    return -1;
                if(a[$scope.sortBy].length > b[$scope.sortBy].length)
                    return 1;
                return 0;
            }
            if(a[$scope.sortBy].toLowerCase() < b[$scope.sortBy].toLowerCase())
                return -1;
            if(a[$scope.sortBy].toLowerCase() > b[$scope.sortBy].toLowerCase())
                return 1;
            return 0;
        });
    };

    $scope.renamePracticeArea = function(p){
        var modalInstance = $modal.open({
            templateUrl: '/Modules/Cases/Templates/newPracticeArea.htm',
            controller: 'NewPracticeAreaController',
            resolve: {
                data: function () {
                    return {
                        title: "Edit Practice Area",
                        name : p.name
                    };
                }
            }
        });

        modalInstance.result.then(function (name) {
            p.name = name;
            $scope.sortPracticeAreas();
        }, function () {
            //console.log('Modal dismissed at: ' + new Date());
        });
    };

    $scope.deletePracticeArea = function(p){
        if(p.length == 0)
            return;
        var modalInstance = $modal.open({
            templateUrl: '/Modules/Cases/Templates/deletePracticeAreaConfirm.htm',
            controller: 'DeletePracticeAreaConfirmController',
            size : 'sm'
        });

        modalInstance.result.then(function (name) {
            for(var i = 0 ; i < p.length ; i++){
                $scope.practiceAreas.splice($scope.practiceAreas.indexOf(p[i]), 1);
            }
            $scope.selectedItems = [];
        }, function () {
            //console.log('Modal dismissed at: ' + new Date());
        });
    };
    $scope.init();
}