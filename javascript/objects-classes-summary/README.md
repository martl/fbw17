# Objects and Classes Summary

## Part 1: Object literals

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
