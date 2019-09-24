# Objects and Classes Summary

## Part 1: Objects and Arrays

0. To define an object called person we can write:

   0. [ ] `const person = []`;
   1. [ ] `const person = ()`;
   1. [x] `const person = {}`;

1. Complete the labels in the following syntax formula: `const car = { <X>: <Y> }`

   0. [ ] X: object, Y: key
   1. [ ] X: value, Y: key
   1. [x] X: key, Y: value,
   1. [ ] X: value, Y: object

### Definition I: Object literals

Object literals are sets of key value pairs denoted by the `{}` signs.

2. Order the following lines, to create a car object:

   0. }
   1. wheels: 4,
   1. const car = {
   1. color: "red",
   1. brand: "chrysler"

In the following example, we create a `car` object literal to hold three key value pairs:

- The `wheels` key holds the value `4`
- The `color` key holds the value `"red"`
- The `brand` key holds the value `"chrysler"`

```javascript
const car = {
  wheels: 4,
  color: "red",
  brand: "chrysler"
};
```

3. **Exercise**: _(15 mins.)_ Write a function that checks if a number is within the range of an object's min and max properties.

   | Inputs                 | Output |
   | ---------------------- | ------ |
   | 4, { min: 0, max: 5 }  | true   |
   | 4, { min: 4, max: 5 }  | true   |
   | 4, { min: 6, max: 10 } | false  |
   | 5, { min: 5, max: 5 }  | true   |

   _Note: Assume min <= max is always true._

---

### Aside I: How to solve a programming problem

- Rule 1: **Never** Assume -> To assume is to make an ass out of u and me
- Rule 2: **Always** Read the description of the problem
- Rule 3: **Never** Start with research
- Rule 4: **Always** Break it down to smaller problems
- Rule 5: **Always** test your solution. Write your tests even before you write your code

_Example_: Breakdown of exercise above

**Write a function** that checks if a _number_ is within the _range_ of an object's _min_ and _max_ properties.

1. Write a function
2. The function should accept two _parameters_: `number`, and `range`
3. The function should return a Boolean, that indicates whether `number` is within the properties `min` and `max` of `range`
   - Make sure that `number` is equal or bigger than `range.min`
   - Make sure that `number` is equal or smaller than `range.max`

---

### Accessing keys and values

We can access values on an object literal by writing the key name with dot notation. i.e. if we have an object `car` with a `color` property we can write `car.color`.

4. Given an object car with a key "color", how can we access the value stored in color?

   0. [ ] `car[color]`
   1. [ ] `car{color}`
   1. [x] `car["color"]`

Another way to access properties is with the bracket notation as seen above. See [`examples.js`](examples.js) for more info.

5. All Objects are:

   0. [ ] Arrays
   1. [x] A collection of key value pairs
   1. [ ] A primitive data type

6. How can we check if a value is an array?

   0. [ ] A. Object.keys()
   1. [ ] B. Object.values()
   1. [x] C. Array.isArray()

While not all objects are arrays, all arrays **are** objects: `typeof []` evaluates to `'object'`. In order to check if a particular object is an array, we can use: `Array.isArray()`.

Sometimes, converting all the keys or all the values of an object into an array might prove useful. For that we can use `Object.keys()` and `Object.values()`. See [`examples.js`](examples.js) for more info.

7. **Exercise**: _(10 mins.)_ Write a function that takes an object and returns a new object with the keys and values in separate arrays.

   | Input                | Output                                       |
   | -------------------- | -------------------------------------------- |
   | { a: 1, b: 2, c: 3 } | { keys: ["a", "b", "c"], values: [1, 2, 3] } |
   | {isBrown: true}      | { keys: ["isBrown"], values: [true] }        |

8. **Challenge**: _(20 mins.)_ Write a function that takes in an array of scrabble tiles, and returns the total score of the tiles together.

   Example:

   | Input                                                                                                                                                                             | Output |
   | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
   | [{ tile: "N", score: 1 }, {tile: "O", score: 1 }]                                                                                                                                 | 2      |
   | [{ tile: "Y", score: 4 }, {tile: "E", score: 1 }, {tile: "S", score: 1 }]                                                                                                         | 6      |
   | [{ tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ] | 28     |

## Part 2: Properties and Methods

0. Keys that store function values are called:

   0. [x] methods
   1. [ ] objects
   1. [ ] properties

1. Keys that store non function values are called:

   0. [ ] methods
   1. [ ] objects
   1. [x] properties

1. To call a method sayHello on a person object we can write:

   0. [ ] person(sayHello)
   1. [ ] person[sayHello]
   1. [x] person.sayHello()

1. Order the following lines to create a car object with the method accelerate:

   0. }
   1. accelerate: () => {return "Vroom" }
   1. const car = {

   ```javascript
   const car = {
     accelerate: () => {
       return "Vroom";
     }
   };
   ```

1. **Exercise**: _(5 mins.)_ Create a person object with the following properties and methods:

   - firstName (the first name of the person)
   - lastName (the last name of the person)
   - sayHello (a method that returns the string "Hello World")

1. In the following object, what will the method `person.sayHello()` return?

   ```javascript
   const person = {
     firstName: "Ali",
     lastName: "Abu Zrir",
     greeting: "salam",
     sayHello: () => {
       return `${this.firstName} says ${this.greeting}`;
     }
   };
   ```

   0. [ ] "salam"
   1. [ ] "Ali"
   1. [ ] "Ali says salam"
   1. [ ] "this.firstName says salam"

   In the question above, **none** of the answers are correct. The reason is that arrow functions, **_do not_** include `this` in their scope. Usually, `this` refers to the current object on which the _method_ is defined. In order to make method work with `this`, we introduce a new rule:

   **Always** use function expression within methods.

   The correct code will look like the following:

   ```javascript
   const person = {
     firstName: "Ali",
     lastName: "Abu Zrir",
     greeting: "salam",
     sayHello: function() {
       return `${this.firstName} says ${this.greeting}`;
     }
   };
   ```

1. **Exercise** _(15 mins.)_: Fix the existing following object and add a method `changeName()`. The method should accept a string as an argument and change the `firstName` property to that new string.

   ```javascript
   const person = {
     firstName: "Ali",
     lastName: "Abu Zrir",
     greeting: "salam",
     sayHello: () => {
       return `${this.firstName} says ${this.greeting}`;
     }
   };
   ```

---

### Aside II: First definition of state

**State** is the value of an object's properties at any given point in time.

---

1. **Challange**: _(30 mins.)_ Create a counter object with the following properties and methods:
   - currentValue (the number 0)
   - increment (a method to increase the property `currentValue` by 1)
   - decrement (a method to decrease the property of `currentValue` by 1)
   - add (a method that accepts a number and adds it to `currentValue`)
   - subtract (a method that accepts a number and subtracts it from `currentValue`)

## Part 3: Classes and Extends

0. An object can also be called:

   0. [ ] An Array
   1. [ ] A method
   1. [x] An instance
   1. [ ] A property

1. To create an instance we can use the following keyword:

   0. [x] new
   1. [ ] class
   1. [ ] function

1. **Exercise** _(15 mins.)_ : Create a function that returns the current date and time in the following string format: "Today is Wednesday. The current time is 13:34:59"

1. **Bonus** _(20 mins.)_: Create a function that takes in a month number and a year and calculates the number of days in that month.

   | Inputs   | Output |
   | -------- | ------ |
   | 1, 2019  | 31     |
   | 2, 2020  | 29     |
   | 9, 2013  | 30     |
   | 12, 2019 | 31     |

1. To define the structure of an object, and create several objects with the same set of keys, we can use:

   0. [ ] An array
   1. [x] A class
   1. [ ] An instance

1. Order the following lines to create a class Vehicle:

   0. this.wheels = wheels
   1. this.brand = brand
   1. }
   1. class Vehicle {
   1. this.color = color
   1. constructor(brand, color, wheels){
   1. }

   ```javascript
   class Vehicle {
     constructor(brand, color, wheels) {
       this.brand = brand;
       this.color = color;
       this.wheels = wheels;
     }
   }
   ```

1. **Exercise** _(15 mins.)_: Create a class person which generates objects with the following properties:

   - firstName: the first name of a person
   - lastName: the last name of a person
   - age: the age of the person
