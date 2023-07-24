const average = (...args) => args.reduce((a, b) => a + b, 0) / args.length;

console.log(average(0, 1, 2, -1, 9, 10)); // 3.5
