import { createDate } from "./createDate.js";
import { createCard } from "./createCard.js";

export const displayTasks = () => {
    // Get tasks from LocalStorage
    let tasksListStorage = JSON.parse(localStorage.getItem('tasks'));

    // Test task
    if (!tasksListStorage) {
        tasksListStorage = [
          {
            task: "Inicio de clases (tarea de prueba)",
            date: "05/03/2023",
            completed: false,
            id: "c7857ca2-05e9-4aa5-8e66-cc2407daf32b",
          },
          {
            task: "Renovar licencia (tarea de prueba)",
            date: "15/08/2024",
            completed: false,
            id: "d3c2f6f1-6711-4723-ab19-7b28c23b894a",
          },
          {
            task: "Hacer las compras (tarea de prueba)",
            date: "08/07/2022",
            completed: false,
            id: "8af215c8-6739-40a6-ae62-3f07d68a71f7",
          },
          {
            task: "Reservar turno dentista (tarea de prueba)",
            date: "15/06/2022",
            completed: false,
            id: "533715d1-c61e-4b53-8de7-3bd9925ffd5e",
          },
        ];
        localStorage.setItem('tasks', JSON.stringify(tasksListStorage));
    }

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