const findAverageNum = (...args) =>
	args.reduce((a, b) => a + b, 0) / args.length;

const averageNum = findAverageNum(0, 1, 2, -1, 9, 10);

console.log(averageNum); // 3.5
