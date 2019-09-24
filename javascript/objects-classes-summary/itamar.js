const withinRange = (number, range) => {
  return number >= range.min && number <= range.max;
};

// console.log(withinRange(4, { min: 0, max: 5 })); // -> true
// console.log(withinRange(4, { min: 4, max: 5 })); // -> true
// console.log(withinRange(4, { min: 6, max: 10 })); // -> false
// console.log(withinRange(5, { min: 5, max: 5 })); // -> true

// Write a *function* that *takes an object* and *returns a new object* with the *keys and values in separate arrays*.

/**
 * 1. ~~Write a function~~
 * 2. ~~This function should accept an object as an argument~~
 * 3. ~~This function should return a new object~~ with the keys and values in separate arrays
 *    3.1. ~~This object should have a property keys, which holds an array of all the keys of the passed object~~
 *    3.2. ~~This object should have a property values, which holds an array of all the values of the passed object~~
 */

const objectSplitter = obj => {
  return {
    keys: Object.keys(obj),
    values: Object.values(obj)
  };
};

// console.log(objectSplitter({ a: 1, b: 2, c: 3 })); // -> { keys: ["a", "b", "c"], values: [1, 2, 3] }
// console.log(objectSplitter({ isBrown: true })); // -> { keys: ["isBrown"], values: [true] }

// Write a function that takes in an array of scrabble tiles, and returns the total score of the tiles together.

/**
 * 1. ~~Write a function~~
 * 2. ~~This function should take in an array of scrabble tile objects~~
 * 3. This function should return a number which represents the sum of each of the scrabble objects' score property
 */

const countScrabbleScore = scrabbleTiles => {
  return scrabbleTiles.reduce((totalScore, tile) => {
    return totalScore + tile.score;
  }, 0);
};

console.log(
  countScrabbleScore([{ tile: "N", score: 1 }, { tile: "O", score: 1 }])
); // -> 2
console.log(
  countScrabbleScore([
    { tile: "Y", score: 4 },
    { tile: "E", score: 1 },
    { tile: "S", score: 1 }
  ])
); // -> 6
console.log(
  countScrabbleScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ])
); // -> 28
