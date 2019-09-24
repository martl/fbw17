// 1. ** Exercise **: _(15 mins.)_ Write a function that checks if a number is within the range of an object's min and max properties.

//     | Inputs | Output |
//    | ---------------------- | ------ |
//    | 4, { min: 0, max: 5 } | true |
//    | 4, { min: 4, max: 5 } | true |
//    | 4, { min: 6, max: 10 } | false |
//    | 5, { min: 5, max: 5 } | true |

//     _Note: Assume min <= max is always true._

const checkRange = (number, object) => {
    return number <= object.max && number >= object.min;
};
console.log(checkRange(4, { min: 0, max: 5 }));

// Write a function that takes an object and returns a new object with the keys and values in separate arrays.
// IN: { a:1, b:2, c:3}  OUT: {keys:["a", "b", "c"], values:[1,2,3]}
// IN: {isBrown: true} OUT: {keys: ["isBrown"], values: [true]}

const splitter = (inputObject) => {
    return {
        keys: Object.keys(inputObject),
        values: Object.values(inputObject)
    }
};

console.log(splitter({ a: 1, b: 2, c: 3 }));
console.log(splitter({ isBrown: true }));

// 8. ** Challenge **: _(35 - 40 mins.)_ Write a function that takes in an array of scrabble tiles, and returns the total score of the tiles together.

const scrabbleTiles1 = [{ tile: "N", score: 1 }, { tile: "O", score: 1 }]; // expect: 2
const scrabbleTiles2 = [{ tile: "Y", score: 4 }, { tile: "E", score: 1 }, { tile: "S", score: 1 }]; // expect: 6
const scrabbleTiles3 = [{ tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 }]; //expect: 28

const summingUp = (scrabbleTilesArray) => {
    let sum = 0;
    scrabbleTilesArray.forEach(function (tile) {
        sum += tile.score;
    });
    return sum;
};
console.log(summingUp(scrabbleTiles1));
console.log(summingUp(scrabbleTiles2));
console.log(summingUp(scrabbleTiles3));



//! MOR'S SOLUTION:
const sumOfTiles = scrabbleTiles3.reduce((sum, array) => {
    return array.score + sum
}, 0);
console.log(sumOfTiles);

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

//? 1. ** Exercise ** _(15 mins.)_: Fix the existing following object and add a method`changeName()`.The method should accept a string as an argument and change the`firstName` property to that new string.

const person = {
    firstName: "Ali",
    lastName: "Abu Zrir",
    greeting: "salam",
    sayHello: function () {
        return `${this.firstName} says ${this.greeting} `;
    },
    changeName: function (newName) {
        return this.firstName = newName;
    }
};
console.log(person.sayHello());

console.log(person.firstName);
console.log(person.changeName("Nic"));
console.log(person.firstName);