const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Complete task on click
  li.addEventListener("click", () => li.classList.toggle("done"));

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.style.background = "transparent";
  delBtn.style.color = "red";
  delBtn.style.border = "none";
  delBtn.style.cursor = "pointer";
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}
