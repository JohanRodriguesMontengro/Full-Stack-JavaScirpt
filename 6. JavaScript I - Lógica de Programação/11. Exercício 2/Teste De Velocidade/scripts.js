let NomeCarroPiloto1 = prompt(`Informe o nome do primeiro carro`)
let VelocidadeCarroPiloto1 = prompt(`Insira a velocidade do primeiro carro`)

let NomeCarroPiloto2 = prompt(`Informe o nome do segundo carro`)
let VelocidadeCarroPiloto2 = prompt(`Insira a velocidade do segundo carro`)

if (isNaN(VelocidadeCarroPiloto1) || isNaN(VelocidadeCarroPiloto2)) {
  alert(`Informe a velocidade em números`)
}
else if (VelocidadeCarroPiloto1 > VelocidadeCarroPiloto2) {
  alert(`O Carro: ${NomeCarroPiloto1} tem uma velocidade superior ao do carro ${NomeCarroPiloto2}`)
}
else if (VelocidadeCarroPiloto2 > VelocidadeCarroPiloto1) {
  alert(`O Carro: ${NomeCarroPiloto2} tem uma velocidade superior ao do carro ${NomeCarroPiloto1}`)
}
else if (VelocidadeCarroPiloto1 == VelocidadeCarroPiloto2) {
  alert(`O Carro: ${NomeCarroPiloto1} tem a mesma velocidade do carro ${NomeCarroPiloto2}`)
}