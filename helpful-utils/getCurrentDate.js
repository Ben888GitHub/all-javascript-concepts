// * In React, just use 3rd party library such as date-fns, react-day-picker, moment, dayjs, luxon, Timeago

// * https://www.kindacode.com/article/best-libraries-for-formatting-date-and-time-in-react/
// * https://blog.logrocket.com/top-react-date-pickers/

const dayjs = require('dayjs');

const getDate = () => {
	const fillZero = (t) => {
		return t < 10 ? `0${t}` : t;
	};
	const d = new Date();
	const year = d.getFullYear();
	const month = fillZero(d.getMonth() + 1);
	const day = fillZero(d.getDate());
	const hour = fillZero(d.getHours());
	const minute = fillZero(d.getMinutes());
	const second = fillZero(d.getSeconds());

	return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
console.log(getDate()); // 2022-05-09 07:19:14

// * Fortunately, using Day.js can be done with just one line of code.
console.log(dayjs().format('YYYY-MM-DD HH:mm:ss')); // 2022-05-09 07:19:14

/**
 React References:
 * https://www.youtube.com/watch?v=vxBwVEhIzdA
 * https://www.youtube.com/watch?v=ecjaXnL2CUs
 */
