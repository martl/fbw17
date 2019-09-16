// #### 1. Increment by 1
// Given an array of numbers, e.g. ```javascript let arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// ``` , create a function that increments each element by 1. 
// Return the a new array of modified elements.

let arrayOfNumbers = [3, 45, 6, 56, 7, 9];

function incrementByOne(arrayOfNumbers) {
    let newArray = []; // initialization
    arrayOfNumbers.forEach(function (curr) {
        newArray.push(++curr);
    });
    return newArray;
}
console.log(incrementByOne([3, 45, 6, 56, 7, 9]));

// #### 2. Sum Up
// Write a function called sum that uses the reduce to sum up an array of numbers. 
// Do NOT use a typical loop; just use the reduce method.
// * Eitemamples:
// * sum([1,2,3,4,5]); //returns 15
// * sum([6,7,7]); //returns 20

function sum(arrayOfNumbers) {
    let newArr = arrayOfNumbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);
    return (newArr);
}
console.log(sum([3, 45, 6, 56, 7, 9]));
console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

// #### 3. instanceOf
//##### Reduce
//Sum up the instances of each of these:
//```javascript
//const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
// ```
// * Eitempected Output: 
// ```javascript
//object = {
//  bike: 2
//  car: 5
//  pogostick: 1
//  truck: 3
//  van: 2
//  walk: 2
//}
//```
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function (obj, item) {
    obj[item]++;
    return obj;
}, {
    car: 0,
    truck: 0,
    bike: 0,
    walk: 0,
    van: 0,
    pogostick: 0
});
console.log(transportation); // Object

// Covert array to Object using the spread operator
let newObject = {
    ...data
};
console.log(newObject);

let arrayOfObject = [newObject];
console.log(arrayOfObject);

let newArray = Object.entries(newObject);
console.log(newArray);

/*#### 4. Inventors
Look at the piece of code below and complete the tasks and questions.

```javascript*/
const inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Maitem',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];
/*```
##### Map
* Give an array of inventors' first and last names. 
EXAMPLE: [ "Albert Einstein", "Isaac Newton"... ]
*/
function firstLast(arr) {
    return arr.map(item => item.first + " " + item.last);
};
console.log(firstLast(inventors));
/*
##### Reduce
* How many years did all of the inventors live?
EXAMPLE: 2999 years*/
console.log(inventors.reduce((total, item) => total + (item.passed - item.year), 0));

//#### 5. Square Root
// Given an array of numbers, find the square root of those numbers using map. 
let array = [1, 4, 9, 16, 25, 36];
// output should be [1,2,3,4,5,6]
let squareRoot = array.map(number => Math.sqrt(number));
// Math.sqrt= Math.squareroot 
console.log(squareRoot);

//#### 6. Instances of Letters
// Create a function that takes a string as an argument and counts 
// the number of each letter in that string. 
// instanceOfLetters("hello world"); 
// output should be 
/* object {
    'h': 1,
    'e': 1,
    'l': 3,
    'o': 2,
    ' ': 1, // optional 
    'w': 1,
    'r': 1,
    'd': 1
}*/
function instanceOfLetter(str) {
    let object = str.split("").reduce(function (obj, letter) {
        if (letter in obj) { // search in result object 
            obj[letter]++; // obj[letter] = obj[letter]+1;
        } else {
            obj[letter] = 1;
        }
        console.log(obj);
        return obj;
    }, {});
    return object;
}
console.log(instanceOfLetter("hello world"));

//#### 7. List of Movies
// Create a function that returns an array of your friends favourite films!
let friends = [{
    name: 'Maria',
    films: ['Avengers: Infinity War', 'Avatar'],
    age: 22
}, {
    name: 'John',
    films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
    age: 29
}, {
    name: 'Jean',
    films: ['Deadpool', 'Incredibles 2'],
    age: 20
}];
// listOfMovies(friends);
// output ['Avengers: Inifinity War', 'Avatar', 'Forest Gump', 'Pulp Fiction', 'Spider-Man', 'Deadpool', 'Incredibles 2']

function listOfMovie(arr) {
    return arr.reduce((total, current) => {
        return total.concat(current.films);
    }, []);
};
console.log(listOfMovie(friends));

let movies = friends.map(function (item) {
    return `${item.films}`; // NOT GIVING THE CORRECT RESULT
});
console.log(movies);

let listOfMovies = [];
for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].films.length; j++) {
        listOfMovies.push(friends[i].films[j]);
    }
}
console.log(listOfMovies);

