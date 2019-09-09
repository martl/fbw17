/*Volume of a Box
https://edabit.com/challenge/ms3q5GYSpFpwxeFWX
Create a function that gets an object arguments with height, width and length of a box and returns the volume of the box.

Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

Notes
Don't forget to return the result.
Remember that the values are in an object.*/
// normal function "oldschool"
function volumeOfBox(myObject) {
    let volume = myObject.width * myObject.height * myObject.length;
    return volume;
}
// moved to arrow function
let volumeOfBox2 = (myObject) => {
    let volume = myObject.width * myObject.height * myObject.length;
    return volume;
}
// remove the brackets because only one arguments is being passed "myObject"
let volumeOfBox3 = myObject => {
    let volume = myObject.width * myObject.height * myObject.length;
    return volume;
}
// less code - one liner, exlicite return 
let volumeOfBox4 = myObject => {
    return myObject.width * myObject.height * myObject.length;;
}

// one liner "bad style programming" & implicite return 
let volumeOfBox5 = myObject => myObject.width * myObject.height * myObject.length;

console.log(
    volumeOfBox5({
        width: 2,
        length: 5,
        height: 1
    }));

console.log(volumeOfBox5({
    width: 4,
    length: 2,
    height: 2
}));

console.log(volumeOfBox5({
    width: 2,
    length: 3,
    height: 5
}));

/* Extract City Facts
https://edabit.com/challenge/FzDAgSR84zeyRa278
Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

name
population
continent
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

Examples
cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"*/

let paris = {
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
};

// Two different approaches for the same thing
console.log(paris['name']);
console.log(paris.name);

let tokyo = {
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
};

// My first solution with string adding manipulation with Object dot notation 
function cityFacts(city) {
    // "Tokyo has a population of 13,929,286 and is situated in Asia"
	return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}
// String dollar manipulation, syntatic sugar for the same thing
function cityFacts2(city) {
    return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}
// Arrow functions, implicite return, syntatic sugar !!! 
let cityFacts3 = city => city.name + " has a population of " + city.population + " and is situated in " + city.continent;

// Bracket notation, all solutions are fine :) 
let cityFacts4 = city => city['name'] + " has a population of " + city['population'] + " and is situated in " + city['continent'];

console.log(cityFacts4(paris));
console.log(cityFacts4(tokyo));

for (let prop in paris) {
    //console.log(paris.prop) // not working
    console.log(paris[prop]);
}
// very unlikely, but possible 
const strangeObject = {
    "hello world": "hi there!", // two words with empty space 
    "how are you?": "good and you?",
    123: 'haha', // numbers
    true: false, // boolean
    null: NaN, // falsy values
    $: "dollar" // special characters
};
// strangeObject.hello world // error
console.log(strangeObject["hello world"]); // working.
console.log(strangeObject["how are you?"]);
console.log(strangeObject[123]); 
console.log(strangeObject[true]);
console.log(strangeObject[null]);
console.log(strangeObject.$);

// Fallback always possible!!!