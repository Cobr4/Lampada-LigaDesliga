const lamp = document.querySelector('#lampada')
const bt = document.querySelector('#botao')

bt.addEventListener('click', OnOff)
lamp.addEventListener('mouseenter', LampOn)
lamp.addEventListener('mouseout', LampOff)
lamp.addEventListener('dblclick', quebrou)

function OnOff (){
    // O innerHTML serve como direçao para o texto
    if (bt.innerHTML == 'Ligar'){
        LampOn()
    } else{
        LampOff()
    }
    
} 

function LampOn (){
    if (!broker()){
        lamp.src = 'ligada.jpg'
        bt.innerHTML = 'Desligar'
    }
    
}

function LampOff (){
    if (!broker()){
        lamp.src = 'desligada.jpg'
        bt.innerHTML = 'Ligar'
    }
    
}

function quebrou(){
    if (!broker()){
    lamp.src = 'quebrada.jpg'
    }
}

function broker(){
    // indexOf serve para localizar a string, caso nao encontre retorna -1
    return lamp.src.indexOf('quebrada')>-1
}