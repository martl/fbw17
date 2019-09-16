//Array
const cars = [
    "BMW",
    "Mercedes",
    "VW"
]
console.log(cars[1])

//Car
const car = {
    name: "BMW",
    color: "Blue",
    price: 1000,
    year: 1990
}
console.log(car.price)

//Array of Objects
const allCars = [
    {
        name: "BMW",
        color: "Blue",
        price: 1000,
        year: 1990
    },
    {
        name: "Mercedes",
        color: "White",
        price: 2000,
        year: 1995
    }
]
console.log(allCars[0].price + allCars[1].price)