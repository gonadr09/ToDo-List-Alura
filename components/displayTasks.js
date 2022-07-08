import { createDate } from "./createDate.js";
import { createCard } from "./createCard.js";

export const displayTasks = () => {
    // Get tasks from LocalStorage
    let tasksListStorage = JSON.parse(localStorage.getItem('tasks'));

    // Test task
    if (!tasksListStorage) {
        tasksListStorage = [
          {
            task: "Renovar licencia 🚗 (tarea de prueba)",
            date: moment().add({days:7,months:1, years:1}).format("DD/MM/YYYY"),
            completed: false,
            id: "d3c2f6f1-6711-4723-ab19-7b28c23b894a",
          },
          {
            task: "Seguir en las redes a este programador 😋 (tarea de prueba)",
            date: moment().format("DD/MM/YYYY"),
            completed: false,
            id: "d3c2f6f1-6711-4723-ab19-7b28c23b894b",
          },
          {
            task: "Hacer las compras 🥱 (tarea de prueba)",
            date: moment().add(1, 'days').format("DD/MM/YYYY"),
            completed: true,
            id: "8af215c8-6739-40a6-ae62-7b28c23b894c",
          },
          {
            task: "Reservar turno dentista 👨‍⚕️ (tarea de prueba)",
            date: moment().subtract(1, 'days').format("DD/MM/YYYY"),
            completed: false,
            id: "533715d1-c61e-4b53-8de7-7b28c23b894d",
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