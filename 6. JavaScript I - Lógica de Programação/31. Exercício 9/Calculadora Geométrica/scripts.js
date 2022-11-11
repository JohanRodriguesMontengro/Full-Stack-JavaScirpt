let Option = ``

do {
  Option = parseFloat(prompt(`Escolha uma opção para calcular
  1- Área do triângulo
  2- Área do retângulo
  3- Área do Quadrado
  4- Área do Trapézio
  5- Área do Círculo
  6- Sair`))

  if (isNaN(Option) || Option > 6 || Option < 1) {
    alert(`Digite somente número entre 1 a 6`)
  }
  else if (Option === 1) {
    function AreaDoTriangulo(base, altura) {
      base = parseFloat(prompt(`Informe a base do triângulo`))
      altura = parseFloat(prompt(`Informe a altura do triângulo`))

      let Soma = base * altura / 2
      alert(`A área do triangulo é de: ${Soma}`)
    }
    AreaDoTriangulo()
  }
  else if (Option === 2) {
    function AreaDoRetangulo(base, altura) {
      base = parseFloat(prompt(`Informe a base do retângulo`))
      altura = parseFloat(prompt(`Informe a altura do retângulo`))

      let Soma = base * altura
      alert(`A área do triangulo é de: ${Soma}`)
    }
    AreaDoRetangulo()
  }
  else if (Option === 3) {
    function AreaDoQuadrado(lado) {
      lado = parseFloat(prompt(`Informe o lado do quadrado`))
      
      let Soma = lado * lado
      alert(`A área do quadrado é de: ${Soma}`)
    }
    AreaDoQuadrado()
  }
  else if (Option === 4) {
    function AreaDoTrapezio(BaseMaior, BaseMenor, altura) {
      BaseMaior = parseFloat(prompt(`Informe a maior base do trapézio`))
      BaseMenor = parseFloat(prompt(`Informe a menor base do trapézio`))
      altura = parseFloat(prompt(`Informe a altura do trapézio`))

      let Soma = (BaseMaior + BaseMenor) * altura / 2

      alert(`A área do trapézio é de: ${Soma}`)
    }
    AreaDoTrapezio()
  }
  else if (Option === 5) {
    function AreaDoCirculo(raio) {
      raio = parseFloat(prompt(`Informe o raio do circulo`))

      let Soma = raio * 3.14 // Raio * Pi(3.14)
      alert(`A área do circulo é de: ${Soma.toFixed(2)}`)
    }
    AreaDoCirculo()
  }
  else {
    alert(`Voltando...`)
  }
}while (Option !== 6)