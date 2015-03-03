(function(){
    angular
        .module('smartForm', [])
        .factory('Models', function(){
            function Form(){
                var Form = this;

                Form.inputs = [];
            }
            Form.prototype.save = function(){
                var $this = this;
                for( var i = 0 ; i < $this.inputs.length ; i++ ){
                    $this.inputs[i].validate();
                }
            };
            Form.prototype.validate = function(){};


            function Input(){
                var Input = this;

                Input.type = null;
                Input.name = null;
                Input.value = null;
                Input.require = null;
                Input.valid = true;
            }
            Input.prototype.validate = function(){
                console.log( 'validating' );
                this.valid = false;
            };


            var Models = this;
            Models.Form = Form;
            Models.Input = Input;
            return Models;
        })
        .controller('FormController', ['$scope', 'Models', function( $scope, Models ){
            $scope.form = new Models.Form();
        }])
        .controller('InputController', ['$scope', 'Models', function( $scope, Models ){
            $scope.input = new Models.Input();
            //$scope.$parent.form.inputs.push( $scope.input );
            //$scope.index = $scope.$parent.inputs.indexOf( $scope.input );
        }])

        .directive('smartForm', ['Models', function( Models ){
            return{
                restrict : 'A',
                scope : true,
                controller : 'InputController',
                link : function( scope, element, attributes ){

                }
            }
        }])
        .directive('smartInput', ['Models', function( Models ){
            return{
                restrict : 'A',
                scope : true,
                link : function( scope, element, attributes ){
                    console.log("alibaba");
                    console.log ( scope.form );
                    element.attr( 'ng-model', 'input.value' );
                    element.after( '<em style="color : red" ng-show="!input.valid">Invalid</em>' );
                }
            }
        }])
        .directive('smartSubmit', ['Models', function( Models ){
            return{
                restrict : 'A',
                scope : true,
                link : function( scope, element, attributes ){
                    element.bind( 'click', function(){
                        scope.$parent.form.save();
                    });
                }
            }
        }])
    ;
})();