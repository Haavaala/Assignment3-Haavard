const addButton = document.querySelector(".addButton");
let input1 = document.querySelector(".input");
let input = document.querySelector(".input");
const container = document.querySelector(".container");
const editButton1 = document.querySelectorAll(".editButton");
const removeButton1 = document.querySelectorAll(".removeButton");
const itemInput = document.querySelectorAll(".item_input");
const itemP = document.querySelectorAll('.item_p')
////task II 1 b
const clearButton = document.querySelector(".clearButton");


//creates a div for the input section
//itemName is the value in the list section below the input bar.
class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }
  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    //removes the things the user har written in the input section, so the user can start over with writing
    //task II 2
    clearButton.addEventListener("click", () => {
      input1.value = "";
    });

    //the edit button that makes the user change the content of the list item
    //task 1, to have an edit button included
    //creates the button in javascript with the code underneath
    let editButton = document.createElement("button");
    editButton.innerHTML = "EDIT";
    editButton.classList.add("editButton");

    //makes the remove button that deletes the items added in the list
    //task I, to have a remove button included
    //task 1, when the user presses the button, the respective item should be deleted from the list
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add("removeButton");

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    //creates the confirm and cancel buttons for the edit function, so the user can edit,
    //cancel if he or she doesnt want to make a change, and confirm when the change is made
    //they are displayed as "none" to start with
    //task 2 a and b
    let confirmButton = document.createElement("button");
    let confirmtext = document.createTextNode("Confirm");
    confirmButton.appendChild(confirmtext);
    document.querySelector(".container").appendChild(confirmButton);
    confirmButton.classList.add("confirmButton");
    confirmButton.style.display = "none";

    let cancelButton = document.createElement("button");
    let canceltext = document.createTextNode("Cancel");
    cancelButton.appendChild(canceltext);
    document.querySelector(".container").appendChild(cancelButton);
    cancelButton.classList.add("cancelButton");
    cancelButton.style.display = "none";

    // cancel and confirm buttons will appear with display "block" when "edit" button is pressed
    //task I 2b
    function cancel() {
      cancelButton.style.display = "block";
    }
    //task I 2a
    function createConfirmButton() {
      confirmButton.style.display = "block";
    }

    //function for showing the confirm and cancel buttons
    function buttons() {
      cancel();
      createConfirmButton();
    }

    //function for removing cancel and confirm buttons
    //this is for when the cancel or confirm button is pressed
    function removeboth() {
      cancelButton.style.display = "none";
      confirmButton.style.display = "none";
    }
    //creates confirmation message and removes "cancel" and "confirm" buttons so they dont show after they are clicked
    //task 2a
    function onconfirm() {
      change();
      removeboth();
    }

    //makes the previous value stay
    //task 2b
    function discard() {
      input.value = itemName;
    }

    //function for the cancel button
    function dontchange() {
      removeboth();
      discard();
    }

    //lets the user edit the text when clicking the "edit" button
    //2. when the user presses the update/edit button/icon, a text field should be made available to the user, underneath the list where the user can enter the new content for the respective item.
    //read the readme file.
    editButton.addEventListener("click", () => this.edit(input));

    //the confirm and cancel buttons will appear
    editButton.onclick = buttons;

    //confirmation message when adding new items to the list
    addButton.onclick = legg;

    //confirmation message when clicking confirm after editing the already existing text
    confirmButton.onclick = onconfirm;

    //when pressing "cancel", both cancel and confirm button will disappear, and the former value will come back
    //task 2b.
    cancelButton.onclick = dontchange;

    //confirmation message when deleting items
    removeButton.onclick = are;

    //the function for the confirmation message when adding a new item
    //task II 1 a
    function legg() {
      let tilegg = "Do you want to add this?";
      if (confirm(tilegg) === true) {
        this.parentNode.input();
      } else {
        return false;
      }
    }

    //the function for the confirmation message when deleting/removing an item
    //task 1 a) Implement also a dialog that ask the user to confirm before the item is deleted, in case the user  pressed the “delete” button by mistake.
    function are() {
      let result = "This will now get deleted";
      if (confirm(result) === true) {
        this.parentNode.remove();
        cancelButton.style.display = "none";
        confirmButton.style.display = "none";
      } else {
        return false;
      }
    }

    //the function for the confirmation message when editing the already existing list item
    //task 2 a. Under the text field it should be provided an “Confirm” button that the user can press after s/he enters the new content for the respective item.
    function change() {
      let endre = "Are you sure you want to change this?";
      if (confirm(endre) !== true) {
        this.parentNode.edit();
      } else {
        return false;
      }
    }
  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  remove(item) {
    container.removeChild(item);
  }
}

//task II 1,
//function for the input section. when the item is added, all text will disappear
function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}

//task II 1,
//it also works when pressing enter
addButton.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});





removeButton1.forEach((button) => {
  button.addEventListener('click', () => {
    let result = "This will now get deleted";
  if (confirm(result) === true) {
    button.parentNode.parentNode.remove();
    cancelButton1.style.display = "none";
    confirmButton1.style.display = "none";
  } else {
    return false;
  }
})})


let confirmButton1 = document.createElement("button");
    let confirmtext1 = document.createTextNode("Confirm");
    confirmButton1.appendChild(confirmtext1);
    document.querySelector(".buttons").appendChild(confirmButton1);
    confirmButton1.classList.add("confirmButton");
    confirmButton1.style.display = "none";

    let cancelButton1 = document.createElement("button");
    let canceltext1 = document.createTextNode("Cancel");
    cancelButton1.appendChild(canceltext1);
    document.querySelector(".buttons").appendChild(cancelButton1);
    cancelButton1.classList.add("cancelButton");
    cancelButton1.style.display = "none";


function cancel1() {
  cancelButton1.style.display = "block";
}
//task I 2a
function createConfirmButton1() {
  confirmButton1.style.display = "block";
}

//function for showing the confirm and cancel buttons
function buttons1() {
  cancel1();
  createConfirmButton1();
}





//function for the cancel button
function dontchange1() {
  removeboth1();
  discard1();
}

function discard1() {
    //previous value
}

//function for removing cancel and confirm buttons
//this is for when the cancel or confirm button is pressed
function removeboth1() {
  cancelButton1.style.display = "none";
  confirmButton1.style.display = "none";
}
//creates confirmation message and removes "cancel" and "confirm" buttons so they dont show after they are clicked
//task 2a
function onconfirm1() {
  change1();
  removeboth1();
}



//when edit button is pressed, the confirm and cancel button appear
editButton1.forEach((button1) => {
  button1.addEventListener('click', () => {
    itemInput.disabled = false;
    cancel1();
    createConfirmButton1();

  });

cancelButton1.onclick= dontchange1;

confirmButton1.onclick= onconfirm1;
})



function change1() {
  let endre = "Are you sure you want to change this?";
  if (confirm(endre) !== true) {
    this.parentNode.edit();
  } else {
    return false;
  }
}
    





