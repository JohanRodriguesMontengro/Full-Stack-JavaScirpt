"use strict";

function Dividir(num) {
  console.log(num);

  if (num % 2 === 0) {
    Dividir(num / 2);
  } else {
    return num;
  }
}

Dividir(256); // Primeira -> Segunda -> Terceira -> Quarta

/*
function Dobrar(num) {
  console.log(num)
  Dobrar(num * 2)
}

Dobrar(1)
*/
// Fatorial de 5: !5 == 5 * 4 * 3 * 2 * 1 == 5 * !4

function Fatorial(num) {
  console.log("N\xFAmero: ".concat(num));

  if (num === 0) {
    // Caso base
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log("".concat(num, " * ").concat(num - 1, " "));
    return num * Fatorial(num - 1);
  }
}

console.log(Fatorial(5));