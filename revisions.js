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

// const lastNames = profiles.map(profile => {
//   return profile.lastName;
// });
// console.log(lastNames);


// Create an array of student objects : first name, last name, age

const studentArray = [
  { firstName: "Christophe", lastName: "Troudart", age: 23 },
  { firstName: "Nic", lastName: "Solitom", age: 32 },
  { firstName: "Naima", lastName: "Adan Ahmed", age: 29 },
  { firstName: "David", lastName: "De Feudis", age: 35 },
  { firstName: "Balazs", lastName: "Danyadi", age: 33 },
  { firstName: "Givara", lastName: "Mahoud", age: 25 },
  { firstName: "Maria", lastName: "Nanakou", age: 35 },
  { firstName: "Mojgan", lastName: "Vafa", age: 37 },
  { firstName: "Ion", lastName: "Lazarev", age: 30 },
  { firstName: "Karol", lastName: "Polakowski", age: 30 }
];
console.log(studentArray);

// const lastNames = profiles.map( profile => {
//   return profile.lastName;
// });
// console.log(lastNames);

//Create a new array of strings. The string should follow the pattern below.
//Nic Solitom is 32 years old.

const studentString = studentArray.map((student) => {
  return `${student.firstName} ${student.lastName} is ${student.age} years old`;
});
console.log(studentString);

//To get a single value out of an array we can use a forEach.

let sum = 0;
studentArray.forEach(student => {
  sum += student.age; // sum = sum + student.age 
});
console.log(sum); // -> 309
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
  { firstName: "Maria", lastName: "Nanakou", age: 40 },
  { firstName: "Mojgan", lastName: "Vafa", age: 23 },
  { firstName: "Ion", lastName: "Lazarev", age: 30 },
  { firstName: "Christophe", lastName: "Troudart", age: 23 },
  { firstName: "Karol", lastName: "Polakowski", age: 30 },
  { firstName: "Bianca", lastName: "Richa", age: 33 },
  { firstName: "Hassan", lastName: "Abu Shawish", age: 34 }
];

// Create a new array of strings. The string should follow the pattern below:
// Nic Solitom is 32 years old.
const studentStrings = classMates.map(member => {
  return `${member.firstName} ${member.lastName} is ${member.age} years old`;
});

// console.log(studentStrings);

//// To get a single value out of an array we can use a forEach...
// let sum = 0; // Accumulator

// classMates.forEach(student => {
//   sum += student.age; // sum = sum + student.age
// });

// console.log(sum); // -> 150

// ...But Array.prototype.reduce is much better for it

// Exercise: Use reduce to do the exact same thing that we did above.
classMates.reduce(student) => {
  student.age;
});

console.log(sum);