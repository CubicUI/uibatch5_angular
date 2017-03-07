"use strict";
angular.module("app").controller("appCtrl",["$scope",function($scope){
    $scope.random = "hello World";
    $scope.submit = function(){
        $scope.random="Good Morning";
    };
    
    $scope.formModel={
        "firstName":"John",
        "lastName":"Doe",
        "phone":"123-123-1233"
    };
    
    $scope.sampleSubmit=function(){
        event.preventDefault();
        console.log($scope.formModel);
    }
}]);


