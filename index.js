document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector("ul");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.innerText = task;
        list.appendChild(li);
    });

    list.addEventListener("click", function (event) {
        if (event.target.matches("li")) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const newTasks = tasks.filter(
                (task) => task !== event.target.innerText
            );
            console.log(event.target.innerText, newTasks);
            localStorage.setItem("tasks", JSON.stringify(newTasks));
            event.target.remove();
        }
    });

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const task = form.elements.task.value;
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const newTasks = [...tasks, task];
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        const newTask = document.createElement("li");
        newTask.innerText = task;
        list.appendChild(newTask);
        form.reset();
    });

    document
        .getElementById("reset-list")
        .addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("tasks");
            list.innerHTML = "";
        });
});
const formElem = document.querySelector("form");
