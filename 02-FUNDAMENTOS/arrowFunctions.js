// Normal function
function add(a, b){
  return a + b;
}

let addArrow = (a, b) => a + b;

console.log(add(10, 20));
console.log(addArrow(10, 20));

function greet(){
  return 'Hey girl!';
}

let greetArrow = () => 'Hey girl Arrow!';
let greetNameArrow = name => `Hey you ${name}!`

console.log(greet());
console.log(greetArrow());
console.log(greetNameArrow('Lola'));

// Literl object
let deadpool = {
  name: 'Wade',
  lastName: 'Winston',
  power: 'Regeneration',
  getName(){
    return `Name: ${this.name} ${this.lastName}`
  },
  getPower(){
    return `Power ${this.power}`
  }
}

console.log('1', deadpool.getName());
console.log('2', deadpool.getPower());
