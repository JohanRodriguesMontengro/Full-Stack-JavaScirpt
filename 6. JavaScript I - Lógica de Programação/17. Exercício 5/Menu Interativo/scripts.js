let PainelDeControle = ``;
let Continuar = 1;

do {
  PainelDeControle = prompt(`
  1- Função Não Funcional1
  2- Função Não Funcional2
  3- Função Não Funcional3
  4- Função Não Funcional4
  5- Encerrar`);
  PainelDeControle = parseInt(PainelDeControle);

  if (PainelDeControle == 1) {
    alert(`Primeira opção escolhida`);
  } else if (PainelDeControle == 2) {
    alert(`Segunda opção escolhida`);
  } else if (PainelDeControle == 3) {
    alert(`Terceira opção escolhida`);
  } else if (PainelDeControle == 4) {
    alert(`Quarta opção escolhida`);
  } else if (PainelDeControle == 5) {
    alert(`Encerrando programa!`);
    Continuar--;
  }
} while (Continuar > 0);