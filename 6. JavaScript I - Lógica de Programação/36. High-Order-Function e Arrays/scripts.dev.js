"use strict";

var personagens = [{
  nivel: 42,
  nome: "Thrall",
  raca: "Orc",
  classe: "Xamã"
}, {
  nivel: 28,
  nome: "Garrosh",
  raca: "Orc",
  classe: "Guerreiro"
}, {
  nivel: 35,
  nome: "Varok",
  raca: "Orc",
  classe: "Guerreiro"
}, {
  nivel: 35,
  nome: "Uther",
  raca: "Humano",
  classe: "Paladino"
}, {
  nivel: 26,
  nome: "Jaina",
  raca: "Humano",
  classe: "Maga"
}, {
  nivel: 39,
  nome: "Tyrande",
  raca: "Elfo Noturno",
  classe: "Sacerdotisa"
}, {
  nivel: 29,
  nome: "Muradin",
  raca: "Anão",
  classe: "Guerreiro"
}]; // Map
// const nomes = [];
// for (let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome);
// }

var nomes = personagens.map(function (personagem) {
  return personagem.nome;
});
console.log(nomes); // Filter
// const orcs = []
// for (let index = 0; index < personagens.length; index++) {
//   if (personagens[i].raca === `Orc`) {
//     orcs.push(personagens[i])
//   }
// }

var orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});
console.log(orcs); // Reduce

var nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0);
console.log(nivelTotal);
var racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }
}, {});
console.log(racas);