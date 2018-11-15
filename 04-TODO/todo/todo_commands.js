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
    completed: "false"
  }

  todoList.push(task);
  saveData(todoList);

  return task;
}

const list = (statusFilter) => {
  let todoList = loadData();

  if (statusFilter != undefined) {
    let filteredList = todoList.filter(task => task.completed === statusFilter);
    return filteredList;
  }
  return todoList;
}

const update = (description, completed) =>{
  let todoList = loadData();

  let index = todoList.findIndex(task => task.description === description);

  if (index >=0) {
    todoList[index].completed = completed;
    saveData(todoList);
    return true;
  }
  return false;
}

const destroy = (description) => {
  let todoList = loadData();

  let filteredList = todoList.filter(task => task.description !== description);

  if (filteredList.length !== todoList.length) {
    saveData(filteredList);
    return true;
  }
  return false;
}

module.exports = {
  create,
  list,
  update,
  destroy
}
