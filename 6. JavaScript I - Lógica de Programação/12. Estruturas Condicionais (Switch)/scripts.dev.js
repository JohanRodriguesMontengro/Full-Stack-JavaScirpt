"use strict";

var resultado = prompt("escolha uma alternativa\n1\n2\n3");
var ResultadoNumerico = parseFloat(resultado);

switch (ResultadoNumerico) {
  case "a":
    alert("O resultado \xE9 \"A\"");
    break;

  case "b":
    alert("O resultado \xE9 b");
    break;

  case "c":
    alert("O resultado \xE9 c");
    break;

  default:
    alert("Finalizando...");
    break;
}