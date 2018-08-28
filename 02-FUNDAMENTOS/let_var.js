// Both let and var are used to declare a variable, the difference resides in how that variable lives.

// var: the variable can be redefined in the same scope, the latest value asigned will be used when call the variable
var name = 'Wolverine';

if (true) {
  console.log(name);

  var name = 'Magneto';
  console.log(name);
}

console.log(name);

// It will print
// wolverine
// Magneto
// Magneto


// let: the variable can not be redefined in the same scope. Variables in an external scoped doesn't exist in the internal scope
let alias = 'Storm';

if (true) {
  // console.log(alias); // It will throw: alias is not defined

  let alias = 'Jane';
  console.log(alias);

  alias = 'Mary';
  console.log(alias);
  //let alias = 'Mary1'; // It will throw: Identifier 'alias' has already been declared
}

console.log(alias);
// It will print
// Jane
// Storm
