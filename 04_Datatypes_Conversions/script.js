/*****************************/
// Datatype Conversion
/****************************/

/************** */
// "" to Number Conversion
/*************** */
let score = "abc";

console.log(typeof score, score); // number 33

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(NaN);

/********************** */
//  to Boolean
/********************* */
let isLoggedIn = "Akshay";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 = true ; 0 = false
// "" = false
// "Akshay" = truwe

/********************* */
// to String
/*********************** */

let someNumber = 66;
console.log(typeof someNumber);
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// Browser most gives us values in String
