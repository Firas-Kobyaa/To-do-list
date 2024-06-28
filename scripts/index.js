document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-button');
    const taskField = document.getElementById('task-field');
    const dateField = document.getElementById('date-field');
    const timeField = document.getElementById('time-field');
    const assignmentField = document.getElementById('assignment-field');
    const listContainer = document.getElementById('list-container1');

    addButton.addEventListener('click', () => {
        const task = taskField.value.trim();
        const date = dateField.value;
        const time = timeField.value;
        const assignment = assignmentField.value.trim();

        if (task && date && time && assignment) {
            const listItem = document.createElement('li');
            listItem.textContent = `${task} - ${date} - ${time} - ${assignment}`;
            
         
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Mark As Done';
            toggleButton.classList.add('completed-button'); 
            toggleButton.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

           
            listItem.appendChild(toggleButton);

            
            listContainer.appendChild(listItem);

            
            taskField.value = '';
            dateField.value = '';
            timeField.value = '';
            assignmentField.value = '';
        } else {
            alert('Please fill in all fields before adding a task.');
        }
    });
});
