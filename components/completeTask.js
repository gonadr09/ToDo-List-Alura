const completeTask = (e) => {
    // check or uncheck box
    const checkbox = e.target;
    checkbox.classList.toggle('fa-check-square');
    checkbox.classList.toggle('fa-square');
    // line through task
    const span = e.target.nextElementSibling;
    span.classList.toggle('taskDone');
}

export default completeTask;