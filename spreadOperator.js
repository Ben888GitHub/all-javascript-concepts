const mewtwo = { name: 'Mewtwo' };
const stats = { hp: 100, attack: 50, defense: 50, speed: 50 };

const level00 = { ...mewtwo, ...stats };
console.log(level00);

// The same way but updating the hp
const level01 = { ...mewtwo, ...stats, hp: stats.hp + 100 };
console.log(level01);

// Working with Array using Spread Operator
let firstFood = ['Pizza', 'Burger', 'Chips'];
firstFood = [...firstFood, 'Fries', 'Coke', 'Coffee'];
console.log(firstFood);

// Working Without Array using Spread Operator
let secondFood = ['rice', 'beans', 'chicken'];

secondFood.push('beef');
secondFood.push('soup');
secondFood.push('chicken');

console.log([...new Set(secondFood)]); // Remove Duplicates with Set()
