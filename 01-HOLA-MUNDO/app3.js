console.log('Start...');

// Course example

setTimeout( function() {
  console.log('First timeout');
}, 3000);

setTimeout( function() {
  console.log('Second timeout');
}, 0);

setTimeout( function() {
  console.log('Third timeout');
}, 0);


// Own example with functions
function loggingFunction(message){
  console.log(message);
}

function callTimeout(message, time){
 setTimeout(loggingFunction, time, message);
}

callTimeout('First', 3000);
callTimeout('Second', 0);
callTimeout('Third', 0);

console.log('End...');

