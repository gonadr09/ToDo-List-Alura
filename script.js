
() => { // Inmediatly invoked function expression (IIFE)
    const btnCreateTask = document.querySelector('#btnCreateTask');
    const msgAddTask = document.querySelector('.msgAddTask');

    const createTask = () => {
        const inputTask = document.querySelector('#inputTask');
        if (inputTask.value) {
            // Create checkBox -> i
            const newCheckbox = document.createElement('i');
            newCheckbox.classList.add('far', 'fa-square', 'checkIcon', 'icon');
            newCheckbox.addEventListener('click', lineThroughTask);

            // Create text -> span
            const newText = document.createElement('span');
            newText.classList.add('task');
            newText.textContent = inputTask.value;

            // Create container of checkbox and text
            const newContainer = document.createElement('div');
            newContainer.appendChild(newCheckbox);
            newContainer.appendChild(newText);

            // Create trash -> i
            const newTrash = document.createElement('i');
            newTrash.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
            newTrash.addEventListener('click', removeTask)

            // Create card
            const newCard = document.createElement('li');
            newCard.classList.add('card');
            newCard.appendChild(newContainer);
            newCard.appendChild(newTrash);

            // Add to list
            const taskList = document.querySelector('#taskList');
            taskList.appendChild(newCard);

            // Clean input and error message
            msgAddTask.classList.add('opacity');
            inputTask.value = ''
        } else {
            // Show error message -> "Please, write a task"
            msgAddTask.classList.remove('opacity');
        }
    }

    const removeTask = (e) => {
        const card = e.target.offsetParent;
        card.remove();
    }

    const lineThroughTask = (e) => {
        // check or uncheck box
        const checkbox = e.target;
        checkbox.classList.toggle('fa-check-square');
        checkbox.classList.toggle('fa-square');
        // line through task
        const span = e.target.nextElementSibling;
        span.classList.toggle('taskDone');
    }

    btnCreateTask.addEventListener('click', createTask);

}