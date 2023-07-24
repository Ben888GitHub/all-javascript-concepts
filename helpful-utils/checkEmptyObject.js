const isEmpty = (obj) =>
	Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

console.log(isEmpty({}));
console.log(isEmpty({ name: 'fatfish' }));
