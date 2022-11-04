const Baralho = [];
let Opção = ``;
let CartasPuxadas = 0;
do {
  Opção = prompt(`Cartas no baralho: ${Baralho.length}
  Cartas puxadas: ${CartasPuxadas}\n
  1. Adiconar uma carta
  2. Puxar uma carta
  3. Sair`);

  switch (Opção) {
    case `1`:
      const NovaCarta = Baralho.push(1);
      alert(
        `Uma carta foi adicionada a pilha de baralho. \nTotal de cartas no baralho: ${NovaCarta}`
      );
      break;
    case `2`:
      const PuxarCarta = Baralho.shift();

      if (PuxarCarta == undefined) {
        alert(`Não à cartas disponíveis para puxar`);
      } else {
        alert(
          `Uma carta foi puxada. \nTotal de cartas puxadas: ${CartasPuxadas+1}`
        );
        CartasPuxadas++;
      }
      break;
    case `3`:
      alert(`Finalizando...`);
      break;
    case `Batata Ambulante`:
      alert(`Eu amo BATATAAAAAAAAAAAAAAAAAAAAAAAA`);
      break;
    default:
      alert(`Opção invalida`);
  }
} while (Opção !== `3`);
