let Fila = []
let Opção = ``

do {
  let Pacientes = ``
  for (let Indice = 0; Indice < Fila.length; Indice++) {
    Pacientes += (Indice+1) + `º - ${Fila[Indice]}`
  }
  Opção = prompt(`Pacientes:
  ${Pacientes} 
  
  Escolha uma ação:
  1. Novo Paciente
  2. Consultar Paciente
  3. Sair`)


  switch (Opção) {
    case `1`:
      const NovoPaciente = prompt(`Qual é o nome do paciente?`)
      Fila.push(NovoPaciente)
      alert(`O paciente: "${NovoPaciente}" entrou no final da fila`)
      break
    case `2`:
      const PacienteConsultado = Fila.shift()

      if (PacienteConsultado == undefined) {
        alert(`Sem mais pacientes na fila`)
      } else {
        alert(`O Paciente: "${PacienteConsultado}", foi atendido e foi embora`)
      }
      break;
    case `3`:
      alert(`Finalizando...`)

      break
    default:
      alert(`Opção inválida`)
  }
}while(Opção !== `3`)