"use strict";

var Fila = [];
var Opção = "";

do {
  var Pacientes = "";

  for (var Indice = 0; Indice < Fila.length; Indice++) {
    Pacientes += Indice + 1 + "\xBA - ".concat(Fila[Indice]);
  }

  Opção = prompt("Pacientes:\n  ".concat(Pacientes, " \n  \n  Escolha uma a\xE7\xE3o:\n  1. Novo Paciente\n  2. Consultar Paciente\n  3. Sair"));

  switch (Opção) {
    case "1":
      var NovoPaciente = prompt("Qual \xE9 o nome do paciente?");
      Fila.push(NovoPaciente);
      alert("O paciente: \"".concat(NovoPaciente, "\" entrou no final da fila"));
      break;

    case "2":
      var PacienteConsultado = Fila.shift();

      if (PacienteConsultado == undefined) {
        alert("Sem mais pacientes na fila");
      } else {
        alert("O Paciente: \"".concat(PacienteConsultado, "\", foi atendido e foi embora"));
      }

      break;

    case "3":
      alert("Finalizando...");
      break;

    default:
      alert("Op\xE7\xE3o inv\xE1lida");
  }
} while (Opção !== "3");