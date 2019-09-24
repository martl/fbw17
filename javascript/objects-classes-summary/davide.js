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




const counter = {
    currentValue: 0,
    increment: function () {
        this.currentValue++;
        return this.currentValue;
    },
    decrement: function () {
        this.currentValue--;
        return this.currentValue;
    },
    add: function (valueToAdd) {
        this.currentValue += valueToAdd;
        return this.currentValue;
    },
    subtract: function (valueToSubtract) {
        this.currentValue -= valueToSubtract;
        return this.currentValue;
    }
};

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.add(2));
console.log(counter.subtract(4));


