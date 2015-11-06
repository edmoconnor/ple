angular.module('core', [])
.directive('tab', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
    require: '^tabset',
    scope: { },
    link: function(scope, elem, attr, tabsetCtrl) {}
  }
})