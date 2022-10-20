const UnidadeDeMedida = prompt(`Digite uma unidade em metros`);

if (!isNaN(UnidadeDeMedida)) {
  const PainelDeControle =
    prompt(`Para qual unidade de medida esse valor deve ser convertido?
  1- milímetro(mm)
  2- centímetro(cm)
  3- decímetro(dm)
  4- decâmetro(dam)
  5- hectômetro(hm)
  6- quilômetro(km)`);

  switch (PainelDeControle) {
    case 1:
      UnidadeDeMedida *= 1000;
      break;
    case 2:
      UnidadeDeMedida *= 100;
      break;
    case 3:
      UnidadeDeMedida *= 10;
      break;
    case 4:
      UnidadeDeMedida /= 10;
      break;
    case 5:
      UnidadeDeMedida /= 100;
      break;
    case 6:
      UnidadeDeMedida /= 1000;
      break;

    default:
      break;
  }
} else {
  alert(`Digite somente números`);
}
