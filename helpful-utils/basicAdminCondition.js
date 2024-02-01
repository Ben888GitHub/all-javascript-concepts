// Beginners

let name = '';
if (!name) {
	name = 'Guest';
}
console.log(name);

let person = '';
person ||= 'Admin';
console.log(person); // Admin

let editor = 'editor';
editor ||= 'admin';
console.log(editor); // editor
