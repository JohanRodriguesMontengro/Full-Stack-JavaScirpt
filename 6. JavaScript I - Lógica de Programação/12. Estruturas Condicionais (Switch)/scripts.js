let resultado = prompt(`escolha uma alternativa
1
2
3`);

const ResultadoNumerico = parseFloat(resultado)
switch (ResultadoNumerico) {
  case `a`:
    alert(`O resultado é "A"`);
    break;
  case `b`:
    alert(`O resultado é b`);
    break;
  case `c`:
    alert(`O resultado é c`);
    break;

  default:
    alert(`Finalizando...`);
    break;
}
