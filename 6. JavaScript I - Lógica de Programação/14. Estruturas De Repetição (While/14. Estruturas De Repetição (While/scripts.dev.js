"use strict";

var Velocidade = 80;

while (Velocidade > 0) {
  alert("O carro est\xE1 a: ".concat(Velocidade, "km/h"));
  Velocidade -= 20;
  alert("Diminuindo sua velocidade \"-20km/h\""); // Forma de parar a estrutura
  // if (Velocidade === 40) {
  //   break
  // }
}

alert("O carro est\xE1 parado");