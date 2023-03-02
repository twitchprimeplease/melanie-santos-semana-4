//custom Component exports Zone
import "./components/taskInput/taskInput.js"
import "./components/taskItem/taskItem.js"

const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
addBtn.addEventListener('click', ()=>{
    addItem();
});



function addItem(){
    const input = document.getElementById('new-task-input');
    const toDoListItem = document.createElement('task-item');
    toDoListItem.setAttribute('task', input.value);
    taskList.append(toDoListItem);
    input.value = '';
}