// search and replace strings in js

// replace the first occurance in a string
const fact = 'I like Python. Python is fun';
const newFact = fact.replace('Python','Javascript') // it will replace only the first instance of 'Python'

console.log(newFact)

// replace all instances of a string
const newFact2 = fact.replaceAll('Python', 'Javascript');
console.log(newFact2)

// search and replace (with case insensitive) all instances of a string with regular expression
const newFact3 = fact.replaceAll(/Python/gi, 'Js')
console.log(newFact3)