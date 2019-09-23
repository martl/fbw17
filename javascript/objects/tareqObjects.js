//function that makes objects
let x = function (a, b, c) {
    this.one = a;
    this.two = b;
    this.three = c;
};
let y = new x(1, 2, 3);
console.log(y);
let y2 = new x(4, 5, 6);
console.log(y2);
//class that makes objects
class food {
    constructor(a, b, c) {
        this.first = a;
        this.second = b;
        this.third = c;
    }
};
let basket = new food("bread", "apple", "milk");
console.log(basket);
//extends
class fruits extends food {
    constructor(a2, b2) {
        super("apple", "banana", "grapes"); //this fills the constructor from the class (food)
        this.forth = a2;
        this.fifth = b2;
    }
};
let bigBasket = new fruits("peach", "watermelon");
console.log(bigBasket);
let anotherBasket = new fruits("ananas", "mango");
console.log(anotherBasket);