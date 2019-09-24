/**
 * Objects and arrays
 */

// // Given an object car
// const car = {
//   wheels: 4,
//   color: "red",
//   brand: "chrysler"
// };

// // We can access the color property using bracket notation...
// console.log(car["color"]);

// // ... Buuut dot notation is easier
// console.log(car.color);

// // To check if something is an array
// console.log(Array.isArray(car));

// // To convert an object into an array of its keys
// console.log(Object.keys(car));

// // To convert an object into an array of it's values
// console.log(Object.values(car));

/**
 * Properties and methods
 */
// const car = {
//   accelerate: () => {
//     return "Vroom";
//   }
// };

// console.log(car);

/**
 * Class and extend
 */

// using instances
const today = new Date();

console.log(today.getDate()); // -> the fulldate

class Person {
  constructor(firstName = "Lola", lastName = "Showgirl", age = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const person1 = new Person();
console.log(person1);
console.log(person1 instanceof Person); // -> true
console.log(person1 instanceof String); // -> false
console.log(person1 instanceof Object); // -> true

const person2 = new Person("Ali", "Abu Zrir");
console.log(person2);
