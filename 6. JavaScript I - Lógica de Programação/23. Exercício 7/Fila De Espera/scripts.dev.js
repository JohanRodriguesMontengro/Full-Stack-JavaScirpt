"use strict";

var Continuar = true;
var Number = 1;
var ArrayNumber = "";
var ArrayPacientes;
var FilaDeEspera = "";

do {
  ArrayNumber = [Number + "\xBA"];
  ArrayPacientes = ["".concat(ArrayNumber, "Matheus")];
  FilaDeEspera = prompt("Fila De Espera:\n  ".concat(ArrayPacientes, "\n  \n  1- Adicionar pacientes"));
  FilaDeEspera = parseInt(FilaDeEspera);

  if (FilaDeEspera === 1) {
    Number++;
  }

  Continuar = false;
} while (Continuar === true);

console.log(FilaDeEspera);