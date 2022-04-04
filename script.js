const addButton = document.querySelector('.addButton');
let input1 = document.querySelector('.input');
let input = document.querySelector('.input')
const container = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton'); 


//creates a div for the input section
class item{
    constructor(itemName){
        this.createDiv(itemName)
    }
createDiv(itemName){
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = 'text';

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');
    
    //removes the things the user har written in the input section, so the user can start over with writing
    clearButton.addEventListener('click', () => {
        input1.value = "";
    }); 

//the edit button that makes the user change the content of the list item
    let editButton = document.createElement('button');
    editButton.innerHTML = "EDIT";
    editButton.classList.add('editButton');
    
//makes the remove button that deletes the items added in the list
    let removeButton = document.createElement('button')
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add('removeButton')

    container.appendChild(itemBox);
    
    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);
    
    //creates the confirm and cancel buttons for the edit function, so the user can edit, 
    //cancel if he or she doesnt want to make a change, and confirm when the change is made
    //they are displayed as "none" to start with
    let confirmButton = document.createElement('button');
    let confirmtext = document.createTextNode('Confirm');
    confirmButton.appendChild(confirmtext);
    document.querySelector('.container').appendChild(confirmButton);
    confirmButton.classList.add('confirmButton')
    confirmButton.style.display = 'none';

    let cancelButton = document.createElement('button');
        let canceltext = document.createTextNode('Cancel');
        cancelButton.appendChild(canceltext);
        document.querySelector('.container').appendChild(cancelButton);
        cancelButton.classList.add('cancelButton')
        cancelButton.style.display = 'none';
        
    // cancel and confirm buttons will appear with display "block" when "edit" button is pressed
    function cancel(){
        cancelButton.style.display = 'block';
    }
    
    function createConfirmButton(){
        confirmButton.style.display = 'block';
    }

function buttons() {
    cancel();
    createConfirmButton();
}


//lets the user edit the text when clicking the "edit" button
    editButton.addEventListener('click',() => this.edit(input));

    //the confirm and cancel buttons will appear
    editButton.onclick= buttons;

    //confirmation message when adding new items to the list
    addButton.onclick= legg;

    //confirmation message when clicking confirm after editing the already existing text
    confirmButton.onclick= change;

    //confirmation message when deleting items
     removeButton.onclick= are;

    
//the function for the confirmation message when adding a new item 
    function legg() {
        let tilegg = 'Do you want to add this?';
        if (confirm(tilegg) === true)  {
            this.parentNode.input();
            
        }
         else {
             return false;
         }
    }


//the function for the confirmation message when deleting/removing an item
    function are() {
        let result = 'This will now get deleted';
        if (confirm(result) === true)  {
            this.parentNode.remove();
            cancelButton.style.display = 'none';
            confirmButton.style.display = 'none';

        }
         else {
             return false;
         }
    }

    //the function for the confirmation message when editing the already existing list item
    function change() {
        let endre = 'Are you sure you want to change this?';
        if (confirm(endre) !== true)  {
            this.parentNode.edit();
            
        }
         else {
             return false;
         }
    }

}

edit(input){
    input.disabled = !input.disabled;
}

remove(item){
    container.removeChild(item);
}
}


//function for the input section. when the item is added, all text will disappear
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

//it also works when pressing enter
addButton.addEventListener('click', check, );
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
        
    }
})







