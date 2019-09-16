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

const profiles = [
  { firstName: "Robert", lastName: "Ristock" },
  { firstName: "Martina", lastName: "Freundorfer" },
  { firstName: "Leon-Arno", lastName: "Rimrod" },
  { firstName: "Itamar", lastName: "Givon" }
];

/**
 * Exercise:
 * Map the array above into a new array containing just the last names
 */
var reformMe = profiles.map(profile => {
  return profile.lastName
});
console.log(reformMe);

const arrayOfStudent = [{
    name: "Nic",
    lastName: "Solitom",
    age: 32
  },
  {
    name: "Naima",
    lastName: "Adan",
    age: 28
  },
  {
    name: "Davide",
    lastName: "De Feudis",
    age: 30
  },
  {
    name: "Balazs",
    lastName: "Danyadi",
    age: 32
  },
  {
    name: "Givara",
    lastName: "Mahfoud",
    age: 25
  },
  {
    name: "Mojgan",
    lastName: "vafa",
    age: 23
  },
  {
    name: "Lon",
    lastName: "Lazarev",
    age: 30
  },
  {
    name: "Maria",
    lastName: "Nanakou",
    age: 40
  },
  {
    name: "Karol",
    lastName: "polakowski",
    age: 30
  }
]

const newArray = arrayOfStudent.map((student) => {
  return `${student.name} ${student.lastName} is ${student.age} years old.`;
})
console.log(newArray);