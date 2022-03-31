const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');

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

    editButton.addEventListener('click',() => this.edit(input));

    
    editButton.onclick= change;

    removeButton.onclick= are;

    function are() {
        let result = 'This will now get deleted';
        if (confirm(result) === true)  {
            this.parentNode.remove();
            
        }
         else {
             return false;
         }
    }

    function change() {
        let endre = 'Do you want to change this?';
        if (confirm(endre) === true)  {
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

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})


