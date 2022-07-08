export const createDate = (date) => {
    // Create date -> li
    const dateElement = document.createElement('li');
    dateElement.classList.add('date');
    dateElement.textContent = date;

    // Add to list -> ul
    const taskList = document.querySelector('#taskList');
    taskList.appendChild(dateElement);
}