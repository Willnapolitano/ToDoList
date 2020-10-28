let button = document.querySelector('#button1')
let txt1 = []
let cont = 0

button.addEventListener('click', () => {
    if(cont <= 10){
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
    let txt2 = document.querySelector('#txt2')
    let div = document.createElement("div")
    let input = document.createElement('input')
    let label = document.createElement('label')
    let img = document.createElement('img')
    img.setAttribute('src','/58326.png')
    img.setAttribute('id',`img${cont}`)
    div.setAttribute('id','itens')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('name',`ìtem${cont}`)
    input.setAttribute('id',`item${cont}`)
    label.setAttribute('for',`item${cont}`)
    label.innerHTML += `${txt1[cont]}`
    img.style.display = 'none'
    txt2.appendChild(div)
    div.appendChild(input)
    div.appendChild(label)
    div.appendChild(img)
    cont++
    div.addEventListener('mouseover', () => {
        img.style.display = 'block'
    })
    div.addEventListener('mouseout', () => {
        img.style.display = 'none'
    })
}

function limpar_input(){
    document.getElementById('text1').value = ''
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




