const separateKeysAndValues = obj => {
    return {keys: Object.keys(obj), values: Object.values(obj)};
};

console.log(separateKeysAndValues({ a: 1, b: 2, c: 3 }));
console.log(separateKeysAndValues({isBrown: true}));