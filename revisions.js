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



const classMates = [{
    firstName: "Nic",
    lastName: "Solitom",
    age: 32
  },
  {
    firstName: "Naima",
    lastName: "Adan Ahmed",
    age: 29
  },
  {
    firstName: "Davide",
    lastName: "de Feudis",
    age: 35
  },
  {
    firstName: "Balazs",
    lastName: "Danyadi",
    age: 33
  },
  {
    firstName: "Givara",
    lastName: "Mahfoud",
    age: 25
  },
  {
    firstName: "Maria",
    lastName: "Nanakou",
    age: 40
  },
  {
    firstName: "Mojgan",
    lastName: "Vafa",
    age: 23
  },
  {
    firstName: "Ion",
    lastName: "Lazarev",
    age: 30
  },
  {
    firstName: "Christophe",
    lastName: "Troudart",
    age: 23
  },
  {
    firstName: "Karol",
    lastName: "Polakowski",
    age: 30
  }
];






// // Create a new array of strings. The string should follow the pattern below:
// // Nic Solitom is 32 years old.
// const studentStrings = classMates.map(member => {
//   return `${member.firstName} ${member.lastName} is ${member.age} years old`;
// });

// const arr = classMates.map(student => `${student.firstName} ${student.lastName} is ${student.age} years old.`)

// console.log(arr);

// console.log(classMates.reduce((acc, student) => {
//   return  acc + student.age;
// }, 0));

// console.log(sum); // -> 367

// const sum = classMates.reduce((total, sum) => total + sum.age, 0);
// console.log(sum)








// Exercise: Use reduce to do the exact same thing that we did above.

// const ageSum = classMates.reduce((sum, student) => {
//   return sum + student.age;
// }, 0);

// console.log(ageSum); // -> 367








// Exercise: Reduce the classMates array to a boolean that indicates whether there is an object with the firstName Mojgan.



// const includeStudent = classMates.reduce((acc, student)=> {
//   if(student.firstName === 'Mojgan') acc = true;
//   return acc;
// }, false);
// console.log(includeStudent);

// const includeStudent = classMates.reduce((hasMojgan, student)=> {
//   return hasMojgan || student.firstName === 'Mojgan';
// }, false);
// console.log(includeStudent);

// false || false is false
// true || false is true; if there is 1 true is not going to check the next

// const includeStudent = classMates.some(v => v.firstName === 'Mojgan')
// console.log(includeStudent);

// const includeStudent = classMates.filter(v => v.firstName === 'Mojgan')
// console.log(includeStudent);







// Exercise: Reduce the array of students int a a string of first nam and age seperated by commas. Ex: Nic is 32, Naime is 29...
// Do this same task in *TWO* different ways