let Opcao = ``
let ImoveisCadastrados = 0
let NomeImovel = []

do {
  let Imoveis = {
    NomeDonoImovel: ``,
    QuartosImovel: ``,
    BanheirosImovel: ``,
    GaragemImovel: ``,
  }
  Opcao = prompt(`Quantidades de imóveis cadastrados: ${ImoveisCadastrados}
  1- Cadastrar Imóveis
  2- Mostrar imóveis cadastrados
  3- Sair
  `)

  switch (Opcao) {
    case `1`:
      let NomeDonoImovel = prompt(`Digite o nome do dono do imóvel`)
      let QuartosImovel = prompt(`Quantos quartos o imóvel possui`)
      let BanheirosImovel = prompt(`Quantos banheiros o imóvel possui`)
      let GaragemImovel = prompt(`O imóvel possui uma garagem?
    1- Sim
    2- Não`)
      NomeImovel.push(prompt(`Informe o nome do imóvel`))
      ImoveisCadastrados += 1
      break;
    case `2`:
      alert(`Imoveis cadastrados: ${Imoveis.NomeImovel}`)
      break;
   }
}while(Opcao !== `3`)