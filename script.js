//mostrar ocultar div
const hidebtn = document.querySelector('#hideElements')
const listDiv = document.querySelector('#list')

//constantes para agregar elementos
const addItemInput = document.querySelector('#addItem') //input.text
const addItemButton = document.querySelector('button#addItemButton')

//constante para referenciar boton quitar
const removeItem = document.querySelector('button#removeItem')

//agregar los eventos al boton ocultar/mostrar
hidebtn.addEventListener('click', () => {
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block'
        hidebtn.textContent = 'Ocultar'
    } else {
        listDiv.style.display = 'none'
        hidebtn.textContent = 'Mostrar'
    }
})

//agregar elementos a la lista 
addItemButton.addEventListener('click', () => { 
    if (addItemInput.value.length == 0) {
        window.alert('Esta vacio');
    }
    let list = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = addItemInput.value
    list.appendChild(li);
   
})

//funcion para obtener el indice del elemento en la lista 
var list = document.getElementById('listItems'),
    items = list.getElementsByTagName8('li')

const findIndex = (element) => {
    var len = items.length
    for(var i=0; i<len; i++){
        if(items[i]===element){
            return i
        }
    }
}

list.onclick = (e) =>{
    let event = e || window.event
    src=event.target

    let myIndex = findIndex(src)
    Index = myIndex
    //alert(myIndex)
   list.querySelectorAll('li').forEach(el=>el.classList.remove('alert', 'alert-danger'))
    items[myIndex].classList.add('alert', 'alert-danger')
}

//eliminar el elemento de la lista
removeItem.addEventListener('click', () => {
    items[Index].parentNode.removeChild(Items[myIndex])    
})