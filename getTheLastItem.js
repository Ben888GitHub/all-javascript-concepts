let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array.slice(-1)); // Result: [9]
console.log(array.slice(-2)); // Result: [8, 9]
console.log(array.slice(-3)); // Result: [7, 8, 9]

console.log(array.at(-1));
console.log(array.at(-2));

console.log(array.indexOf(9));

// * Check whether the selected item is the same as current item

const str = 'Hello, world';
const startWithHello = str.startsWith('Hello');
console.log(startWithHello); // * true

const endsWithEarth = str.endsWith('earth');
console.log(endsWithEarth); // * false
