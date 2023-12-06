// * ?? tells to output the next data if the current variable is a falsy value like "", false, null, undefined, or []

const variable = null;
const result1 = variable ?? 'Default';
console.log(result1);

const variable2 = 'HEY';
const result2 = variable2 ?? 'HI';
console.log(result2);

// * || short circuit evaluation to opt out the falsy values such as "", undefined, null
const flaseVal = false;
const result3 = flaseVal || true;
console.log(result3);

let userData = '';
const user = userData || 'Guest';
console.log(user);
