console.log("Hello" + ' World'); // concatenate
console.log("Hello" * ' World'); // Not a Number
console.log("Hello" - ' World'); // in all 
console.log("Hello" / ' World'); // of this
console.log("Hello" % ' World'); // cases

let helloWorld = " Hello " + 'World '; // variable definition
helloWorld = helloWorld.trim(); // overwriting old variable with removing whitespace beginning & end
console.log(helloWorld); // Hello World

let lipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."; // lipsum.com
console.log(lipsum.includes("Ipsum")); // argument was "Ipsum", gave boolean true/false

console.log(helloWorld.substr(5)); // will printout " World"
console.log(helloWorld.substr(5, 3)); // will printout " Wo"

// Hello World -> Make a substring which only prints "Hello"
// Little Hint: Computer starts counting at ZERO!!! 

console.log(helloWorld.substr(0, 5));

console.log(lipsum.match('1960'));

console.log(lipsum.match('Ipsum'));

// Please use the functions .toUpperCase() and .toLowerCase() with
// the old helloWorld variable and print everything on the console

console.log("Ajil".toUpperCase()); // makes everything BIG

console.log(helloWorld.toLowerCase()); // makes everything SMALL 

console.log(lipsum.substring(6, 11));

// Make a substring which prints out only Lorem 
// with the substring() method 

console.log(lipsum.substring(0, 5));

let y = 5; // 5
y++; // 6
console.log(y);

// Your turn now! Please decrement the y again and give 
// it to the console again! 

y--; // 5 again
y--; // 4
console.log(y);

// Have a nice break now!!! 

let a = 10;
let b = 5;
a += b; // a = a + b; Short writing
console.log(a); // Result of addition = 15
console.log(b); // Nothing changed = 5

// It's your turn! 
// We want to use b -= a;
// you explain me what happens there
b -= a; // b = b - a; Short writing
console.log(a); // 15 already saved
console.log(b); // 5 - 15 =  -10; 

// Type Coercion
let num = 20;  // number
num = String(num); // Saving procedure
console.log(String(num)); // String conversion
console.log(Boolean(num)); // Bool(ean) conversion

// Its your turn! 
// make a new variable with a String. 
// Please convert this String to an Number!
// and write it on the console. 
// Tip: Use Number() Method :) 

let name = "Martina";
console.log(Number(name));  // Not a Number (NaN)

let myString = "2054";
console.log(Number(myString)); // 2054

let myNewString = "20.54";
myNewString = Number(myNewString); // saving converted number
console.log(myNewString); // 20.54

let newNumber = 5;
console.log(newNumber == 8); // value equality is false
console.log(myString == 2054); //  value equality is true
//  value equality is true but type equality is false
console.log(myString === 2054); // false at the end !!!

let myNewPassword = "Ariadne";
// New Password should be different to old one
console.log(myNewPassword != "Martina"); 
// If that's true, we can store in the database... 

let myOldPassword = 23;
myNewPassword = 23;
console.log(myOldPassword !== myNewPassword); // false 
// Thats false and we have to type a new Password again 
// In this case only, this means this password will not be accepted
// It's too close to the old one

let k = 6;
let l = 3;

// Question ? "yes" : "no"; 
// Question: Is k smaller than 10 ? If true, write "yes", if false, write "no"
(k < 10 ) ? console.log("yes") : console.log("no"); // true -> yes 
// Question: Like before, but is l also bigger than 1? 
(k < 10 && l > 1) ? console.log("yes") : console.log("no"); // true -> yes 

// Task for you: Test, if k is equal to 5 OR l is equal to 5
// Little Tip: don't use == but instead use === 
(k === 5 || l === 5 ) ? console.log("yes") : console.log("no");

// value of K is unequal to value L=> false, opposite of false => true => console.log('unequal')
// It is also checking, is the value the same && is the type the same? 
(!(k === l)) ? console.log("unequal") : console.log("equal"); 
// (6 == 3)     true case               false case 
(!(k == l)) ? console.log("unequal") : console.log("equal");
// let's make it easier
(k == l) ? console.log("equal") : console.log("unequal");
// not equal
(k != l) ? console.log("unequal") : console.log("equal");

let h = j = 'test'; // Don't do this at home, for professionals 
// first, it will set j equal to test
// second, it will set h equal to test 
console.log(j); 
console.log(h);

// Order of execution
console.log(y++); // first use the number, then add something to it , y = 4
// y = 5
console.log(++y); // first add, then use the number, y = 6


 