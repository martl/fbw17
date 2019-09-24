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
  capacity: 250,
  paint: newColor => {
    this.color = newColor;
  }
};
console.log(cup.color);
cup.paint("blue");
console.log(cup.color);

const person = {
  firstName: "Ali",
  lastName: "Abu Zrir",
  greeting: "salam",
  sayHello: function() {
    return `${this.firstName} says ${this.greeting}`;
  }
};

const counter = {
  currentValue: 0,
  increment: function() {
    this.currentValue++;
    return this.currentValue;
  },
  decrement: function() {
    this.currentValue--;
    return this.currentValue;
  },
  add: function(number) {
    this.currentValue += number;
    return this.currentValue;
  },
  subtract: function(number) {
    this.currentValue -= number;
    return this.currentValue;
  }
};

console.log(counter.currentValue);
counter.increment();
console.log(counter.currentValue);
counter.decrement();
console.log(counter.currentValue);
counter.add(10);
console.log(counter.currentValue);
counter.subtract(5);
console.log(counter.currentValue);

class Person {
  constructor(params = {}) {
    this.firstName = params["firstName"] || "Angela";
    this.lastName = params["lastName"] || "Trump";
    this.age = params["age"] || 90;
  }
}

let karol = new Person();
console.log(karol);
let donald = new Person({ firstName: "Donald", age: 65 });
console.log(donald);
