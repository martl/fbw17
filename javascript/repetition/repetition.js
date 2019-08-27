// SLICE METHOD
// OLD ARRAY WILL NOT BE CHANGED
let array = [1, 2, 3, "hello world", 4.12, true];
let until = 4;
let newArray = array.slice(0, until); // returns an array starting with 0, excluding until 
console.log(newArray); // [1, 2, 3, "hello world"];
console.log(array); // [1, 2, 3, "hello world", 4.12, true]

let newerArray = array.slice(1);
console.log(newerArray); // [2, 3, "hello world", 4.12, true]
// Good to remove from the beginning

// SPLICE METHOD 
// Adding to or removing from an array
// First remove
let index = 4;
let numberOfElements = 1;
let spliceArray = array.splice(index, numberOfElements);
console.log(spliceArray);
console.log(array); // YES! It will change the old array
// Be careful, it changes old data, might cause trouble

// Second add
array.splice(4, 0, 4.12) // index 4, no deletion, what we want to insert
console.log(array); // [1, 2, 3, "hello world", 4.12, true]

// add "a" and "b" in the beginning
array.splice(0, 0, "a", "b"); // possible to add more than one thing at a time
console.log(array); // [ 'a', 'b', 1, 2, 3, 'hello world', 4.12, true ]

// remove and add at the same time
// turn "b" and "a"
array.splice(0, 2, "b", "a");
console.log(array);
// pretty powerful method which changes the old array

// If we dont give a deletionCount:
array.splice(6); // deletes everything after third item
console.log(array);

// SPLIT METHOD 
let stringArray = ["a", "b", 1, 2, 3, "hello world", 4.12, true];
let myString = stringArray.toString(); // converts to a string 
console.log(typeof (myString));
console.log(myString);
// We make a array out of the string
let splitString = myString.split(",");
console.log(splitString);
// Split at the whitespace
let splitStringSpace = myString.split(" ");
console.log(splitStringSpace);
// Split without dividor? 
let splitStringWithout = myString.split();
console.log(splitStringWithout);
// Split with only quotationmarks
let splitStringWith = myString.split("");
console.log(splitStringWith);
// Second argument 
let splitSecondArgument = myString.split(",", 5); // 5 times split
console.log(splitSecondArgument); // ['a', 'b' , '1', '2', 'hello world']
// Second time
let splitSecondTime = myString.split("", 5);
console.log(splitSecondTime); // ['a', ',' 'b' , ',', '1']
console.log(myString); // NO CHANGE OF OLD DATA 

// TEST QUESTION "maria mary jones" 
// How can we make each first letter big? 
// Uppercase 
let name = "givara mahaba mafoul";
let nameArray = name.split(" ");
console.log(nameArray);
// loop over the name
let newNameArray = [];
for(let i = 0; i< nameArray.length; i++) {
    // console.log(nameArray[i].substr(0,1)); just for debugging
    newNameArray.push(nameArray[i].charAt(0).toUpperCase() + nameArray[i].substr(1)); 
    // Just one way ! One possible solution 
    console.log(newNameArray);
}   
let newName = newNameArray.join(" ");
console.log(newName);