(function(){
    angular
        .module('caseMan', ['ui.router', 'dataModel', 'treeView', 'cases'])

        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/home");

            $stateProvider
                .state('home', {
                    url : '/home',
                    templateUrl : 'Views/home.htm',
                    controller : function ( $scope, $rootScope, $http ) {
                        $http.get( 'http://localhost:3000/getFirms' )
                            .success( function (data, status, headers, config ) {
                                $scope.firms = data;
                            })
                            .error( function ( data, status, headers, config ){
                                console.log( data );
                            })
                        ;
                        $scope.setFirm = function ( firm ) {
                            $rootScope.firm = firm;
                        };
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
                    controller : function ( $scope, $rootScope, $http ) {
                        $scope.firm = $rootScope.firm;
                    }
                })

                .state('app.cases', {
                    url : '/cases',
                    templateUrl : '../Cases/Views/cases.htm',
                    controller : 'CasesController'
                })
                .state('app.cases.createCase', {
                    url : '/createCase',
                    templateUrl : '../Cases/Views/createCase.htm',
                    controller : 'CreateCaseController'
                })
                .state('app.cases.list', {
                    url : '/list',
                    templateUrl : 'Views/practiceAreas.htm',
                    controller : function($scope) {
                        $scope.items = ["A", "List", "Of", "Items"];
                    }
                })

                .state( 'app.users', {
                    url : '/users',
                    templateUrl : '../Users/Views/users.htm',
                    controller : 'UsersController'
                })
                .state('app.users.createUser', {
                    url : '/createUser',
                    templateUrl : '../Users/Views/createUser.htm',
                    controller : 'CreateUserController'
                })


                .state( 'app.contacts', {
                    url : '/contacts',
                    templateUrl : '../Contacts/Views/contacts.htm',
                    controller : 'ContactsController'
                })
                .state('app.contacts.createContact', {
                    url : '/createContact',
                    templateUrl : '../Contacts/Views/createContact.htm',
                    controller : 'CreateContactController'
                })


        })
}());