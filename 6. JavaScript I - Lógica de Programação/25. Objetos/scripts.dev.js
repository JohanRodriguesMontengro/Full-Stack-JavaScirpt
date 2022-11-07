"use strict";

var nome = "Prop";
var objeto = {};
objeto.prop = "Ol\xE1, Mundo";
objeto[nome];
objeto.prop === objeto[prop];
objeto.prop === objeto[nome];
objeto.prop === objeto["pro" + "p"];
var funcao = "log";
console[funcao]("Ol\xE1, Mundo");
var pessoa = {};
pessoa.nome = "Johan";
pessoa.idade = 15;
pessoa.colegas = ["Lucas", "Marcus", "Carlos Eduardo", "Eduardo"];
pessoa.endereco = {
  rua: "Logo ali",
  numero: 42,
  bairro: "centro"
}; // Execute a pessoa

var matriz = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], 20];