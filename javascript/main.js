//1. Declare a variable and assign a string as a value.
// Make sure the string is at least 6 characters long. 
// Print the variable to the console.
let myValue = "Exercise";
console.log(myValue);
// 2. Access the 2nd and 6th elements of the string. 
// Print the elements to the console. **Make sure you have selected the right index numbers** 
// Output should be "x" and "i" (not in the same line)
console.log(myValue.substring(1,2)); // 2nd char for start, exclude after 3rd
console.log(myValue.substring(5,6)); // start at 6th position (counting starts at 0)
console.log(myValue.substring(1,2), myValue.substring(5,6)); // one liner
let second = myValue[1]; // different solution for same problem: get position of an array string
let sixth = myValue[5]; // because strings are saved as arrays in the background
console.log(second);
console.log(sixth);
// 3. Declare a variable called name and assign a string as a value. 
// 4. Declare a variable called age and assign a number as a value. 
// 5. Declare a variable called year and assign a number as a value. 
// 6. With your declared variables, print the following: "/name/ is /age/ in /year/" in one line!
let name = "Helen";
let age = 16;
let year = 2002;
let all = name + " is " + age + " in " + year; // Concatenation (add)
console.log(all);
// Backticks Solution you can use variables and strings without +
console.log(`${name} is ${age} in ${year}`);
// 7. Declare a variable called isMarried and assign a boolean value. 
// 8. With your declared variables, print the following "/name/ is married: true/false".
let isMarried = false;
console.log(name, "is married:", isMarried); // put different data with comma together 
// Advantage: data types are not merged to strings with this method 
// Don't mix with ternary operator: question ? true :false (conditional)

// 9. Declare a variable called programmingLanguage and assign the string "JavaScript". 
// Declare a variable called isFun and give it a value of true.  
// Print "JavaScript is fun: true" to the console. 
let programmingLanguage = "JavaScript";
let isFun = true; // declared local variable 
// var isFun = false; // not possible because already used
// let is always better because it will take care of double assignments

console.log(programmingLanguage + " is Fun: " + isFun);

// 10. Print the J and S of JavaScript from the variable programmingLanguage to the console. 
// 11. Print the length of the string "JavaScript" to the console.

console.log(programmingLanguage.substring(0,1)); // printing J 
console.log(programmingLanguage.substring(4,5)); // printing S
console.log(programmingLanguage.length); // Length property 

// 1. Copy and paste these variables into your JavaScript file.
//  In the commented section, write down which type you think each variable is. 
// Check your answers by printing the types to the console.

let length = 16.78; // number
let lastName = "Johnson"; // string
let car = ""; // string
let isOpen = true; // boolean
console.log(typeof length, typeof lastName, typeof car, typeof isOpen); // checking the types

// 2. Declare two variables called ageMark and ageJohn. Assign their ages - 
// one age should be assigned as a string, the other as a number. 
// Print the variables' data types to the console.
let ageMark = 22; // number
let ageJohn = "39"; // string 
console.log(typeof ageMark);
console.log(typeof ageJohn);

// Is John older than Mark? 
// Declare a variable with a boolean value and print the following to the console eg. 
// "John is older than Mark: true" 
// tip: you can use the ternary operator if you want!

let johnIsOlderThanMark = ageJohn > ageMark; // comparison operator

console.log("john Is Older Than Mark : " + johnIsOlderThanMark);

let ages = (ageMark < ageJohn) ? true : false; // ternary operator 
console.log("john is older than mark", ages );

// 4. Use let to declare a variable called x. Do not assign a value. Print x's data type to the console.
// 5. Assign a string to x. Print x's data type again. 
// 6. Print the last character of x's string to the console.
// 7. Print the length of x to the console, as well as the data type of x's length.

let y = 1;
let z = 2;
let w = y + z;
console.log(y + z);
console.log(z - y);
console.log( y- z);

console.log( y * z);
console.log( y / z);
console.log( z - y);

let h = 10;
console.log( y * z);
console.log( (y * z) / h);
let resultOne = ((y * z) / h);
console.log(resultOne);

let e = 15;
let f = 9;
console.log(e % f);

let g = 20;
console.log(e + f * g);
let resultTwo = ((e + f) * g);
console.log(resultTwo);
console.log(++e);
console.log(--f);

let d = f-e;
console.log(d+g);
console.log(resultOne % resultTwo);