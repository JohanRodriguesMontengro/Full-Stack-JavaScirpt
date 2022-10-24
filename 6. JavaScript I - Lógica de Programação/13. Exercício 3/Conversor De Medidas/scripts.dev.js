"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var UnidadeDeMedida = prompt("Digite uma unidade em metros");

if (!isNaN(UnidadeDeMedida)) {
  var PainelDeControle = prompt("Para qual unidade de medida esse valor deve ser convertido?\n  1- mil\xEDmetro(mm)\n  2- cent\xEDmetro(cm)\n  3- dec\xEDmetro(dm)\n  4- dec\xE2metro(dam)\n  5- hect\xF4metro(hm)\n  6- quil\xF4metro(km)");

  switch (PainelDeControle) {
    case 1:
      UnidadeDeMedida *= (_readOnlyError("UnidadeDeMedida"), 1000);
      break;

    case 2:
      UnidadeDeMedida *= (_readOnlyError("UnidadeDeMedida"), 100);
      break;

    case 3:
      UnidadeDeMedida *= (_readOnlyError("UnidadeDeMedida"), 10);
      break;

    case 4:
      UnidadeDeMedida /= (_readOnlyError("UnidadeDeMedida"), 10);
      break;

    case 5:
      UnidadeDeMedida /= (_readOnlyError("UnidadeDeMedida"), 100);
      break;

    case 6:
      UnidadeDeMedida /= (_readOnlyError("UnidadeDeMedida"), 1000);
      break;

    default:
      break;
  }
} else {
  alert("Digite somente n\xFAmeros");
}