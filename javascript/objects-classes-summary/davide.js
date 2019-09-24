const helmet = {
    size: 'M',
    price: 17,
    color: 'grey',
    lock: () => 'The helmet is locked',
    unlock: () => 'The helmet is unlocked'
}

console.log(helmet.lock())
console.log(helmet.price);
