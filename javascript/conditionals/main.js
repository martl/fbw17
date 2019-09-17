console.log('test');

// Two variables x and y with a number
// Compare and find out which number is bigger? 
// Print a little sentence, that x is bigger y

let x = 2;
let y = -Infinity;

if (y > x || x > y) {
    console.log('first condition is true' + 'more text');
    console.log(`${y} is bigger or smaller than ${x}`);
    //console.log('y is bigger than x');
} else if (x > y) {
    console.log('second condition is true');
    console.log('x is bigger than y');
} else if (x === y) {
    // Equality 
    console.log('x equals y');
} else {
    // error handling if they cannot be compared
    console.log('Cannot be compared');
}

let varOne = 10;
let varTwo = 10;

if (((varOne >= varTwo) && (120 % 2 === 0)) || (varOne * 260 === 2600)) {
    console.log("Heya!");
    (12 > 2) ? console.log("The condition is true"): console.log("the condition is false");

    let varThree = "1";
    if (varThree == true) {
        console.log("Heya is a string");
    }
}

var name = "John";
var age = 26;
var married = "yes";


// check if he's married? 
if (married === "yes") {
    console.log("yes, he is married");
} else {
    console.log("no, he is single!");
}

married = false;

if (married === true) { // check a boolean
    console.log(name + ' is married');
} else {
    console.log(name + ' is not married');
}

// =   : give a value
// ==  : if values are equal
// === : if values and type are equal

let z = 0;

// not equal to 1 
if (z !== 1) {
    console.log('hello world');
}

if (z == 1 || typeof (z) === 'number') {
    console.log('value is either one OR type is a Number');

    // having more if statements inside... 
    // maximum 3 ifs inside each other 
}

let password = 'hello';
// Only for demonstration, in reality you would this differently! 
if (password.length >= 8 &&
    password.includes('1234') &&
    password.endsWith('(/&)(!/"§&')) {
    // good password
    console.log('This is a good password');
} else {
    console.log('Please give a better password');
}

age = 65;

if (age >= 60 && age <= 70) {
    console.log('John is a pre-grandpa.');
} else if (age > 70) {
    console.log('John is a grandpa.')
} else if (age < 0) {
    console.log('John is not born.')
}

let trafficLight = 'yellow';
// First Task for today: 
// Please check which color is the trafficLight
// And tell if the car can go or not! 
// And please obey the rules of Germany ;) 
// Bonus: check for red-yellow :) after red 
if (trafficLight === 'green') {
    console.log('Go!');
} else if (trafficLight === 'red-yellow' ||
    trafficLight === 'orange-red' ||
    trafficLight === 'red-orange' ||
    trafficLight === 'yellow-red') {
    console.log('Caution!');
} else if (trafficLight === 'yellow' || trafficLight === 'orange') {
    console.log('Slow down! or speed up ;) ');
} else if (trafficLight === 'red') {
    console.log('Stop!')
} else {
    console.log('Something is wrong... Please don\'t drink and drive');
}

// Second Task: FizzBuzzProblem
// https://www.goconqr.com/c/59891/course_modules/106534-fizzbuzz-problem?=
// Write a single script that stores a single integer into a variable. 
// This integer can be anything between 1 and 100. 
// Then write a script that prints different things to the console based on the number provided.
// Specifically:
// If the number is multiple of 3 (3, 6, 9 etc) print 'Fizz' to the console.
// If the number is multiple of 5 (5, 10 etc) print 'Buzz'
// If it's multiple of both 3 and 5 (15, 30, 45) then print 'FizzBuzz'
// Otherwise print the number itself.
// Test that your script works by changing the number regularly. Check all cases work properly.
let myNumber = 99.99;
// Range check 
if (myNumber < 101 && myNumber >= 0) {
    // NOT unequal to zero AND equal to zero
    if (!(myNumber % 5) && myNumber % 3 == 0) {
        console.log('fizzbuzz');
    } else if (myNumber % 3 == 0) {
        console.log('fizz');
    } else if (myNumber % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(myNumber);
    }
} else {
    // Tell the user what to change with his input
    console.error('Please choose a number between 0 and 100!');
}

