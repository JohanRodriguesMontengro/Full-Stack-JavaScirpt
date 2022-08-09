let shipName = prompt('Qual é o nome da nave?')
let shipVelocity = 0
let newShipVelocity = 0

let numberChosen = prompt('1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa\n\nVelocidade atual da nave: ' + newShipVelocity) 

while(numberChosen == 1 || 2){
    
    function acelerar(_velocity = 5) {
        newShipVelocity = shipVelocity + 5
        alert('Você acelerou em 5km/s')
    }
    function desacelerar(_velocity = -5) {
        newShipVelocity = shipVelocity - 5
    }
}