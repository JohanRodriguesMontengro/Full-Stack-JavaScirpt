"use strict";

var Baralho = [];
var Opção = "";
var CartasPuxadas = 0;

do {
  Opção = prompt("Cartas no baralho: ".concat(Baralho.length, "\n  Cartas puxadas: ").concat(CartasPuxadas, "\n\n  1. Adiconar uma carta\n  2. Puxar uma carta\n  3. Sair"));

  switch (Opção) {
    case "1":
      var NovaCarta = Baralho.push(1);
      alert("Uma carta foi adicionada a pilha de baralho. \nTotal de cartas no baralho: ".concat(NovaCarta));
      break;

    case "2":
      var PuxarCarta = Baralho.shift();

      if (PuxarCarta == undefined) {
        alert("N\xE3o \xE0 cartas dispon\xEDveis para puxar");
      } else {
        alert("Uma carta foi puxada. \nTotal de cartas puxadas: ".concat(CartasPuxadas + 1));
        CartasPuxadas++;
      }

      break;

    case "3":
      alert("Finalizando...");
      break;

    case "Batata Ambulante":
      alert("Eu amo BATATAAAAAAAAAAAAAAAAAAAAAAAA");
      break;

    default:
      alert("Op\xE7\xE3o invalida");
  }
} while (Opção !== "3");