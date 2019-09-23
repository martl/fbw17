const checkRange = function (obj, num) {
    return obj.min <= num && obj.max >= num;
};
console.log(checkRange({ min: 0, max: 5 }, 4));
console.log(checkRange({ min: 4, max: 5 }, 4));
console.log(checkRange({ min: 6, max: 10 }, 4));
console.log(checkRange({ min: 5, max: 5 }, 5));
