"use strict";
angular.module("app").controller("appCtrl2",["$scope","person","personFactory",function($scope,person,personFactory){
    $scope.testService=function(){
        console.log("Value for person service is udpated");
        person.test="Good Morning"; 
        console.log("From Ctrl 2");
        console.log(person.personArray);
    }
    $scope.sampleArray2 = person.personArray;
    //$scope.sampleArray2 =["asdf","asdf"];
    personFactory.setFirstName("test1");
    personFactory.setLastName("test2");
    personFactory.setPhone("123");
    personFactory.test();
}])