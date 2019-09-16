// empty Array 
let fruits = [];
// check the type of the Array 
console.log(typeof fruits);
// object

fruits = [
    "Apple", 
    "Orange", 
    "Banana", 
    "Melon", 
    "Lemon"
];

console.log(fruits); // Print it to the console
console.log(fruits.length); // Property Length
console.log(fruits[0]); // Apple 
console.log(fruits[fruits.length-1]); // Last Element of the Array
console.log(fruits.toString()); // Convert to a String
console.log(typeof fruits.toString()); // type of toString Method back

let sFruits = fruits.toString(); // saving the array as string
console.log(sFruits[3]); // gives us the fourth letter of the string 
console.log(sFruits[5]); // gives us the sixth letter of the string 

let arrNum = [1, 2, 36, 345, true, 6645, false, "wajhdbfj", 8.6, null, "let", 9.0, -4875483, undefined, '', NaN, [], Infinity];

// How much elements does this array have? 
console.log(arrNum.length); // 13
console.log(arrNum.toString()); // make it a String, null and so on gets removed
arrNum.sort(); // Sorting function alphabetically A-Z and ascending 0-9 (first digits only)
console.log(arrNum);
//arrNum.reverse(); // Function to flip the array around 
console.log(arrNum.reverse());
// Stack methods 
console.log(fruits.push('Grapes')); // get the new length back after adding
console.log(fruits);  // added Grapes add the end of the Array 
console.log(fruits.pop()); // remove the Grapes from the array and returns it back 
// LIFO Principle, Last in first out! 
console.log(fruits.pop()); // Lemon and so on... 


// be careful, this is directly changing the array! 
console.log(fruits); // Apple, Orange, Banana, Melon
console.log(fruits.length); // 4

let newArray = fruits.join('!'); // joins all elements together to a String, with seperator Exclamation mark
console.log(newArray); // Apple!Orange!Banana!Melon

// join them together with empty space
let newArray2 = fruits.join(' ');
console.log(newArray2); // "Apple Orange Banane Melon"

fruits[0] = 'Ananas'; // Changing Apple to Ananas 
console.log(fruits);

fruits[6] = 'Grapes'; // automatically undefined
console.log(fruits);
console.log(fruits[4]); // or 5
console.log(fruits.toString());
fruits[3] = undefined; // defining explicitly
console.log(fruits);

console.log(typeof fruits[3]); // undefined 
console.log(typeof fruits[4]); // undefined
console.log(typeof fruits[4] === typeof fruits[3]); // true

console.log(fruits.slice(1,4)); // Orange, Banana, undefined
// first Argument is index to start (inclusive), index to end (exclusive)
// before the end it stops printing! 






delete fruits[3]; // empty item more, only value is deleted!!!
console.log(fruits); // 3 empty items

delete fruits[fruits.length - 1]; // delete last one, only value, not space is deleted
console.log(fruits); // 4 empty items 

fruits.splice(2, 1); // removing starting at index 2 , only delete 1 item, only Banana!
console.log(fruits); // Better method because also empty space is deleted 

//fruits.slice();
console.log(fruits.slice(1)); // It will give us the array beginning with the index number 1
console.log(fruits);

let withoutAnanas = fruits.slice(1); // saving is needed
console.log(withoutAnanas); // Ananas is removed

let vegetables = ['zuccini', 'eggplant', 'cucumber'];

// shift 
vegetables.shift(); // removes the first element 
console.log(vegetables);

// unshift
vegetables.unshift('tomato'); // add to the beginning
console.log(vegetables);

//adding more than one thing
vegetables.unshift('onion', 'garlic'); // more than one added at the beginning
console.log(vegetables);

// add in a certain place
vegetables.splice(2, 0, 'rattice'); // this way we can put something in the third position
console.log(vegetables); // without deleting anything else

// concat, adds two or more arrays together 
let healthyStuff = fruits.concat(vegetables, 'strawberries'); // adds at the end
console.log(healthyStuff); // adds fruits and vegetabels
console.log(healthyStuff.length); // 12 items

// difference between adding them together in which order 
let different = vegetables.concat(fruits); // first vegetabels, second fruits
console.log(different);

// We want to remove last 4 empty items
different.splice(different.length - 4); // no second argument needed
// simple as that, because we don't give an argument
// it will delete until the end
console.log(different); 