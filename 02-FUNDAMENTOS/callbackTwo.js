let employees = [
  {
    id: 1,
    name: 'Erlinis',
  },
  {
    id: 2,
    name: 'Julio',
  },
  {
    id: 3,
    name: 'Oscar',
  }
];

let salaries = [
  {
    id: 1,
    salary: 2000
  },
  {
    id: 2,
    salary: 3000
  }
];

let getEmployee = (id, printEmployeeCallback) => {
  let employeeDB = employees.find( employee => employee.id === id )

  if(!employeeDB){
    printEmployeeCallback(`There's no employee with id ${id}`);
  } else {
    printEmployeeCallback(null, employeeDB);
  }
}


let getSalary = (employee, printSalaryCallback) => {
    let salary = salaries.find( salary => salary.id === employee.id);

    if(!salary){
      printSalaryCallback(`None salary for the employe ${employee.name} was found`);
    } else {
      printSalaryCallback(null, { name: employee.name, salary: salary.salary });
    }
}

var employee = getEmployee(3, (error, employeeFound) => {
  if(error){
    return console.log('Error:', error);
  }

   console.log('Employee', employeeFound);

   getSalary(employeeFound, (error, salaryFound) => {
    if(error){
      return console.log('Error:', error);
    }

    console.log(salaryFound);
  });
});


