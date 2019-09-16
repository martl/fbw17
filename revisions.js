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

const people = [
  { firstName: "Nic", lastName: "Solitom", age: 32 },
  { firstName: "Naima", lastName: "Adan Ahmed", age: 29 },
  { firstName: "Davide", lastName: "De Feudis", age: 35 },
  { firstName: "Balazs", lastName: "Danyadi", age: 33 },
  { firstName: "Givara", lastName: "Mahfoud", age: 25 },
  { firstName: "Maria", lastName: "Nanakou", age: 40 },
  { firstName: "Mojgan", lastName: "vafa", age: 32 },
  { firstName: "Ion", lastName: "Lazarev", age: 30 },
  { firstName: "hassan", lastName: "abushawsh", age: 30 },
  { firstName: "Tareq", lastName: "Almasri", age: 28 },
  { firstName: "Karol", lastName: "Polakowski", age: 28 },

];
const getFirstName = people.map((name) => `${name.firstName} ${name.lastName} is ${name.age} years old`)

console.log(getFirstName)
/**
 * Exercise:
 * Map the array above into a new array containing just the last names
 */
