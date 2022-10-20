"use strict";

var idade = prompt("Informe a sua idade"); // if (6 === 6) {
//   console.log(`Verdadeiro`)
// }
// if (6 !== 6) {
//   console.log(`Verdadeiro`)
// }
// else {
//   console.log(`Falso`)
// }

if (idade >= 60) {
  alert("Voc\xEA \xE9 um idoso");
} else if (idade >= 18) {
  alert("Voc\xEA \xE9 maior de idade");
} else if (idade < 18 && idade > 12) {
  alert("Voc\xEA \xE9 menor de idade");
} else if (idade < 12) {
  alert("Voc\xEA \xE9 uma crian\xE7a");
} else if (idade < 4) {
  alert("Voc\xEA \xE9 um beb\xEA");
}
/*
const resultado = condição ? resultado_verdadeiro : resultado_falso
*/


var resultado = idade >= 122 ? "Você é a pessoa mais velha do mundo atual" : "Você é a pessoa de idade normal";
alert(resultado);