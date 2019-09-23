/**
 * A Revisions file to cover:
 * - Loops and connection to array methods
 * - Array.prototype.forEach()
 * - Array.prototype.map()
 * - Array.prototype.reduce()
 */

// let names = [
//   "Leon",
//   "Karol",
//   "Davide",
//   "Martina",
//   "Virgile",
//   "Bianca",
//   "Maria",
//   "Christophe",
//   "Nic",
//   "Hassan",
//   "Mor",
//   "Givara",
//   "Naima",
//   "Balazs",
//   "Ion",
//   "Moj"
// ];

// let i = 0;

// While can access arrays
// while (i < names.length) {
//   console.log(names[i]);
//   i++; // i += 1; i = i + 1;
// }

// // ... but for is better for it
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// // Aside: function - three ways
// // Declaration
// function logMe(element) {
//   console.log(element);
// }

// // Expression
// const logMe = function(element) {
//   console.log(element);
// };

// // Arrow function expression
// const logMe = name => {
//   console.log(name);
// };

// // However, for is still too long..
// // Let's use Array.prototype.forEach()
// names.forEach((name, i) => {
//   console.log(`${i}: ${name}`);
// });

// // forEach can be used to... collect and manipulate array values, into a NEW array
// const namesWithNumber = [];

// names.forEach((name, i) => {
//   namesWithNumber.push(`${i}: ${name}`);
// });

// console.log(namesWithNumber);

// //... BUUUUT, Array.prototype.map is much better for doing it
// const namesWithNumber = names.map((name, i) => {
//   return `${i}: ${name}`;
// });

// console.log(namesWithNumber);

// const profiles = [
//   { firstName: "Robert", lastName: "Ristock" },
//   { firstName: "Martina", lastName: "Freundorfer" },
//   { firstName: "Leon-Arno", lastName: "Rimrod" },
//   { firstName: "Itamar", lastName: "Givon" }
// ];

/**
 * Exercise:
 * Map the array above into a new array containing just the last names
 */
// const profilesLastNames = profiles.map((profile) => {
//   return `${profile.lastName}`;
// });
// console.log(profilesLastNames);

const classMates = [
  { firstName: "Nic", lastName: "Solitom", age: 32 },
  { firstName: "Naima", lastName: "Adan Ahmed", age: 29 },
  { firstName: "Davide", lastName: "de Feudis", age: 35 },
  { firstName: "Balazs", lastName: "Danyadi", age: 33 },
  { firstName: "Givara", lastName: "Mahfoud", age: 25 },
  { firstName: "maria", lastName: "Nanakou", age: 40 },
  { firstName: "Mojgan", lastName: "Vafa", age: 23 },
  { firstName: "Ion", lastName: "Lazarev", age: 30 },
  { firstName: "Christophe", lastName: "Troudart", age: 23 },
  { firstName: "Karol", lastName: "Polakowski", age: 30 },
  { firstName: "Bianca", lastName: "Richa", age: 33 },
  { firstName: "Hassan", lastName: "Abu Shawish", age: 34 }
];

// // Create a new array of strings. The string should follow the pattern below:
// // Nic Solitom is 32 years old.
// const studentStrings = classMates.map(member => {
//   return `${member.firstName} ${member.lastName} is ${member.age} years old`;
// });

// console.log(studentStrings);

//// To get a single value out of an arry we can use a forEach...
// let sum = 0; // Accumulator

// classMates.forEach(student => {
//   sum += student.age; // sum = sum + student.age
// });

// console.log(sum); // -> 367

// ...But Array.prototype.reduce is much better for it

// Exercise: Use reduce to do the exact same thing that we did above.

// const ageSum = classMates.reduce((sum, student) => {
//   return sum + student.age;
// }, 0);

// console.log(ageSum); // -> 367

// Exercise: Reduce the classMates array to a boolean that indicates whether there is an object with the firstName Mojgan is in it.

// We can use a reducer to check if a value is in an array...
// const wheresMojgan = classMates.reduce((hasMojgan, student) => {
//   return hasMojgan || student.firstName === "Mojgan";
// }, false);

// console.log(wheresMojgan);

// const includeStudent = classMates.reduce((acc, student)=> {
//   if(student.firstName === 'Mojgan') acc = true;
//   return acc;
// }, false);
// console.log(includeStudent);

// ... Buuuut, Array.prototype.includes is much better at it
// const isMojganHere = classMates
//   .map(student => {
//     return student.firstName;
//   })
//   .includes("Mojgan");

// console.log(isMojganHere);

// const includeStudent = classMates.some(student => student.firstName === 'Mojgan')
// console.log(includeStudent);

// Bonus challenge: Find a way to achieve the same thing as above, but without using reduce, map or includes (or a for, forEach and while), MDN is your friend here...

// const includeStudent = classMates.filter(student => student.firstName === 'Mojgan')
// console.log((includeStudent.length > 0));

// Exercise: Reduce the array of students into a string of first name and age separated by commas. Ex: Nic is 32, Naima is 29...
// Do this same task in *TWO* different ways

// const str = classMates.reduce((acc, student) => {
//   return `${acc} ${student.firstName} is ${student.age}, `
// }, '');
// console.log(str.substring(0, str.length - 2) + '.');

// let str = '';
// for (let student of classMates) {
//   str += `${student.firstName} is ${student.age}, `;
// }
// console.log(str.substring(0, str.length - 2) + '.');

// Exercise: check that all the students are over 18.

// console.log(classMates.every(student => student.age > 18)

/* 7. ** Exercise **: _(10 mins.)_ Write a function that takes an object and returns a new object with the keys and values in separate arrays.

const convert = obj => {
  return { keys: Object.keys(obj), values: Object.values(obj) };
};
console.log(convert({ a: 1, b: 2, c: 3 }));
console.log(convert({ isDone: true })); */

// Write a function that takes in an array of scrabble tiles, and returns the total score of the tiles together.

const scoreOfTiles = arr => {
  return arr.reduce((acc, curr) => acc + curr.score, 0);
};

console.log(scoreOfTiles([{ tile: "N", score: 1 }, { tile: "O", score: 1 }]));
console.log(
  scoreOfTiles([
    { tile: "Y", score: 4 },
    { tile: "E", score: 1 },
    { tile: "S", score: 1 }
  ])
);
console.log(
  scoreOfTiles([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ])
);
