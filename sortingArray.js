// Sorting directly
const arr = [4, 20, 10, 1, 3, 5];
arr.sort(); // sorting the first digit number from smallest to largest

console.log(arr); // arr: [1, 10, 20, 3, 4, 5]

const arr2 = [4, 20, 10, 1, 3, 5];
arr2.sort((a, b) => a - b); // sorting the whole number from smallest to largest

console.log(arr2);

const arr3 = [4, 20, 10, 1, 3, 5];
arr3.sort((a, b) => b - a); // sorting the whole number from largest to smallest
console.log(arr3);
