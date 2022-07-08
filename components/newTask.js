import { displayTasks } from "./displayTasks.js"

export const newTask = () => {
    const msgAddTask = document.querySelector('.msgAddTask');
    const inputTask = document.querySelector('#inputTask');
    const task = inputTask.value;
    // If task is empty -> error message
    if (!task) {
        msgAddTask.classList.remove('opacity');
        msgAddTask.innerHTML = '*Escriba una tarea'
        return;
    }

    const calendar = document.querySelector('#dataTask');
    const date = moment(calendar.value).format('DD/MM/YYYY');
    // If date is empty -> error message
    if (!calendar.value) {
        msgAddTask.classList.remove('opacity');
        msgAddTask.innerHTML = '*Ingrese una fecha'
        return;
    }

    // Create Obj with task and date
    const taskObj = {
        task,
        date,
        completed: false,
        id: uuid.v4()
    };

    // Update LocalStorage
    const tasksListStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    tasksListStorage.push(taskObj)
    localStorage.setItem('tasks', JSON.stringify(tasksListStorage));

    // Reload tasks list
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';
    displayTasks();

    // Clean input and error message
    msgAddTask.classList.add('opacity');
    inputTask.value = '';
    calendar.value = '';
}