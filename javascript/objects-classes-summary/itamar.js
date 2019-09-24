const withinRange = (number, range) => {
  return number >= range.min && number <= range.max;
};

// console.log(withinRange(4, { min: 0, max: 5 })); // -> true
// console.log(withinRange(4, { min: 4, max: 5 })); // -> true
// console.log(withinRange(4, { min: 6, max: 10 })); // -> false
// console.log(withinRange(5, { min: 5, max: 5 })); // -> true

// Write a *function* that *takes an object* and *returns a new object* with the *keys and values in separate arrays*.

/**
 * 1. ~~Write a function~~
 * 2. ~~This function should accept an object as an argument~~
 * 3. ~~This function should return a new object~~ with the keys and values in separate arrays
 *    3.1. ~~This object should have a property keys, which holds an array of all the keys of the passed object~~
 *    3.2. ~~This object should have a property values, which holds an array of all the values of the passed object~~
 */

const objectSplitter = obj => {
  return {
    keys: Object.keys(obj),
    values: Object.values(obj)
  };
};

// console.log(objectSplitter({ a: 1, b: 2, c: 3 })); // -> { keys: ["a", "b", "c"], values: [1, 2, 3] }
// console.log(objectSplitter({ isBrown: true })); // -> { keys: ["isBrown"], values: [true] }

// Write a function that takes in an array of scrabble tiles, and returns the total score of the tiles together.

/**
 * 1. ~~Write a function~~
 * 2. ~~This function should take in an array of scrabble tile objects~~
 * 3. This function should return a number which represents the sum of each of the scrabble objects' score property
 */

const countScrabbleScore = scrabbleTiles => {
  return scrabbleTiles.reduce((totalScore, tile) => {
    return totalScore + tile.score;
  }, 0);
};

// console.log(
//   countScrabbleScore([{ tile: "N", score: 1 }, { tile: "O", score: 1 }])
// ); // -> 2
// console.log(
//   countScrabbleScore([
//     { tile: "Y", score: 4 },
//     { tile: "E", score: 1 },
//     { tile: "S", score: 1 }
//   ])
// ); // -> 6
// console.log(
//   countScrabbleScore([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 }
//   ])
// ); // -> 28

// const person = {
//   firstName: "Ali",
//   lastName: "Abu Zrir",
//   greeting: "salam",
//   sayHello: function() {
//     return `${this.firstName} says ${this.greeting}`;
//   }
// };

// console.log(person.sayHello());

// Fix the existing following object and add a method changeName(). The method should accept a string as an argument and change the firstName property to that new string.

// const person = {
//   firstName: "Ali",
//   lastName: "Abu Zrir",
//   greeting: "salam",
//   sayHello: function() {
//     return `${this.firstName} says ${this.greeting}`;
//   },
//   changeName: function(newName) {
//     this.firstName = newName;
//     return this.firstName;
//   }
// };

// // console.log(person.sayHello());

// console.log("Before rename:", person.firstName);
// console.log("Rename action:", person.changeName("Dana"));
// console.log("After rename:", person.firstName);

/**
 * Create a counter object with the following properties and methods:
      currentValue (the number 0)
      increment (a method to increase the property currentValue by 1)
      decrement (a method to decrease the property of currentValue by 1)
      add (a method that accepts a number and adds it to currentValue)
      subtract (a method that accepts a number and subtracts it from currentValue)
 */

const counter = {
  currentValue: 0,
  increment: function() {
    this.currentValue++;
    return this.currentValue;
  },
  decrement: function() {
    this.currentValue--;
    return this.currentValue;
  },
  add(num) {
    this.currentValue += num;
    return this.currentValue;
  },
  subtract(num) {
    this.currentValue -= num;
    return this.currentValue;
  }
};

console.log(counter.currentValue); // -> 0
console.log(counter.increment()); // -> 1
console.log(counter.currentValue); // -> 1
console.log(counter.decrement()); // -> 0
console.log(counter.currentValue); // -> 0
console.log(counter.add(6)); // -> 6
console.log(counter.currentValue); // -> 6
console.log(counter.subtract(8)); // -> -2
console.log(counter.currentValue); // -> -2
