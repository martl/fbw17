const person = {
    firstName: "Ali",
    lastName: "Abu Zrir",
    greeting: "salam",
    sayHello: function() {
        return `${this.firstName} says ${this.greeting}`;
    },
    changeName: function(str) {
        this.firstName = `${str}`
    }
};

console.log(person.sayHello());
console.log(person.changeName('Abdullah'));
console.log(person.firstName);