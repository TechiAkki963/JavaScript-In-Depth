"use script";

// for declaring a variable we use let , const and var.
// in the modern javascript, we only 'let' and 'const' to declare a variable.

let person_name = "Ironman";
console.log(person_name);

//todo: Dynamic Typing
person_name = "Captain America";
console.log(person_name);

//**When we use 'let' to declare the varaible name, the decalred value can be changed */

const playerName = "Dhoni";
console.log(playerName);

// playerName = "Virat";
console.log(playerName);
//! TypeError: Assignment to constant variable.
//**when we use 'const' to declare a variable name, the declared value cannot be changed */

let car;
console.log(car); // undefined

car = "Tesla";
console.log(car); //Tesla

// const plane;
// console.log(plane);
//!SyntaxError: Missing initializer in const declaration

const plane = "Boeing 747";
console.log(plane); //Boeing 747
//**Always with 'const' value has to be assigned to variable name */

//todo: Declaring Nultiple Variable at once

let x, y, z;
console.log(x, y, z); //undefined undefined undefined

const a = 100,
  b = 200,
  c = 300;
console.log(a, b, c); //100 200 300

//? Note: The value of a variable while working with const can only be changed while working with Arrays and Objects.
