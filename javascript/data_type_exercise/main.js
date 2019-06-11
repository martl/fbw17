//1. Declare a variable and assign a string as a value.
// Make sure the string is at least 6 characters long. 
// Print the variable to the console.
let myValue = "Exercise";
console.log(myValue);
// 2. Access the 2nd and 6th elements of the string. 
// Print the elements to the console. **Make sure you have selected the right index numbers** 
// Output should be "x" and "i" (not in the same line)
console.log(myValue.substring(1, 2)); // 2nd char for start, exclude after 3rd
console.log(myValue.substring(5, 6)); // start at 6th position (counting starts at 0)
console.log(myValue.substring(1, 2), myValue.substring(5, 6)); // one liner
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

console.log(programmingLanguage.substring(0, 1)); // printing J 
console.log(programmingLanguage.substring(4, 5)); // printing S
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
console.log("john is older than mark", ages);

// 4. Use let to declare a variable called x. Do not assign a value. Print data type of x to the console.
let x; // no value assigned , if no = sign, 
console.log(typeof x); // undefined , this is the standard

// 5. Assign a string to x. Print data type of x again. Tip: no "let" needed 
x = "We are going to see a house today"; // assignment, between quotes
console.log(typeof x); // string 

// 6. Print the last character of x's string to the console. Tip: lastIndexOf(), maybe there are 
// better ways you already know? 
console.log(x.substring(32)); // because it is already at the end
console.log(x.length);

let x1 = x[x.length - 1];
console.log(x[x.length - 1]);
console.log(x.slice(-1)); // possibility to use negative numbers as well, starting from the end
console.log(x.substring(x.length - 1)); // very good solution!
console.log(x.lastIndexOf('y')); // 32
console.log(x.substring(x.lastIndexOf('y'))); // use method inside a method ;) 

// 7. Print the length of x to the console, as well as the data type of length of x.
console.log(x.length);
console.log(typeof x.length); // data type of length 

// 8. Declare three variables: a, b, c. Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(a == b);). Do this for each possibility (a, b) (a, c), (b, c). Then, print the data type of this check to the console.

let a = 1;
let b = 2;
let c = 3;
console.log(a == b);
console.log(a == c);
console.log(c == b);
let t = a == b;
console.log(typeof (a == b));

// What is the type of Infinity? Comment your answer. Print the type of infinity to the console.
// number??? 
console.log(typeof Infinity); // yes, it is a number, but why? 
// because its defined like that 
// to be able to calculate and compare it to other numbers

// Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false". 
let as = "am I a number";
//isNaN(as);
console.log("variable is NOT a number: " + isNaN(as));

// One more thing: Print the data type of isNaN(variable) to the console.
console.log(typeof isNaN(as)); // boolean

// Operators 
// Print all your results to the console.
// Declare two variables "y" and "z" and assign number values. 
// 1. Add y and z, and print the result to the console.
// 2. Subtract z from y, and print the result to the console. Then, subtract y from z and print the result to the console
let y = 1;
let z = 2;
let w = y + z;
console.log(y + z); // Addition 1 + 2 = 3
console.log(z - y); // Substraction 2 - 1 = 1
console.log(y - z); // both ways 1 - 2 = -1
// 3. Multiply y and z, and print the result to the console.
// 4. Divide y and z, and print the result to the console. both ways! 
console.log(y * z); // 2 * 1 = 2
console.log(z / y); // 2 / 1 = 2
console.log(y / z); // 1 / 2 = 0.5 //  number

// 5. Declare another variable "h" with the value "10". Multiply y and z. Then, divide the result by h. Store the result in a new variable named "resultOne". Print "resultOne" to the console.
// Tip: use let :) 

let h = 10; // declare new variable 
//let g = y * z; // possible, but not needed
//console.log(g / h); // this doesn't save the result, just writes to terminal
let resultOne = y * z / h; // save it in a new variable called resultOne 
console.log(resultOne); // print it out

// 5. Declare two variables "e" with the value of 15 and "f" with the value of 9. Print the remainder when e is divided by f.
// tip from tareq: % 
let e = 15;
let f = 9;
console.log(e % f); // 6 because 15 = 9 + 6; 15/9 = 1,... 

// 6. Declare another variable "g" with the value of 20. Add e and f, then multiply the result by g. Store the result in variable "resultTwo".  Print "resultTwo" to the console.
let g = 20;
let resultTwo = (e+f)*g; // brackets because multiple is stronger than +, 480 = (15+9)*20;
// 20*9+15 = 195 // wrong result! 
console.log(resultTwo);
//7. Increment e. Print the result to the console. Tip: ++
//8. Decrement f. Print the result to the console. Tip: no let
console.log(++e); //adds to the next number, we need it immediately, not later! short for e = e+1
console.log(--f); //removes to the next number, short version of f = f-1
console.log(e); //16 number is saved! 

// 9. Subtract e from f and store this in a new variable "d". Add d and g. Print the result to the console.
//let d = (e-f)+g;
//console.log(d); // 12 should be the result 
let d = f-e; 
console.log(d+g);

// 10. Print the remainder when "resultOne" is divided by "resultTwo" to the console. 
console.log(resultOne % resultTwo);