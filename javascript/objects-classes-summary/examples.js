// Given an object car
const car = {
  wheels: 4,
  color: "red",
  brand: "chrysler"
};

// We can access the color property using bracket notation...
console.log(car["color"]);

// ... Buuut dot notation is easier
console.log(car.color);

// To check if something is an array
console.log(Array.isArray(car));

// To convert an object into an array of its keys
console.log(Object.keys(car));

// To convert an object into an array of it's values
console.log(Object.values(car));
