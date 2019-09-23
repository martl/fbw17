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

### Aside I: How to solve a programming problem

- Rule 1: _Never_ Assume -> To assume is to make an ass out of u and me
- Rule 2: _Always_ Read the description of the problem
- Rule 3: _Never_ Start with research
- Rule 4: _Always_ Break it down to smaller problems
- Rule 5: _Always_ test your solution. Write your tests even before you write your code

Example: Breakdown of exercise above

**Write a function** that checks if a number is within the range of an object's min and max properties.

1. ~~Write a function~~
2. ~~The function should accept two _parameters_: `number`, and `range`~~
3. ~~The function should return a Boolean, that indicates whether `number` is within the properties `min` and `max` of `range`~~
   3.1. ~~Make sure that `number` is equal or bigger than `range.min`~~
   3.2 ~~Make sure that `number` is equal or smaller than `range.max`~~

---

### Accessing keys

3. Given an object car with a key "color", how can we access the value stored in color?

   0. [ ] `car[color]`
   1. [ ] `car{color}`
   1. [x] `car["color"]`

1. All Objects are:

   0. [ ] Arrays
   1. [x] A collection of key value pairs
   1. [ ] A primitive data type

1. How can we check if a value is an array?

   0. [ ] A. Object.keys()
   1. [ ] B. Object.values()
   1. [x] C. Array.isArray()

1. **Exercise**: _(10 mins.)_ Write a function that takes an object and returns a new object with the keys and values in separate arrays.

   | Input                | Output                                       |
   | -------------------- | -------------------------------------------- |
   | { a: 1, b: 2, c: 3 } | { keys: ["a", "b", "c"], values: [1, 2, 3] } |
   | {isBrown: true}      | { keys: ["isBrown"], values: [true] }        |
