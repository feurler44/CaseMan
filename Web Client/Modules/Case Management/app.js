(function(){
    angular
        .module('caseMan', ['ui.router', 'dataModel', 'treeView', 'cases'])
        .controller('Ctrl', ['$http', 'DataModel', function( $http, DataModel ){
            $http.get('http://localhost:3000/myService')
                .success( function (data, status, headers, config ) {
                    console.log ( data );
                })
                .error ( function (data, status, headers, config ) {
                    console.log ( data );
                })
            var c = new DataModel.Case();
            console.log("HVHVHVHVHJVhjv");
            console.log(c);
        }])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/home");

            $stateProvider
                .state('home', {
                    url : '/home',
                    templateUrl : 'Views/home.htm'
                })
                .state('home.view1', {
                    url : '/view2',
                    templateUrl : 'Views/home.view1.htm',
                    controller : function($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                })
                .state('home.view2', {
                    url : '/view2',
                    templateUrl : 'Views/home.view2.htm',
                    controller : function($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                })

                .state('cases', {
                    url : '/cases',
                    templateUrl : 'Views/cases.htm'
                })
                .state('cases.new', {
                    url : '/new',
                    templateUrl : 'Views/newPracticeArea.htm',
                    controller : function($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                })
                .state('cases.list', {
                    url : '/list',
                    templateUrl : 'Views/practiceAreas.htm',
                    controller : function($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                })


        })
}());