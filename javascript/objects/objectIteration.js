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

for(prop in jake) {
    console.log(prop);
}

// Do we have a property "age"? 
console.log(jake.hasOwnProperty('age'));
// true

console.log(jake.hasOwnProperty('x'));
// False
