const arr = [`Frodo`, `Sam`, `Merry`, `Pippin`, `Gandalf`, `Aragorn`, `Legolas`, `Gimli`]
console.log(arr)

// Adicionar Elementos no array
// push

arr.push(`Boromir`)
let tamanho = arr.push(`Johan`)
console.log(arr)
console.log(tamanho)

// unshift
arr.unshift(`Boromir`)
tamanho = arr.unshift(`Johan`)
console.log(arr)
console.log(tamanho)

// Remover Elementos Final
// pop

let UltimoElemento = arr.pop()
console.group(arr)
console.log(UltimoElemento)

// Remover Elementos Inicio

UltimoElemento = arr.shift()
console.log(arr)
console.log(UltimoElemento)

// Pesquisar Por Um Elemento
// includes

const inclui = arr.includes(`Gandalf`)
console.log(inclui)

// indexOf

const indice = arr.indexOf(`Gandalf`)
console.log(indice)

// Cortar e Concatenar
// slice

const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat

const sociedade = hobbits.concat(outros, `Boromir`)
console.log(sociedade)

//Substituição Dos Elementos
// splice

const ElementosRemovidos = sociedade.splice(indice, 1, `Gandalf, o Cinzento`,1 ,3 ,false, true)
console.log(sociedade)
console.log(ElementosRemovidos)

// Iterar Sobre Os Elementos

for (let indice = 0; indice < sociedade.length; indice++) { 
  const Elemento = sociedade[indice]
  console.log(`${Elemento} se encontra na posição ${indice}`)
 }