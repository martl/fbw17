const isNumberWithinRange = (n, obj) => n >= obj.min && n <= obj.max;

console.log(isNumberWithinRange(4, { min: 0, max: 5 }));
console.log(isNumberWithinRange(4, { min: 4, max: 5 }));
console.log(isNumberWithinRange(4, { min: 6, max: 10 }));
console.log(isNumberWithinRange(5, { min: 5, max: 5 }));