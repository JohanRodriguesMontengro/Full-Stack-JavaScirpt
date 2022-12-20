do {
  let Vagas = []
  let VagaDescricao = []
  let DataLimiteVaga = []
  let Indice = -1
  let Opcao = prompt(`Escolha uma opção
  1- Listar vagas disponíveis
  2- Criar uma nova vaga
  3- Visualizar uma vaga
  4- Inscrever um candidato em uma vaga
  5- Excluir uma vaga
  6- Sair`)

  if (Opcao === `1`) {
    
  } else if (Opcao === `2`) {
    let Loop = true
    do {
      Indice++
      Vagas += prompt(`Informe o nome da vaga`)
      VagaDescricao += prompt(`Informe a descrição da vaga`)
      DataLimiteVaga += prompt(`Informe a data limite`)
  
      let Confirmar = confirm(`Deseja confirmar as informações
      Nome da vaga: ${Vagas[Indice]}
      Descrição da vaga: ${VagaDescricao[Indice]}
      Data limite da vaga: ${DataLimiteVaga[Indice]}`)
  
      if (Confirmar === true) {
        alert(`Agradecemos a confirmação`)
        return Loop = false
      } else {
        Vagas[Indice] = ``
        VagaDescricao[Indice] = ``
        DataLimiteVaga[Indice] = ``
        Indice--
      }
    }while(Loop === true)
  } else if (Opcao === `3`) {

  } else if (Opcao === `4`) {

  } else if (Opcao === `5`) {
    
  }
  else if (Opcao === `6`) {
    alert(`Saindo`)
   }
}while(Opcao !== `6 `)