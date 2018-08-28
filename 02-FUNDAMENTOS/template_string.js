let name = 'Deadpool';
let realName = 'Wade Winston';

console.log(name + ' ' + realName);
console.log(`${name} ${realName}`);

function getName(){
  return `${name} ${realName}`;
}
console.log(`Character ${getName()}`);

