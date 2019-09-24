

   //Create a counter object with the following properties and methods:
   //- currentValue (the number 0)
   //- increment (a method to increase the property `currentValue` by 1)
   //- decrement (a method to decrease the property of `currentValue` by 1)
   //- add (a method that accepts a number and adds it to `currentValue`)
  // - subtract (a method that accepts a number and subtracts it from `currentValue`)



   const counterObject = {
     currentValue: 0,
     increment: function () {
      this.currentValue += 1;
      return this.currentValue;
     },
     decrement : function () {
       this.currentValue -= 1;
       return this.currentValue;
     },
     add: function (num) {
       this.currentValue += num;
       return this.currentValue;

     },
     substract: function (num) {
      
      this.currentValue -= num;
      return this.currentValue;
     },
   }

   
   console.log(counterObject.increment());
   console.log(counterObject.currentValue)
   console.log(counterObject.decrement());
   console.log(counterObject.currentValue);
   console.log(counterObject.add(7));
   console.log(counterObject.currentValue);
   console.log(counterObject.substract(6))