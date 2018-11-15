const fs = require('fs');

const saveData = (list) =>{
  let data = JSON.stringify(list);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('Could not save the data');
  });
}

const loadData = () => {
  let todoList = []

  try {
    todoList = require('../db/data.json');
  }catch(err) {
    todoList = [];
  }

  return todoList;
}

const create = (description) => {
  let todoList = loadData();

  let task = {
    description: description,
    completed: false
  }

  todoList.push(task);
  saveData(todoList);

  return task;
}

const list = () =>{
  return loadData();
}

const update = (description, completed) =>{
  let todoList = list();

  let index = todoList.findIndex(task => task.description === description);

  if (index >=0) {
    todoList[index].completed = completed;
    saveData(todoList);
    return true;
  }
  return false;
}


module.exports = {
  create,
  list,
  update
}
