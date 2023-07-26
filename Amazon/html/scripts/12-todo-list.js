
const arr = [
  {name: 'Make Dinner', 
  dueDate: '2023-07-07'}, 
  {name: 'Wash Disher', 
  dueDate: '2023-07-07'}];

const arrayTwo = [];
const displayInputTwo = document.querySelector('.display-input-two');
const todoInputTwo = document.querySelector('.todo-input-two');

todoListfun();
function todoListfun() {
  let todolist = '';

    arr.forEach(function(element, i){
      // let name = element.name;
    // let dueDate = element.dueDate;
    const {name, dueDate} = element;
    let html = `
    
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    arr.splice(${i}, 1);
    todoListfun();
    " class="java-delete-button">Delete</button>`;
    
    todolist += html;
    })
  
    
  }
 
  displayInputTwo.innerHTML = todolist;


const todoDate =document.querySelector(".todo-date");
function todoTwo() {
  let name = todoInputTwo.value;
  
  let  dueDate = todoDate.value; 
   arr.push({
    // name: name, 
    // inputDate: inputDate
    name,
    dueDate
  
  });
   todoInputTwo.value = '';
   todoListfun();
 }