let myArray = [
    [6, 6, 7, -10, 9, -3, 8, 9, -1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6]
];



function diagonalDifference(arr) {
    let leftToRightSum = 0;
    let rightToLeftSum = 0;
    let j = arr.length - 1;
    console.log(arr);
    // here we can code
    for (let i = 0; i < arr.length; i++) {
        debugger
        console.log(leftToRightSum)
        leftToRightSum += arr[i][i];
        rightToLeftSum += arr[i][j];
        j--;
    }
    console.log(leftToRightSum);
    console.log(rightToLeftSum);
    
    return Math.abs(leftToRightSum - rightToLeftSum);
}

console.log(diagonalDifference(myArray));