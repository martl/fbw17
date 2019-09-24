const person = {
  firstName: "Ali",
  lastName: "Abu Zrir",
  greeting: "salam",
  sayHello: function() {
    return `${this.firstName} says ${this.greeting}`;
  },
  changeName: function(newName) {
 this.firstName = newName;
      return person.firstName
  }
};
person.changeName("Ion");

console.log(person.sayHello());



    const counter = {
        currentValue: 0,
        increment: function (){
            this.currentValue +=1
            return this.currentValue;
        },
        decrement: function () {
            this.currentValue -= 1
            return this.currentValue;
        },
        add: function (num) {
            this.currentValue += num
            return this.currentValue;
        },
        subtracts: function (num) {
            this.currentValue -= num
            return this.currentValue;
        }
    }
    counter.increment();
    console.log(counter.currentValue);
    counter.decrement();
    console.log(counter.currentValue);
    counter.add(5);
    console.log(counter.currentValue);
    counter.subtracts(3);
    console.log(counter.currentValue);