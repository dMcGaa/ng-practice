angular.module('simple.panel1', [])
.directive('panel1', function() {
  return {
    restrict: 'E',
    template: "<div>panel 1</div>"
  };
});