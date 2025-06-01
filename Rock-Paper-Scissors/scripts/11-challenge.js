  const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
   name: 'wash dishes',
   dueDate:'2022-12-22',
  }];
  
  renderTodoList();
  
  function renderTodoList (){
  
      let todoListHTML = '';
  
      for (let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];
        const { name } = todoObject;
        const { dueDate }= todoObject;
        const html = `<div>
        ${name} </div>
        <div> ${dueDate} </div>
        <button class="delete-todo-button" onclick ="
         todoList.splice(${i}, 1);
         renderTodoList();
        ">
        Delete
        </button>`;
        todoListHTML += html;
      }
  
      document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  }
  
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
  
    const dateInputElement = document.querySelector ('.js-due-date-input');
  
    const dueDate = dateInputElement.value;
     
    todoList.push({
      //name: 'name',
      //dueDate: dueDate,
       name,
       dueDate
      });
  
    inputElement.value = '';
    
    renderTodoList();
  }

  function loadTask(){
    const tasks = JSON.parse(localStorage.getitem('renderTodoList')) ||[];
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML="";
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task;
      todoList.appendChild(li);
    });
  }

  function addTask (){
    const newTask = document.getElementById('new-task').value;
   if (newTask.trim()) {
    const tasks = JSON.porse(localStorage.getItem('tasks')) || [];
    task.push(newTask);
    localStorage.setItem('tasks', JSON.stringify('tasks'));
    document.getElementById('new-task').value ="";
    loadTasks();
   }
  }
  window.onload = loadTasks;