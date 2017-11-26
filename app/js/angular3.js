// Defining angular-js module
var app3 = angular.module('app3',[]);

app3.controller('gListCtrl', function($scope)//scope holds the html elements
{ 
    $scope.groceries = [
        {item: 'Tomatos', purchased: false},
        {item: 'Tea', purchased: false},
        {item: 'Salmon', purchased: false}    
    ];

    $scope.getList = function(){

        return $scope.showList ? 'grocery-ul.html' : 'grocery-ol.html'; 

    };



});
