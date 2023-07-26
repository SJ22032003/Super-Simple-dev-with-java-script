

const arr = [
  {
    name: 'Make Dinner',
    dueDate: '2023-07-07'
  },
  {
    name: 'Wash Disher',
    dueDate: '2023-07-07'
  }];

const arrayTwo = [];
const displayInputTwo = document.querySelector('.display-input-two');
const todoInputTwo = document.querySelector('.todo-input-two');

todoListfun();
function todoListfun() {
  let todolist = '';

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // let name = element.name;
    // let dueDate = element.dueDate;
    const { name, dueDate } = element;
    let html = `
    
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
   
    " class="java-delete-button">Delete</button>`;



    todolist += html;
  }

  displayInputTwo.innerHTML = todolist;

  document.querySelectorAll('.java-delete-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      arr.splice(index, 1);
      todoListfun();
    })
  })
}

const todoDate = document.querySelector(".todo-date");

document.querySelector(".js-todo-button").addEventListener('click', () => {
  todoTwo();
});

function todoTwo() {
  let name = todoInputTwo.value;

  let dueDate = todoDate.value;
  arr.push({
    // name: name, 
    // inputDate: inputDate
    name,
    dueDate

  });
  todoInputTwo.value = '';
  todoListfun();
}