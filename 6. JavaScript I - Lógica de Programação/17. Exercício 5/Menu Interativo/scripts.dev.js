"use strict";

var PainelDeControle = "";
var Continuar = 1;

do {
  PainelDeControle = prompt("\n  1- Fun\xE7\xE3o N\xE3o Funcional1\n  2- Fun\xE7\xE3o N\xE3o Funcional2\n  3- Fun\xE7\xE3o N\xE3o Funcional3\n  4- Fun\xE7\xE3o N\xE3o Funcional4\n  5- Encerrar");
  PainelDeControle = parseInt(PainelDeControle);

  if (PainelDeControle == 1) {
    alert("Primeira op\xE7\xE3o escolhida");
  } else if (PainelDeControle == 2) {
    alert("Segunda op\xE7\xE3o escolhida");
  } else if (PainelDeControle == 3) {
    alert("Terceira op\xE7\xE3o escolhida");
  } else if (PainelDeControle == 4) {
    alert("Quarta op\xE7\xE3o escolhida");
  } else if (PainelDeControle == 5) {
    alert("Encerrando programa!");
    Continuar--;
  }
} while (Continuar > 0);