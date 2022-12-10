

const input = document.getElementById("input-text");
let item = document.getElementsByTagName("li")
const enter = document.getElementById("enter");
let ul = document.querySelector("ul");
let error = document.getElementById("error")

function inputLenght() {
    return input.value.length;
}

//function listLenght() {
//    return item.length;
//}

// create list Element
function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // when list is created and executed
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    // work on the delete button
    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }
}


enter.addEventListener("click", function addListAfterClick() {
    if (inputLenght() > 0) {
        // making sure your empty input does not create an li
        createListElement();
    }
}
);

input.addEventListener("keypress", function addListAfterKeypress(event) {
    if (inputLenght() > 0 && event.which === 13) {
            //incase the user press enter key the list would be submitted
            createListElement();
    }
});
