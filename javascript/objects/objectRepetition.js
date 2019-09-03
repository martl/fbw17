const jake = {
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
};
console.log(jake.firstName); // dot notation
console.log(jake["lastName"]); // syntetic sugar 
jake.changeProfession('Web Dev Teacher'); // use function inside an object
console.log(jake.profession); // now changed
jake.age = 28; // different kind of change
console.log(jake.age); // now also changed

this // global or window object

// https://www.goconqr.com/c/60777/course_modules/90827-create-your-first-object-and-methods?=
// O-1 Create your first object
// Create an object about a person that lives in your country for some years (unknown how many, you define it) and holds the information below.
// Firstname, lastname, age, years of residence in your country, his own nationality, current profession and current salary. 
// Then create a method that changes it's nationality to your country's nationality if the years of residence is greater or equal to 7.

const person = {
    firstName: 'Givara',
    lastName: 'Mahfoud',
    age: 25,
    yearsOfResidence: 4,
    nationality: 'Syrian',
    currentProfession: 'Programmer',
    currentSalary: 10000,
    changeNationality: function (nationality) {
        if (this.yearsOfResidence >= 7) {
            this.nationality = nationality;
            this.passPortId = '12kajsfnlksdhrp9'; // NEW Property doesn't need to exist before
        }
    }
};
person.changeNationality('German');
console.log(person.nationality);
person.yearsOfResidence = 7;
person.changeNationality('German');
console.log(person.nationality);
console.log(person.passPortId);

// https://www.goconqr.com/c/60777/course_modules/90951-convert-currency?=
// O-2 Convert currency
// Create three objects for three people with the following info. Firstname, lastname, bank account (a number in us dollars) and country of residence. 
// The bank account is going to be a number that the person has to his/her bank account in US dollars. 
// Add a new property that corresponds to how much 1$ to the currency of every person's country corresponds.
// The persons are coming from Greece, Switzerland and Australia respectively. 
// Create a function that creates a new property for each person that shows the bank account in his country's money.