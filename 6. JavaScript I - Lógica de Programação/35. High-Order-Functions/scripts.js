function Calcular(a, b, Operacao) {
  console.log(`Relizando uma operação`)
  const Resultado = Operacao(a, b) // Somar(a, b)
  return Resultado
}

function Somar(s, y) {
  console.log(`Realizando uma soma`)
  return x + y
}

console.log(Calcular(3, 5, Somar))

console.log(Calcular(8, 10, function (x, y) {
  alert(`Realizando uma subtração`)
  return x - y
}))

function ExibirElementos(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  })
}

const Lista = [`Maçã`, `Banana`, `Laranja`, `Limão`]

for (let i = 0; i < Lista.length; i++) {
  ExibirElementos(Lista[i], i, Lista)
}

Lista.forEach(ExibirElementos)
Lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  })
})