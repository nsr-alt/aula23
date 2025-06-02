//manipulando os elementos
const numero = document.getElementById('numero')

//pegar os botões +, - e resetar
const mais = document.getElementsByClassName('mais')
const menos = document.getElementsByClassName('menos')
const reset = document.getElementsByClassName('reset')

let contador = 0

function reduzir(){ 
    contador --
    numero.innerText = contador
}
function aumentar(){
    contador ++
    numero.innerText = contador
}
function retornar(){
    contador = 0
    numero.innerText = contador
}