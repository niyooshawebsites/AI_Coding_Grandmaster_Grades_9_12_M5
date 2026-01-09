// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an object method, this refers to the object.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// this is not a variable.

// this is a keyword.

// You cannot change the value of this.

// example of this in an object
const person = {
    fName: 'Dale',
    lName: 'Cooper',
    fullName: function(){
        return `${this.fName} ${this.lName}`
    }
}

console.log(person.fullName());

// example of this in an event
// const btn = document.querySelector('.btn')
// btn.addEventListener('click', function(){
//     console.log(this)
// })

// example of this in a function
function sayHello(){
    console.log(this) // this will print the global or window object
}

sayHello()

console.log(this) // this will print the global or window object

// we can also use this with call, apply and bind

// call - it takes a comma separated list of arguments
const person1 = {
    fullName: function(){
        return this.fName + ' ' + this.lName
    }
}

const person2 = {
    fName: 'Harry',
    lName: 'Potter'
}

const person3 = {
    fName: 'Ron',
    lName: 'Wisely'
}
console.log(person1.fullName.call(person2))

// apply - it takes an array as an argument
console.log(person1.fullName.apply(person2))

// bind
person3.boundFullName = person1.fullName.bind(person3) // this will return a new function
console.log(person3.boundFullName())
