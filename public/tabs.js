angular.module('core', [])
.controller('demoCtrl', function($scope){
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