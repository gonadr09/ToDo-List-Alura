const completeTask = (e) => {
    // check or uncheck box
    const checkbox = e.target;
    checkbox.classList.toggle('fa-check-square');
    checkbox.classList.toggle('fa-square');
    e.target.offsetParent.classList.toggle('green')
    // line through task
    const spanText = e.target.nextElementSibling;
    spanText.classList.toggle('taskDone');
    // line through date
    const spanDate = e.target.nextElementSibling.nextElementSibling;
    spanDate.classList.toggle('taskDone');
    
    // get ID
    const id = e.target.offsetParent.dataset.id;

    // Update LocalStorage
    const tasksListStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    tasksListStorage.forEach( task => {
        if(task.id == id) {
            task.completed = !task.completed;
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasksListStorage));

}

export default completeTask;