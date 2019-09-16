const people =
    [
        "Tom",
        "Claire",
        "Mike"
    ]

const greetings = (peopleNamesArray => {
    peopleNameArray.map(name => {
        return "Hello " + name + " , how are you today?"
    })
}
console.log(greetings(people))

