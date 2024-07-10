function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.insertBefore(li, taskList.firstChild);
        taskInput.value = '';
    }
}

function editTask(button) {
    const task = button.parentElement;
    const taskText = task.querySelector('span').textContent;
    const newTaskText = prompt('Edit task:', taskText);

    if (newTaskText !== null) {
        task.querySelector('span').textContent = newTaskText.trim();
    }
}

function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}