// type converstion
// type conversion is the process of converting one data type to another data type

// implicit type converstion
// type coersion
// type coersion is the automatic conversion of one data type to another data type

let number1 = '30';
let number2 = 5; // number
console.log(typeof number2); // number

number2 = number2 + number1;
console.log(number2); // 530
console.log(typeof number2);  // string

// here number2 was initially a number but after the addition it became a string

// explicit type converstion
let number3 = '30';
console.log(typeof number3); // string

number3 = Number(number3) // this will convert the string to a number using the Number constructor
console.log(typeof number3); // number

// we can also change the string into a number using the parseInt function
let number4 = '37';
console.log(typeof number4); // string  

number4 = parseInt(number4) // this will convert the string to a number using the parseInt function
console.log(typeof number4); // number

// likewise we have other Primitive constructor functions linke String(), Boolean() etc through which we can convert other data types

let number5 = 37;
console.log(typeof number5); // number
let number6 = String(number5) // this will convert the number to a string using the String constructor
console.log(typeof number6); // string

// boolean
let number7 = 0
console.log(typeof number7); // number

console.log(Boolean(number7)); // false as number7 is 0
console.log(typeof Boolean(number7)); // boolean    


