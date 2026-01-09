// class in js

// class definition
class Person{
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName
    }
    fullName = function(){
        return `${this.fName} ${this.lName}`
    }
    intro = function(){
        return `My name is ${this.fullName()}`
    }
}

// instance of class
const person1 = new Person('Shubham', 'Kumar')
console.log(person1.intro())