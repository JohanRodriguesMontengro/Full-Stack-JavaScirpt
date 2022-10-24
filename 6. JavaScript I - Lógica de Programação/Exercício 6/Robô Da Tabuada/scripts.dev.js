"use strict";

var NumeroEscolhido = prompt("Escolha um n\xFAmero de 1 a 20");

for (var i = 1; i <= 20; i++) {
  var Soma = NumeroEscolhido * i;
  console.log("O resultado \xE9 de: ".concat(Soma));
}