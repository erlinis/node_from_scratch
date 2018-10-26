/**
 * async
 */
let getName = async() => {
  return 'Erlinis';
}

/**
 * 1.Mark a method with async is equivalent to wrap the method return in a promise.
 * 2. Any error inside the async method is equivalent to "reject"
 * 3. await: Waits for the method result to continue with the program execution
 *           'await' clause can ONLY be used inside of a asycn method.
 *           - Be careful to respond something otherwise it will wait forever:

let getName = () => {
  return new Promise( resolve, reject) => {
    resolve('Erlinis');
  }
}
*/

console.log(getName());

getName().then(name => {
   console.log(`hello ${name}`);
}).catch( ex => {
   console.log('Error in async¡¡¡¡')
});

