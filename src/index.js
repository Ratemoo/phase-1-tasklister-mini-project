document.addEventListener("DOMContentLoaded", function() {
  // your code here
  const form =document.getElementById("create-task-form")
  const taskList=document.getElementById("tasks")
  form.addEventListener('submit', function(event){
    event.preventDefault()
    const inputField=document.getElementById("new-task-description")
    const taskDescription= inputField.value.trim()
    if (taskDescription !== ''){
      const newTask= document.createElement('li')
      newTask.textContent=taskDescription
      taskList.appendChild(newTask)
      inputField.value=''
    }
  })
  taskList.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
      const taskItem = event.target.parentElement
      taskList.removeChild(taskItem)
    }
  })
});
