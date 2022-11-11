"use strict";

var Option = "";

do {
  Option = parseFloat(prompt("Escolha uma op\xE7\xE3o para calcular\n  1- \xC1rea do tri\xE2ngulo\n  2- \xC1rea do ret\xE2ngulo\n  3- \xC1rea do Quadrado\n  4- \xC1rea do Trap\xE9zio\n  5- \xC1rea do C\xEDrculo\n  6- Sair"));

  if (isNaN(Option) || Option > 6 || Option < 1) {
    alert("Digite somente n\xFAmero entre 1 a 6");
  } else if (Option === 1) {
    var AreaDoTriangulo = function AreaDoTriangulo(base, altura) {
      base = parseFloat(prompt("Informe a base do tri\xE2ngulo"));
      altura = parseFloat(prompt("Informe a altura do tri\xE2ngulo"));
      var Soma = base * altura / 2;
      alert("A \xE1rea do triangulo \xE9 de: ".concat(Soma));
    };

    AreaDoTriangulo();
  } else if (Option === 2) {
    var AreaDoRetangulo = function AreaDoRetangulo(base, altura) {
      base = parseFloat(prompt("Informe a base do ret\xE2ngulo"));
      altura = parseFloat(prompt("Informe a altura do ret\xE2ngulo"));
      var Soma = base * altura;
      alert("A \xE1rea do triangulo \xE9 de: ".concat(Soma));
    };

    AreaDoRetangulo();
  } else if (Option === 3) {
    var AreaDoQuadrado = function AreaDoQuadrado(lado) {
      lado = parseFloat(prompt("Informe o lado do quadrado"));
      var Soma = lado * lado;
      alert("A \xE1rea do quadrado \xE9 de: ".concat(Soma));
    };

    AreaDoQuadrado();
  } else if (Option === 4) {
    var AreaDoTrapezio = function AreaDoTrapezio(BaseMaior, BaseMenor, altura) {
      BaseMaior = parseFloat(prompt("Informe a maior base do trap\xE9zio"));
      BaseMenor = parseFloat(prompt("Informe a menor base do trap\xE9zio"));
      altura = parseFloat(prompt("Informe a altura do trap\xE9zio"));
      var Soma = (BaseMaior + BaseMenor) * altura / 2;
      alert("A \xE1rea do trap\xE9zio \xE9 de: ".concat(Soma));
    };

    AreaDoTrapezio();
  } else if (Option === 5) {
    var AreaDoCirculo = function AreaDoCirculo(raio) {
      raio = parseFloat(prompt("Informe o raio do circulo"));
      var Soma = raio * 3.14; // Raio * Pi(3.14)

      alert("A \xE1rea do circulo \xE9 de: ".concat(Soma.toFixed(2)));
    };

    AreaDoCirculo();
  } else {
    alert("Voltando...");
  }
} while (Option !== 6);