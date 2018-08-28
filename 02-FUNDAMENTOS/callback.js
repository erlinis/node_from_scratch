
// let startDate = Date.now();

// let printRemainigTime = setInterval(function() {
//   console.log('Time left: '+ getTimeLeft(startDate)+'s');
// }, 1000);

// function getTimeLeft(startDate) {
//   currentDate = Date.now();
//   return Math.ceil((startDate - currentDate + timeout._idleTimeout) / 1000)
// }

// let timeout = setTimeout(() => {
//   console.log('Erlinis is bored = Erlinis esta aburrida');
//  clearInterval(printRemainigTime);
// }, 10000);


let getUserById = (id, callback) => {
  let user = {
    id,
    name: 'Erlinis'
  }

  if ( id === 20 ) {
    callback(`User with id ${id} does not exist`);
  } else {
    callback(null, user);
  }
}

getUserById(20, (error, user) => {
  if (error){
    return console.error('Error:', error);
  }

  console.log('The user is: ', user);
});
