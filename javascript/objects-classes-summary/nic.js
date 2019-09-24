//? 1. ** Exercise ** _(15 mins.)_: Fix the existing following object and add a method`changeName()`.The method should accept a string as an argument and change the`firstName` property to that new string.

const person = {
  firstName: "Ali",
  lastName: "Abu Zrir",
  greeting: "salam",
  sayHello: function() {
    return `${this.firstName} says ${this.greeting} `;
  },
  changeName: function(newName) {
    return this.firstName = newName;
  }
};
console.log(person.sayHello());

console.log(person.firstName);
console.log(person.changeName("Nic"));
console.log(person.firstName);