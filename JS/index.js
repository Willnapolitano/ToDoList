let button = document.querySelector('#button1')

button.addEventListener('click', () => {
    let txt1 = document.querySelector('#text1').value
    adicionar_lista(txt1)
    console.log(txt1)
})

function adicionar_lista(toDo){
    let txt2 = document.querySelector('#txt2')
    txt2.innerHTML += `
        <p id='item'>${toDo}</p>
    `
}


