"use strict";

var arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr); // Adicionar Elementos no array
// push

arr.push("Boromir");
var tamanho = arr.push("Johan");
console.log(arr);
console.log(tamanho); // unshift

arr.unshift("Boromir");
tamanho = arr.unshift("Johan");
console.log(arr);
console.log(tamanho); // Remover Elementos Final
// pop

var UltimoElemento = arr.pop();
console.group(arr);
console.log(UltimoElemento); // Remover Elementos Inicio

UltimoElemento = arr.shift();
console.log(arr);
console.log(UltimoElemento); // Pesquisar Por Um Elemento
// includes

var inclui = arr.includes("Gandalf");
console.log(inclui); // indexOf

var indice = arr.indexOf("Gandalf");
console.log(indice); // Cortar e Concatenar
// slice

var hobbits = arr.slice(0, 4);
var outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros); // concat

var sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade); //Substituição Dos Elementos
// splice

var ElementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento", 1, 3, false, true);
console.log(sociedade);
console.log(ElementosRemovidos); // Iterar Sobre Os Elementos

for (var _indice = 0; _indice < sociedade.length; _indice++) {
  var Elemento = sociedade[_indice];
  console.log("".concat(Elemento, " se encontra na posi\xE7\xE3o ").concat(_indice));
}