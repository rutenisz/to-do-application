const inputTaskBox = document.getElementById("input-task-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputTaskBox.value === "") {
    alert("You must write a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTaskBox.value;
    listContainer.appendChild(li);
  }
}