/*#### 8. Filter Evens
Write a function called filterEvens that uses the filter method to filter an array and only return the even numbers. The function should take in an array of numbers as an argument, and should not use a loop.

* Examples:
* filterEvens([1,2,3,11,12,13]); //returns [2,12]
* filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]*/

function filterEvens(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvens([1, 2, 3, 11, 12, 13]));

// #### 9. Search 
//  Given an array, create a function which uses filter() to filter an array based on a search query
const friends1 = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

function filterItems(arr, str) {
    return arr.filter(name => name.includes(str));
}
console.log(filterItems(friends1, 'ka')); // ["Rika", "Marika"];
console.log(filterItems(friends1, 'e')); // ["Alex", "Oliver"];
// #### 10. Reformat an Array, Given the following array: 
// Use map, make a new Object. 
// object = {}; Creating a new Object
// object[key] = value; // Add a new Key-Value-Pair
// object.key = value; // Add a new Key-Value-Pair
// return object; 
let originalArray = [{
        key: 1,
        name: "John"
    },
    {
        key: 2,
        name: "Maria"
    },
    {
        key: 3,
        name: "Oliver"
    },
    {
        key: 4,
        name: "Jane"
    },
    {
        key: 5,
        name: "Jack"
    },
    {
        key: 6,
        name: "Albert"
    },
    {
        key: 7,
        name: "Harry"
    },
    {
        key: 8,
        name: "Ron"
    },
    {
        key: 9,
        name: "Kenneth"
    },
    {
        key: 10,
        name: "Kyle"
    }
];
console.log(originalArray.map(x => {
    let newObj = {};
    newObj[x.key] = x.name;
    return newObj;
}));

function reformat(arr) {
    let newArray = {};
    arr.map(function (object) {
        console.log(object);
        newArray[object.key] = object.name;
    });
    return newArray;
};
console.log(reformat(originalArray));
//* Reformat the array as follow: 
/*let newArray = [{
        1: "John"
    },
    {
        2: "Maria"
    },
    {
        3: "Oliver"
    },
    {
        4: "Jane"
    },
    {
        5: "Jack"
    },
    {
        6: "Albert"
    },
    {
        7: "Harry"
    },
    {
        8: "Ron"
    },
    {
        9: "Kenneth"
    },
    {
        10: "Kyle"
    }
];*/
let newArray2 = originalArray.map(keyValuePairs => {
    // Empty Object
    let newObj = {};
    newObj[keyValuePairs.key] = keyValuePairs.name;
    return newObj;
});
console.log(newArray2);

//#### 11. Sorting Numbers
//Given the following array of numbers, sort from smallest to largest. 
let arrayOfIntegers = [4, 200, 90, 30, 12, 75, 21, 3];
//* Once you are finished, answer the following questions: 
//**Which method did you use to solve the problem? Why did you have to use this method?** 

function sortArray(arr) {
    let sortedArray = arr.sort(function (a, b) {
        return a - b;
    })
    return sortedArray;
}
console.log(sortArray([4, 200, 90, 30, 12, 75, 21, 3]));

console.log(arrayOfIntegers.sort((a, b) => a - b));

//#### 12. Sort Shapes
//Given the following array of shapes, complete the task below:
let shapes = [
    [5, "Pentagon"],
    [3, "Triangle"],
    [8, "Octagon"],
    [4, "Rectangle"],
    [6, "Hexagon"],
    [10, "Decagon"]
];
// Sort the 2D array based on the shapes' sides. Sorting should be in ascending order from smaller number to greater number. 
// USE SORT , two dimensional array!!! 

console.log(shapes.sort((first, second) => first[0] - second[0]));

let newShapes = shapes.sort((a, b) => a[0] > b[0]);
console.log(newShapes);

function twoDSort(arr) {
    let twoDSorted = arr.sort(function (a, b) {
        if (a[0] === b[0]) {
            return 0;
        } else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    })
    return twoDSorted;
}
console.log(twoDSort(shapes));


console.log(shapes.sort());
// For the next time i will give you a solution
console.log(shapes.sort(function(a,b) {
    if (a[1] > b[1]) {
        return 1;
    } else {
        return -1;
    }
}));
/*[
    [3, 'Triangle'],
    [4, 'Rectangle'],
    [5, 'Pentagon'],
    [6, 'Hexagon'],
    [8, 'Octagon'],
    [10, 'Decagon']
]*/