const sumItems = (...category) => {
	return category.reduce((acc, x) => acc + x);
};

const electronics = [
	{ name: 'iPhone', price: 20, qty: 10 },
	{ name: 'iPad', price: 30, qty: 18 },
	{ name: 'MacBook', price: 100, qty: 33 }
];

const bedEssentials = [
	{ name: 'pillow', price: 25, qty: 60 },
	{ name: 'blanket', price: 75, qty: 37 },
	{ name: 'kimono', price: 55, qty: 20 }
];

const totalItems = [...electronics, ...bedEssentials];

const totalPrices = totalItems.map(({ price }) => price);

const totalQty = totalItems.map(({ qty }) => qty);

console.log('Total items');
console.log(totalItems);
console.log('');
console.log(`Prices: ${sumItems(...totalPrices)}`);
console.log(`Quantity: ${sumItems(...totalQty)}`);
