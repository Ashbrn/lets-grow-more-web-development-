document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
            taskList.appendChild(listItem);
            newTaskInput.value = '';
            newTaskInput.focus();

            const deleteBtn = listItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
        }
    });

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
