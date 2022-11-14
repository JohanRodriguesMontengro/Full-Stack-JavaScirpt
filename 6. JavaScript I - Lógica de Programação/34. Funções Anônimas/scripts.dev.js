"use strict";

function Somar(a, b) {
  return a + b;
}

var Operacao = Somar;
console.log(Operacao(4, 5));

Operacao = function Operacao(a, b) {
  return a - b;
};

console.log(Operacao(4, 5));
OlaMundo();

function OlaMundo() {
  alert("Ol\xE1, mundo");
}

var OiMundo = function OiMundo() {
  alert("Oi, mundo");
};

OiMundo();