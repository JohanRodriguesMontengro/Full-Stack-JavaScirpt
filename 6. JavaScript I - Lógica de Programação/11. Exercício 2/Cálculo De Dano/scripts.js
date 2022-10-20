alert(`Status do Inimigo
Nome- Roberto
Vida- 1900 Pontos de Vida
Defesa- 500 Pontos de Defesa`)
const RpgNomeAtaque = prompt(`Informe o NOME do ataque do seu personagem`)
const RpgDanoAtaque = prompt(`Informe o DANO do ataque do seu personagem`)

const PersonagemRpg = "Roberto"
const PersonagemRpgVida = 1900
const PersonagemRpgDefesa = 500

const PersonagemRpgEscudo = math.random() * 100;
if (PersonagemRpgEscudo <= 49) {
  PersonagemRpgEscudo = false
}
else if (PersonagemRpgEscudo > 49) {
  PersonagemRpgEscudo = true
}
if (isNaN(RpgDanoAtaque) || isNaN(RpgNomeAtaque)) {
  alert(`Digite somente números`)
}
else if (RpgDanoAtaque > PersonagemRpgDefesa && PersonagemRpgEscudo == false) {
  const DanoCausado = RpgDanoAtaque - PersonagemRpgDefesa
  alert(`O dano causado foi de: ${DanoCausado}`)
  PersonagemRpgVida -= DanoCausado
  RpgDanoAtaque = DanoCausado
}
else if (RpgDanoAtaque > PersonagemRpgDefesa && PersonagemRpgEscudo == true) {
  const DanoCausadoReduzido = (RpgDanoAtaque - PersonagemRpgDefesa) / 2
  alert(`O dano foi reduzido pela metade. O dano causado foi de: ${DanoCausadoReduzido}`)
  PersonagemRpgVida -= DanoCausado
  RpgDanoAtaque = DanoCausadoReduzido
}
else if (RpgDanoAtaque < PersonagemRpgDefesa) {
  alert(`A defesa inimiga era superior ao seu ataque. Sem danos`)
}

if (PersonagemRpgVida > 1) {
  alert(`O dano causado foi de: ${RpgDanoAtaque}, e a vida inimiga atual é de: ${PersonagemRpgVida}`)
}
else if (PersonagemRpgVida <= 0) {
  alert(`O dano causado foi de: ${RpgDanoAtaque}, seu ataque derrotou o inimigo`)
}