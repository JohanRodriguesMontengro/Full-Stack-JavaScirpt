"use strict";

do {
  var Vagas = [];
  var VagaDescricao = [];
  var DataLimiteVaga = [];
  var Indice = -1;

  var _Opcao = prompt("Escolha uma op\xE7\xE3o\n  1- Listar vagas dispon\xEDveis\n  2- Criar uma nova vaga\n  3- Visualizar uma vaga\n  4- Inscrever um candidato em uma vaga\n  5- Excluir uma vaga\n  6- Sair");

  if (_Opcao === "1") {} else if (_Opcao === "2") {
    var Loop = true;

    do {
      Indice++;
      Vagas += prompt("Informe o nome da vaga");
      VagaDescricao += prompt("Informe a descri\xE7\xE3o da vaga");
      DataLimiteVaga += prompt("Informe a data limite");
      var Confirmar = confirm("Deseja confirmar as informa\xE7\xF5es\n      Nome da vaga: ".concat(Vagas[Indice], "\n      Descri\xE7\xE3o da vaga: ").concat(VagaDescricao[Indice], "\n      Data limite da vaga: ").concat(DataLimiteVaga[Indice]));

      if (Confirmar === true) {
        alert("Agradecemos a confirma\xE7\xE3o");
        ret;
      } else {}
    } while (Loop === true);
  } else if (_Opcao === "6") {
    alert("Saindo");
  }
} while (Opcao !== "6 ");