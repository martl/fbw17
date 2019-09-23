const withinRange = (number, range) => {
  return number >= range.min && number <= range.max;
};

console.log(withinRange(4, { min: 0, max: 5 })); // -> true
console.log(withinRange(4, { min: 4, max: 5 })); // -> true
console.log(withinRange(4, { min: 6, max: 10 })); // -> false
console.log(withinRange(5, { min: 5, max: 5 })); // -> true
