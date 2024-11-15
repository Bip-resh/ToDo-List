const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let removeButton = document.createElement("span");
        removeButton.innerHTML = "\u00d7";
        removeButton.classList.add("remove-button");
        li.appendChild(removeButton);

        let editButton = document.createElement("span");
        editButton.innerHTML = "\u270E"; // Edit icon (pencil)
        editButton.classList.add("edit-button");
        li.appendChild(editButton);

        listContainer.appendChild(li);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
       
    } else if (e.target.classList.contains("remove-button")) {
        e.target.parentElement.remove();
        saveData();
        
    } else if (e.target.classList.contains("edit-button")) {
        let li = e.target.parentElement;
        let newValue = prompt("Edit your task:", li.firstChild.nodeValue);
        if (newValue !== null && newValue.trim() !== '') {
            li.firstChild.nodeValue = newValue;
            saveData();
            
        }
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || '';
}

showTask();

