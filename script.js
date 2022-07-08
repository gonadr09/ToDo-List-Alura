import { newTask } from "./components/newTask.js"
import { displayTasks } from "./components/displayTasks.js";

window.addEventListener("load", displayTasks)

const btnCreateTask = document.querySelector('#btnCreateTask');
btnCreateTask.addEventListener('click', newTask);