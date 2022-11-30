const arr = [1, 2];

// arr.concat() will merge two or more arrays by
// creating new array that includes elements from other arrays
// and additional elements.
// This method doesn't change the existing array,
// but instead return a new array

console.log(arr.concat([3, 4]));
console.log([...arr, 3, 4]);

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
console.log(letters.concat(numbers));
console.log([...letters, ...numbers]);

// Further Examples
// The arrayLike is an object are added as a whole even wihout an array
const array1 = [1, 2];
const arrayLike = {
	0: 'something',
	1: 'else',
	length: 1
};
console.log(array1.concat(arrayLike));
console.log([...array1, arrayLike]);

// Concatenating three arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

console.log(num1.concat(num2, num3));
console.log(num1.concat(num2, num3).length); // 9
console.log([...num1, ...num2, ...num3]);
console.log([...num1, ...num2, ...num3].length);

// 2 ways to merge Arrays
// arr.concat() vs Spread Operator
const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

console.log(cars.concat(trucks));

// Spread operator will take elements out from an array
console.log(...cars);
// result
console.log([...cars, ...trucks]);

// In this case, using arr.concat() is better than spread(...)
const isArray = [1, 2, 3];
const notArray = 'random';

console.log([...isArray, ...notArray]); // the "random" string is splitted into each letter 'r', 'a', 'n', 'd', 'o', 'm'
console.log(isArray.concat(notArray));

/* CONCLUSION */
/* If you're dealing with all arrays, use spread operator (...) */
/* If you're dealing with non-arrays use concat() to merge an array */
