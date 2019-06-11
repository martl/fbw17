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
