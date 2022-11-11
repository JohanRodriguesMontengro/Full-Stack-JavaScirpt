let Pokemon = `Charmander`

function Evoluir() {
  Pokemon = `Charmeleon`
}

console.log(Pokemon)
Evoluir()
console.log(Pokemon)

// function CriarAnimal() {
//   let Animal = `Gato`
// }

// CriarAnimal()
// console.log(Animal)

function AvaliarNota(Nota) {
  if (Nota > 60) {
    var Aprovado = true
    let Situacao = `Aprovado`
  } else {
    var Aprovado = false
    let Situacao = `Reprovador`
  }

  console.log(Nota)
  console.log(Aprovado)
  console.log(Situacao)
}

AvaliarNota(83)
AvaliarNota(59.9)

function Ola() {
  var Texto = `Ola, Mundo!`
}

console.log(Texto)

console.log(Nome)
console.log(Sobrenome)

var Nome = `Johan`
let Sobrenome = `Rodrigues`

console.log(Nome)
console.log(Sobrenome)