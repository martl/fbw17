0. To define an object called person we can write:

   0. [ ] `const person = []`;
   1. [ ] `const person = ()`;
   1. [x] `const person = {}`;

1. Complete the labels in the following syntax formula: `const car = { <X>: <Y> }`

   0. [ ] X: object, Y: key
   1. [ ] X: value, Y: key
   1. [x] X: key, Y: value,
   1. [ ] X: value, Y: object

1. Order the following lines, to create a car object:

   0. }
   1. wheels: 4,
   1. const car = {
   1. color: "red",
   1. brand: "chrysler"

   ```javascript
   const car = {
     wheels: 4,
     color: "red",
     brand: "chrysler"
   };
   ```

1. **Exercise**: _(15 mins.)_ Write a function that checks if a number is within the range of an object's min and max properties.

   | Inputs                 | Output |
   | ---------------------- | ------ |
   | 4, { min: 0, max: 5 }  | true   |
   | 4, { min: 4, max: 5 }  | true   |
   | 4, { min: 6, max: 10 } | false  |
   | 5, { min: 5, max: 5 }  | true   |

   _Note: Assume min <= max is always true._
