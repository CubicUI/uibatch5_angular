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
    
    $scope.sampleArray=["cat","dog","bat"];
    $scope.addAnimal=function(){
        $scope.sampleArray.push($scope.animal);
    }
    
    var person1={
       "firstName":"John",
        "lastName":"Doe",
        "phone":"123-123-1233" 
    };
    var person2={
        "firstName":"George",
        "lastName":"Harrison",
        "phone":"123-123-1233"
    };
    var person3={
       "firstName":"Babu Ram",
        "lastName":"Bhattrai",
        "phone":"123-123-1233" 
    };
    
    $scope.personArray = [];
    $scope.personArray.push(person1);
    $scope.personArray.push(person2);
    $scope.personArray.push(person3);
    
    
    $scope.sampleSubmit=function(){
        event.preventDefault();
        var samplePerson={
            "firstName":$scope.formModel.firstName,
            "lastName":$scope.formModel.lastName,
            "phone":$scope.formModel.phone
        };
        $scope.formModel={};
        $scope.personArray.push(samplePerson);
        console.log($scope.personArray);
    }
}]);


