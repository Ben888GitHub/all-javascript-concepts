// If Else
// const getPriceByName = (name) => {
// 	if (name === '🍔') {
// 		return 30;
// 	} else if (name === '🍨') {
// 		return 20;
// 	} else if (name === '🍿') {
// 		return 10;
// 	}
// };

// Classic Optimization with Map[]
const getPriceByName = (name) => {
	const foodMap = {
		'🍔': 30,
		'🍨': 20,
		'🥩': 60
		// You can add new food here
		// ...
	};
	return foodMap[name];
};

console.log(getPriceByName('🥩')); // 30
