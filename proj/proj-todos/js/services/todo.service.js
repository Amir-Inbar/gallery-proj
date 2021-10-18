'use strict';

var gTodos;
_createTodos();
var gIsPress = false;
var gFilterBy = 'ALL';
var gSortBy = 'txt';

function getTodosForDisplay() {
  if (gFilterBy === 'ALL') return gTodos;
  const todos = gTodos.filter(function (todo) {
    return (
      (todo.isDone && gFilterBy === 'DONE') ||
      (!todo.isDone && gFilterBy === 'ACTIVE')
    );
  });
  console.log(todos);
  return todos;
}

function getToDoSort() {
  if (gSortBy === 'txt') sortByTxt();
  else if (gSortBy === 'importance') sortByImport();
  else sortByCraeted();
  return gTodos;
}

function removeTodo(todoId) {
  var isConfirm = confirm('Are you sure you want to delete this toDo?');
  if (isConfirm) {
    const idx = gTodos.findIndex((todo) => todo.id === todoId);
    gTodos.splice(idx, 1);
    _saveTodosToStorage();
  }
  return;
}

function toggleTodo(todoId) {
  const todo = gTodos.find((todo) => todo.id === todoId);
  todo.isDone = !todo.isDone;
  _saveTodosToStorage();
}

function addTodo(txt, num) {
  const todo = _createTodo(txt, parseInt(num));
  gTodos.push(todo);
  _saveTodosToStorage();
}

function getTodosCount() {
  return gTodos.length;
}

function getActiveTodosCount() {
  const todos = gTodos.filter(function (todo) {
    return !todo.isDone;
  });
  return todos.length;
}

function setFilter(filterBy) {
  gFilterBy = filterBy;
}

function SetSort(sortBy) {
  gSortBy = sortBy;
}

function UpArrow(todoId) {
  gIsPress = true;
  var todoIdx = gTodos.findIndex((todo) => {
    return todo.id === todoId;
  });
  const todo = gTodos[todoIdx];
  const nextTodo = gTodos[todoIdx + 1];
  gTodos[todoIdx + 1] = todo;
  gTodos[todoIdx] = nextTodo;
  renderTodos(gIsPress);
}

function downArrow(todoId) {
  gIsPress = true;
  var todoIdx = gTodos.findIndex((todo) => {
    return todo.id === todoId;
  });
  const todo = gTodos[todoIdx];

  const prevTodo = gTodos[todoIdx - 1];
  gTodos[todoIdx - 1] = todo;
  gTodos[todoIdx] = prevTodo;
  renderTodos(gIsPress);
}

function _saveTodosToStorage() {
  saveToStorage('todosDB', gTodos);
}

function _createTodo(txt, importance = 1) {
  const todo = {
    id: _makeId(),
    txt: txt,
    isDone: false,
    createdAt: +new Date(),
    importance,
  };
  return todo;
}

function _createTodos() {
  var todos = loadFromStorage('todosDB');
  // Setup Demo data
  if (!todos || !todos.length) {
    todos = [
      _createTodo('Learn HTML', 1),
      _createTodo('Study CSS', 1),
      _createTodo('Master JS', 1),
    ];
  }
  gTodos = todos;
  _saveTodosToStorage();
}

function _makeId(length = 5) {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var txt = '';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
