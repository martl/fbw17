let txt = "a,b,c,d,e"; // String
console.log(txt);
let myNewArray = txt.split(",");
console.log(myNewArray); // ['a', 'b', 'c', 'd', 'e'];
console.log(typeof myNewArray); // String or Object ? 

// how can we put everything together again? join!

let newTxt = myNewArray.join('/');
console.log(newTxt);

let txt2 = "Hello"; // String
let split = txt2.split(""); // every character 
console.log(split);
let returnString2 = split.join(); // Puts Comma between each letter
console.log(returnString2); // H,e,l,l,o
let split2 = txt2.split(); // put it in one without splitting 
console.log(split2);
let returnString = split2.join(); // can we remove the argument? 
console.log(returnString);

let returnSum = (array) => {
    return array.reduce((a, b) => a + b, 0);
}

console.log(returnSum([0, 1, 2, 5, 7, 3]));

let myQuote = ['it', 'is', 'Tuesday', 'and', 'i', 'am', 'already', 'exhausted', 'to', 'think', 'of', 'a', 'better', 'quote'];
let myString = myQuote.reduce(function (prev, current) {
    return prev + " " + current;
}, "");
myString = myString.trim(); // reduce the Spaces around
console.log(myString);