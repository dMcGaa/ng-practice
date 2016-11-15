angular.module('simple.panel1', [])
.directive('panel1', function() {
  return {
    restrict: 'E',
    template: require("./panel-1.tmpl.html")
  };
});