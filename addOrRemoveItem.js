let arr = ['I', 'go', 'home'];

// arr.splice(<position>, <how many items starting from its position>)
console.log(arr.splice(0, 2));

console.log(arr);

console.log(arr.length);

let arr2 = ['I', 'go', 'home', 'right', 'now'];

// arr.splice(<position>, <how many items starting from its position>, <items to be replaced>)
arr2.splice(0, 3, "Let's", 'Replace');

console.log(arr2);

// Insert new item at the last index of an array
arr2.push('back');

console.log(arr2);

let arr3 = ['wolf', 'bear', 'tiger'];
arr3.pop(arr3); // remove the last item of an array
console.log(arr3);
arr3.shift(arr3);
console.log(arr3); // remove the first item of an array

arr3.unshift('cougar'); // Insert new new item on the first index of an array

console.log(arr3);
