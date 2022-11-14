"use strict";

function Calcular(a, b, Operacao) {
  console.log("Relizando uma opera\xE7\xE3o");
  var Resultado = Operacao(a, b); // Somar(a, b)

  return Resultado;
}

function Somar(s, y) {
  console.log("Realizando uma soma");
  return x + y;
}

console.log(Calcular(3, 5, Somar));
console.log(Calcular(8, 10, function (x, y) {
  alert("Realizando uma subtra\xE7\xE3o");
  return x - y;
}));

function ExibirElementos(elemento, indice, array) {
  console.log({
    elemento: elemento,
    indice: indice,
    array: array
  });
}

var Lista = ["Ma\xE7\xE3", "Banana", "Laranja", "Lim\xE3o"];

for (var i = 0; i < Lista.length; i++) {
  ExibirElementos(Lista[i], i, Lista);
}

Lista.forEach(ExibirElementos);
Lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento: elemento,
    indice: indice,
    array: array
  });
});