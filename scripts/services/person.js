"use strict";

angular.module("app").service("person",function(){
   var firstName,lastName,phone;
    
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
    
    this.personArray = [];
    this.personArray.push(person1);
    this.personArray.push(person2);
    this.personArray.push(person3);
    
   this.personModel={
        "firstName":"",
        "lastName":"",
        "phone":""
   };

    this.sampleSubmit=function(){
        event.preventDefault();
        this.personArray.push(this.personModel);
    }
   
   this.test="hello Worlds from service";
   this.getFirstName=()=>this.personModel.firstName;
   this.getLastName=()=>this.personModel.lastName;
   this.getPhone=()=>this.personModel.phone;
   this.setFirstName=(fName)=>this.personModel.firstName=fName;
   this.setLastName=(lName)=>this.personModel.lastName=lName;
   this.setPhone=(ph)=>this.personModel.phone=ph;
   this.testOutput=()=>{
        console.log(this.getFirstName());
        console.log(this.getLastName());
        console.log(this.getPhone());
    }
});