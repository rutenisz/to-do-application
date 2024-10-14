const inputTaskBox = document.getElementById("input-task-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputTaskBox.value === "") {
    alert("You must write a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTaskBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputTaskBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") { // tagName grazina uppercase
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      console.log("clicked");
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTaskList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTaskList();