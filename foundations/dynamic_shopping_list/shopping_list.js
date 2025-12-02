const btn = document.querySelector("#btn");
const ls = document.querySelector("#list");

function buttonClicked(e) {
    // Get list input
    e.preventDefault();
    let item = document.querySelector("#item");
    let val = item.value;
    item.value = "";
    
    // Add item to list
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);
    span.textContent = val;
    button.textContent = "Delete";
    ls.appendChild(li);

    // Add event listener for delete button
    button.addEventListener("click", () => {li.remove()});
}


btn.addEventListener("click", buttonClicked);
