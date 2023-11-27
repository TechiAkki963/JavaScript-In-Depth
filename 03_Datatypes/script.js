"use strict";

//? Primitive Datatype

//? String
const firstName = "Sarah";
console.log(firstName, typeof firstName); //Sarah String

//? Number
const num = 369;
const temp = 98.9;
console.log(num, typeof num); //369 number
console.log(temp, typeof temp); //98.9 number

//? Boolean
const canSwim = true;
console.log(canSwim, typeof canSwim); //true boolean

//? Null
//*It is intentionally empty value
const optNumbers = null; //null object
console.log(optNumbers, typeof optNumbers);

//? Undefined
let score;
console.log(score, typeof score); //undefined undefined

//? Symbol
const id = Symbol("id");
console.log(id, typeof id); //Symbol(id) symbol

//? Reference Data Type /

//? Arrays

const rollNumber = [1, 2, 3, 4, 5, 6];
console.log(rollNumber, typeof rollNumber); //[ 1, 2, 3, 4, 5, 6 ] object

//? Objects

const admission_id = {
  first_name: "John",
  last_name: "Snow",
  mail_id: "john_snow@GOT.com",
};
console.log(admission_id, typeof admission_id); //{ first_name: 'John', last_name: 'Snow', mail_id: 'john_snow@GOT.com' } object

//? Function

function greet() {
  console.log("Welcome to the Asguard");
}
console.log(greet(), typeof greet); //Welcome to the Asguard  function

//? Note: Datatype of a function is shown in the console as 'Function" but actually is an "Object"
