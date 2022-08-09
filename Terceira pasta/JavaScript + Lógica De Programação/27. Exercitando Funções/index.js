let shipName = prompt('Qual é o nome da nave?')
let shipVelocity = 0

let chosenOption = prompt('1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Imprimir dados de bordo\n4- Sair do programa')

function acelerar(shipVelocity) {
    shipVelocity += 5
}
function desacelerar(shipVelocity) {
    shipVelocity -= 5
}