"use strict";

var NomeTurista = prompt("Qual seria o seu nome senhor?");
var Cidades = " ";
var CidadesVisitadas = 0;
var Continuar = prompt("Voc\xEA j\xE1 visitou alguma cidade?\n1- Sim\n2- N\xE3o");
Continuar = parseFloat(Continuar);

while (Continuar === 1) {
  var Cidade = prompt("Qual seria o nome da cidade que o senhor visitou");
  Cidades += " - ".concat(Cidade, " \n");
  CidadesVisitadas++;
  Continuar = prompt("Alguma outra cidade visitada pelo senhor?\n  1- Sim\n  2- N\xE3o");
  Continuar = parseFloat(Continuar);
}

alert("Turista: ".concat(NomeTurista, "\nQuantidades de cidades visitadas: ").concat(CidadesVisitadas, "\nCidades visitadas:\n").concat(Cidades));