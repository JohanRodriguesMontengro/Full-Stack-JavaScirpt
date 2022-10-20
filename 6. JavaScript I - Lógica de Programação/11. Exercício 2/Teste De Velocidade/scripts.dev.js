"use strict";

var NomeCarroPiloto1 = prompt("Informe o nome do primeiro carro");
var VelocidadeCarroPiloto1 = prompt("Insira a velocidade do primeiro carro");
var NomeCarroPiloto2 = prompt("Informe o nome do segundo carro");
var VelocidadeCarroPiloto2 = prompt("Insira a velocidade do segundo carro");

if (isNaN(VelocidadeCarroPiloto1) || isNaN(VelocidadeCarroPiloto2)) {
  alert("Informe a velocidade em n\xFAmeros");
} else if (VelocidadeCarroPiloto1 > VelocidadeCarroPiloto2) {
  alert("O Carro: ".concat(NomeCarroPiloto1, " tem uma velocidade superior ao do carro ").concat(NomeCarroPiloto2));
} else if (VelocidadeCarroPiloto2 > VelocidadeCarroPiloto1) {
  alert("O Carro: ".concat(NomeCarroPiloto2, " tem uma velocidade superior ao do carro ").concat(NomeCarroPiloto1));
} else if (VelocidadeCarroPiloto1 == VelocidadeCarroPiloto2) {
  alert("O Carro: ".concat(NomeCarroPiloto1, " tem a mesma velocidade do carro ").concat(NomeCarroPiloto2));
}