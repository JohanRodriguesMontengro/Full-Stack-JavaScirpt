"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["Camel Case"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["Snake Case"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Declarada globalmente
var nome = "Issac";
nome;
var Idade;
Idade;
Idade = 15;
Idade;
var ano = 2022;
ano = 2023; // Declarada Localmente

var dia = 25;
dia = 1;
dia; // Declarada Constants (Não pode ser modificado)

var mes = "Julho";
mes; // mes = "Agosto" == Error
// Nomeando variáveis

var pessoa = "Lucas";
pessoa; // Nomear as variáveis com base no sentido ex. let nome = `Johan`
// Cases

var nomeDeUsuario = ""(_templateObject2())(_templateObject());
var Nome_De_Administrador;