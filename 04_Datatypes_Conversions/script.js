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

let value = 3;
let negValue = -value; //-3
console.log(negValue);

console.log(2 + 2);
console.log(4 - 2);
console.log(2 * 2);
console.log(2 ** 3);

let str1 = "Hello";
let str2 = " Akshay";
const str3 = str1 + str2;
console.log(str3); // Hello Akshay

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

++gameCounter;
console.log(gameCounter);
