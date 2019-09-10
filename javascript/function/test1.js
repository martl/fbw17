const prices = [
    1,
    2,
    3,
    4,
    5
]
for (i = 0; i < array.length; i++)
    console.log("Hello")


const prices2 [
    10,
    15,
    100,
    1,
    3
]

let sum = 0

const calculateSum = (pricesArray) => {
    let sum = 0
    for (i = 0; i < pricesArray.length; i++) {
        sum += pricesArray[i]
    }
    return sum
}
calculateSum(prices)

console.log(calculateSum(prices))
console.log(calculateSum(prices2))