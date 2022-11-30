const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// We will take each index in the ages[], and get the square root
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

// If we want to use two maps, let say we want to square it
// and then times it by two

const agesSquareAndTimes = ages.map(age => Math.sqrt(age)).map(age => age * 2);
console.log(agesSquareAndTimes);
