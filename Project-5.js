//Variables

const addTask = document.getElementById('add-task')
const taskContainer =document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

//Event-Listener

addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`
    task.appendChild(li)

    let checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add('checkTask');
    task.appendChild(checkbutton)

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton)

    if(inputTask.value === "") {
        alert("Please Enter a task")
    }else{
        taskContainer.appendChild(task)
    }

    inputTask.value= ""

    checkbutton.addEventListener("click", function(){
        checkbutton.parentElement.style.textDecoration = "line-through"
    })
    deleteButton.addEventListener("click", function(e){

        let target = e.target
        target.parentElement.parentElement.remove()
        })
})


