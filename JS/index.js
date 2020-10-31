let button = document.querySelector('#button1')
let txt1 = [0]
let cont = 1

button.addEventListener('click', () => {
    if(cont <= 11){
        adicionar_array(txt1)
        limpar_input()
    }else{
        alert(
                "Faça as tarefas que você já adicionou!\nLembre-se nenhum ser humano é multitarefa ;D"
            )
        }
    }  
)

function adicionar_lista(){
    let lista = document.getElementsByTagName('ul')[0]
    let itens = document.createElement('li')
    let div = document.createElement("div")
    let input = document.createElement('input')
    let label = document.createElement('label')
    let img = document.createElement('img')
    itens.setAttribute('id', `it${cont}`)
    img.setAttribute('src','/58326.png')
    img.setAttribute('id',`img${cont}`)
    div.setAttribute('id',`itens${cont}`)
    div.style.margin = '5px'
    div.style.display = 'flex'
    input.setAttribute('type', 'checkbox')
    input.setAttribute('name',`ìtem${cont}`)
    input.setAttribute('id',`item${cont}`)
    label.setAttribute('for',`item${cont}`)
    label.innerHTML += `${txt1[cont]}`
    img.style.display = 'none'
    lista.appendChild(itens)
    itens.appendChild(div)
    div.appendChild(input)
    div.appendChild(label)
    div.appendChild(img)
    cont++
    div.addEventListener('mouseover', () => {
        img.style.display = 'flex'
    })
    div.addEventListener('mouseout', () => {
        img.style.display = 'none'
    })
    for(let c = 1; c < txt1.length; c++){
        document.getElementById(`img${c}`).addEventListener('click',() => {
            excluir_da_lista(lista, c)
            excluir_do_array(c)
            console.log(txt1)
        })
    }
}

function excluir_da_lista(lista, c){
    lista.removeChild(document.getElementById(`it${c}`))
    excluir_do_array(c)
    cont -= 1
}

function excluir_do_array(c){
    txt1.splice(c, 1)
    txt1.pop()
    if(txt1[0] !== 0){
        txt1[0] = 0
    }
}


function limpar_input(){
    document.getElementById('text1').value = ''
}

function adicionar_array(txt1){
    if(filtro_input_vazio()){
        aviso_item_vazio()
    }else{
        txt1.push(document.querySelector('#text1').value)
        let Isrepetido = false
        for(var j = 0; j < txt1.length; j++){
            for(var l = j+1; l < txt1.length; l++){
                if(txt1[j] == txt1[l]){
                    txt1.pop()
                    aviso_item_repetido()
                    Isrepetido = true
                }else{
                    Isrepetido = false
                }
            }
        }
        if(!Isrepetido){
            adicionar_lista(txt1)
        }
    }
    
}

function aviso_item_repetido(){
    alert("Você já adicionou este item.")
}

function filtro_input_vazio(){
    if(document.getElementById('text1').value == ''){
        return true
    }
}

function aviso_item_vazio(){
    alert('Digite alguma tarefa.')
}


