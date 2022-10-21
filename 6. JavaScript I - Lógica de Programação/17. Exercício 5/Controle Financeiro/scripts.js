let AmountOfInitialMoney = prompt(`Qual é a quantidade inicial de dinheiro`);
let PainelDeControle = ``;
let AdicionarDinheiro = 0;
let RemoverDinheiro = 0;
Continuar = 0;

do {
  PainelDeControle = prompt(`
  1- Adicionar Dinheiro
  2- Remover Dinheiro
  3- Sair
  Quantidade de dinheiro: ${AmountOfInitialMoney}`);
  PainelDeControle = parInt(PainelDeControle);

  if (PainelDeControle === 1) {
    AdicionarDinheiro = prompt(
      `Qual a quantia de dinheiro desejada para adicionar?`
    );
    AdicionarDinheiro = parseInt(AdicionarDinheiro)
    AmountOfInitialMoney += AdicionarDinheiro
  } else if (PainelDeControle === 2) {
    RemoverDinheiro = prompt(
      `Qual a quantia de dinheiro desejada para remover?`
    );
    RemoverDinheiro = parseInt(RemoverDinheiro)
    AmountOfInitialMoney -= RemoverDinheiro
  } else if (PainelDeControle === 3) {
    alert(`Encerrando o programa`);
    Continuar++;
  }
} while (Continuar === 0);