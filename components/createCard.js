import completeTask from "./completeTask.js";
import removeTask from "./removeTask.js";

export const createCard = (taskObj) => {
    // Create text -> span
    const newText = document.createElement('span');
    newText.classList.add('task');
    newText.textContent = taskObj.task;

    // Create date -> span
    const dateElement = document.createElement('span');
    dateElement.textContent = taskObj.date;

    // Create checkBox -> i
    const newCheckbox = document.createElement('i');
    newCheckbox.classList.add('far', 'checkIcon', 'icon');
    if (taskObj.completed){
        newCheckbox.classList.add('fa-check-square')
        // line through task
        newText.classList.add('taskDone');
        // line through date
        dateElement.classList.toggle('taskDone');
    } else {
        newCheckbox.classList.add('fa-square');
    }
    newCheckbox.addEventListener('click', completeTask);

    // Create container of checkbox and text
    const newContainer = document.createElement('div');
    newContainer.appendChild(newCheckbox);
    newContainer.appendChild(newText);
    newContainer.appendChild(dateElement);

    // Create trash -> i
    const newTrash = document.createElement('i');
    newTrash.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    newTrash.addEventListener('click', removeTask)

    // Create card
    const newCard = document.createElement('li');
    newCard.classList.add('card');
    newCard.appendChild(newContainer);
    newCard.appendChild(newTrash);

    // Add ID
    newCard.dataset.id = taskObj.id;

    // Add to list -> ul
    const taskList = document.querySelector('#taskList');
    taskList.appendChild(newCard);
}