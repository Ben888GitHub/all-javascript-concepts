const getRandomShoppingItem = (items) => {
	return items[Math.floor(Math.random() * items.length)];
};

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

console.log(getRandomShoppingItem(shoppingItems));
