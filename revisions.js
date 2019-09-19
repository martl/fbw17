//blabla test git push // let names = [
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
// const profiles = [
//   {firstName: "Robert", lastName: "Rostock"},
//   {firstName: "Martina", lastName: "Freundorfer"},
//   {firstName: "Leon-Arno", lastName: "Rimrod"},
//   {firstName: "Itamar", lastName: "Givon"},
// ]

// const newProfiles = profiles.map(profile => {
//   var newArray = profile.lastName;
//   return newArray
// }
// )

// // console.log(newProfiles)

// const newProfiles = profiles.map(profile => {
//     return profile.lastName;})

//     console.log(newProfiles)

let classmates = [
  { firstName: "Naima", lastName: "Adan Ahmed", Age: 29 },
  { firstName: "Balazs", lastName: "Danyadi", Age: 33 },
  { firstName: "Givara", lastName: "Mahfoud", Age: 25 },
  { firstName: "Ion", lastName: "Lazarev", Age: 31 },
  { firstName: "Nic", lastName: "Solitom", Age: 33 },
  { firstName: "Mojgan", lastName: "Vafa", Age: 45 },
  { firstName: "Hamida", lastName: "Shinri", Age: 29 },
  { firstName: "Karol", lastName: "Polakowski", Age: 29 },
  { firstName: "Christophe", lastName: "Troudart", Age: 29 },
  { firstName: "Emma", lastName: "Blabla", Age: 29 },
  { firstName: "Bianca", lastName: "Richa", Age: 33 }
];

console.log(classmates);

// const newClassmates = classmates.map(classmates => {
//   return `${classmates.firstName}  ${classmates.lastName} is ${classmates.Age} years old`;})

//   console.log(newClassmates)

//   let sum = 0;
//   classmates.forEach(classmates => {
//     sum += classmates.Age;
//   })

//   console.log(sum)

// const totalAge = classmates.reduce ((accumulator, object) =>{
//   return accumulator + object.Age;
// },0)

// console.log(totalAge)

// Exercise: Reduce the classMates array to a boolean that indicates whether there is an object with the firstName Mojgan is in it.

// We can use a reducer to check if a value is in an array...
// const wheresMojgan = classMates.reduce((hasMojgan, student) => {
//   return hasMojgan || student.firstName === "Mojgan";
// }, false);

// console.log(wheresMojgan);

// ... Buuuut, Array.prototype.includes is much better at it
const isMojganHere = classmates
  .map(student => {
    return student.firstName;
  })
  .includes("Mojgan");

console.log(isMojganHere);

// Exercise: Reduce the array of students int a a string of first nam and age seperated by commas. Ex: Nic is 32, Naime is 29...
// Do this same task in *TWO* different ways

const sentences = classmates.reduce((acc, student) => {
  return `${acc} ${student.firstName}  is ${student.Age}.`;
}, "");

console.log(sentences);

const anotherSentence = classmates.map(students => {
  return `${students.firstName} is ${students.Age}.`;
});

console.log(anotherSentence);

const filterName =
  classmates.filter(student => {
    return student.firstName === "Mojgan";
  }).length != 0
    ? true
    : false;
console.log(filterName);


