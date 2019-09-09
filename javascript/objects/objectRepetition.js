const jake = {
    firstName: 'Kostas',
    lastName: 'Diakogiannis',
    age: 30,
    nickName: 'Jake',
    profession: 'Machine Learning Engineer',
    cityLives: 'Hamburg',
    preferedCityToLive: 'Zurich',
    changeProfession: function (profession) {
        this.profession = profession; // this keyword knows its surroundings/context!
        // meaning jake.profession = profession;
    }
};
console.log(jake.firstName); // dot notation
console.log(jake["lastName"]); // syntetic sugar 
jake.changeProfession('Web Dev Teacher'); // use function inside an object
console.log(jake.profession); // now changed
jake.age = 28; // different kind of change
console.log(jake.age); // now also changed

this // global or window object

// https://www.goconqr.com/c/60777/course_modules/90827-create-your-first-object-and-methods?=
// O-1 Create your first object
// Create an object about a person that lives in your country for some years (unknown how many, you define it) and holds the information below.
// Firstname, lastname, age, years of residence in your country, his own nationality, current profession and current salary. 
// Then create a method that changes it's nationality to your country's nationality if the years of residence is greater or equal to 7.

const person = {
    firstName: 'Givara',
    lastName: 'Mahfoud',
    age: 25,
    yearsOfResidence: 4,
    nationality: 'Syrian',
    currentProfession: 'Programmer',
    currentSalary: 10000,
    changeNationality: function (nationality) {
        if (this.yearsOfResidence >= 7) {
            this.nationality = nationality;
            this.passPortId = '12kajsfnlksdhrp9'; // NEW Property doesn't need to exist before
        }
    }
};
person.changeNationality('German');
console.log(person.nationality);
person.yearsOfResidence = 7;
person.changeNationality('German');
console.log(person.nationality);
console.log(person.passPortId);

// https://www.goconqr.com/c/60777/course_modules/90951-convert-currency?=
// O-2 Convert currency
// Create three objects for three people with the following info. Firstname, lastname, bank account (a number in us dollars) and country of residence. 
// The bank account is going to be a number that the person has to his/her bank account in US dollars. 
// Add a new property that corresponds to how much 1$ to the currency of every person's country corresponds.
// The persons are coming from Greece, Switzerland and Australia respectively. 
// Create a function that creates a new property for each person that shows the bank account in his country's money.

var firstPerson = {
    firstName: "Joe",
    lastName: "Doe",
    bankAccount_UsDollars: 45096,
    countryOfResidence: "Greek",
    convertDollarsToLocalCurrency: function (exchangeRate) {
        this.moneyInLocalCurrency = this.bankAccount_UsDollars * exchangeRate;
        this.moneyInLocalCurrency = this.moneyInLocalCurrency.toFixed(2);
    }
}
firstPerson.convertDollarsToLocalCurrency(16.56);
console.log(firstPerson.moneyInLocalCurrency);
console.log(firstPerson);

let secondPerson = {
    firstName: "Joe",
    lastName: "Doe",
    bankAccount_UsDollars: 45096,
    countryOfResidence: "Switzerland",
    convertDollarsToLocalCurrency: function (exchangeRate) {
        this.moneyInLocalCurrency = this.bankAccount_UsDollars * exchangeRate;
        this.moneyInLocalCurrency = this.moneyInLocalCurrency.toFixed(2);
    }
};
secondPerson.convertDollarsToLocalCurrency(0.99);
console.log(secondPerson.moneyInLocalCurrency);
console.log(secondPerson);

let thirdPerson = {
    firstName: "Joe",
    lastName: "Doe",
    bankAccount_UsDollars: 45096,
    countryOfResidence: "Australia",
    convertDollarsToLocalCurrency: function (exchangeRate) {
        this.moneyInLocalCurrency = this.bankAccount_UsDollars * exchangeRate;
        this.moneyInLocalCurrency = this.moneyInLocalCurrency.toFixed(2);
    }
};

thirdPerson.convertDollarsToLocalCurrency(0.67);
console.log(thirdPerson.moneyInLocalCurrency);
console.log(thirdPerson);

// Constructor for Persons, blueprint expects dynamic arguments
let Person = function (firstName, lastName, age) {
    this.firstName = firstName; // dynamic setting
    this.lastName = lastName;
    this.age = age;
    this.country = 'Germany'; //hardcoded setting
    this.profession = 'Student'; // no argument needed 
}

let vassilis = new Person('Vassilis', 'Papadopolos', 30); // makes a new Instance 
let martina = new Person('Martina', 'Freundorfer', 35); // makes a new Object
let mor = new Person('Mor', 'Solomonov'); // example for missing arguments
console.log(vassilis);
console.log(mor);
let mor2 = new Person('Solomonov');
console.log(mor2);

