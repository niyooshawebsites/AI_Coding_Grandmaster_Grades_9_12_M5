// arrow function
// arrow function does not support this keyword. it would always refer to the global object
const greet = (name) => console.log(`Hello ${name}!`)

greet('Dinesh')