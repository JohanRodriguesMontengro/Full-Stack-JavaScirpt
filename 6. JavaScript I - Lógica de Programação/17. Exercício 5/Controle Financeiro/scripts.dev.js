"use strict";

var AmountOfInitialMoney = prompt("Qual \xE9 a quantidade inicial de dinheiro");
var PainelDeControle = "";
var AdicionarDinheiro = 0;
var RemoverDinheiro = 0;
Continuar = 0;

do {
  PainelDeControle = prompt("\n  1- Adicionar Dinheiro\n  2- Remover Dinheiro\n  3- Sair\n  Quantidade de dinheiro: ".concat(AmountOfInitialMoney));
  PainelDeControle = parInt(PainelDeControle);

  if (PainelDeControle === 1) {
    AdicionarDinheiro = prompt("Qual a quantia de dinheiro desejada para adicionar?");
    AdicionarDinheiro = parseInt(AdicionarDinheiro);
    AmountOfInitialMoney += AdicionarDinheiro;
  } else if (PainelDeControle === 2) {
    RemoverDinheiro = prompt("Qual a quantia de dinheiro desejada para remover?");
    RemoverDinheiro = parseInt(RemoverDinheiro);
    AmountOfInitialMoney -= RemoverDinheiro;
  } else if (PainelDeControle === 3) {
    alert("Encerrando o programa");
    Continuar++;
  }
} while (Continuar === 0);