// Constructor for Animals
let Animal = function (name, color, race, age) {
    this.name = name;
    this.color = color;
    this.race = race;
    this.age = age;
}
let tosun = new Animal('Tosun', 'black and white', 'cat', 10);
console.log(tosun);

class AgeConstructor {
    constructor(){
        this.age = 28;
        this.school = 'DCI';
    }
}

class PersonConstructor extends AgeConstructor {
    constructor(firstName, lastName, bankAccount, country, exchangeRate) {
        super(); // same as new AgeConstructor()
        this.firstName = firstName;
        this.lastName = lastName;
        this.bankAccount = bankAccount;
        this.country = country;
        this.exchangeRate = exchangeRate;
        // calculate directly
        //this.localMoney = this.bankAccount * this.currency; 
        this.changeCurrency = function () {
            // change something later, call the function 
            this.localMoney = this.bankAccount * this.exchangeRate;
        }
    }
};

let pers4 = new PersonConstructor("Pers4", "LastName4", 2000, "Moldova", 20);
console.log(pers4.age); // Inheritance
console.log(pers4);
pers4.changeCurrency(); // call the function of the constructor 
console.log(pers4);
let pers5 = new PersonConstructor("Pers5", "LastName5", 4500, "Australia", 0.9);
pers5.changeCurrency();
console.log(pers5);
let pers6 = new PersonConstructor("Pers6", "LastName6", 500, "Switzerland", 1.5);
pers6.changeCurrency();
console.log(pers6);

//# Objects P2
//## Please print your answers to the console.
//#### 1. Check if a number is within a given range
//Write a program that checks if a number is within the range of an object's min and max properties. 

//Examples: 
//* 4, { min: 0, max: 5 }) ➞ true 
//* 4, { min: 4, max: 5 }) ➞ true
//* 4, { min: 6, max: 10 }) ➞ false
//* 5, { min: 5, max: 5 }) ➞ true
//* Notes: Assume min <= max is always true. /*

function checkNumberRange(num, object) {
    if (num >= object["min"] && num <= object["max"]) {
        return true;
    } else {
        return false;
    }
}
let myObject = {
    min: 0,
    max: 5
};
console.log(checkNumberRange(4, myObject));
console.log(checkNumberRange(4, {
    min: 4,
    max: 5
}));
console.log(checkNumberRange(4, {
    min: 6,
    max: 10
}));
console.log(checkNumberRange(5, {
    min: 5,
    max: 5
}));

console.log(Math.min(1, 2, 3, 4)); // Gives lowest number
console.log(Math.max(1, 2, 3, 4)); // Gives highest number

//#### 2. Return Keys and Values
//Write a program that takes an object and returns the keys and values in separate arrays. 
//
//Examples: 
//* { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3] 
//* {key: true} ➞ ["key"], [true]

/***

#### 2. Return Keys and Values
Write a program that takes an object and returns the keys and values in separate arrays. 

Examples: 
* { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
* {key: true} ➞ ["key"], [true]

// Use Object.keys() and Object.values() for this! */

let testNumObject1 = {
    a: 1,
    b: 2,
    c: 3
};
let testKeyObject1 = {
    key: true
};

function separateToNewArray(obj) {
    let valuesArray = Object.values(obj);
    let keysArray = Object.keys(obj);
    console.log(valuesArray);
    console.log(keysArray);
    return {
        keys: keysArray,
        values: valuesArray
    }; // return an Object with two Arrays
    //return [keysArray, valuesArray]; // returns an Array with two Arrays 
};
console.log(separateToNewArray(testNumObject1));
console.log(separateToNewArray(testKeyObject1));

/*#### 3. Scrabble https://edabit.com/challenge/i6YqzHcSiPiEQKjeX
Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. 
Example: */

let tileHand = [{
        tile: "N",
        score: 1
    },
    {
        tile: "K",
        score: 5
    },
    {
        tile: "Z",
        score: 10
    },
    {
        tile: "X",
        score: 8
    },
    {
        tile: "D",
        score: 2
    },
    {
        tile: "A",
        score: 1
    },
    {
        tile: "E",
        score: 1
    }
];

function maximumScore(tileHand) {
    return tileHand.reduce((total, x) => total + x.score, 0);
}

console.log(maximumScore(tileHand));

//The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

/*#### 4. Is it an empty object? 
Write a program that returns true if an object is empty, and false if otherwise. 

Examples: 
* {} ➞ true
* {a: 1} ➞ false* */

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({
    a: 1
}));
console.log(isEmpty({}));