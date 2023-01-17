// As an Adder or Accumulator
const sum = (...nums) => {
	return nums.reduce((sum, num) => sum + num);
};
console.log(sum(1, 2, 3, 4, 10)); // 20

// accumulator
const accumulator = (...nums) => {
	return nums.reduce((acc, num) => acc * num);
};
console.log(accumulator(1, 2, 3)); // 6
