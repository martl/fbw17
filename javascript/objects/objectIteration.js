// For in loop 

var jake = {
    firstName: 'Kostas',
    lastName: 'Diakogiannis',
    age: 30,
    nickName: 'Jake',
    profession: 'Machine Learning Engineer',
    cityLives: 'Hamburg',
    preferedCityToLive: 'Zurich',
    changeProfession: function (profession) {
        this.profession = profession; // this keyword knows its surroundings/context!
        // meaning jake.profession = profession;
    }
}

for (prop in jake) {
    //keys
    console.log(prop);
}

// Do we have a property "age"? 
console.log(jake.hasOwnProperty('age'));
// true

console.log(jake.hasOwnProperty('x'));
// False

// https://www.goconqr.com/c/60777/course_modules/90834-calculate-average-skills-exercise?=
class User {
    constructor(firstName, lastName, no1, no2, no3) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.skills = {
            html: no1,
            css: no2,
            js: no3
        };
    }

    calculateAverage() {
        let sum = 0;
        for (let prop in this.skills) { // gives the key
            sum += this.skills[prop]; // gives the value
        }
        let average = sum / 3;
        return average.toFixed(2);
    }
}
let user1 = new User("Adam", "Lant", 4, 5, 9);
console.log(user1)
console.log(user1.calculateAverage());
let user2 = new User("Lila", "Milo", 9, 8, 3);
console.log(user2);
console.log(user2.calculateAverage());
let user3 = new User("Li", "Mio", 9, 9, 8);
console.log(user3);
console.log(user3.calculateAverage());