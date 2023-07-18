const quantity = [10, 20, 30];

const sumNumbers = (...nums) => {
	return nums.reduce((acc, x) => acc + x);
};
console.log(sumNumbers(...quantity));
