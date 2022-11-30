const foods = [[[['🍔'], ['🍫']], [['🍨', ['🍿', ['🍵']]]]]];

// First way
const flattenFoods = (foods) => {
	return foods.reduce((res, food) => {
		return res.concat(Array.isArray(food) ? flattenFoods(food) : food);
	}, []);
};
console.log(flattenFoods(foods));

// Second way
console.log(foods.flat(Infinity));
