/*Volume of a Box
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