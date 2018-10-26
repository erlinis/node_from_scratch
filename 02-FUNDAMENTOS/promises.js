
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

let getEmployee = (id) => {

  return new Promise ( (resolve, reject) => {

    let employeeDB = employees.find( employee => employee.id === id )
    if(!employeeDB){
        reject(`There's no employee with id ${id}`);
      } else {
        resolve(employeeDB);
      }
  });
}


getEmployee(1).then(employee => {

}
