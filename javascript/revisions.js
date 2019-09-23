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
const lastNamesArray = profiles.map(person => person.lastName);
console.log(lastNamesArray);

let students = [
  { firstName: "Karol", lastName: "Polakowski", age: 30 },
  { firstName: "Davide", lastName: "De Feudis", age: 35 },
  { firstName: "Maria", lastName: "Nanakou", age: 40 },
  { firstName: "Nic", lastName: "Solitom", age: 32 },
  { firstName: "Christophe", lastName: "Troudart", age: 23 },
  { firstName: "Balazs", lastName: "Danyadi", age: 33 },
  { firstName: "Naima", lastName: "Adan Ahmed", age: 29 },
  { firstName: "Givara", lastName: "Mahfoud", age: 25 },
  { firstName: "Mojgan", lastName: "Vafa", age: 18 },
  { firstName: "Ion", lastName: "Lazarev", age: 30 },
  { firstName: "Leon-Arno", lastName: "Rimrod", age: 30 },
  { firstName: "Itamar", lastName: "Givon", age: 35 }
];

let sentences = students.map(student => {
  return `${student.firstName} ${student.lastName} is ${student.age} years old`;
});
console.log(sentences);

//// To get a single value out of an arry we can use a forEach...
// let sum = 0; // Accumulator

// classMates.forEach(student => {
//   sum += student.age; // sum = sum + student.age
// });

// console.log(sum); // -> 367

// ...But Array.prototype.reduce is much better for it

// Exercise: Use reduce to do the exact same thing that we did above.
let sumWithReduce = students.reduce(
  //(total,student) => { return total + student.age }
  function(total, student) {
    console.log(total);
    console.log(student);
    console.log("Just first name - ", student.firstName);
    return total + student.age;
  },
  0
);
console.log(sumWithReduce);

// Exercise: Reduce the classMates array to a boolean that indicates whether there is an object with the firstName Mojgan is in it.

// RECURSIVE WAY
let myreduce = function(array, start, searchedName) {
  while (start < array.length) {
    return array[start].firstName === searchedName
      ? true
      : myreduce(array, ++start, searchedName);
  }
  return false;
};
console.log(myreduce(students, 0, "Mojgan"));

// THROW WAY
function interruptedReduce(arrayOfStudents) {
  try {
    return arrayOfStudents.reduce((hasMojgan, student, i) => {
      console.log(i);
      return (
        student.firstName === "Mojgan" &&
        (() => {
          throw true;
        })()
      );
    }, false);
  } catch (err) {
    return err;
  }
}
console.log(interruptedReduce(students));

// SOME
let hasMojgan = students.some((student, i) => {
  console.log(i);
  return student.firstName === "Mojgan";
});
console.log(hasMojgan);

// Bonus challenge: Find a way to achieve the same thing as above, but without using reduce, map or includes (or a for, forEach and while), MDN is your friend here...

// const isMojganHere = classMates.some(student => {
//   return student.firstName === "Mojgan";
// });

// console.log(isMojganHere);

// Warmup: Find in mdn, an array method, that will help us check that EVERY student is above the age of 18. Then use the method and store the boolean it returns in a variable

// const allStudentsOver18 = classMates.every(student => {
//   return student.age > 18;
// });

// console.log(allStudentsOver18); // -> true

// Exercise: Reduce the array of students into a string of first name and age separated by commas. Ex: Nic is 32, Naima is 29...
// Do this same task in *TWO* different ways
// FIRST WAY
let stringResult = students
  .reduce((acc, student) => {
    return acc.concat(`${student.firstName} is ${student.age}`);
  }, [])
  .join(", ");
console.log(stringResult);

// SECOND WAY
let stringResult1 = students
  .reduce((acc, student) => {
    return acc.concat(`${student.firstName} is ${student.age}, `);
  }, "")
  .slice(0, -2);
console.log(stringResult1);

// Warmup: Find in mdn, an array method, that will help us check thet EVERY student is above the age of 18. Then use the method and store the booleaqn it returns in a variable
let above18 = students.every(student => student.age >= 18);
console.log(above18);

let summary = students.reduce(
  (summary, student, i) => {
    /* summary["totalAge"] += student.age;
    summary["averageAge"] = summary.totalAge / (i + 1);
    return summary; */
    const sum = summary.totalAge + student.age;
    return {
      totalAge: sum,
      averageAge: sum / (i + 1)
    };
  },
  {
    totalAge: 0,
    averageAge: 0
  }
);
console.log(summary);

// Exercise: to do the exact same thing as above with the Array.prototype.filter method
let filtered = students.filter(
  student => student.firstName[0].toUpperCase() === "N"
);
console.log(filtered);
