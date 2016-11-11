angular
.module('simple', ['simple.navPane'])
.factory('simpleFactory', function(){
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
})
.controller('SimpleController', function($scope, simpleFactory){
    $scope.people = [];
    
    init();
    
    function init(){
        $scope.people = simpleFactory.getCustomers();     
    }
});