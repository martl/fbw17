
// Aside II: First definition of state

//    ** State ** is the value of an object's properties at any given point in time.

// ---

//     1. ** Challange **: _(30 mins.)_ Create a counter object with the following properties and methods:
// - currentValue(the number 0)
//     - increment(a method to increase the property`currentValue` by 1)
//     - decrement(a method to decrease the property of`currentValue` by 1)
//     - add(a method that accepts a number and adds it to`currentValue`)
//     - subtract(a method that accepts a number and subtracts it from`currentValue`)



    const counter = {
        currentValue: 0,
        incrementValue: function() {
           return this.currentValue += 1;
        },
        decrementValue: function() {
           return  this.currentValue -= 1;
        },
        addValue: function(numToAdd){
            return this.currentValue += numToAdd;
        },
          subtractValue: function (numToSubtract) {
          return  this.currentValue -= numToSubtract;
        }

    };

    console.log(counter.incrementValue())
    console.log(counter.decrementValue())
    console.log(counter.addValue(9))   
    console.log(counter.subtractValue(189))   