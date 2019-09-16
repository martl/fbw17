function largestOfFour(arr) {
    let newArray = [];
    //for (let i = 0; i < arr.length; i++) {
    arr.forEach(function(element) {
        let biggestNumber = element[0];// dumb approach
        console.log(biggestNumber);
        //for (let j = 1; j < element.length; j++) {
        element.forEach(function(item) {
            console.log('current Number: ' + item);
            console.log('compared to ' + biggestNumber);
            if (biggestNumber < item) {
                console.log('biggestNumber is smaller')
                biggestNumber = item;
            } else {
                console.log('biggestNumber is bigger');
            }
        });
        newArray.push(biggestNumber);
        console.log(newArray);
    });
    return newArray;
}

let result = largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
console.log(result);