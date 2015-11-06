// public/core.js
var core = angular.module('core', []);

function demoCtrl($scope, function($http){
    $scope.templateVar = '/test1.tpl.html';
})
.directive('dynamicTemplate', ['$compile', '$templateCache', function($compile, $templateCache){
    return {  
        scope: { templateVar: '@'},
        link: function(scope, element, attrs){

            scope.$watch('templateVar', function(newV,oldV){

                if(newV !== undefined){
                    var newElement = $compile($templateCache.get(newV).trim())(scope);
                    element.html('');
                    element.append(newElement[0]);

                }

            });

        }

    }

}]);
function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/pldata')
        .success(function(data) {
            $scope.users = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}