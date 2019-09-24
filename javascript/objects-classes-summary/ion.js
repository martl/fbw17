const person = {
  firstName: "Ali",
  lastName: "Abu Zrir",
  greeting: "salam",
  sayHello: function() {
    return `${this.firstName} says ${this.greeting}`;
  },
  changeName: function(newName) {
    return (this.firstName = newName);
  }
};
person.changeName("Ion");

console.log(person.sayHello());
