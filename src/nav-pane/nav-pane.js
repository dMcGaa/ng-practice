angular.module('simple.navPane', ['simple.panel1', 'simple.panel2'])
.controller('ctrl', ['$scope', function($scope) {
  $scope.customer = {
    name: 'David',
    address: '3425 St'
  };
}])
.directive('navPane', function() {
  return {
    restrict: 'E',
    template: `
        <div>nav-pane {{ customer.name }} </div>
        <panel-1></panel-1>
        <panel-2></panel-2>
        `
  };
});