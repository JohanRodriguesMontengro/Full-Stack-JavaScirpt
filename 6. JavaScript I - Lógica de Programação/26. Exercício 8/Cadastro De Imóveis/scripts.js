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
  1- Cadastrar Imóveis;
  2- Mostrar imóveis cadastrados;
  3- Sair.
  `)

  switch (Opcao) {
    case `1`:
      Imoveis.NomeDonoImovel = prompt(`Digite o nome do dono do imóvel`, `Nome padrão do imóvel`)
      Imoveis.QuartosImovel = prompt(`Quantos quartos o imóvel possui`)
      Imoveis.BanheirosImovel = prompt(`Quantos banheiros o imóvel possui`)
      Imoveis.GaragemImovel = confirm(`O imóvel possui uma garagem?
    Sim
    Não`)
      if (Imoveis.GaragemImovel === true) {
        Imoveis.GaragemImovel = `Sim`
      } else {
        Imoveis.GaragemImovel = `Não`
      }
      
      alert(`Nome do dono do imóvel: ${Imoveis.NomeDonoImovel}
      Quantidade de quartos: ${Imoveis.QuartosImovel}
      Quantidade de banheiros: ${Imoveis.BanheirosImovel}
      Possui uma Garagem: ${Imoveis.GaragemImovel}`)
      ImoveisCadastrados += 1
      const ImovelNomeCase2 = NomeImovel.push(Imoveis.NomeDonoImovel)[ImoveisCadastrados]
      break;
    case `2`:
      const NomeImoveisCadastrados = alert(`Imóveis cadastrados: ${NomeImovel}`)
      break;
    case `3`:
      alert(`Saindo...`)
      break;
    default:
      alert(`Opção inválida`)
   }
}while(Opcao !== `3`)