"use strict";

var nome = "Johan";
console.assert(nome);
console.error(nome);
console.warn(nome);
console.log(nome);
console.info(nome);
window.alert(nome);
nome = window.prompt("Insira o seu nome:");
var confirmacao = window.confirm("Deseja confirma está ação???????????"); // Não é necessário utilizar o window

console.log(confirmacao);
console.log(nome);
var x = 5;
var y = 50;
x = x + x - y + 5;