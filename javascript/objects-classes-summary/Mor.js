1. ** Exercise ** _(15 mins.)_: Fix the existing following object and add a method`changeName()`.
The method should accept a string as an argument and change the`firstName` property to that new string.

```javascript
const person = {
  firstName: "Ali",
  lastName: "Abu Zrir",
  greeting: "salam",
  sayHello: () => {
    return `${ this.firstName } says ${ this.greeting } `;
  }
  changeName: function()
};
```