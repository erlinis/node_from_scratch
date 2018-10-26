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

let getEmployee = async (id) => {
  let employee  = employees.find( emp => emp.id === id )

  if(employee){
    return employee;
  } else {
    throw new Error(`There's no employee with id ${id}`);
  }
}

let getSalary = async (employee) => {
  let salary = salaries.find( salary => salary.id === employee.id);

  if(salary){
    return { name: employee.name, salary: salary.salary };
  } else {
    throw new Error(`None salary for the employe ${employee.name} was found`);
  }
}

let getEmployeeInfo = async(id) => {
  let employee = await getEmployee(id);
  let salary   = await getSalary(employee);

  return (`${salary.name} has a salary of $${salary.salary}`);
}


getEmployeeInfo(1)
  .then(msg => console.log(msg))
  .catch(error => console.log(error));

