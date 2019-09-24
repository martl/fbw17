// 1. ** Exercise **: _(5 mins.)_ Create a person object with the following properties and methods:
// - firstName(the first name of the person)
//     - lastName(the last name of the person)
//     - sayHello(a method that returns the string "Hello World")

const person = {
    firstName: "Nic",
    lastName: "Solitom",
    sayHello: () => {
        return "Hello World"
    }
};
console.log(person.sayHello());