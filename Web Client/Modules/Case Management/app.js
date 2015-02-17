(function(){
    angular
        .module('caseMan', ['ui.router', 'dataModel', 'treeView', 'cases'])

        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/home");

            $stateProvider
                .state('home', {
                    url : '/home',
                    templateUrl : 'Views/home.htm',
                    controller : function ( $scope, $http ) {
                        $http.get( 'http://localhost:3000/getFirms' )
                            .success( function (data, status, headers, config ) {
                                $scope.firms = data;
                            });
                    }
                })
                .state('app', {
                    url : '/app',
                    templateUrl : 'Views/app.htm',
                    resolve : {
                        company : [ '$stateParams', function( $stateParams ) {
                            return $stateParams.firm;
                        }]
                    },
                    controller : function ( $scope, $http ) {
                        $scope.firm = {};
                    }
                })

                .state('app.cases', {
                    url : '/cases',
                    templateUrl : 'Views/cases.htm'
                })
                .state('app.cases.new', {
                    url : '/new',
                    templateUrl : 'Views/newPracticeArea.htm',
                    controller : function($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                })
                .state('app.cases.list', {
                    url : '/list',
                    templateUrl : 'Views/practiceAreas.htm',
                    controller : function($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                })


        })
}());