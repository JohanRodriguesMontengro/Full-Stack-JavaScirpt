"use strict";

var PalavraDigitada = prompt("Digite uma palavra");
var Palindromo = "";

for (var i = PalavraDigitada.length - 1; i >= 0; i--) {
  Palindromo += PalavraDigitada[i];
}

if (Palindromo === PalavraDigitada) {
  alert("Voc\xEA digitou um Pal\xEDndromo \nPalavra digitada: ".concat(Palindromo));
} else {
  alert("Palavra digitada: ".concat(PalavraDigitada, " \nPalavra ao contr\xE1rio: ").concat(Palindromo));
}