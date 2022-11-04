let Continuar = true
let Number = 1
let ArrayNumber = ``
let ArrayPacientes
let FilaDeEspera = ``

do {  
  ArrayNumber = [Number + `º`]
  ArrayPacientes = [`${ArrayNumber}Matheus`]
  FilaDeEspera = prompt(`Fila De Espera:
  ${ArrayPacientes}
  
  1- Adicionar pacientes`)

  FilaDeEspera = parseInt(FilaDeEspera)
  if (FilaDeEspera === 1) {
    Number++
    
  }
  Continuar = false
} while (Continuar === true)
console.log(FilaDeEspera)