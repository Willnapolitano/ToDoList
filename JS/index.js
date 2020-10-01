let button = document.querySelector('#button1')
let txt1 = []
let cont = 0

button.addEventListener('click', () => {
    if(!filtro(txt1) && cont <= 10){
        adicionar_lista(txt1)
    }else{
        if(filtro(txt1)){
            alert('Você ja adicionou esse item')
        }else{
            alert(
                "Faça as tarefas que você já adicionou!\nLembre-se nenhum ser humano é multitarefa ;D"
            )
        }
    }  
})

function adicionar_lista(toDo){
    let txt2 = document.querySelector('#txt2')
    let div = document.createElement("div")
    let input = document.createElement('input')
    let label = document.createElement('label')
    txt1.push(document.querySelector('#text1').value)
    div.setAttribute('id','itens')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('name',`ìtem${cont}`)
    input.setAttribute('id',`item${cont}`)
    label.setAttribute('for',`item${cont}`)
    label.innerHTML += `${txt1[cont]}`
    txt2.appendChild(div)
    div.appendChild(input)
    div.appendChild(label)
    cont++
}

function filtro(txt1){
       return (new Set(txt1)).size != txt1.length
}



