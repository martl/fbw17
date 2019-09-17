// 1- Write a program to display the city name if the string begins with "Los" or "New" 
// otherwise return "The city name does not begin with Los or New".

function losNew(checkCity) {
    // toLowerCase () is just nice to have ;-) 
    if (checkCity.startsWith('los') || checkCity.toLowerCase().startsWith('new')) {
        console.log(checkCity);
        //return checkCity;
    } else {
        console.log('The city name does not begin with Los or New');
        //return 'The city name does not begin with Los or New';
    }
}

losNew('New York');
losNew('Paris');
losNew('LosAngeles');

//2. Write a program to compute the sum of three elements of a given array of integers. 
//The length of the array must be 3.
/** Example [5, 10, 15] ➞ 30*/

function compute(sum) {
    return sum[0] + sum[1] + sum[2];
}

console.log(compute([5, 10, 15]));

/** 3- Given two strings, firstName and lastName, return a single string in the format "last, first".
Examples
"John", "Doe" ➞ "Doe, John"
"Mary", "Jane" ➞ "Jane, Mary"*/

let myFirst = "Mojgan";
let myLast = "Vafa";
let final = myLast + ', ' + myFirst;
console.log(final);

/** 4- Write a program that takes an integer and returns true if it's divisible by 100, 
 * otherwise return false.
Examples
1 ➞ false
1000 ➞ true
100 ➞ true */

function divideWith100(num1) {
    console.log(num1 % 100 === 0);
}

divideWith100(1);
divideWith100(1000);
divideWith100(100);
divideWith100(123);

/** 5- Write a program that adds a string ending to each item in an array.
Examples & Expected output
["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]*/

let myAdd = ["new", "pander", "scoop"];
myAdd.forEach(function (value, index, array) {
    array[index] = value.concat('er'); // changing old Array to new Array
});
console.log(myAdd);

myAdd = ["clever", "meek", "hurried", "nice"];

function addEnding(myArray) {
    // Shorter version of forEach
    // Map Arrow Function for each part of the array 
    // returns new Array with new Values
    return myArray.map(value => value.concat("ly"));
}
console.log(addEnding(myAdd));

let wordArray = ["bend", "sharpen", "mean"];
let wordlyArray = [];
for (let i = 0; i < wordArray.length; i++) {
    // let slice = wordArray.slice(i, i+1); // one word, one element of the array
    // instead of slice you can use wordArray[i]
    wordlyArray.push(wordArray[i] + "ing");
}
console.log(wordlyArray);

/**6- Write a program that checks whether a number is even or odd and returns "even" 
 * for even numbers and "odd" for odd numbers.
Examples & Expected Output
3 ➞ "3 is odd"
146 ➞ "146 is even"
19 ➞ "19 is odd"*/

let x = 3;
if (x % 2 == 0) {
    console.log(x + " is even");
} else {
    console.log(x + " is odd");
}

/** 7- You are given 2 out of 3 angles of a triangle, in degrees e.g. 29° and 59°. 
 * Write a program that classifies the missing angle (the third angle of a triangle) 
 * as either "acute", "right", or "obtuse" based on its degrees.
Notes
An acute angle is smaller than 90°.
A right angle is exactly 90°.
An obtuse angle is greater than 90° (but smaller than 180°).
For example: 11°, 20° should return "obtuse", since the missing angle would be 149°, which makes it obtuse.
Examples
27°, 59° ➞ Then the third angle is 92° so it is "obtuse"
135°, 11° ➞ The third angle is "acute"
45°, 45° ➞ The third angle is a "right angle"*/
function triangleAngleCheck(firstAngle, secondAngle) {
    let thirdAngle = 180 - (firstAngle + secondAngle);
    // better use if else instead of switch case 
    if (thirdAngle < 90 && thirdAngle > 0) {
        console.log('Angle acute');
    } else if (thirdAngle === 90) {
        console.log('Angle right');
    } else if (thirdAngle > 90 && thirdAngle < 180) {
        console.log('Angle obtuse');
    } else {
        console.log('Did you enter correct degrees? is it a triangle??? ');
    }
}
triangleAngleCheck(27, 59); // good path
triangleAngleCheck(135, 11);
triangleAngleCheck(45, 45);
triangleAngleCheck(11, 20);
triangleAngleCheck(120, 90000); // bad path 
triangleAngleCheck(-120, 90); // edge case
triangleAngleCheck(20, 90.9); // float possible 

/** 8- Make a variable with the string value of "maria jane jones". 
 * Convert each first letter to uppercase. 
 * Make sure your code works for any three names e.g. "john james smith".*/

let name = "john james smith";
let nameArray = name.split(" "); // output: ['john', 'james', 'smith'];
let capitalized = [];
for (i = 0; i < 3; i++) {
    let pop = nameArray.pop(); // last word of the array 'smith'
    pop = pop.charAt(0).toUpperCase() + pop; //'Ssmith'
    pop = pop.substr(0, 1) + pop.substr(2); // 'S' + 'mith'
    capitalized.unshift(pop); // add at the beginning to the new Array
}
capitalized = capitalized.toString(); // Converts to String
capitalized = capitalized.replace(/,/g, " "); // Regular Expression for replacing 
console.log(capitalized);


let name2 = "john james smith";
name2 = name2.split(" "); // output: ['john', 'james', 'smith'];

for (i = 0; i < name2.length; i++) {
    name2[i] = name2[i].charAt(0).toUpperCase() + name2[i].substr(1);
    // instead of substr(1) you can also use slice(1);
}
name2 = name2.join(' ');
console.log(name2);



/** 9- Write a program that takes a string and returns the word count. The string will be a sentence.

Examples Expected output
"This is an example" ➞ 4
"One more example for good measure" ➞ 6
"JavaScript is fun, right?" ➞ 4*/

function count(sentence) {
    return sentence.split(" ").length; // split makes an array, split after each empty space 
}

console.log(count("This is an example"));
console.log(count("One more example for good measure"));
console.log(count("JavaScript is fun, right?"));


/** 10-  Write a program to multiply each value in an array by the number of items in that array.
Examples
[2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0]
[4, 1, 1] ➞ [12, 3, 3]
[1, 0, 3, 3, 7, 2, 1] ➞ [7, 0, 21, 21, 49, 14, 7]
[0] ➞ [0]*/

let number = [13, 9, 11, 2]; // example array
for (i = 0; i < number.length; i++) { // loop over the array
    number[i] = number[i] * number.length; 
    //number[i] *= number.length; Short writing
}
console.log(number);