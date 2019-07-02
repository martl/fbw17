console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');

// Task: do this with a for loop! 
for (let a = 1; a <= 10; a++) {
    console.log(a + ' Hello World');
}

// make an Array fruits with Apple, Banana and Kiwi
// print all items with a for loop !
let fruits = ['Apple', 'Banana', 'Kiwi'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// three arrays, each array is one person
let martina = ['Martina', '35', 'Munich'];
// make 2 more persons
let lio = ['Lio', '0.5', 'Berlin'];
let nagjma = ['Nagjma', '28', 'Tolouse'];
// array of these arrays  = NESTED ARRAY
let persons = [martina, lio, nagjma]; // 2 more persons;
console.log(persons);
//let persons = [['Martina', '35'], ['Lio', '23']]; // same thing
// task is here to print out all the ages! 
// with a for loop!
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i][1]); // second item in each array
}

// Task: Imagine getting two numbers, a and b 
// If a is bigger than b or a is smaller than 0 or b is smaller than 0
// break the for loop
// Otherwise print all numbers between a and b (including a and b!)
let a = 5;
let b = 9;
// for & if Solution
for (let i = a; i <= b; i++) {
    if (a > b || a < 0 || b < 0) {
        break;
    }
    console.log('for if: ' + i);
}

//Virgiles Solution 
for (let i = a; a >= 0 && i <= b; i++) {
    console.log('virgile: ' + i);
}

// Shortest Solution, we don't have something to initialize!
for (; a >= 0 && a <= b; a++) { // First Semicolon is important! 
    console.log('shortest: ' + a);
}

a = 5; // reset a because we increment it up to b

//while Solution
while (a >= 0 && a <= b) {
    console.log('while: ' + a);
    a++;
}

// Task: Imagine a number x 
// If x is bigger than 0 we want to print it 
// as long as x is smaller than 6 
// please print "x is ${number} and smaller than 6"
// in a while loop, increase afterwards 

let x = 3;

while (x > 0 && x < 6) {
    console.log('x is ' + x + ' and smaller than 6'); // concatenation strings
    console.log(`x is ${x} and smaller than 6`); // backticks dollar signs
    x++;
}

// New Task: lets make an empty Array
// Fill it with a loop every digit from 0 - 10 
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = []; // create an empty array
for (i = 0; i <= 10; i++) { // from zero to 10
    arr.push(i); // add number to array
    console.log(arr); // print the array
}

// New Task : Stars in a loop
// *
// *
// * 
// *
// *
// *
// *
// *
// *
// *

for (i = 0; i <= 10; i++) {
    console.log('*');
}

// Christmas Tree Example
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
console.log('hello');
let star = '*';
for (i = 0; i <= 10; i++) {
    console.log(star);
    star += '*'; // short for star = star + '*';
}

// loop in loop (more complicated)
for (i = 0; i <= 6; i++) {
    let stars = '*'; // resetting stars each time
    for (let j = 1; j <= i; j++) {
        stars = stars + '*'; // adding how many stars we need for this line
    }
    console.log(stars);
}

// Task Create a nested loop that creates this array: 
/*
[
    [0], 
    [0,1],
    [0,1,2],
    [0,1,2,3],
    [0,1,2,3,4],
    [0,1,2,3,4,5]
    ....
]
*/

x = [];
let y = [0];
let z = [0, 1];

x.push(y);
x.push(z);

console.log(x);

let parent = [];
for (i = 0; i < 5; i++) {
    let child = [];
    for(j = 0; j <= i; j++) {
        child.push(j);
    }
    parent.push(child);
}
console.log(parent);