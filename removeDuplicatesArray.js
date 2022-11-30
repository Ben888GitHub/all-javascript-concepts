const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));

const removeDuplicatesByFilter = (arr) =>
	arr.filter((item, index) => arr.indexOf(item) === index);
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]));
