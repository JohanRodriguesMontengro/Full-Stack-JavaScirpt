const NomeTurista = prompt(`Qual seria o seu nome senhor?`);

let Cidades = ` `;
let CidadesVisitadas = 0;
let Continuar = prompt(`Você já visitou alguma cidade?
1- Sim
2- Não`);
Continuar = parseFloat(Continuar);
while (Continuar === 1) {
  let Cidade = prompt(`Qual seria o nome da cidade que o senhor visitou`);
  Cidades += ` - ${Cidade} \n`;
  CidadesVisitadas++;
  Continuar = prompt(`Alguma outra cidade visitada pelo senhor?
  1- Sim
  2- Não`);
  Continuar = parseFloat(Continuar);
}

alert(`Turista: ${NomeTurista}
Quantidades de cidades visitadas: ${CidadesVisitadas}
Cidades visitadas:
${Cidades}`);
