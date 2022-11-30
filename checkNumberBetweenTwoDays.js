const dayDif = (date1, date2) =>
	Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

console.log(dayDif(new Date('2020-10-21'), new Date('2020-11-22')));
