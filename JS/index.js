let button = document.querySelector('#button1')
let cont = 0

button.addEventListener('click', () => {
    let txt1 = document.querySelector('#text1').value
    adicionar_lista(txt1)
})

function adicionar_lista(toDo){
    cont++
    let txt2 = document.querySelector('#txt2')
    txt2.innerHTML += `
        <div id="itens">
            <input type="checkbox" name="item${cont}" id="item${cont}">
            <label for="item${cont}">${toDo}</label>
        </div>
            `
}


