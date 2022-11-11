"use strict";

function Dobro(x) {
  alert("O dobro de ".concat(x, " \xE9 (").concat(x * 2, ")"));
}

Dobro(5);
Dobro(7);
Dobro();

function Ola() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Mundo";
  alert("Ol\xE1 ".concat(nome, "!"));
}

Ola("Johan");
Ola();

function Soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  alert("Resultado da soma ".concat(a + b));
}

Soma(7, 9);
Soma(1, 1);
Soma();

function Soma5Números() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 9;
  var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
  alert("Resultado da soma ".concat(a + b + c + d + e));
}

Soma5Números(1, 5, 6, 4, 3);
Soma5Números(1, 5, 45, 7, 99);
Soma5Números();

function CriarUsuário(nome, email, senha) {
  var tipo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Administrador";
  var Usuario = {
    nome: nome,
    // Mesmo que nome: nome,
    email: email,
    senha: senha,
    tipo: tipo
  };
  console.log(Usuario);
} // function NovoUsuario(nome, tipo = `Admin`, email, senha) {
//   const Usuario = {
//     nome, // Mesmo que nome: nome,
//     email,
//     senha,
//     tipo,
//   }
//   console.log(Usuario)
// } 


CriarUsuário("Johan", "Johan@email.com", "NoaH2022");
CriarUsuário("Johan@email.com", "Johan", "1234"); // NovoUsuario(`Johan`, `Admin` `Johan@email.com`, `1234`)

function MuitosParâmetros(nome, telefone, endereço, aniversario, email, senha) {// ...
}

function ObjetoComoParâmetro(Usuario) {
  // ...
  Usuario.nome;
  Usuario.email;
}

var DadosDoUsuario = {
  nome: "",
  telefone: "",
  endereço: "",
  aniversario: "",
  email: "",
  senha: ""
};
MuitosParâmetros("Nome", "Telefone", "Endere\xE7o", "Aniversario", "Email", "Senha");
ObjetoComoParâmetro(DadosDoUsuario);