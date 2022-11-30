const numbers = [1, 2, 3, 4, 5]

// arr.splice(<starting>, <how many items selected)
// arr.slice(<starting>, <how many items selected but not including the last item)

console.log(numbers.slice(1, 3)) // [2, 3]
console.log(numbers.slice(1, 4)) // [2, 3, 4]
console.log(numbers.splice(1, 4)) // [2, 3, 4, 5]
// console.log(numbers)

