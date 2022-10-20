let Velocidade = 80;
while (Velocidade > 0) {
  alert(`O carro está a: ${Velocidade}km/h`);
  Velocidade -= 20;
  alert(`Diminuindo sua velocidade "-20km/h"`);

  // Forma de parar a estrutura
  // if (Velocidade === 40) {
  //   break
  // }
}
alert(`O carro está parado`);
