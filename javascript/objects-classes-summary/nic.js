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
