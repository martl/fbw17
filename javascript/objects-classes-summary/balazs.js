let range = {
    min: 0,
    max: 5
};


let checkNum = (input, range) => { 
    
    return input >= range.min && input <= range.max;
    };

    console.log(checkNum(1,range))

    const obj = {
        a: 1,
        b: 2,
        c: 3
    };
    
    const separator = (obj) => {
       let keys = Object.keys(obj);
       let values = Object.values(obj);
       return {keys, values}
         
    }
    
    console.log(separator(obj))
    
    const myLetters = [
        { tile: "N", score: 1 }, 
        { tile: "K", score: 5 }, 
        { tile: "Z", score: 10 }, 
        { tile: "X", score: 8 }, 
        { tile: "D", score: 2 }, 
        { tile: "A", score: 1 }, 
        { tile: "E", score: 1 } 
    ];
    
    // const myLetters2 = [
    //     { tile: "Y", score: 4 }, 
    //     {tile: "E", score: 1 }, 
    //     {tile: "S", score: 1 }]
    
    // const scrabbleScore = arr.reduce(function(total, curr){
    // return total + curr.score 
    // }, 0);
    
    // console.log(scrabbleScore);
    
    function scrabbleScore(obj) {
        arr.reduce(function(total, curr){
            return total + curr.score};
         
        ),0};
    
        
        console.log(scrabbleScore(myLetters))