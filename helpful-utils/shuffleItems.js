const shoppingItems = [
	{
		id: 1,
		title: 'iPhone',
		price: 1800
	},
	{
		id: 2,
		title: 'LogiMouse',
		price: 800
	},
	{
		id: 3,
		title: 'Anker',
		price: 80
	}
];

const shuffle = (items) => items.sort(() => 0.5 - Math.random());

console.log(shuffle(shoppingItems));

// * Reference: https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
