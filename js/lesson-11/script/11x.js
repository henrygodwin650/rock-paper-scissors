// steps using js in creating a webpage.
// Main Idea of JavaScript.
// save the data.
const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name:'make dinner', 
  dueDate: '2025-08-27'
},{
  name: 'wash dishes',
  dueDate:'2025-08-27'
}];

renderTodoList();

function renderTodoList (){
  let todoListHTML = '';

  for (let i = 0; i< todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    // destructing or shortcut
    const { name, dueDate } = todoObject;
    // Generating the HTML .
    const html = `
    <div> ${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button" onclick="
     todoList.splice(${i}, 1);
     renderTodoList();
    ">Delete</button>
    `; 
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = '';

  renderTodoList();

  saveToStorage();
}
// Make the website interactive.

function saveToStorage(){
localStorage.setItem('todoList', JSON.stringify(todoList));
}