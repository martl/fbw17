class Animals {
    constructor(species, numOfEyes, numOfLegs, hasTail) {
        this.species = species;
        this.numOfEyes = numOfEyes;
        this.numOfLegs = numOfLegs; 
        this.hasTail = hasTail;
    }
}

class Tiger extends Animals {
    constructor(colorFur, eyeColor, region, eatMeet) {
        super('Tiger', 2, 4, true);
        this.colorFur = colorFur;
        this.eyeColor = eyeColor;
        this.region = region;
        this.eatMeet = eatMeet;
    }
    // Stupid example for passing arguments ;) 
    printColorFur(myTigersColor) {
        console.log('The color of this tiger is: ' + myTigersColor);
    }
}

class BengalTiger extends Tiger {
    constructor(name, age, height, length, gender, colorFur) {
        super('Orange-Black', 'Brown', 'India', true);
        this.name = name;
        this.age = age;
        this.height = height; 
        this.length = length;
        this.gender = gender;
    }
}

class SiberianTiger extends Tiger {
    constructor(name, age, height, length, gender) {
        super('Black-White', 'Blue', 'Siberia', false);
        this.name = name;
        this.age = age;
        this.height = height; 
        this.length = length;
        this.gender = gender;
    }
}

// Create a instance (living object)
let uniqueBengal = new BengalTiger('Richard Parker', 15, 82, 226, 'male');
console.log(uniqueBengal);

// Create another instance (sibling)
let uniqueSiberian = new SiberianTiger('The Night King', 990, 88, 204, 'White Walker');
console.log(uniqueSiberian);

uniqueBengal.printColorFur(uniqueBengal.colorFur);
uniqueSiberian.printColorFur(uniqueSiberian.colorFur);

console.log(uniqueBengal.hasOwnProperty('age'));
// true BengalTiger
console.log(uniqueBengal.hasOwnProperty('colorFur'));
// true Tiger
console.log(uniqueBengal.hasOwnProperty('species'));
// true Animals
console.log(uniqueBengal.hasOwnProperty('y'));
// false