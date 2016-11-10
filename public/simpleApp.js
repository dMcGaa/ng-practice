var demoApp = angular.module('simpleApp', []);

demoApp.controller('SimpleController', function($scope){
    $scope.people = [
        {name: 'david', profession: 'developer'},
        {name: 'samson', profession: 'pilot'},
        {name: 'beck', profession: 'drummer'}
    ];
});