var demoApp = angular.module('simpleApp', []);

demoApp.factory('simpleFactory', function(){
    var people = [
        {name: 'david', profession: 'developer'},
        {name: 'samson', profession: 'pilot'},
        {name: 'beck', profession: 'drummer'}
    ];
    
    var factory = {};
    factory.getCustomers = function(){
        return people;
    }
    return factory;
});

demoApp.controller('SimpleController', function($scope, simpleFactory){
    $scope.people = [];
    
    init();
    
    function init(){
        $scope.people = simpleFactory.getCustomers();     
    }
});