// Literl object
let deadpool = {
  name: 'Wade',
  lastName: 'Winston',
  power: 'Regeneration',
  getName: function(){
    return `Name: ${this.name} ${this.lastName}`
  },
  getPower(){
    return `Power ${this.power}`
  }
}

console.log(deadpool.getName());
console.log(deadpool.getPower());

// Destructuring: allow to extract some or all object's properties into
// individual variables, if the individual varible should be named differently
// to its corresponding object property the new name should be specified
let { name: firstName, lastName, power } = deadpool;
console.log('destructuring:', firstName, lastName, power);
