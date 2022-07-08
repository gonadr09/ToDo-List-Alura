import { createDate } from "./createDate.js";
import { createCard } from "./createCard.js";

export const displayTasks = () => {
    // Get tasks from LocalStorage
    const tasksListStorage = JSON.parse(localStorage.getItem('tasks'));
    if (!tasksListStorage) return;

    // Get dates
    const dates = [];
    tasksListStorage.forEach(task => {
        if (!dates.includes(task.date)){
            dates.push(task.date);
        }
    });

    // Sort by date
    dates.sort( (a, b) => {
        const firstDate = moment(a, 'DD/MM/YYYY');
        const secondDate = moment(b, 'DD/MM/YYYY');
        return firstDate - secondDate;
    });

    // Display tasks by dates
    dates.forEach(date => {
        createDate(date);
        tasksListStorage.forEach(task => {
            if (task.date == date) {
                createCard(task);
            } 
        })   
    })
}