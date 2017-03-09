"use strict";
angular.module("app").controller("appCtrl",["$scope","person",function($scope,person){
    
    $scope.random = person.test;
    $scope.submit = function(){
        $scope.random="Good Morning";
    };
    
    $scope.formModel=person.personModel;
    $scope.sampleArray=["cat","dog","bat"];
    $scope.addAnimal=function(){
        $scope.sampleArray.push($scope.animal);
    }
    $scope.$watch(
        function(){
            return person.test
        }
        ,
        function(newVal,oldVal){
            $scope.random = newVal;
        });
    $scope.personArrayCtrl = person.personArray;    
    $scope.sampleSubmit=function(){
        event.preventDefault();
        person.personModel={
          "firstName":$scope.formModel.firstName,
          "lastName":$scope.formModel.lastName,
          "phone":$scope.formModel.phone
        };
        person.sampleSubmit();
    }
}]);


