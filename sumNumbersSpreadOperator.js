// * DO
const sumSpread = (...nums) => {
	return nums.reduce((acc, x) => acc + x);
};
console.log(sumSpread(10, 20, 30));
