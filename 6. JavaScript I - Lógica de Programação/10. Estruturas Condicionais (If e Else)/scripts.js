const idade = prompt(`Informe a sua idade`);

// if (6 === 6) {
//   console.log(`Verdadeiro`)
// }

// if (6 !== 6) {
//   console.log(`Verdadeiro`)
// }
// else {
//   console.log(`Falso`)
// }
if (idade >= 60) {
  alert(`Você é um idoso`);
} else if (idade >= 18) {
  alert(`Você é maior de idade`);
} else if (idade < 18 && idade > 12) {
  alert(`Você é menor de idade`);
} else if (idade < 12) {
  alert(`Você é uma criança`);
} else if (idade < 4) {
  alert(`Você é um bebê`);
}


/*
const resultado = condição ? resultado_verdadeiro : resultado_falso
*/

const resultado = idade >= 122 ? "Você é a pessoa mais velha do mundo atual" : "Você é a pessoa de idade normal"
alert(resultado)