let range = {
    min: 0,
    max: 5
};


let checkNum = (input, range) => { 
    
    return input >= range.min && input <= range.max;
    };

    console.log(checkNum(1,range))