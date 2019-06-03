console.log("hello"+ " " + "world"); // concatinating
console.log("add something"); // print out something
let firstName = "Eva"; // Declaration with let
firstName = "John"; // Overwriting the variable
firstName = `Eva`; // Backticks possible
console.log(firstName.length);

const age = 23; // Constant Declaration 
//age = 24; not possible
const pi = 3.14; // Constants are good for math
const fingerprint = undefined; // for things which never change
console.log(fingerprint); // print out empty variable

let str =  "This is a string"; // Declaration of a String 
console.log(str[15]); // give out the last digit of the string

let nameFieldChecked = true; // Declaration of a boolean
let ageFieldChecked = false; // NO CONDITION! 

console.log(nameFieldChecked); // true
console.log(ageFieldChecked); // false

let myNumber; 
/* not defined, therefore it is 
automatically undefined unintentionally */

console.log(myNumber);

myNumber = null; // defined as NULL intentionally

console.log(myNumber);

let myObject = {
    key1 : 'valueString', // string inside an object
    key2: 1234, // numbers inside an object
    key3: true, // boolean inside an object
    key4: { // object inside of an object 
        moreKeys: "hello",
        secondKeys: "world"
    }
};
console.log(myObject); // print out the whole object
console.log(typeof(notDefinedVariable)); // typeof undeclared variable

let notVoteable = (age <= 17 ) ? "too young" : "old enough";
console.log(notVoteable);