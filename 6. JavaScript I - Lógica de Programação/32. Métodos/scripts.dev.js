"use strict";

var pessoa = {
  nome: "Johan",
  idade: 26,
  dizerOla: function dizerOla() {
    alert("Ol\xE1, mundo! Meu nome \xE9 ".concat(this.nome));
  }
};
console.log(pessoa);
pessoa.dizerOla();