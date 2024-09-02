let form = document.querySelector('form');
let icompleteUL = document.querySelector('.incom-task ul');
let completeUL = document.querySelector('.com-task ul');
let valueInput = document.querySelector('#task')


let newTask = function (task){
    let liElement = document.createElement('li');
    let input = document.createElement('input');
    let label = document.createElement('label');

    input.type = 'checkbox'
    liElement.appendChild(input);
    label.innerText = task;
    liElement.appendChild(label)

    return liElement;
}

let addTask = function (e){
    e.preventDefault();
    let value = valueInput.value;
    if(value === ''){
        alert('Enter some value')
        return;
    }
    let li = newTask(value); 
    icompleteUL.appendChild(li)

    // comabaind checkbox event

    Incompletecombind(li,complete)
}

let Incompletecombind = function (li,complete){
    let checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.onchange = complete;
}
let complete = function (){
    let li = this.parentNode;
    let checkbox = li.querySelector('input[type="checkbox"]')

    let button = document.createElement('input')
    button.type = "button"
    button .value = "Delete"
    li.appendChild(button)
    checkbox.remove();

    completeUL.appendChild(li);

    // bind delete button 

    bindComplete(li,deleteButton)

}

let bindComplete = function (li,deleteButton){
    let completeLI = li.querySelector('input[type="button"]')
    completeLI.onclick=deleteButton;
}

let deleteButton = function(){
    let li = this.parentNode;
    li.remove();
}

form.addEventListener('submit',addTask)