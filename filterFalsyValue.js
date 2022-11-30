// There are six falsy values in JavaScript. They are 0, '', null, undefined, false, NaN.

// Filter True Values
const arr = [1, 0, 2, '', 3, null, 4, 5, true, 'hey'];
const filtered = arr.filter(Boolean);

// filtered: [1, 2, 3, 4, 5, true, 'hey']
console.log(filtered);

console.log(filtered.length);

// Filter False Values
const falseArr = [1, 0, 2, '', 3, null, 4, 5, true, 'hey'];
const filteredFalseArr = falseArr.filter((val) => !val);
console.log(filteredFalseArr);
