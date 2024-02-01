let arr = [1, 2, 3, 4, 20];

const getHighestNum = (nums) => Math.max(...nums);

const highestNum = getHighestNum(arr); // 20

console.log(highestNum);

const getLowestNum = (nums) => {
	return Math.min(...nums);
};

const lowestNum = getLowestNum(arr); // 1
console.log(lowestNum);
