// Defining angular-js module
var app1 = angular.module('app1',[]);

app1.controller('ctrl1', function($scope)//scope holds the html elements
{ 
    $scope.first = 1; // define initial value
    $scope.second = 1; 

    $scope.updateUalue = function(){
        $scope.calculation = $scope.first + ' + ' + $scope.second + ' = ' + (+$scope.first + +$scope.second );
    };
});