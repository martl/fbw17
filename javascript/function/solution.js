const pizzaMenu = [
    {
        name: "Pizza Salami",
        price: 10,
        weight: 300
    },
    {
        name: "Pizza Hawai",
        price: 12,
        weight: 320
    },
    {
        name: "Salad",
        price: 5,
        weight: 220
    },
    {
        name: "Water",
        price: 5,
        weight: 150
    },
    {
        name: "Cola",
        price: 5,
        weight: 150
    },
]

const greekMenu = [
    {
        name: "French Fries",
        price: 10
    },
    {
        name: "Uzo",
        price: 20
    }
]

const customerOrder = ["Pizza Salami", "Cola"]

//Your goal is to let the customer order items from the menu and print out the contents + price
//E.g.: "Your order is Salad, Water // Total price is 10 Euro"
//Hint: try to select one item from the menu and print its name (menu[1].name)
// Use for(){...} loops to iterate the menu, and if(){...} conditions to compare Order names to the Menu

//1. Function that takes an order array
function processOrder (menu, order) {

//2. Declare an ordered items array + a price total variable
let itemsOrdered = []

let priceTotal = 0

//3. Select the ordered items -> First loop goes through the order
for(i = 0; i < order.length; i++){
    console.log(order[i])

    //4. Second loop through the menu
    for(j = 0; j < menu.length; j++){

        //5. Push the order from the menu
        if(order[i] == menu[j].name){
            itemsOrdered.push(menu[j])
        }
        
    }
}
// Actual customer order
console.log(itemsOrdered)

//6. Add the total price from the order
itemsOrdered.map(item => {
    priceTotal += item.price
})
console.log(priceTotal)

//7. Return the actual price
return "Your order costs " + priceTotal + " Euro"
}

//Call the function
console.log(processOrder(pizzaMenu, customerOrder))