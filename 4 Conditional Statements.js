// conditional statements in js

// if else statments
const age = 18

if(age >=18)console.log('You are eligible to vote')
else console.log('You are not eligible to vote')

// ternary operator
age >=18 ? console.log('You are eligible to vote') : console.log('You are not eligible to vote')

// switch case
switch(age){
    case age >= 18:
        console.log('You are eligible to vote')
        break;
    case age >=10 && age < 18:
        console.log('You are a teenager')
        break;
    default:
        console.log('You are not eligible to vote as you are a child')
}