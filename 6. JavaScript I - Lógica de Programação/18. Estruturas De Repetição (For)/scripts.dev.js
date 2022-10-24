"use strict";

// Inicialização; Condição; Finalização
var indice = 0;

for (alert("Inicializando o \xEDndice do for"); indice < 11; alert("Finalizando o \xEDndice do for")) {
  alert("\xCDndice = ".concat(indice));
  indice++;
}

var nome = "Johan Rodrigues";

for (var i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}