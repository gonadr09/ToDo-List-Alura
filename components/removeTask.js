import { displayTasks } from "./displayTasks.js"

const removeTask = (e) => {
    // get ID
    const id = e.target.parentElement.dataset.id;
    console.log(id)
    // Update LocalStorage
    const tasksListStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(tasksListStorage)
    const filtered = tasksListStorage.filter( task => {
        console.log(task)
        return task.id != id

    })
    console.log(filtered)
    localStorage.setItem('tasks', JSON.stringify(filtered));

    // Reload tasks list
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';
    displayTasks();
}

export default removeTask;