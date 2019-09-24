//1. ** Challange **: _(30 mins.)_ Create a counter object with the following properties and methods:
//- currentValue(the number 0)
  //  - increment(a method to increase the property`currentValue` by 1)
   // - decrement(a method to decrease the property of`currentValue` by 1)
    //- add(a method that accepts a number and adds it to`currentValue`)
    //- subtract(a method that accepts a number and subtracts it from`currentValue`)
     
    const counter = {
     currentValue :  0,
     increment: function(){
         return this.currentValue+=1;
     },
     decrement : function(){
         return this.currentValue-=1;
     },
     add : function(number){
         return this.currentValue - number;
     },
     sub : function(number){
         return this.currentValue + number;
     }

 }
 console.log (counter.increment())
console.log(counter.decrement())
console.log(counter.add(2))
console.log(counter.increment(4))
