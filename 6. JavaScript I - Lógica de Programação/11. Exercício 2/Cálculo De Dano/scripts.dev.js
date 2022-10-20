"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

alert("Status do Inimigo\nNome- Roberto\nVida- 1900 Pontos de Vida\nDefesa- 500 Pontos de Defesa");
var RpgNomeAtaque = prompt("Informe o NOME do ataque do seu personagem");
var RpgDanoAtaque = prompt("Informe o DANO do ataque do seu personagem");
var PersonagemRpg = "Roberto";
var PersonagemRpgVida = 1900;
var PersonagemRpgDefesa = 500;
var PersonagemRpgEscudo = math.random() * 100;

if (PersonagemRpgEscudo <= 49) {
  PersonagemRpgEscudo = (_readOnlyError("PersonagemRpgEscudo"), false);
} else if (PersonagemRpgEscudo > 49) {
  PersonagemRpgEscudo = (_readOnlyError("PersonagemRpgEscudo"), true);
}

if (isNaN(RpgDanoAtaque) || isNaN(RpgNomeAtaque)) {
  alert("Digite somente n\xFAmeros");
} else if (RpgDanoAtaque > PersonagemRpgDefesa && PersonagemRpgEscudo == false) {
  var _DanoCausado = RpgDanoAtaque - PersonagemRpgDefesa;

  alert("O dano causado foi de: ".concat(_DanoCausado));
  PersonagemRpgVida -= (_readOnlyError("PersonagemRpgVida"), _DanoCausado);
  RpgDanoAtaque = (_readOnlyError("RpgDanoAtaque"), _DanoCausado);
} else if (RpgDanoAtaque > PersonagemRpgDefesa && PersonagemRpgEscudo == true) {
  var DanoCausadoReduzido = (RpgDanoAtaque - PersonagemRpgDefesa) / 2;
  alert("O dano foi reduzido pela metade. O dano causado foi de: ".concat(DanoCausadoReduzido));
  PersonagemRpgVida -= (_readOnlyError("PersonagemRpgVida"), DanoCausado);
  RpgDanoAtaque = (_readOnlyError("RpgDanoAtaque"), DanoCausadoReduzido);
} else if (RpgDanoAtaque < PersonagemRpgDefesa) {
  alert("A defesa inimiga era superior ao seu ataque. Sem danos");
}

if (PersonagemRpgVida > 1) {
  alert("O dano causado foi de: ".concat(RpgDanoAtaque, ", e a vida inimiga atual \xE9 de: ").concat(PersonagemRpgVida));
} else if (PersonagemRpgVida <= 0) {
  alert("O dano causado foi de: ".concat(RpgDanoAtaque, ", seu ataque derrotou o inimigo"));
}