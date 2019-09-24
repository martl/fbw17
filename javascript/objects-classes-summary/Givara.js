const Person = {
  firstName: "Givara",
  lastName: "Mahfoud",
  sayHello: () => {
    return "Hello World";
  }
};
console.log(Person.sayHello());

/* 1. ** Exercise ** _(15 mins.)_: Fix the existing following object and add a method`changeName()`.The method should accept a string as an argument and change the`firstName` property to that new string. */

const person = {
  firstName: "Ali",
  lastName: "Abu Zrir",
  greeting: "salam",
  changeName: function() {
    return `${this.firstName} says ${this.greeting} `;
  }
};
console.log(person.changeName());
