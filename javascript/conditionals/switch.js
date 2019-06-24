// First Task for today: 
// Please check which color is the trafficLight
// And tell if the car can go or not! 
// And please obey the rules of Germany ;) 
// Bonus: check for red-yellow :) after red 
let trafficLight = 'red-yellow';
switch (trafficLight) {
    case 'red':
        console.log('Stop!');
        break;
    case 'red-yellow':
    case 'yellow-red':
    case 'orange-red':
    case 'red-orange':
        console.log('Patience!');
        break;
    case 'yellow':
        console.log('Brake!');
        break;
    case 'green':
        console.log('Go!');
        break;
    default:
        console.log('Please don\'t drink and drive');
}

//D2 - Ice Cream exercise
//https://www.goconqr.com/c/59891/course_modules/106536-selling-ice-cream-exercise?=
//Suppose that you are working by an ice cream shop, that has waffles where you can put from 1 up to 5 scoops.
//Write a program that reads the number of ice creams scoops the customer wants and stores it to a variable. Then calculates the cost accordingly. The prices are the following:
// 1 scoop: 1$
// 2 scoops: 1,8$
// 3 scoops: 2,5$
// 4 scoops: 3$
// 5 scoops: 3,30$
// If no scoops is specified by the customer the default should be the price for 2 scoops.
// Print the correct price to the console at the end.
// HINT: USE SWITCH CASE CONDITIONAL
let iceCreamScoops = 10;

switch (iceCreamScoops) {
    case 1:
        console.log('1 Dollar');
        break;
    case 3:
        console.log('2.50 Dollar');
        break;
    case 4:
        console.log('3 Dollar');
        break;
    case 5:
        console.log('3.30 Dollar');
        break;
    default:
        // case 2 can be removed 
        // because it is the default anyways 
        console.log('1.80 Dollar');
        break;
}

// THIRD TASK
// https://www.goconqr.com/c/59891/course_modules/89631-lottery-num-reorder?=
// Reorder this drunken code and add curly braces where needed 

case 776:
standardWinnings = jackpot;
break;
var jackpot = 1000;
standardWinnings = standardWinnings * 2;
standardWinnings = jackpot / 5;
default:
break;
console.log(`Total Winnings: ${standardWinnings}`);
else if (randomNumber < 700 || randomNumber >= 800 && randomNumber < 900)
if (randomNumber < 500)
standardWinnings = 0;
else if (randomNumber < 800)
case 778:
standardWinnings = standardWinnings * 10;
break;
var randomNumber = 93;
case 777:
var standardWinnings = 10;
standardWinnings = standardWinnings * 5;
else
standardWinnings = jackpot / 2;
switch (randomNumber)