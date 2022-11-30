const foods = [
	{
		name: '🍔',
		price: 30.89
	},
	{
		name: '🍨',
		price: 20.71
	},
	{
		name: '🍿',
		price: 10.31
	}
];

// First Way
const discountedFoods1 = foods.map((it) => {
	return {
		name: it.name,
		price: Math.floor(it.price)
	};
});

// Second Way
const discountedFoods = foods.map((it) => {
	return {
		name: it.name,
		price: ~~it.price
	};
});

console.log(discountedFoods);

console.log(~~10.6);
