// const person = {
//     firstName: "Ali",
//     lastName: "Abu Zrir",
//     greeting: "salam",
//     sayHello: function() {
//         return `${this.firstName} says ${this.greeting}`;
//     },
//     changeName: function(str) {
//         this.firstName = `${str}`
//     }
// };

// console.log(person.sayHello());
// console.log(person.changeName('Abdullah'));
// console.log(person.firstName);




// const counter = {
//     currentValue: 0,
//     increment: function () {
//         this.currentValue++;
//         return this.currentValue;
//     },
//     decrement: function () {
//         this.currentValue--;
//         return this.currentValue;
//     },
//     add: function (valueToAdd) {
//         this.currentValue += valueToAdd;
//         return this.currentValue;
//     },
//     subtract: function (valueToSubtract) {
//         this.currentValue -= valueToSubtract;
//         return this.currentValue;
//     }
// };

// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.add(2));
// console.log(counter.subtract(4));




class Person {
    constructor(firstName = 'a', lastName = 'b', age = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const person1 = new Person('c', 'd', 1);
console.log(person1);
const person2 = new Person();
console.log(person2);