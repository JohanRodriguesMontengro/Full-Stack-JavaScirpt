let PalavraDigitada = prompt(`Digite uma palavra`);
let Palindromo = ``;

for (let i = PalavraDigitada.length - 1; i >= 0; i--) {
  Palindromo += PalavraDigitada[i];
}

if (Palindromo === PalavraDigitada) {
  alert(`Você digitou um Palíndromo \nPalavra digitada: ${Palindromo}`);
} else {
  alert(`Palavra digitada: ${PalavraDigitada} \nPalavra ao contrário: ${Palindromo}`);
}
