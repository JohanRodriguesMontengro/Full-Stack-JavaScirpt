function CalcularMedia(a, b) {
  const Media = (a + b) / 2;
  console.log(Media);

  return Media;
}

const Resultado = CalcularMedia(7, 2);

console.log(Resultado);


function Produto(nome, preco) {
  const Produto = {
    nome, // nome: nome,
    preco, // produto: produto
    estoque: 1
  }
  return Produto
}
console.log(Produto(`Notebook intel i3 8gb ddr4`, 2500));

const Numero = parseFloat(prompt(`Digite um numero?`))
alert(Numero)

function AreaRetangular(area, altura) {
  return area * altura
}

console.log(AreaRetangular(3, 5))

function AreaQuadrado(lado) {
  return AreaRetangular(lado, lado)
}

console.log(AreaQuadrado(9))

function OlaMundo() {
  let Texto = `Texto Qualquer`

  return Texto
  Texto = `Olá, mundo`
  console.log(Texto)
}

console.log(OlaMundo())

function Maioridade(Idade) {
  if (Idade > 17) {
    return `Maior de idade`
  } else {
    return `Menor de idade`
  }
}

console.log(Maioridade(29))
console.log(Maioridade(13))