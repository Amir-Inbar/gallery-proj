'use strict';

function renderTodos(isKey = null) {
  let todos = getTodosForDisplay();
  if (!isKey && isKey !== null) todos = getToDoSort();
  console.log(todos);
  const strHtmls = todos.map(function (todo) {
    return `<li class="${
      todo.isDone ? 'done' : ''
    }"><span onclick="onToggleTodo('${todo.id}')" >
        ${todo.txt} </span>
        <button onclick="onRemoveTodo(event, '${
          todo.id
        }')">x</button><button class="up" onclick="onUpArrow('${todo.id}')">up</button><button class="down" onclick="onDownArrow('${todo.id}')">down</button>
        </li>`;
  });
  document.querySelector('.todo-list').innerHTML = strHtmls.join('');

  var elFirstBtn = document.querySelector('.down');
  elFirstBtn.remove();

  var elLastBtns = document.querySelectorAll('.up');
  var elLastBtn = elLastBtns[elLastBtns.length - 1];
  elLastBtn.remove();

  if (gTodos.length === 0)
    document.querySelector('.noTodo').innerText = 'No todos';
  document.querySelector(
    '.leftCountList'
  ).innerHTML = `${getActiveTodosCount()} items left`;

  gIsPress = false;
}

function onRemoveTodo(ev, todoId) {
  ev.stopPropagation();
  console.log('Removing todo', todoId);
  removeTodo(todoId);
  renderTodos();
}

function onToggleTodo(todoId) {
  console.log('Toggling todo', todoId);
  toggleTodo(todoId);
  renderTodos();
}

function onAddTodo() {
  const num = document.querySelector('#importInput').value;
  const elTxt = document.querySelector('#todoInput');
  if (!elTxt.value) return;
  const txt = elTxt.value;
  addTodo(txt, num);
  renderTodos();
  elTxt.value = '';
}

function onSetFilter(filterBy) {
  console.log('Filtering By:', filterBy);
  setFilter(filterBy);
  renderTodos();
}

function onSetSort(sortBy) {
  SetSort(sortBy);
  renderTodos();
}

function onUpArrow(todoId) {
  UpArrow(todoId);
}

function onDownArrow(todoId) {
  downArrow(todoId);
}
