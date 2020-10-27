let button = document.querySelector('#button1')
let txt1 = []
let cont = 0

button.addEventListener('click', () => {
    if(cont <= 10){
        adicionar_array(txt1)
    }else{
        alert(
                "Faça as tarefas que você já adicionou!\nLembre-se nenhum ser humano é multitarefa ;D"
            )
        }
    }  
)

function adicionar_lista(){
    let txt2 = document.querySelector('#txt2')
    let div = document.createElement("div")
    let input = document.createElement('input')
    let label = document.createElement('label')
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

function adicionar_array(txt1){
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

function aviso_item_repetido(){
    alert("Você já adicionou este item.")
}




