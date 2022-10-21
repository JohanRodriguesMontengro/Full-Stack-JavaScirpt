"use strict";

var Velocidade = 0;

do {
  alert("A velocidade do veiculo \xE9: ".concat(Velocidade, "km/h"));
  Velocidade -= 20;
} while (Velocidade > 0);

alert("Velocidade final: ".concat(Velocidade, "km/h"));