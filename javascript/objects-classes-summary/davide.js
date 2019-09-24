const helmet = {
    size: 'M',
    price: 17,
    color: 'grey',
    lock: () => {
        return 'The helmet is locked';
    },
    unlock: () => {
        return 'The helmet is unlocked';
    }
}

console.log(helmet.lock())
console.log(helmet.price);
