
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");


addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
    
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-btn">Delete</button>
        `;

        
        taskList.appendChild(listItem);

        
        taskInput.value = "";


        const deleteButton = listItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
    }
});
