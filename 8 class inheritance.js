// class inheritance
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

class MoreInfo extends Person{
   constructor(fName, lName, age){
    super(fName, lName);
    this.age = age
   }

   fullInfo = function(){
    return `My name is ${this.fullName()} and I am ${this.age} years old!`
   }
}

// instance of class
const person1 = new MoreInfo('Shubham', 'Kumar', 48)
console.log(person1.fullInfo())