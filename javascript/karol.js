function transformObject(object) {
  return {
    keys: Object.keys(object),
    values: Object.values(object)
  };
}
console.log(transformObject({ a: 1, b: 2, c: 3 }));
console.log(transformObject({ isBrown: true }));

let tiles = [{ tile: "N", score: 1 }, { tile: "O", score: 1 }];
let tiles1 = [
  { tile: "Y", score: 4 },
  { tile: "E", score: 1 },
  { tile: "S", score: 1 }
];
let tiles2 = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];

function countTilesScore(tiles) {
  return tiles.reduce((score, tile) => score + tile.score, 0);
}

console.log(countTilesScore(tiles));
console.log(countTilesScore(tiles1));
console.log(countTilesScore(tiles2));

function difference(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  return nums[nums.length - 1] - nums[0];
}
console.log(difference([10, 15, 20, 2, 10, 6]));
// 20 - 2 = 18

console.log(difference([-3, 4, -9, -1, -2, 15]));
// 15 - (-9) = 24

function XO(str) {
  let arr = str.split("");
  console.log(arr);
  let l1 = arr.filter(letter => {
    console.log(letter.toLowerCase());
    letter.toLowerCase() === "x";
  }).length;
  let l2 = arr.filter(letter => letter.toLowerCase() === "o").length;
  console.log(l1, l2);
  return l1 === l2;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
/* console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
console.log(XO("Xo"));
console.log(XO("x"));
console.log(XO("o"));
console.log(XO("xxxoo"));
console.log(XO("")); */

function getMiddle(str) {
  let length = str.length;
  return length % 2 === 0
    ? str.slice(Math.floor(str.length / 2) - 1, Math.floor(str.length / 2) + 1)
    : str[Math.floor(str.length / 2)];
}
console.log(getMiddle("siem"));

function removeVowels(str) {
  return str.replace(/[aeiou]/g, "");
}

console.log(removeVowels("siabada"));

function progressDays(runs) {
  return runs.reduce((progress, day, index) => {
    return day > runs[index - 1] ? ++progress : progress;
  }, 0);
}
console.log(progressDays([3, 4, 1, 2]));
console.log(progressDays([10, 11, 12, 9, 10]));
progressDays([6, 5, 4, 3, 2, 9]);
progressDays([9, 9]);

let words = ["dance", "scene", "nextee"];

function isWord(words, letters) {
  return words.filter(word => {
    return word.split("").every(letter => letters.includes(letter));
  });
}

let letters = "stneadcex";

console.log(isWord(words, letters));

const cup = {
  color: "red",
  
}

// 1. Write a program that logs out an email
// - When no name is defined use Dear ladies and gentleman, as salutation
// - Use formal or in formal ending dependant on a variable called formal
// - You should have 3 signatures to choose from
// - Ideas for Content: Motivation Letter
function printEmail(formal) {
  let message = "";

  const email = "ajilqado@gmail.com";
  const name = "Ajil Abdalqader";
  const sex = "male";

  let subject = `Message from ${email} - ${name}`;
  message += subject + "\n";

  let salutation = name ? `Dear ${name}` : "Dear ladies and gentleman";
  message += salutation + "\n";

  let messageBody = "Some message";
  message += messageBody + "\n";

  let ending = formal ? "With words of regards" : "Yo man";
  message += ending + "\n";

  return message;
}

console.log(printEmail(true));
