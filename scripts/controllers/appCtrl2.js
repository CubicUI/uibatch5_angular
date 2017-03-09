"use strict";
angular.module("app").controller("appCtrl2",["$scope","person",function($scope,person){
    $scope.testService=function(){
        console.log("Value for person service is udpated");
        person.test="Good Morning"; 
        console.log("From Ctrl 2");
        console.log(person.personArray);
        
    }
    $scope.sampleArray2 = person.personArray;
    //$scope.sampleArray2 =["asdf","asdf"];
    
}])