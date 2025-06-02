const click1 = document.getElementById('text1')
const click2 = document.getElementById('text2')
const click3 = document.getElementById('text3')

const texto1 = document.getElementsByClassName('clique-1')
const texto2 = document.getElementsByClassName('clique-2')
const texto3 = document.getElementsByClassName('clique-3')

let contador1 = 0
let contador2 = 0
let contador3 = 0

function cont1(){
    contador1++

    click1.innerText = 'Texto 1 - cliques: '+contador1
}
function cont2(){
    contador2++

    click2.innerText = 'Texto 1 - cliques: '+contador2
}
function cont3(){
    contador3++

    click3.innerText = 'Texto 1 - cliques: '+contador3
}