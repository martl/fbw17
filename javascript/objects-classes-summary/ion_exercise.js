// const createObject = obj => {
//   return { keys: Object.keys(obj), values: Object.values(obj) };
// };
// console.log(createObject({ a: 1, b: 2, c: 3 })); //{keys:["a","b","c"],values:[1,2,3]}

const tilesSum = arr => {
  return arr.reduce((total, curr) => {
    return total + curr.score;
  },0);
};

console.log(tilesSum([{ tile: "N", score: 1 }, { tile: "O", score: 1 }])); //2
