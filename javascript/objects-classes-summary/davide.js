const person = {
    firstName: "Ali",
    lastName: "Abu Zrir",
    greeting: "salam",
    sayHello: function() {
        return `${this.firstName} says ${this.greeting}`;
    }
};

console.log(person.sayHello());