// We should have an existing object at the right side, that we want to split into variables. 
// The left side contains an object-like “pattern” for corresponding properties. 
// In the simplest case, that’s a list of variable names in {...}

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;

  console.log(title) // Menu
  // Alternative of options.title

// { sourceProperty: targetVariable }
let {width: w, height: h, title: t} = options;

console.log(w)
console.log(t)

const {a = 10, b = 5} = {a: 3};

console.log(a); // 3, because a has been assigned to 3 from 10
console.log(b); // 5