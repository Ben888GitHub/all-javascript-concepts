const dayDiff = (d1, d2) =>
	Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000);

const betweenYears = dayDiff(new Date('2023-06-23'), new Date('1997-05-31')); // 9519

console.log(betweenYears);
