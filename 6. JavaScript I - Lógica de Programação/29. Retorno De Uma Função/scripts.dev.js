"use strict";

function CalcularMedia(a, b) {
  var Media = (a + b) / 2;
  console.log(Media);
  return Media;
}

var Resultado = CalcularMedia(7, 2);
console.log(Resultado);

function Produto(nome, preco) {
  var Produto = {
    nome: nome,
    // nome: nome,
    preco: preco,
    // produto: produto
    estoque: 1
  };
  return Produto;
}

console.log(Produto("Notebook intel i3 8gb ddr4", 2500));
var Numero = parseFloat(prompt("Digite um numero?"));
alert(Numero);

function AreaRetangular(area, altura) {
  return area * altura;
}

console.log(AreaRetangular(3, 5));

function AreaQuadrado(lado) {
  return AreaRetangular(lado, lado);
}

console.log(AreaQuadrado(9));

function OlaMundo() {
  var Texto = "Texto Qualquer";
  return Texto;
  Texto = "Ol\xE1, mundo";
  console.log(Texto);
}

console.log(OlaMundo());

function Maioridade(Idade) {
  if (Idade > 17) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(Maioridade(29));
console.log(Maioridade(13));