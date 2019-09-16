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



const totalAge = classmates.reduce(function(accumulator, n){
  return accumulator + n.Age;
},0)

console.log(totalAge)


