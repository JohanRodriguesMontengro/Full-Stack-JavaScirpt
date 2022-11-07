"use strict";

var Opcao = "";
var ImoveisCadastrados = 0;
var NomeImovel = [];

do {
  var Imoveis = {
    NomeDonoImovel: "",
    QuartosImovel: "",
    BanheirosImovel: "",
    GaragemImovel: ""
  };
  Opcao = prompt("Quantidades de im\xF3veis cadastrados: ".concat(ImoveisCadastrados, "\n  1- Cadastrar Im\xF3veis\n  2- Mostrar im\xF3veis cadastrados\n  3- Sair\n  "));

  switch (Opcao) {
    case "1":
      var NomeDonoImovel = prompt("Digite o nome do dono do im\xF3vel");
      var QuartosImovel = prompt("Quantos quartos o im\xF3vel possui");
      var BanheirosImovel = prompt("Quantos banheiros o im\xF3vel possui");
      var GaragemImovel = prompt("O im\xF3vel possui uma garagem?\n    1- Sim\n    2- N\xE3o");
      NomeImovel.push(prompt("Informe o nome do im\xF3vel"));
      ImoveisCadastrados += 1;
      break;

    case "2":
      alert("Imoveis cadastrados: ".concat(Imoveis.NomeImovel));
      break;
  }
} while (Opcao !== "3");