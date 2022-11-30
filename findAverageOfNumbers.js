const average = (...args) =>
	// console.log(args); this is [1, 2, 3, 4]
	args.reduce((a, b) => a + b) / args.length;
console.log(average(1, 2, 3, 4));
