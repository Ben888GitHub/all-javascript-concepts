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

const totalPrices = totalItems.map(({ price }) => price); // get the price for each item

const totalQty = totalItems.map(({ qty }) => qty); // get the quantity for each item

const totalPayment = totalItems.map(({ price, qty }) => price * qty); // get the total payment for each item

console.log('Total items');
console.log(totalItems);
console.log('');
console.log(`Prices: ${sumItems(...totalPrices)}`);
console.log(`Quantity: ${sumItems(...totalQty)}`);
console.log(`Total Payment: ${sumItems(...totalPayment)}`);

// * Process...
// * 1) Get all items from different categories in one array
// * 2) Map each item to get the price, quantity, and total payment individually
// * 3) Sum up all the price, quantity, and total payment individually
