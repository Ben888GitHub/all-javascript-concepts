const removeDuplicates = (arr) => [...new Set(arr)];
const noDuplicateItems = removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]);
console.log(noDuplicateItems);

const removeDuplicatesByFilter = (arr) =>
	arr.filter((item, index) => arr.indexOf(item) === index);

const noDuplicateItems2 = removeDuplicatesByFilter([1, 2, 3, 3, 4, 4, 5, 5, 6]);

console.log(noDuplicateItems2);
