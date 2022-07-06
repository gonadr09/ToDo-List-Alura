const removeTask = (e) => {
    const card = e.target.offsetParent;
    card.remove();
}

export default removeTask;