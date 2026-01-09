// Static methods in Class
// Static methods are methods that are not bound to an instance of a class, but rather to the class itself.

class Person{
    static count = 0;
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
        Person.count++;
    }
}

const person1 = new Person('Shubham', 'Kumar')
const person2 = new Person('Dinesh', 'Kumar')
console.log(Person.count)