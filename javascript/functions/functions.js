// First Function which calculates a sum of two values
function summary(a, b) {
    //let b = 20;
    //console.log(a+b); 
    return (a + b); // this is the way how we return values 
}
console.log(typeof (b));
let a = 10; // define before function
console.log(typeof (a)); // not available outside the scope

let sum = summary(10, 15); // return lands here
console.log(sum); // do what you want with it 
// console.log(summary()); also possible

let sum2 = summary(20, 25); // return lands here
console.log(sum2);

function returnType(a) {
    return typeof (a);
}

let typeOfArgument = returnType('hello world');
console.log(typeOfArgument); // string

let typeOfArgument2 = returnType('158');
console.log(typeOfArgument2); // string

let x = 10;
// Nested Ternary Operator 
let y = (x % 15 === 0) ? 'FizzBuzz' : ((x % 5 === 0) ? 'Buzz' : ((x % 3 === 0) ? 'Fizz' : x));
console.log(y);

function fizzbuzz(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(typeof (i));
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}
fizzbuzz(33, 44); // normal input
//fizzbuzz('33', '45'); // instantly converts strings to numbers
//fizzbuzz('hello world', false); // ignoring input


function assignGrade(grade) {
    if (grade < 50) { // Too few 
        console.log('Not passed, try again');
    } else if (grade >= 50 && grade <= 60) {
        console.log('Grade D');
    } else if (grade > 60 && grade <= 80) {
        console.log('Grade C');
    } else if (grade > 80 && grade <= 90) {
        console.log('Grade D');
    } else if (grade > 90 && grade < 99) {
        console.log('Grade D');
    } else if (grade < 100) {
        console.log('Almost perfect');
    } else if (grade === 100) {
        console.log('Take a day off tomorrow');
    }
}
assignGrade(75);
assignGrade(Math.PI);
assignGrade(60.6);
assignGrade(99);
// FUNCTIONS TOMORROW!!! 