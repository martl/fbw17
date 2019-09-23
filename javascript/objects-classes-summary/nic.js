// 1. ** Exercise **: _(15 mins.)_ Write a function that checks if a number is within the range of an object's min and max properties.

//     | Inputs | Output |
//    | ---------------------- | ------ |
//    | 4, { min: 0, max: 5 } | true |
//    | 4, { min: 4, max: 5 } | true |
//    | 4, { min: 6, max: 10 } | false |
//    | 5, { min: 5, max: 5 } | true |

//     _Note: Assume min <= max is always true._

const checkRange = (number, object) => {
    return number <= object.max && number >= object.min;
};
console.log(checkRange(4, { min: 0, max: 5 }));

// Write a function that takes an object and returns a new object with the keys and values in separate arrays.
// IN: { a:1, b:2, c:3}  OUT: {keys:["a", "b", "c"], values:[1,2,3]}
// IN: {isBrown: true} OUT: {keys: ["isBrown"], values: [true]}

const splitter = (inputObject) => {
    return {
        keys: Object.keys(inputObject),
        values: Object.values(inputObject)
    }
};

console.log(splitter({ a: 1, b: 2, c: 3 }));
console.log(splitter({ isBrown: true }));
