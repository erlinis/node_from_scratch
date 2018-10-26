/**
 * async
 */

/**
 * Mark a method with async is equivalent to wrap the method logic in a promise

let getName = () => {
  return new Promise( resolve, reject) => {
    resolve('Erlinis');
  }
}
*/

let employees = [
  { id: 1, name: 'Erlinis' },
  { id: 2, name: 'Julio' },
  { id: 3, name: 'Oscar' }
];

let salaries = [
  { id: 1, salary: 7000 },
  { id: 2, salary: 3000 }
];

let getEmployee = (id) => {
  return new Promise ( (resolve, reject) => {
    let employeeDB = employees.find( employee => employee.id === id )
    if(employeeDB){
      resolve(employeeDB);
    } else {
      reject(`There's no employee with id ${id}`);
    }
  });
}

let getSalary = (employee) => {
  return new Promise ( (resolve, reject) => {
    let salary = salaries.find( salary => salary.id === employee.id);

    if(salary){
      resolve({ name: employee.name, salary: salary.salary });
    } else {
      reject(`None salary for the employe ${employee.name} was found`);
    }
  });
}

let getEmployeeInfo = async(id) => {
  let employee = await getEmployee(id);
  let salary   = await getSalary(employee);

  return (`${salary.name} has a salary of $${salary.salary}`);
}


getEmployeeInfo(10)
  .then(msg => console.log(msg))
  .catch(error => console.log(error));

