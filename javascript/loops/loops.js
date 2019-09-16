// First While Loop
// Inititalize Variable
let num = 1;
// While (condition is true)
while (num <= 100) {
    // as long as condition is true
    // these statements are executed
    console.log(num);
    // update of the variable
    num++;
    // without this you would have an endless loop
}
// input from outside
let nom = 7;
// make sure num is set back to 1 
num = 1;
// execute 10 times 
while (num <= 10) {
    // replaces lots of console.logs statements
    console.log(nom * num);
    // update index
    num++;
}
// console.log(nom * 1);
// console.log(nom * 2);
// console.log(nom * 3);
// console.log(nom * 4);
// console.log(nom * 5);
// console.log(nom * 6);
// console.log(nom * 7);
// console.log(nom * 8);
// console.log(nom * 9);
// console.log(nom * 10);

// Example L-2 Odd or Even exercise
// Fill the blanks to the code above in order to create a loop that goes from number 1 to 100 and for every number prints if it is an odd or an even number.
// Create the currentNumber variable and update it accordingly. Put this part of code inside a loop to achieve your goal.
// Estimated time: 10 mins.

let currentNumber = 1;
let endNumber = 100;

while (currentNumber <= endNumber) {
    if (currentNumber % 2 !== 0) {
        console.log(`The ${currentNumber} is an odd number`);
    } else {
        console.log(`The ${currentNumber} is an even number`);
    }

    currentNumber++;
}

// Fizzbuzz Problem
let currentNum = 1;
let endNum = 100;

while (currentNum <= endNum) {
    if (currentNum % 3 === 0 && currentNum % 5 === 0) {
        console.log('FizzBuzz');
    } else if (currentNum % 3 === 0) {
        console.log('Fizz');
    } else if (currentNum % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(`${currentNum}`);
    }
    currentNum++;
}
// Pseudo Code 
// initial state ... 
// each type of container 
// maxWeight = 10000;
// currentNumbers = number of boxes
// currentWeight = weight of boxes
// constants
let maxWeight = 10000;
let currentWeight;
let index = 1;
let counter = 0; // loop counter
// currentWeight is smaller than maxWeight and index smaller or equal to 500
//while (currentWeight < maxWeight && index <= 500) {
for (currentWeight = 0; currentWeight < maxWeight && index <= 500; index++) {
    let weight = 10; // first case
    if (index > 100 && index <= 200) { // second case
        weight = 20;
        if (index >= 150 && index <= 159) {
            //index++;
            continue;
        }
    } else if (index > 200 && index <= 250) { // third case
        weight = 50;
    } else if (index > 250 && index <= 300) { // fourth case
        weight = 100;
    } else if (index > 300 && index <= 400) { // fifth case 
        weight = 200;
    } else if (index > 400) { // sixth case
        weight = 500;
    } // Second Step: Compare currentWeight and new weight
    if ((weight + currentWeight) <= maxWeight) {
        counter++;
        currentWeight += weight; // equals to currentWeight = currentWeight + weight;
        console.log('Which box are we talking about: ' + index);
        console.log('How many boxes on the boat: ' + counter);
        console.log('MaxWeight: ' + maxWeight);
        console.log('Remaining capacity:' + (maxWeight - currentWeight));
        //index++; // take the next box
    } else {
        break; // stops and exits the while loop 
    }
}
console.log('How many boxes on the boat: ' + counter);
console.log('MaxWeight: ' + maxWeight);
console.log('Remaining capacity:' + (maxWeight - currentWeight));
// create helping variable 
// if condition
// check the index 
// only 6 if cases 
// check the range 
// change helping variable to the current Weight 
// check if there is still capacity 

// update 
// if there is place we can increase index
// else if we are over it we need to stop the loop! 

// end loop 

// continue
let number = 0;

while (number <= 100) {
    number++;
    if (number === 50) {
        console.log('continue');
        continue;
        console.log('continue'); // always skipped!!! normally shouldn't be here°!
    }
    //console.log(number);
}

// First FOR LOOP
for (let i = 0; i <= 100; i++) {
    console.log(i);
}