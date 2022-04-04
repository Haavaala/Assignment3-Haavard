const addButton = document.querySelector('.addButton');
let input1 = document.querySelector('.input');
let input = document.querySelector('.input')
const container = document.querySelector('.container');
const clearButton = document.querySelector('.clearButton'); 

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
    
    clearButton.addEventListener('click', () => {
        input1.value = "";
    }); 

    let editButton = document.createElement('button');
    editButton.innerHTML = "EDIT";
    editButton.classList.add('editButton');
    

    let removeButton = document.createElement('button')
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add('removeButton')

    container.appendChild(itemBox);
    
    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);
    
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



    editButton.addEventListener('click',() => this.edit(input));
    
    editButton.onclick= buttons;

    addButton.onclick= legg;

    confirmButton.onclick= change;

     removeButton.onclick= are;

    

    function legg() {
        let tilegg = 'Do you want to add this?';
        if (confirm(tilegg) === true)  {
            this.parentNode.input();
            
        }
         else {
             return false;
         }
    }



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

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check, );
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
        
    }
})







