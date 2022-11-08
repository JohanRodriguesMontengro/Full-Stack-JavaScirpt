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
  Opcao = prompt("Quantidades de im\xF3veis cadastrados: ".concat(ImoveisCadastrados, "\n  1- Cadastrar Im\xF3veis;\n  2- Mostrar im\xF3veis cadastrados;\n  3- Sair.\n  "));

  switch (Opcao) {
    case "1":
      Imoveis.NomeDonoImovel = prompt("Digite o nome do dono do im\xF3vel", "Nome padr\xE3o do im\xF3vel");
      Imoveis.QuartosImovel = prompt("Quantos quartos o im\xF3vel possui");
      Imoveis.BanheirosImovel = prompt("Quantos banheiros o im\xF3vel possui");
      Imoveis.GaragemImovel = confirm("O im\xF3vel possui uma garagem?\n    Sim\n    N\xE3o");

      if (Imoveis.GaragemImovel === true) {
        Imoveis.GaragemImovel = "Sim";
      } else {
        Imoveis.GaragemImovel = "N\xE3o";
      }

      alert("Nome do dono do im\xF3vel: ".concat(Imoveis.NomeDonoImovel, "\n      Quantidade de quartos: ").concat(Imoveis.QuartosImovel, "\n      Quantidade de banheiros: ").concat(Imoveis.BanheirosImovel, "\n      Possui uma Garagem: ").concat(Imoveis.GaragemImovel));
      ImoveisCadastrados += 1;
      var ImovelNomeCase2 = NomeImovel.push(Imoveis.NomeDonoImovel)[ImoveisCadastrados];
      break;

    case "2":
      var NomeImoveisCadastrados = alert("Im\xF3veis cadastrados: ".concat(NomeImovel));
      break;

    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Op\xE7\xE3o inv\xE1lida");
  }
} while (Opcao !== "3");