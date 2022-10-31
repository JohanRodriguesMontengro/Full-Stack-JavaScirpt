"use strict";

// let array = []
// array = [1,2,4,7]
// array[0] = `Olá`
// array[1] = 42
var ListaDeCompras = ["A\xE7\xFAcar", false];
console.log(ListaDeCompras);
ListaDeCompras[0] = "Arroz";
ListaDeCompras[1] = "Feij\xE3o";
ListaDeCompras[2] = 7;
ListaDeCompras[5] = "Batata";
console.log(ListaDeCompras);
console.log(ListaDeCompras[10]);